---
title: "The Handshake Problem"
date: 2025-12-08
description: "If 30 people are in a room and everyone shakes hands with everyone else, how many handshakes happen? Can you find the answer WITHOUT counting every single one?"
subjects:
  - "Mathematics"
math_topic: Algebra
year_levels:
  - "Grade 7"
  - "Grade 8"
resource_types:
  - "Investigation Pack"
tags:
  - "Mathematics"
key-concepts:
  - "Logic"
global-contexts:
  - "Scientific and Technical Innovation"
statement_of_inquiry: "Generalisation is the heart of algebra — finding a rule that works for any number, not just the one in front of you."
difficulty: "meeting"
hook: "If 30 people are in a room and everyone shakes hands with everyone else, how many handshakes happen? Can you find the answer WITHOUT counting every single one?"
warmup: "Stand up. Shake hands with every person in your group. How many handshakes for 3 people? 4 people? 5 people?"
seo_title: "The Handshake Problem | Free MYP Maths Investigation"
seo_description: "If 30 people are in a room and everyone shakes hands with everyone else, how many handshakes happen? Can you find the answer WITHOUT counting every single "
teacher_moves:
  - title: "Start with the table, not the formula"
    description: "Students who build a table of values and look for patterns find the generalisation more meaningful than students who are given the formula first."
  - title: "Visibly random groups"
    description: "Use random grouping. Students who always work with friends miss the productive discomfort of explaining their thinking to someone new."
  - title: "Vertical non-permanent surfaces"
    description: "Get students working on whiteboards or windows. Standing work is more collaborative and erasable surfaces lower the stakes of being wrong."
timeline: '0-5 min: Present the hook. | 5-10 min: Warmup in pairs. | 10-30 min: Main investigation in groups. | 30-40 min: Gallery walk or class discussion. | 40-48 min: Exit ticket.'
misconceptions:
- myth: "Checking a few cases proves a formula"
  why: "If it works for 5 values it must always work"
  truth: "Verification is not proof. A formula must work for ALL values, not just the ones tested."
- myth: "There is only one correct method"
  why: "Textbooks typically show one approach"
  truth: "Multiple methods can reach the same answer. Comparing methods deepens understanding."
self_check:
- level: Getting started
  items:
  - I understand what the investigation is asking
  - I have started collecting data or working through the problem
- level: Building understanding
  items:
  - I can describe the pattern or relationship I found
  - I used a systematic approach
- level: Going deeper
  items:
  - I can explain WHY the pattern works
  - I verified my findings with additional cases
- level: Pushing further
  items:
  - I can generalise my findings to new contexts
  - I can evaluate limitations of my approach
exit_ticket:
- "What is the key pattern or formula you discovered today?"
- "Give one example that shows your finding works and explain why."
- "Rate your confidence: 1 (not sure) to 5 (totally got it)."
differentiated:
  approaching: "Work through the guided version with scaffolded tables. Focus on describing the pattern you see."
  meeting: "Complete the investigation independently. Find the pattern, write a general rule, and verify it."
  exceeding: "Extend with your own question. Prove why your formula must work. Connect to another area of mathematics."
sentence_starters:
  describing:
  - "I noticed that..."
  - "The pattern shows..."
  explaining:
  - "This works because..."
  - "I can generalise this as..."
  justifying:
  - "I know this is correct because..."
  - "My evidence is..."
listen_for:
- level: "3-4"
  phrase: "Describes what they see but cannot explain the pattern"
- level: "5-6"
  phrase: "Identifies the pattern and can predict the next case"
- level: "7-8"
  phrase: "States a general rule and explains WHY it works"
journal_prompts:
- "What was the most surprising thing you discovered today?"
- "What strategy did you use, and would you change it next time?"
- "How does this connect to something you already knew?"
- "If you had more time, what would you investigate next?"
---
## The Hook

At a party, 5 people shake hands with everyone else.

Count them. It is 10 handshakes.

Now imagine 30 people. Do you want to count every pair? Or would you rather find a **formula**?

---

## Build the Pattern

| People | Handshakes | Pattern |
|---|---|---|
| 2 | 1 | |
| 3 | 3 | |
| 4 | 6 | |
| 5 | 10 | |
| 6 | 15 | |

> **What pattern do you see?** The differences are 1, 2, 3, 4, 5... Each new person shakes hands with everyone already there.

---

## Find the Formula

Person 1 shakes hands with (n-1) people. Person 2 shakes with (n-2) new people (already shook with Person 1). Person 3 shakes with (n-3)...

Total = (n-1) + (n-2) + (n-3) + ... + 1

This is the sum of integers from 1 to (n-1):

$$H = \frac{n(n-1)}{2}$$

### Test it:
- 5 people: 5 × 4 ÷ 2 = **10** ✓
- 30 people: 30 × 29 ÷ 2 = **435**
- Your whole school?

---

## Why the Formula Works

Imagine everyone shakes hands with everyone — that gives n × (n-1) interactions. But each handshake was counted twice (once for each person). So divide by 2.

> This is the same reasoning Gauss used when he was 10 years old to add the numbers 1 to 100. The pattern is the same. The mathematics is connected.

---

## Teaching Notes

Start with physical handshakes — Liljedahl-style random groups standing up. Students feel the combinatorial explosion as group size increases. The jump from 5 people (manageable) to 30 (impossible to count) creates a genuine need for a formula.

The connection to triangular numbers and to the Staircase Problem creates a web of understanding across investigations.