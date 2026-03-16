/**
 * LearnLattice Student Engagement Engine
 * ═══════════════════════════════════════
 * Shared module for streak tracking, XP, badges, and progress.
 * All state in localStorage with 'll_' prefix.
 * 
 * Usage from any interactive:
 *   <script src="/js/student-engine.js"></script>
 *   LL.streak.update();           // call on page load
 *   LL.xp.add(10, 'quiz');        // award XP
 *   LL.badges.check();            // evaluate badge criteria
 *   LL.progress.get('quiz');      // get tool-specific progress
 *   LL.render.bar(container);     // render the engagement bar
 */

(function(root) {
  'use strict';

  var PREFIX = 'll_eng_';
  var BADGE_KEY = PREFIX + 'badges';
  var XP_KEY = PREFIX + 'xp';
  var STREAK_KEY = PREFIX + 'streak';
  var HISTORY_KEY = PREFIX + 'history';

  // ─── Helpers ───
  function store(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch(e) {}
  }
  function load(key, fallback) {
    try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch(e) { return fallback; }
  }
  function today() { return new Date().toISOString().slice(0, 10); }
  function yesterday() { return new Date(Date.now() - 86400000).toISOString().slice(0, 10); }

  // ═══════════════════════════════════════════
  // STREAK SYSTEM
  // ═══════════════════════════════════════════
  var streak = {
    get: function() {
      return load(STREAK_KEY, { count: 0, last: '', best: 0, freezes: 0, frozen: '' });
    },
    update: function() {
      var s = this.get();
      var t = today();
      var y = yesterday();
      if (s.last === t) return s; // already counted today
      if (s.last === y) {
        s.count++;
      } else if (s.last && s.last !== y && s.freezes > 0 && s.frozen !== t) {
        // Use a streak freeze
        s.freezes--;
        s.frozen = s.last; // mark which day was frozen
        s.count++; // streak continues
      } else {
        s.count = 1; // reset
      }
      s.last = t;
      if (s.count > s.best) s.best = s.count;
      // Award a freeze every 7-day streak
      if (s.count > 0 && s.count % 7 === 0 && s.freezes < 3) {
        s.freezes++;
      }
      store(STREAK_KEY, s);
      // Log to daily history
      this._logDay(t);
      return s;
    },
    _logDay: function(date) {
      var h = load(HISTORY_KEY, {});
      if (!h[date]) h[date] = { xp: 0, tools: [] };
      store(HISTORY_KEY, h);
    }
  };

  // ═══════════════════════════════════════════
  // XP SYSTEM
  // ═══════════════════════════════════════════
  var xp = {
    get: function() {
      return load(XP_KEY, { total: 0, today: 0, todayDate: '', level: 1 });
    },
    add: function(amount, source) {
      var x = this.get();
      var t = today();
      if (x.todayDate !== t) { x.today = 0; x.todayDate = t; }
      x.total += amount;
      x.today += amount;
      x.level = Math.floor(x.total / 100) + 1;
      store(XP_KEY, x);
      // Log to daily history
      var h = load(HISTORY_KEY, {});
      if (!h[t]) h[t] = { xp: 0, tools: [] };
      h[t].xp += amount;
      if (source && h[t].tools.indexOf(source) === -1) h[t].tools.push(source);
      store(HISTORY_KEY, h);
      return x;
    },
    // XP awards per activity
    QUIZ_COMPLETE: 15,
    QUIZ_PERFECT: 25,
    FLASHCARD_SESSION: 10,
    COMMAND_TERM_TEST: 10,
    COMMAND_TERM_MATCH: 15,
    CRITERION_SELF_ASSESS: 20,
    VOCAB_SESSION: 10,
    DAILY_FIRST: 5
  };

  // ═══════════════════════════════════════════
  // BADGE SYSTEM
  // ═══════════════════════════════════════════
  var BADGE_DEFS = [
    { id: 'streak_3', name: '3-Day Streak', icon: '🔥', desc: 'Visit 3 days in a row', check: function() { return streak.get().count >= 3; } },
    { id: 'streak_7', name: 'Week Warrior', icon: '⚡', desc: '7-day streak', check: function() { return streak.get().count >= 7; } },
    { id: 'streak_30', name: 'Monthly Master', icon: '🏆', desc: '30-day streak', check: function() { return streak.get().best >= 30; } },
    { id: 'xp_100', name: 'First Hundred', icon: '💯', desc: 'Earn 100 XP', check: function() { return xp.get().total >= 100; } },
    { id: 'xp_500', name: 'Half K', icon: '🌟', desc: 'Earn 500 XP', check: function() { return xp.get().total >= 500; } },
    { id: 'xp_1000', name: 'XP Champion', icon: '👑', desc: 'Earn 1000 XP', check: function() { return xp.get().total >= 1000; } },
    { id: 'ct_10', name: 'Term Learner', icon: '📝', desc: 'Learn 10 command terms', check: function() { return _countCTMastered() >= 10; } },
    { id: 'ct_all', name: 'Term Master', icon: '🎓', desc: 'Master all command terms', check: function() { return _countCTMastered() >= 30; } },
    { id: 'quiz_5', name: 'Quiz Taker', icon: '⚡', desc: 'Complete 5 quizzes', check: function() { return _countQuizzes() >= 5; } },
    { id: 'quiz_perfect', name: 'Perfect Score', icon: '💎', desc: 'Get 100% on any quiz', check: function() { return _hasPerfectQuiz(); } },
    { id: 'vocab_25', name: 'Word Builder', icon: '📖', desc: 'Practice 25 vocabulary terms', check: function() { return _countVocabPracticed() >= 25; } },
    { id: 'vocab_all', name: 'Vocab Legend', icon: '📚', desc: 'Practice all 102 terms', check: function() { return _countVocabPracticed() >= 100; } },
    { id: 'criteria_1', name: 'Self-Aware', icon: '🪞', desc: 'Self-assess one criterion', check: function() { return _countCriteriaAssessed() >= 1; } },
    { id: 'criteria_all', name: 'Fully Assessed', icon: '📋', desc: 'Self-assess all 8 criteria', check: function() { return _countCriteriaAssessed() >= 8; } },
    { id: 'tools_3', name: 'Explorer', icon: '🧭', desc: 'Use 3 different tools in one day', check: function() { var h = load(HISTORY_KEY, {}); var d = h[today()]; return d && d.tools && d.tools.length >= 3; } },
  ];

  // Badge helper counters (read from other tools' localStorage)
  function _countCTMastered() {
    var c = 0;
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (k && k.indexOf('ll_ct_') === 0 && k !== 'll_ct_streak') {
        try { var s = JSON.parse(localStorage.getItem(k)); if (s && (s.status === 'mastered' || s.status === 'learning')) c++; } catch(e) {}
      }
    }
    return c;
  }
  function _countQuizzes() { return load(PREFIX + 'quiz_count', 0); }
  function _hasPerfectQuiz() { return load(PREFIX + 'quiz_perfect', false); }
  function _countVocabPracticed() { return load(PREFIX + 'vocab_practiced', 0); }
  function _countCriteriaAssessed() {
    var c = 0;
    ['math_A','math_B','math_C','math_D','science_A','science_B','science_C','science_D'].forEach(function(k) {
      var h = load('ll_csa_' + k, []);
      if (h.length > 0) c++;
    });
    return c;
  }

  var badges = {
    getEarned: function() { return load(BADGE_KEY, []); },
    check: function() {
      var earned = this.getEarned();
      var newBadges = [];
      BADGE_DEFS.forEach(function(b) {
        if (earned.indexOf(b.id) === -1 && b.check()) {
          earned.push(b.id);
          newBadges.push(b);
        }
      });
      if (newBadges.length > 0) store(BADGE_KEY, earned);
      return newBadges;
    },
    getAll: function() {
      var earned = this.getEarned();
      return BADGE_DEFS.map(function(b) {
        return { id: b.id, name: b.name, icon: b.icon, desc: b.desc, earned: earned.indexOf(b.id) !== -1 };
      });
    }
  };

  // ═══════════════════════════════════════════
  // PROGRESS API (tool-specific counters)
  // ═══════════════════════════════════════════
  var progress = {
    get: function(tool) { return load(PREFIX + 'prog_' + tool, {}); },
    set: function(tool, data) { store(PREFIX + 'prog_' + tool, data); },
    increment: function(tool, key, amount) {
      var p = this.get(tool);
      p[key] = (p[key] || 0) + (amount || 1);
      this.set(tool, p);
      return p[key];
    }
  };

  // ═══════════════════════════════════════════
  // RENDER — engagement bar + badge toasts
  // ═══════════════════════════════════════════
  var render = {
    // Compact stats bar for any tool page
    bar: function(containerId) {
      var el = document.getElementById(containerId);
      if (!el) return;
      var s = streak.get();
      var x = xp.get();
      var earned = badges.getEarned();
      el.innerHTML =
        '<div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap;padding:8px 0;font-family:inherit">' +
          '<div style="padding:5px 12px;border-radius:8px;background:rgba(245,158,11,.1);border:1px solid rgba(245,158,11,.2);font-size:.72rem;color:#f59e0b;font-weight:600;display:flex;align-items:center;gap:5px">🔥 <strong>' + s.count + '</strong> day streak' + (s.freezes > 0 ? ' · 🧊' + s.freezes : '') + '</div>' +
          '<div style="padding:5px 12px;border-radius:8px;background:rgba(13,148,136,.1);border:1px solid rgba(13,148,136,.2);font-size:.72rem;color:#0D9488;font-weight:600;display:flex;align-items:center;gap:5px">⭐ <strong>' + x.total + '</strong> XP · Level ' + x.level + '</div>' +
          '<div style="padding:5px 12px;border-radius:8px;background:rgba(124,58,237,.1);border:1px solid rgba(124,58,237,.2);font-size:.72rem;color:#8b5cf6;font-weight:600;display:flex;align-items:center;gap:5px">🏅 <strong>' + earned.length + '</strong> / ' + BADGE_DEFS.length + ' badges</div>' +
        '</div>';
    },

    // Full badge shelf for the dashboard
    badgeShelf: function(containerId) {
      var el = document.getElementById(containerId);
      if (!el) return;
      var all = badges.getAll();
      var html = '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:6px">';
      all.forEach(function(b) {
        html += '<div style="padding:10px 12px;border-radius:10px;border:1.5px solid ' + (b.earned ? 'rgba(13,148,136,.3)' : 'rgba(51,65,85,.5)') + ';background:' + (b.earned ? 'rgba(13,148,136,.06)' : 'rgba(15,23,42,.3)') + ';text-align:center;opacity:' + (b.earned ? '1' : '.4') + '">' +
          '<div style="font-size:1.5rem;margin-bottom:4px">' + b.icon + '</div>' +
          '<div style="font-size:.72rem;font-weight:700;color:' + (b.earned ? '#e2e8f0' : '#64748b') + ';margin-bottom:2px">' + b.name + '</div>' +
          '<div style="font-size:.62rem;color:#64748b">' + b.desc + '</div>' +
        '</div>';
      });
      html += '</div>';
      el.innerHTML = html;
    },

    // Toast notification for new badges
    toast: function(badge) {
      var toast = document.createElement('div');
      toast.style.cssText = 'position:fixed;top:20px;left:50%;transform:translateX(-50%) translateY(-20px);padding:14px 24px;background:linear-gradient(135deg,#0D9488,#14b8a6);color:#fff;border-radius:14px;font-family:inherit;font-size:.88rem;font-weight:600;z-index:99999;box-shadow:0 12px 40px rgba(13,148,136,.4);display:flex;align-items:center;gap:10px;opacity:0;transition:all .4s cubic-bezier(.34,1.56,.64,1)';
      toast.innerHTML = '<span style="font-size:1.6rem">' + badge.icon + '</span><div><div>Badge Unlocked!</div><div style="font-size:.75rem;font-weight:400;opacity:.85">' + badge.name + ' — ' + badge.desc + '</div></div>';
      document.body.appendChild(toast);
      requestAnimationFrame(function() {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
      });
      setTimeout(function() {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(-20px)';
        setTimeout(function() { toast.remove(); }, 400);
      }, 3500);
    },

    // Weekly activity heatmap (for dashboard)
    weekHeatmap: function(containerId) {
      var el = document.getElementById(containerId);
      if (!el) return;
      var h = load(HISTORY_KEY, {});
      var html = '<div style="display:flex;gap:3px;justify-content:center;padding:8px 0">';
      for (var i = 6; i >= 0; i--) {
        var d = new Date(Date.now() - i * 86400000).toISOString().slice(0, 10);
        var day = h[d];
        var dayXP = day ? day.xp : 0;
        var intensity = Math.min(1, dayXP / 50);
        var dayName = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][new Date(d).getDay()];
        var bg = dayXP > 0 ?
          'rgba(13,148,136,' + (0.15 + intensity * 0.7) + ')' :
          'rgba(51,65,85,.2)';
        var border = dayXP > 0 ? 'rgba(13,148,136,.4)' : 'rgba(51,65,85,.3)';
        html += '<div style="width:40px;text-align:center;padding:8px 4px;border-radius:8px;background:' + bg + ';border:1px solid ' + border + '">' +
          '<div style="font-size:.55rem;color:#94a3b8;margin-bottom:2px">' + dayName + '</div>' +
          '<div style="font-size:.75rem;font-weight:700;color:' + (dayXP > 0 ? '#5eead4' : '#475569') + '">' + (dayXP > 0 ? dayXP : '—') + '</div>' +
        '</div>';
      }
      html += '</div>';
      el.innerHTML = html;
    }
  };

  // ═══════════════════════════════════════════
  // AUTO-INIT: update streak on every page load
  // ═══════════════════════════════════════════
  streak.update();
  // Award daily first-visit XP
  var x = xp.get();
  if (x.todayDate !== today()) {
    xp.add(xp.DAILY_FIRST, 'daily');
  }

  // ─── Expose API ───
  root.LL = {
    streak: streak,
    xp: xp,
    badges: badges,
    progress: progress,
    render: render,
    _store: store,
    _load: load,
    PREFIX: PREFIX
  };

})(window);
