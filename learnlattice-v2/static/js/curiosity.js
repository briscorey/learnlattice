/* Curiosity Engine — rotating "Did you know?" hooks */
(function() {
'use strict';

var facts = [
  {text:"0.999... equals exactly 1. Not approximately. Exactly. Can you prove it?", url:"/resources/zero-point-nine-repeating-decimals-investigation/", icon:"🤯"},
  {text:"Fire grows, eats, and responds to stimulation. Is fire alive?", url:"/resources/dead-or-alive-biology-investigation/", icon:"🔥"},
  {text:"A million seconds is 11.5 days. A billion seconds is 31 years.", url:"/resources/the-million-dollar-question-number-sense/", icon:"💰"},
  {text:"If you remove just one species from a food web, everything can collapse.", url:"/resources/the-invisible-thread-ecology-investigation/", icon:"🕸️"},
  {text:"Two waves can cancel each other out — perfectly. Sound can destroy sound.", url:"/games/wave-sandbox", icon:"🌊"},
  {text:"A graph can show the exact same data but tell the opposite story.", url:"/resources/the-misleading-graph-statistics-investigation/", icon:"📊"},
  {text:"You can predict the 100th step of a pattern without building 99 steps first.", url:"/resources/the-staircase-problem-algebra-investigation/", icon:"🔢"},
  {text:"An orange floats. Peel it, and it sinks. Same orange. Why?", url:"/resources/density-and-floating-investigation/", icon:"🍊"},
  {text:"Rolling a die 30 times isn't enough to prove it's unfair.", url:"/resources/is-this-die-cheating-probability-investigation/", icon:"🎲"},
  {text:"Every polygon's angles follow the same rule. Every single one.", url:"/resources/impossible-shapes-geometry-investigation/", icon:"📐"},
  {text:"We know what stars are made of — and we've never been to one.", url:"/resources/how-do-we-know-stars-space-investigation/", icon:"⭐"},
  {text:"A rock can tell you what happened millions of years ago — if you know how to read it.", url:"/resources/reading-rocks-earth-science-investigation/", icon:"🪨"},
];

// Pick a daily fact based on the date (changes every day)
var today = new Date();
var dayIndex = (today.getFullYear() * 366 + today.getMonth() * 31 + today.getDate()) % facts.length;
var dailyFact = facts[dayIndex];

// Also pick a random fact (different each page load)
var randomFact = facts[Math.floor(Math.random() * facts.length)];
// Make sure random !== daily
if (randomFact === dailyFact) randomFact = facts[(dayIndex + 1) % facts.length];

// Render daily curiosity card
var dailyEl = document.getElementById('daily-curiosity');
if (dailyEl) {
  dailyEl.innerHTML = '<a href="' + dailyFact.url + '" class="curiosity-card curiosity-daily">' +
    '<span class="curiosity-icon">' + dailyFact.icon + '</span>' +
    '<div><span class="curiosity-label">Did you know?</span>' +
    '<p>' + dailyFact.text + '</p></div>' +
    '<span class="curiosity-arrow">→</span></a>';
}

// Render random curiosity on resource pages
var randomEl = document.getElementById('random-curiosity');
if (randomEl) {
  randomEl.innerHTML = '<a href="' + randomFact.url + '" class="curiosity-card curiosity-random">' +
    '<span class="curiosity-icon">' + randomFact.icon + '</span>' +
    '<div><span class="curiosity-label">Try this next</span>' +
    '<p>' + randomFact.text + '</p></div>' +
    '<span class="curiosity-arrow">→</span></a>';
}

// Daily question for student dashboard
var questionEl = document.getElementById('daily-question');
if (questionEl) {
  var questions = [
    {q:"Can you find a number between 0.999... and 1?", link:"/resources/zero-point-nine-repeating-decimals-investigation/"},
    {q:"Is a virus alive? What about fire?", link:"/resources/dead-or-alive-biology-investigation/"},
    {q:"How long is a million seconds?", link:"/resources/the-million-dollar-question-number-sense/"},
    {q:"What happens if you remove grass from a food web?", link:"/resources/the-invisible-thread-ecology-investigation/"},
    {q:"Can two sounds add up to silence?", link:"/games/wave-sandbox"},
    {q:"How many blocks for a 100-step staircase?", link:"/resources/the-staircase-problem-algebra-investigation/"},
    {q:"Why does a peeled orange sink?", link:"/resources/density-and-floating-investigation/"},
  ];
  var dq = questions[dayIndex % questions.length];
  questionEl.innerHTML = '<a href="' + dq.link + '" class="daily-question-card">' +
    '<span class="dq-label">Today\'s Question</span>' +
    '<p class="dq-text">' + dq.q + '</p>' +
    '<span class="dq-cta">Find out →</span></a>';
}

})();

// ═══════════════════════════════════════════
// STREAK COUNTER — "You've visited X days"
// Uses window.name for session tracking
// ═══════════════════════════════════════════

(function() {
  var streakEl = document.getElementById('visit-streak');
  if (!streakEl) return;
  
  var today = new Date().toDateString();
  var streakData = {count: 1, last: today};
  
  try {
    var stored = document.cookie.match(/llstreak=([^;]+)/);
    if (stored) {
      streakData = JSON.parse(decodeURIComponent(stored[1]));
      var lastDate = new Date(streakData.last);
      var todayDate = new Date(today);
      var diff = Math.floor((todayDate - lastDate) / 86400000);
      
      if (diff === 0) {
        // Same day — keep streak
      } else if (diff === 1) {
        // Next day — increment
        streakData.count++;
        streakData.last = today;
      } else {
        // Missed a day — reset
        streakData.count = 1;
        streakData.last = today;
      }
    }
  } catch(e) {
    streakData = {count: 1, last: today};
  }
  
  // Save (30 day expiry)
  document.cookie = 'llstreak=' + encodeURIComponent(JSON.stringify(streakData)) + ';path=/;max-age=2592000;SameSite=Lax';
  
  var emoji = streakData.count >= 7 ? '🔥' : streakData.count >= 3 ? '⭐' : '👋';
  var text = streakData.count === 1 ? 'Welcome back!' : 
             streakData.count + ' day streak ' + emoji;
  
  streakEl.innerHTML = '<span class="streak-badge">' + text + '</span>';
})();
