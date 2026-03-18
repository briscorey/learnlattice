---
title: "The Locker Problem"
date: 2026-03-09
description: "1000 students walk past 1000 lockers. Student 1 opens every locker. Student 2 closes every 2nd locker. Student 3 changes every 3rd. Which lockers are open at the end? A legendary thinking task connecting factors, multiples, and perfect squares."
subjects:
  - "Mathematics"
math_topic: "Number Sense"
year_levels:
  - "Grade 7"
  - "Grade 8"
  - "Grade 9"
resource_types:
  - "Investigation Pack"
tags:
  - "Criterion B"
  - "Building Thinking Classrooms"
  - "Factors"
  - "Number Theory"
  - "Thinking Task"
key-concepts:
  - "Relationships"
global-contexts:
  - "Scientific and Technical Innovation"
statement_of_inquiry: "The relationship between factors and perfect squares reveals surprising mathematical truths hidden in everyday situations."
difficulty: "exceeding"
duration: "1 lesson"
hook: "1000 students walk past 1000 lockers. Student 1 opens them all. Student 2 closes every second one. Student 3 changes every third. Which lockers end up open?"
warmup: "Start with 10 lockers and 10 students. Use O and C on your whiteboard to track the state of each locker."
seo_title: "The Locker Problem — BTC Thinking Task | MYP Maths"
seo_description: "Free MYP maths thinking task from Building Thinking Classrooms. 1000 students walk past 1000 lockers. Student 1 opens every locker. Student 2 cl"
---
## The Hook

Imagine 1000 lockers in a row, all closed. 1000 students walk past.

- Student 1 opens **every** locker.
- Student 2 **closes** every 2nd locker (2, 4, 6, 8...).
- Student 3 **changes** every 3rd locker (opens if closed, closes if open).
- Student n changes every nth locker.

After all 1000 students have walked past, **which lockers are open?**

> **Start with 10 lockers at your whiteboard.** Use O (open) and C (closed).

---

## Build Understanding

| Locker | Toggled by students... | Times toggled | Open or Closed? |
|---|---|---|---|
| 1 | 1 | 1 | Open |
| 2 | 1, 2 | 2 | Closed |
| 3 | 1, 3 | 2 | Closed |
| 4 | 1, 2, 4 | 3 | Open |
| 5 | 1, 5 | 2 | Closed |
| 6 | 1, 2, 3, 6 | 4 | Closed |

> **Key question:** A locker is open if it was toggled an **odd** number of times. What kind of number has an odd number of factors?

---

## The Mathematical Insight

Most numbers have factors in pairs: 12 = 1×12, 2×6, 3×4 — six factors (even).

But **perfect squares** have one unpaired factor: 9 = 1×9, 3×3 — the 3 appears once, giving three factors (odd).

So the open lockers are: **1, 4, 9, 16, 25, 36, 49, 64, 81, 100, ..., 961**

There are **31** open lockers (since 31² = 961 ≤ 1000 < 32² = 1024).

---

## Teaching Notes

**BTC Practices Used:** Thinking task, random groups, vertical non-permanent surfaces. Start with 10 lockers — the full problem is motivating but the entry point must be accessible.

**MYP Criterion B Connection:** The investigation naturally progresses from concrete simulation (drawing lockers) to pattern recognition (which lockers are open?) to the mathematical insight (factors and perfect squares) to justification (why perfect squares have odd factor counts).

**Key Pedagogical Move:** Resist telling students about factors. Let them simulate 10 lockers, notice locker 4 and locker 9 are open, and ask "What is special about 4 and 9?" The connection to perfect squares should emerge from investigation, not instruction.