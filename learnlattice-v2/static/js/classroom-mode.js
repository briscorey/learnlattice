// ═══════════════════════════════════════════
// CLASSROOM MODE — Presentation View
// ═══════════════════════════════════════════
(function() {
  var btn     = document.getElementById('classroomModeBtn');
  var overlay = document.getElementById('classroomOverlay');
  if (!btn || !overlay) return;

  var stage    = document.getElementById('cmStage');
  var counter  = document.getElementById('cmCounter');
  var progress = document.getElementById('cmProgress');
  var prevBtn  = document.getElementById('cmPrev');
  var nextBtn  = document.getElementById('cmNext');
  var closeBtn = document.getElementById('cmClose');

  var slides = [];
  var current = 0;

  // Parse the resource content into slides
  function buildSlides() {
    slides = [];
    var content = document.querySelector('.resource-content');
    if (!content) return;

    // First slide: title
    var titleEl = document.querySelector('.resource-single-header h1');
    var descEl  = document.querySelector('.resource-single-desc');
    slides.push({
      html: '<div class="cm-slide">' +
        '<div class="cm-slide-title">' + (titleEl ? titleEl.textContent : '') + '</div>' +
        (descEl ? '<div class="cm-slide-subtitle">' + descEl.textContent + '</div>' : '') +
        '</div>'
    });

    // Walk through content children
    var children = content.children;
    var currentSection = '';
    var buffer = [];

    function flushBuffer() {
      if (buffer.length === 0) return;
      // Split large buffers into multiple slides (max 2 elements per slide)
      var maxPerSlide = 2;
      for (var b = 0; b < buffer.length; b += maxPerSlide) {
        var chunk = buffer.slice(b, b + maxPerSlide);
        slides.push({
          html: '<div class="cm-slide">' +
            
            chunk.join('') +
            '</div>'
        });
      }
      buffer = [];
    }

    for (var i = 0; i < children.length; i++) {
      var el = children[i];
      var tag = el.tagName;

      if (tag === 'H2') {
        flushBuffer();
        currentSection = el.textContent;
        // Create a section title slide
        slides.push({
          html: '<div class="cm-slide"><h2>' + el.innerHTML + '</h2></div>'
        });
      } else if (tag === 'H3') {
        flushBuffer();
        // H3 becomes its own slide with section context
        slides.push({
          html: '<div class="cm-slide">' +
            
            '<p><strong>' + el.innerHTML + '</strong></p></div>'
        });
      } else if (tag === 'P') {
        var text = el.textContent.trim();
        // Bold paragraphs (like "Fact 1:", "Ask:") get their own slide
        var firstChild = el.firstElementChild;
        var isBold = firstChild && (firstChild.tagName === 'STRONG' || firstChild.tagName === 'B');
        var startsWithBold = isBold && firstChild.textContent.length > text.length * 0.4;

        if (startsWithBold || text.length > 150) {
          flushBuffer();
          slides.push({
            html: '<div class="cm-slide">' +
              
              '<p>' + el.innerHTML + '</p></div>'
          });
        } else if (text.length > 0) {
          buffer.push('<p>' + el.innerHTML + '</p>');
          // Flush if buffer is getting big
          if (buffer.length >= 2) flushBuffer();
        }
      } else if (tag === 'BLOCKQUOTE') {
        flushBuffer();
        slides.push({
          html: '<div class="cm-slide">' +
            
            '<blockquote>' + el.innerHTML + '</blockquote></div>'
        });
      } else if (tag === 'UL' || tag === 'OL') {
        flushBuffer();
        // Split long lists - if more than 5 items, break into separate slides
        var items = el.querySelectorAll('li');
        if (items.length > 5) {
          var half = Math.ceil(items.length / 2);
          var list1 = '<' + tag.toLowerCase() + '>';
          var list2 = '<' + tag.toLowerCase() + '>';
          for (var li = 0; li < items.length; li++) {
            if (li < half) list1 += '<li>' + items[li].innerHTML + '</li>';
            else list2 += '<li>' + items[li].innerHTML + '</li>';
          }
          list1 += '</' + tag.toLowerCase() + '>';
          list2 += '</' + tag.toLowerCase() + '>';
          slides.push({
            html: '<div class="cm-slide">' +
              
              list1 + '</div>'
          });
          slides.push({
            html: '<div class="cm-slide">' +
              
              list2 + '</div>'
          });
        } else {
          slides.push({
            html: '<div class="cm-slide">' +
              
              '<' + tag.toLowerCase() + '>' + el.innerHTML + '</' + tag.toLowerCase() + '></div>'
          });
        }
      } else if (tag === 'TABLE') {
        flushBuffer();
        slides.push({
          html: '<div class="cm-slide" style="overflow-x:auto">' +
            
            '<div style="font-size:1.1rem">' + el.outerHTML + '</div></div>'
        });
      } else {
        // Other elements get buffered
        buffer.push(el.outerHTML);
        if (buffer.length >= 3) flushBuffer();
      }
    }
    flushBuffer();

    // If we somehow have no slides, add a fallback
    if (slides.length === 0) {
      slides.push({ html: '<div class="cm-slide"><p>No content to present.</p></div>' });
    }
  }

  function render() {
    if (!slides[current]) return;
    stage.innerHTML = slides[current].html;
    counter.textContent = (current + 1) + ' / ' + slides.length;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === slides.length - 1;

    // Update progress dots
    var dots = progress.querySelectorAll('.cm-dot');
    dots.forEach(function(dot, i) {
      dot.classList.toggle('active', i === current);
      dot.classList.toggle('visited', i < current);
    });

    // Re-render KaTeX if available
    if (window.renderMathInElement) {
      renderMathInElement(stage, {
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false}
        ],
        throwOnError: false
      });
    }
  }

  function buildProgress() {
    progress.innerHTML = '';
    for (var i = 0; i < slides.length; i++) {
      var dot = document.createElement('span');
      dot.className = 'cm-dot';
      dot.dataset.index = i;
      dot.addEventListener('click', function() {
        current = parseInt(this.dataset.index);
        render();
      });
      progress.appendChild(dot);
    }
  }

  function open() {
    buildSlides();
    current = 0;
    buildProgress();
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    render();
  }

  function close() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function next() {
    if (current < slides.length - 1) { current++; render(); }
  }

  function prev() {
    if (current > 0) { current--; render(); }
  }

  // Event listeners
  btn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);

  document.addEventListener('keydown', function(e) {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
  });

  // Click on stage to advance (like a slideshow)
  stage.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') return; // don't intercept links
    next();
  });
})();
