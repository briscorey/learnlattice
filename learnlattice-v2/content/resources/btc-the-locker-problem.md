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
teacher_moves:
  - title: "Start with the table, not the formula"
    description: "Students who build a table of values and look for patterns find the generalisation more meaningful than students who are given the formula first. Let them struggle with the pattern before offering structure."
  - title: "Visibly random groups"
    description: "Use random grouping (cards, sticks, app). Students who always work with friends miss the productive discomfort of explaining their thinking to someone new."
  - title: "Vertical non-permanent surfaces"
    description: "Get students working on whiteboards or windows. Standing work is more collaborative than seated work, and erasable surfaces lower the stakes of being wrong."
timeline: '0-5 min: Present the hook — let students wonder before you explain anything. | 5-10 min: Warmup activity in pairs. | 10-30 min: Main investigation — students work in groups on vertical surfaces or at tables. | 30-40 min: Gallery walk or whole-class discussion — compare approaches. | 40-48 min: Exit ticket and reflection.'
misconceptions:
- myth: "Checking a few cases proves a formula"
  why: "If it works for 5 values it must always work"
  truth: "Verification is not proof. A formula must work for ALL values, not just the ones tested."
- myth: "The pattern is always in the differences"
  why: "First differences are the first thing students calculate"
  truth: "First differences tell you about the type of relationship but they are not the formula itself."
- myth: "Variables are always x"
  why: "Textbooks default to x"
  truth: "Any letter can represent an unknown. Using n for number of sides or t for time helps students connect the variable to its meaning."
self_check:
- level: Getting started
  items:
  - I understand what the investigation is asking
  - I have started collecting data or working through the problem
- level: Building understanding
  items:
  - I can describe the pattern or relationship I found
  - I used a systematic approach to organise my work
- level: Going deeper
  items:
  - I can explain WHY the pattern works, not just describe it
  - I verified my findings with additional cases or evidence
- level: Pushing further
  items:
  - I can generalise my findings or connect them to other contexts
  - I can evaluate limitations of my approach
sentence_starters:
  describing:
  - "I noticed that..."
  - "The pattern shows..."
  - "When I changed ___, the result..."
  explaining:
  - "This works because..."
  - "The relationship between ___ and ___ is..."
  - "I can generalise this as..."
  justifying:
  - "I know my formula is correct because..."
  - "This must always be true because..."
  - "My evidence for this claim is..."
listen_for:
- level: "3-4"
  phrase: "Describes what they see in the numbers or shapes but cannot explain the pattern"
- level: "5-6"
  phrase: "Identifies the pattern and can predict the next case but cannot write a general formula"
- level: "7-8"
  phrase: "States a general rule using algebra and can explain WHY it works, not just that it works"
exit_ticket:
- "What is the key pattern or formula you discovered today?"
- "Give one example that shows your formula works and explain why."
- "Rate your confidence: 1 (not sure) to 5 (totally got it)."
quick_check:
- type: recall
  q: "What is the key formula or rule you discovered?"
  a: "Students should state the generalisation from the investigation"
- type: apply
  q: "Use your formula to solve a new case you did not investigate."
  a: "Students should apply the formula correctly to a new example"
- type: extend
  q: "What would happen if you changed one condition? Predict and explain."
  a: "Students should reason about how changing a variable affects the outcome"
differentiated:
  approaching: "Work through the guided version with scaffolded tables and sentence starters. Focus on describing the pattern you see."
  meeting: "Complete the investigation independently. Find the pattern, write a general formula, and verify it with new cases."
  exceeding: "Extend the investigation with your own question. Can you prove why your formula must work? Connect it to another area of mathematics."
journal_prompts:
- "What was the most surprising thing you discovered today?"
- "What strategy did you use, and would you change it next time?"
- "How does this investigation connect to something you already knew?"
- "If you had more time, what would you investigate next?"
parent_summary: 'Your child is working on "The Locker Problem" — a mathematics investigation designed for Grade 7 students. They are learning to find patterns, test ideas, and explain their reasoning. Ask them: what did you discover, and how do you know it works?'
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