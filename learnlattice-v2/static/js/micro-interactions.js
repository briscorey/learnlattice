/**
 * LearnLattice — Micro-interactions
 * Scroll reveals, parallax, dice roll animation, hover delight
 */

(function () {
  'use strict';

  // ═══════════════════════════════════════════
  // 1. SCROLL-TRIGGERED REVEALS
  // Fade-up elements as they enter viewport
  // ═══════════════════════════════════════════

  var revealElements = document.querySelectorAll(
    '.resource-content h2, .resource-content h3, ' +
    '.resource-content blockquote, .resource-content table, ' +
    '.resource-content iframe, ' +
    '.rs-teacher-moves, .stuck-section, ' +
    '.topicmap-section, .port-feature, .port-tech-item, ' +
    '.lm-card, .zh-inv, .zh-game-card, ' +
    '.rubric-level, .cb-comment, ' +
    '.assess-card, .explore-grade-card'
  );

  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 60 + 'ms';
      el.classList.add('micro-reveal');
      revealObserver.observe(el);
    });
  }

  // ═══════════════════════════════════════════
  // 2. PARALLAX ON SUBJECT SVGs
  // Gentle movement on scroll for hero illustrations
  // ═══════════════════════════════════════════

  var parallaxElements = document.querySelectorAll(
    '.rs-header-bg img, .explore-hero-bg, .home-featured-illustration img, ' +
    '.topicmap-section-visual img, .explore-subject-illustration img'
  );

  if (parallaxElements.length > 0) {
    var ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(function () {
          var scrollY = window.scrollY;
          parallaxElements.forEach(function (el) {
            var rect = el.getBoundingClientRect();
            var centerY = rect.top + rect.height / 2;
            var viewH = window.innerHeight;
            // Only apply when element is in view
            if (rect.bottom > 0 && rect.top < viewH) {
              var offset = (centerY - viewH / 2) * 0.06;
              el.style.transform = 'translateY(' + offset + 'px) scale(1.02)';
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ═══════════════════════════════════════════
  // 3. SURPRISE ME — DICE ROLL ANIMATION
  // Animate the dice emoji before revealing result
  // ═══════════════════════════════════════════

  var surpriseBtn = document.getElementById('surpriseBtn');
  if (surpriseBtn && typeof investigations !== 'undefined') {
    // Replace the onclick with our animated version
    surpriseBtn.onclick = function () {
      var icon = this.querySelector('.explore-surprise-icon');
      if (!icon) return;

      // Phase 1: Dice roll animation
      var diceFrames = ['🎲', '🎯', '🔮', '✨', '🎲', '💡', '🎲', '✨', '🎯', '🎲'];
      var frameIndex = 0;
      this.classList.add('rolling');
      icon.style.display = 'inline-block';

      var rollInterval = setInterval(function () {
        icon.textContent = diceFrames[frameIndex % diceFrames.length];
        icon.style.transform = 'rotate(' + (frameIndex * 36) + 'deg) scale(' + (1 + Math.sin(frameIndex) * 0.2) + ')';
        frameIndex++;
      }, 80);

      // Phase 2: After 800ms, show result
      var btn = this;
      setTimeout(function () {
        clearInterval(rollInterval);
        icon.textContent = '🎲';
        icon.style.transform = 'rotate(0) scale(1)';
        btn.classList.remove('rolling');

        // Pick random investigation
        var inv = investigations[Math.floor(Math.random() * investigations.length)];
        document.getElementById('surpriseTitle').textContent = inv.title;
        document.getElementById('surpriseDesc').textContent = inv.desc;
        document.getElementById('surpriseSubject').textContent = inv.subject;
        document.getElementById('surpriseLink').href = inv.url;

        var result = document.getElementById('surpriseResult');
        result.style.display = 'block';
        result.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 800);
    };
  }

  // ═══════════════════════════════════════════
  // 4. RESOURCE CARD — TILT ON HOVER
  // Subtle 3D tilt effect following cursor
  // ═══════════════════════════════════════════

  var cards = document.querySelectorAll('.resource-card, .gcard, .explore-subject-card, .assess-card');
  cards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var centerX = rect.width / 2;
      var centerY = rect.height / 2;
      var rotateX = ((y - centerY) / centerY) * -3;
      var rotateY = ((x - centerX) / centerX) * 3;
      card.style.transform = 'perspective(800px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-4px)';
    });

    card.addEventListener('mouseleave', function () {
      card.style.transform = '';
      card.style.transition = 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)';
      setTimeout(function () { card.style.transition = ''; }, 400);
    });
  });

  // ═══════════════════════════════════════════
  // 5. STAT COUNTER — SMOOTH COUNT UP
  // Numbers count up when they scroll into view
  // ═══════════════════════════════════════════

  var statNums = document.querySelectorAll('.stat-num[data-count], .port-stat-num, .zh-stat-num');
  if (statNums.length > 0 && 'IntersectionObserver' in window) {
    var countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.dataset.count || el.textContent, 10);
          if (isNaN(target)) return;
          var duration = 1200;
          var start = performance.now();
          function animate(now) {
            var progress = Math.min((now - start) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            el.textContent = Math.round(target * eased);
            if (progress < 1) requestAnimationFrame(animate);
            else el.textContent = target;
          }
          requestAnimationFrame(animate);
          countObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    statNums.forEach(function (el) { countObserver.observe(el); });
  }

  // ═══════════════════════════════════════════
  // 6. SMOOTH HOVER GLOW ON GAMES
  // Mouse-following glow on game screenshot cards
  // ═══════════════════════════════════════════

  var gameCards = document.querySelectorAll('.gcard');
  gameCards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      card.style.setProperty('--glow-x', x + 'px');
      card.style.setProperty('--glow-y', y + 'px');
    });
  });

  // ═══════════════════════════════════════════
  // 7. TYPING EFFECT ON HERO TAGLINE
  // Subtle cursor blink on the hero emphasis
  // ═══════════════════════════════════════════

  var heroEm = document.querySelector('.ka-hero-text em');
  if (heroEm) {
    heroEm.classList.add('hero-typed');
  }

  // ═══════════════════════════════════════════
  // 8. VOCABULARY CARD FLIP HINT
  // Gentle bounce on first visible vocab cards
  // ═══════════════════════════════════════════

  var vocabCards = document.querySelectorAll('.vocab-card');
  if (vocabCards.length > 3) {
    setTimeout(function () {
      vocabCards[0].classList.add('vocab-bounce');
      setTimeout(function () { vocabCards[0].classList.remove('vocab-bounce'); }, 600);
    }, 1500);
  }

  // ═══════════════════════════════════════════
  // 9. NAVIGATION HOVER — UNDERLINE SLIDE
  // Animated underline on nav items
  // ═══════════════════════════════════════════

  var navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function (link) {
    link.classList.add('nav-animated');
  });

})();
