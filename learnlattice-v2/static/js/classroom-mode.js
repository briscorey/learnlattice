// ═══════════════════════════════════════════
// CLASSROOM MODE v2 — Structured Lesson Flow
// ═══════════════════════════════════════════
(function() {
  var btn = document.getElementById('classroomModeBtn');
  var overlay = document.getElementById('classroomOverlay');
  if (!btn || !overlay) return;

  var stage = document.getElementById('cmStage');
  var counter = document.getElementById('cmCounter');
  var progress = document.getElementById('cmProgress');
  var prevBtn = document.getElementById('cmPrev');
  var nextBtn = document.getElementById('cmNext');
  var closeBtn = document.getElementById('cmClose');
  var viewToggle = document.getElementById('cmViewToggle');
  var timerDisplay = document.getElementById('cmTimerDisplay');
  var timerValue = document.getElementById('cmTimerValue');
  var timerToggleBtn = document.getElementById('cmTimerToggle');
  var timerResetBtn = document.getElementById('cmTimerReset');

  var allSlides = [];
  var current = 0;
  var currentView = 'teacher';
  var timerInterval = null;
  var timerSeconds = 0;
  var timerRunning = false;
  var timerTarget = 0;

  function esc(s) {
    if (!s) return '';
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function getLessonData() {
    return window.__lessonData || null;
  }

  // ════════════════════════════════════
  //  SLIDE BUILDERS
  // ════════════════════════════════════

  function mkTitleSlide(d) {
    var meta = [];
    if (d.subject) meta.push(d.subject);
    if (d.yearLevels && d.yearLevels.length) meta.push(d.yearLevels.join(' & '));
    if (d.duration) meta.push(d.duration);
    return {
      html: '<div class="cms cms-title">' +
        (meta.length ? '<div class="cms-meta">' + meta.map(esc).join(' · ') + '</div>' : '') +
        '<h1>' + esc(d.title) + '</h1>' +
        (d.description ? '<p class="cms-subtitle">' + esc(d.description) + '</p>' : '') +
        '</div>',
      type: 'title', view: 'both'
    };
  }

  function mkSOISlide(d) {
    if (!d.soi) return null;
    var pills = '';
    if (d.keyConcepts && d.keyConcepts.length) {
      pills = '<div class="cms-pills">' + d.keyConcepts.map(function(c) {
        return '<span class="cms-pill cms-pill-concept">' + esc(c) + '</span>';
      }).join('') + '</div>';
    }
    var gc = d.globalContexts && d.globalContexts.length ? '<div class="cms-gc">' + esc(d.globalContexts[0]) + '</div>' : '';
    return {
      html: '<div class="cms cms-soi">' +
        '<div class="cms-badge">💡 Statement of Inquiry</div>' +
        '<blockquote>' + esc(d.soi) + '</blockquote>' +
        pills + gc + '</div>',
      type: 'soi', view: 'both'
    };
  }

  function mkHookSlide(d) {
    if (!d.hook) return null;
    return {
      html: '<div class="cms cms-hook">' +
        '<div class="cms-badge">🎯 Hook</div>' +
        '<blockquote>' + esc(d.hook) + '</blockquote>' +
        '<p class="cms-note">Read aloud. Let it land. Don\'t explain yet.</p>' +
        '</div>',
      type: 'hook', view: 'both'
    };
  }

  function mkWarmupSlide(d) {
    if (!d.warmup) return null;
    return {
      html: '<div class="cms cms-warmup">' +
        '<div class="cms-badge">🔥 Warm-Up</div>' +
        '<p>' + esc(d.warmup) + '</p>' +
        '<div class="cms-timer-cta" data-timer="300">⏱ Start 5 min timer</div>' +
        '</div>',
      type: 'warmup', view: 'both', timer: 300
    };
  }

  function mkTimelineSlide(d) {
    if (!d.timeline) return null;
    var phases = d.timeline.split(' | ');
    var html = '<div class="cms cms-timeline">' +
      '<div class="cms-badge">⏱ Lesson Timeline</div>' +
      '<div class="cms-timeline-track">';
    phases.forEach(function(p, i) {
      var parts = p.split(': ');
      var time = parts[0] || '';
      var desc = parts.length > 1 ? parts.slice(1).join(': ') : parts[0];
      html += '<div class="cms-tl-node">' +
        '<div class="cms-tl-dot">' + (i + 1) + '</div>' +
        '<div class="cms-tl-body">' +
        '<div class="cms-tl-time">' + esc(time) + '</div>' +
        '<div class="cms-tl-desc">' + esc(desc) + '</div>' +
        '</div></div>';
    });
    html += '</div></div>';
    return { html: html, type: 'timeline', view: 'both' };
  }

  function mkPhaseSlides(d) {
    if (!d.timeline) return [];
    var phases = d.timeline.split(' | ');
    return phases.map(function(p, i) {
      var parts = p.split(': ');
      var time = parts[0] || '';
      var desc = parts.length > 1 ? parts.slice(1).join(': ') : parts[0];
      var secs = 0;
      var m = time.match(/(\d+)\s*-\s*(\d+)/);
      if (m) secs = (parseInt(m[2]) - parseInt(m[1])) * 60;
      return {
        html: '<div class="cms cms-phase">' +
          '<div class="cms-badge">Phase ' + (i + 1) + ' of ' + phases.length + '</div>' +
          '<div class="cms-phase-time">' + esc(time) + '</div>' +
          '<p>' + esc(desc) + '</p>' +
          (secs > 0 ? '<div class="cms-timer-cta" data-timer="' + secs + '">⏱ Start ' + Math.round(secs / 60) + ' min timer</div>' : '') +
          '</div>',
        type: 'phase', view: 'teacher', timer: secs > 0 ? secs : 0
      };
    });
  }

  function mkTeacherMoveSlides(d) {
    if (!d.teacherMoves || !d.teacherMoves.length) return [];
    return d.teacherMoves.map(function(m, i) {
      return {
        html: '<div class="cms cms-move">' +
          '<div class="cms-badge">🧭 Teacher Move ' + (i + 1) + '/' + d.teacherMoves.length + '</div>' +
          '<h2>' + esc(m.title) + '</h2>' +
          '<p>' + esc(m.description) + '</p>' +
          '</div>',
        type: 'move', view: 'teacher'
      };
    });
  }

  function mkListenSlide(d) {
    if (!d.listenFor || !d.listenFor.length) return null;
    var html = '<div class="cms cms-listen">' +
      '<div class="cms-badge">👂 What to Listen For</div>' +
      '<div class="cms-listen-grid">';
    d.listenFor.forEach(function(l) {
      var cls = (l.level || '').toLowerCase().replace(/[^a-z]/g, '');
      html += '<div class="cms-listen-row cms-ll-' + cls + '">' +
        '<span class="cms-ll-badge">' + esc(l.level) + '</span>' +
        '<span class="cms-ll-text">"' + esc(l.phrase) + '"</span>' +
        '</div>';
    });
    html += '</div></div>';
    return { html: html, type: 'listen', view: 'teacher' };
  }

  function mkMisconceptionSlides(d) {
    if (!d.misconceptions || !d.misconceptions.length) return [];
    return d.misconceptions.map(function(m, i) {
      return {
        html: '<div class="cms cms-myth">' +
          '<div class="cms-badge">⚠️ Misconception ' + (i + 1) + '/' + d.misconceptions.length + '</div>' +
          '<div class="cms-myth-box">' +
          '<div class="cms-myth-label">Students may say:</div>' +
          '<p class="cms-myth-quote">"' + esc(m.myth) + '"</p>' +
          '</div>' +
          (m.why ? '<div class="cms-myth-why">' + esc(m.why) + '</div>' : '') +
          '<div class="cms-myth-truth">' +
          '<div class="cms-myth-label cms-myth-label-truth">The reality:</div>' +
          '<p>' + esc(m.truth) + '</p>' +
          '</div></div>',
        type: 'misconception', view: 'teacher'
      };
    });
  }

  function mkStartersSlide(d) {
    if (!d.sentenceStarters) return null;
    var ss = d.sentenceStarters;
    var cats = [
      { key: 'describing', label: 'Describing', icon: '📝' },
      { key: 'explaining', label: 'Explaining', icon: '💭' },
      { key: 'justifying', label: 'Justifying', icon: '⚖️' },
      { key: 'approaching', label: 'Approaching', icon: '🟢' },
      { key: 'meeting', label: 'Meeting', icon: '🟡' },
      { key: 'exceeding', label: 'Exceeding', icon: '🔴' }
    ];
    var hasContent = false;
    var html = '<div class="cms cms-starters">' +
      '<div class="cms-badge">✏️ Sentence Starters</div>' +
      '<div class="cms-starters-columns">';
    cats.forEach(function(c) {
      if (ss[c.key] && ss[c.key].length) {
        hasContent = true;
        html += '<div class="cms-starter-col"><div class="cms-starter-heading">' + c.icon + ' ' + c.label + '</div>';
        ss[c.key].forEach(function(s) {
          html += '<div class="cms-starter-item">"' + esc(s) + '"</div>';
        });
        html += '</div>';
      }
    });
    html += '</div></div>';
    return hasContent ? { html: html, type: 'starters', view: 'student' } : null;
  }

  function mkDiffSlide(d) {
    if (!d.differentiated || (!d.differentiated.approaching && !d.differentiated.meeting && !d.differentiated.exceeding)) return null;
    var df = d.differentiated;
    var html = '<div class="cms cms-diff">' +
      '<div class="cms-badge">🎯 Differentiated Tasks</div>' +
      '<div class="cms-diff-cols">';
    if (df.approaching) html += '<div class="cms-diff-card cms-dc-green"><div class="cms-dc-label">🟢 Approaching</div><p>' + esc(df.approaching) + '</p></div>';
    if (df.meeting) html += '<div class="cms-diff-card cms-dc-amber"><div class="cms-dc-label">🟡 Meeting</div><p>' + esc(df.meeting) + '</p></div>';
    if (df.exceeding) html += '<div class="cms-diff-card cms-dc-red"><div class="cms-dc-label">🔴 Exceeding</div><p>' + esc(df.exceeding) + '</p></div>';
    html += '</div></div>';
    return { html: html, type: 'diff', view: 'student' };
  }

  function mkSelfCheckSlide(d) {
    if (!d.selfCheck || !d.selfCheck.length) return null;
    var html = '<div class="cms cms-check">' +
      '<div class="cms-badge">✅ Self-Check</div>' +
      '<div class="cms-check-levels">';
    d.selfCheck.forEach(function(lv) {
      html += '<div class="cms-check-level"><div class="cms-check-label">' + esc(lv.level) + '</div>';
      if (lv.items) lv.items.forEach(function(it) {
        html += '<div class="cms-check-item">☐ ' + esc(it) + '</div>';
      });
      html += '</div>';
    });
    html += '</div></div>';
    return { html: html, type: 'selfcheck', view: 'student' };
  }

  function mkExitSlide(d) {
    if (!d.exitTicket || !d.exitTicket.length) return null;
    var html = '<div class="cms cms-exit">' +
      '<div class="cms-badge">🎫 Exit Ticket</div>' +
      '<p class="cms-exit-sub">Last 3 minutes — sticky note or whiteboard</p>' +
      '<div class="cms-exit-qs">';
    d.exitTicket.forEach(function(q, i) {
      html += '<div class="cms-exit-q"><span class="cms-exit-num">' + (i + 1) + '</span><span>' + esc(q) + '</span></div>';
    });
    html += '</div><div class="cms-timer-cta" data-timer="180">⏱ Start 3 min timer</div></div>';
    return { html: html, type: 'exit', view: 'both', timer: 180 };
  }

  function mkEndSlide(d) {
    return {
      html: '<div class="cms cms-end">' +
        '<div class="cms-end-icon">✨</div>' +
        '<h2>' + esc(d.title || 'End') + '</h2>' +
        '<p class="cms-end-sub">End of lesson flow</p>' +
        '</div>',
      type: 'end', view: 'both'
    };
  }

  // Content slides — parsed from .resource-content DOM
  function mkContentSlides() {
    var out = [];
    var content = document.querySelector('.resource-content');
    if (!content) return out;
    var children = content.children;
    var buf = [];

    function flush() {
      if (!buf.length) return;
      for (var b = 0; b < buf.length; b += 2) {
        out.push({
          html: '<div class="cms cms-content">' + buf.slice(b, b + 2).join('') + '</div>',
          type: 'content', view: 'both'
        });
      }
      buf = [];
    }

    for (var i = 0; i < children.length; i++) {
      var el = children[i], tag = el.tagName;
      if (tag === 'H2') {
        flush();
        out.push({ html: '<div class="cms cms-section"><h2>' + el.innerHTML + '</h2></div>', type: 'section', view: 'both' });
      } else if (tag === 'H3') {
        flush();
        out.push({ html: '<div class="cms cms-section"><h3>' + el.innerHTML + '</h3></div>', type: 'subsection', view: 'both' });
      } else if (tag === 'BLOCKQUOTE') {
        flush();
        out.push({ html: '<div class="cms cms-content"><blockquote>' + el.innerHTML + '</blockquote></div>', type: 'content', view: 'both' });
      } else if (tag === 'TABLE') {
        flush();
        out.push({ html: '<div class="cms cms-content" style="overflow-x:auto">' + el.outerHTML + '</div>', type: 'content', view: 'both' });
      } else if (tag === 'UL' || tag === 'OL') {
        flush();
        var items = el.querySelectorAll('li');
        if (items.length > 5) {
          var h = Math.ceil(items.length / 2);
          var l1 = '<' + tag + '>', l2 = '<' + tag + '>';
          for (var li = 0; li < items.length; li++) {
            if (li < h) l1 += '<li>' + items[li].innerHTML + '</li>';
            else l2 += '<li>' + items[li].innerHTML + '</li>';
          }
          l1 += '</' + tag + '>'; l2 += '</' + tag + '>';
          out.push({ html: '<div class="cms cms-content">' + l1 + '</div>', type: 'content', view: 'both' });
          out.push({ html: '<div class="cms cms-content">' + l2 + '</div>', type: 'content', view: 'both' });
        } else {
          out.push({ html: '<div class="cms cms-content"><' + tag + '>' + el.innerHTML + '</' + tag + '></div>', type: 'content', view: 'both' });
        }
      } else if (tag === 'P') {
        var txt = el.textContent.trim();
        if (!txt) continue;
        var fc = el.firstElementChild;
        var bold = fc && (fc.tagName === 'STRONG' || fc.tagName === 'B') && fc.textContent.length > txt.length * 0.4;
        if (bold || txt.length > 150) { flush(); out.push({ html: '<div class="cms cms-content"><p>' + el.innerHTML + '</p></div>', type: 'content', view: 'both' }); }
        else { buf.push('<p>' + el.innerHTML + '</p>'); if (buf.length >= 2) flush(); }
      } else {
        buf.push(el.outerHTML);
        if (buf.length >= 3) flush();
      }
    }
    flush();
    return out;
  }

  // ════════════════════════════════════
  //  BUILD SLIDE DECK
  // ════════════════════════════════════

  function buildSlides() {
    allSlides = [];
    var d = getLessonData();
    var rich = d && (d.hook || d.warmup || d.timeline || (d.teacherMoves && d.teacherMoves.length));

    if (!d || !rich) {
      // Fallback: content-only mode
      var titleEl = document.querySelector('.rs-header h1');
      var descEl = document.querySelector('.rs-hook, .rs-desc');
      allSlides.push({
        html: '<div class="cms cms-title"><h1>' + (titleEl ? titleEl.textContent : 'Untitled') + '</h1>' +
          (descEl ? '<p class="cms-subtitle">' + descEl.textContent + '</p>' : '') + '</div>',
        type: 'title', view: 'both'
      });
      allSlides = allSlides.concat(mkContentSlides());
      allSlides.push(mkEndSlide(d || { title: '' }));
      return;
    }

    // Structured lesson flow
    allSlides.push(mkTitleSlide(d));
    var s;
    s = mkSOISlide(d); if (s) allSlides.push(s);
    s = mkHookSlide(d); if (s) allSlides.push(s);
    s = mkWarmupSlide(d); if (s) allSlides.push(s);
    s = mkTimelineSlide(d); if (s) allSlides.push(s);
    allSlides = allSlides.concat(mkPhaseSlides(d));
    allSlides = allSlides.concat(mkContentSlides());
    allSlides = allSlides.concat(mkTeacherMoveSlides(d));
    s = mkListenSlide(d); if (s) allSlides.push(s);
    allSlides = allSlides.concat(mkMisconceptionSlides(d));
    s = mkStartersSlide(d); if (s) allSlides.push(s);
    s = mkDiffSlide(d); if (s) allSlides.push(s);
    s = mkSelfCheckSlide(d); if (s) allSlides.push(s);
    s = mkExitSlide(d); if (s) allSlides.push(s);
    allSlides.push(mkEndSlide(d));
  }

  function visibleSlides() {
    return allSlides.filter(function(s) { return s.view === 'both' || s.view === currentView; });
  }

  // ════════════════════════════════════
  //  RENDER
  // ════════════════════════════════════

  function render() {
    var vis = visibleSlides();
    if (current >= vis.length) current = vis.length - 1;
    if (current < 0) current = 0;
    if (!vis[current]) return;

    stage.innerHTML = vis[current].html;
    counter.textContent = (current + 1) + ' / ' + vis.length;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === vis.length - 1;
    buildProgressDots();

    // Attach timer CTA
    var cta = stage.querySelector('.cms-timer-cta');
    if (cta) {
      cta.addEventListener('click', function() {
        var s = parseInt(this.dataset.timer) || 0;
        if (s > 0) startCountdown(s);
      });
    }

    // KaTeX
    if (window.renderMathInElement) {
      renderMathInElement(stage, {
        delimiters: [{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}],
        throwOnError: false
      });
    }
  }

  function buildProgressDots() {
    var vis = visibleSlides();
    progress.innerHTML = '';
    vis.forEach(function(s, i) {
      var dot = document.createElement('span');
      dot.className = 'cm-dot';
      if (i === current) dot.classList.add('active');
      else if (i < current) dot.classList.add('visited');
      // Type-based color coding
      var t = s.type;
      if (t === 'hook' || t === 'warmup') dot.classList.add('cm-dot-warm');
      else if (t === 'move' || t === 'listen' || t === 'misconception' || t === 'phase') dot.classList.add('cm-dot-teacher');
      else if (t === 'starters' || t === 'selfcheck' || t === 'diff') dot.classList.add('cm-dot-student');
      else if (t === 'exit') dot.classList.add('cm-dot-exit');
      dot.dataset.index = i;
      dot.addEventListener('click', function() { current = parseInt(this.dataset.index); render(); });
      progress.appendChild(dot);
    });
  }

  // ════════════════════════════════════
  //  TIMER
  // ════════════════════════════════════

  function startCountdown(secs) {
    stopTimer();
    timerTarget = secs;
    timerSeconds = secs;
    timerRunning = true;
    timerDisplay.style.display = 'flex';
    timerToggleBtn.textContent = '⏸';
    updateTimerUI();
    timerInterval = setInterval(function() {
      if (!timerRunning) return;
      timerSeconds--;
      updateTimerUI();
      if (timerSeconds <= 0) {
        stopTimer();
        timerValue.textContent = "TIME'S UP";
        timerValue.classList.add('cm-timer-done');
        setTimeout(function() { timerValue.classList.remove('cm-timer-done'); }, 5000);
      }
    }, 1000);
  }

  function startCountUp() {
    stopTimer();
    timerTarget = 0; timerSeconds = 0; timerRunning = true;
    timerDisplay.style.display = 'flex';
    timerToggleBtn.textContent = '⏸';
    updateTimerUI();
    timerInterval = setInterval(function() {
      if (!timerRunning) return;
      timerSeconds++;
      updateTimerUI();
    }, 1000);
  }

  function stopTimer() {
    timerRunning = false;
    if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
    if (timerToggleBtn) timerToggleBtn.textContent = '▶';
  }

  function toggleTimerFn() {
    if (timerDisplay.style.display === 'none' || !timerDisplay.style.display) { startCountUp(); return; }
    if (timerRunning) { timerRunning = false; timerToggleBtn.textContent = '▶'; }
    else {
      timerRunning = true; timerToggleBtn.textContent = '⏸';
      if (!timerInterval) {
        var dir = timerTarget > 0 ? -1 : 1;
        timerInterval = setInterval(function() {
          if (!timerRunning) return;
          timerSeconds += dir;
          updateTimerUI();
          if (timerTarget > 0 && timerSeconds <= 0) { stopTimer(); timerValue.textContent = "TIME'S UP"; timerValue.classList.add('cm-timer-done'); }
        }, 1000);
      }
    }
  }

  function resetTimerFn() {
    stopTimer();
    timerSeconds = timerTarget;
    if (timerTarget === 0) timerDisplay.style.display = 'none';
    else updateTimerUI();
  }

  function updateTimerUI() {
    var s = Math.abs(timerSeconds);
    var m = Math.floor(s / 60), sec = s % 60;
    timerValue.textContent = (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
    // Color warning when < 60s
    if (timerTarget > 0 && timerSeconds <= 60 && timerSeconds > 0) timerValue.classList.add('cm-timer-warn');
    else timerValue.classList.remove('cm-timer-warn');
  }

  if (timerToggleBtn) timerToggleBtn.addEventListener('click', toggleTimerFn);
  if (timerResetBtn) timerResetBtn.addEventListener('click', resetTimerFn);

  // ════════════════════════════════════
  //  VIEW TOGGLE
  // ════════════════════════════════════

  function setView(view) {
    if (view === currentView) return;
    currentView = view;
    if (viewToggle) {
      viewToggle.querySelectorAll('.cm-view-btn').forEach(function(b) { b.classList.remove('active'); });
      var ab = viewToggle.querySelector('[data-view="' + view + '"]');
      if (ab) ab.classList.add('active');
    }
    var vis = visibleSlides();
    if (current >= vis.length) current = vis.length - 1;
    render();
  }

  if (viewToggle) {
    viewToggle.addEventListener('click', function(e) {
      var b = e.target.closest('.cm-view-btn');
      if (b && b.dataset.view) setView(b.dataset.view);
    });
  }

  // ════════════════════════════════════
  //  NAVIGATION
  // ════════════════════════════════════

  function open() {
    buildSlides();
    current = 0;
    currentView = 'teacher';
    if (viewToggle) {
      viewToggle.querySelectorAll('.cm-view-btn').forEach(function(b) { b.classList.remove('active'); });
      var tb = viewToggle.querySelector('[data-view="teacher"]');
      if (tb) tb.classList.add('active');
    }
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    render();
  }

  function close() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    stopTimer();
    if (timerDisplay) timerDisplay.style.display = 'none';
  }

  function next() { var vis = visibleSlides(); if (current < vis.length - 1) { current++; render(); } }
  function prev() { if (current > 0) { current--; render(); } }

  btn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);

  document.addEventListener('keydown', function(e) {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    if (e.key === 't' || e.key === 'T') { e.preventDefault(); toggleTimerFn(); }
    if (e.key === 'v' || e.key === 'V') { e.preventDefault(); setView(currentView === 'teacher' ? 'student' : 'teacher'); }
  });

  stage.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' || e.target.closest('.cms-timer-cta') || e.target.closest('button') || e.target.closest('details')) return;
    next();
  });
})();
