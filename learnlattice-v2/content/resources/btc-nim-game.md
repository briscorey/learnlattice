---
title: "The Nim Game: Who Wins?"
date: 2025-11-10
description: "Place 21 counters on the table. Two players take turns removing 1, 2, or 3 counters. The player who takes the last counter wins. Is there a winning strategy? A classic thinking task connecting backward reasoning to modular arithmetic."
subjects:
  - "Mathematics"
math_topic: "Number Sense"
year_levels:
  - "Grade 6"
  - "Grade 7"
  - "Grade 8"
resource_types:
  - "Investigation Pack"
tags:
  - "Criterion B"
  - "Building Thinking Classrooms"
  - "Logic"
  - "Strategy"
  - "Number Theory"
  - "Thinking Task"
key-concepts:
  - "Logic"
global-contexts:
  - "Scientific and Technical Innovation"
statement_of_inquiry: "Logical reasoning and backward analysis reveal guaranteed strategies hidden within seemingly uncertain situations."
difficulty: "meeting"
duration: "1 lesson"
hook: "21 counters. Two players. Take 1, 2, or 3. Take the last one and you win. Is there a strategy that ALWAYS wins?"
warmup: "Play with 5 counters first. Can the first player always win? What about 4 counters?"
seo_title: "The Nim Game: Who Wins? — BTC Thinking Task | MYP Maths | Grade 6-8"
seo_description: "Free MYP maths thinking task from Building Thinking Classrooms. Place 21 counters on the table. Two players take turns removing 1, 2, or 3 count"
---
## The Hook

Place **21 counters** on the table. Two players alternate turns. Each turn, remove **1, 2, or 3** counters. The player who takes the last counter **wins**.

> **Play 5 times with your partner.** Does it matter who goes first? Can you find a strategy that always wins?

---

## Work Backwards

The key insight comes from thinking backwards:

- If there are **1, 2, or 3** counters and it is your turn, you **win** (take them all).
- If there are **4** counters and it is your turn, you **lose** (whatever you take, your opponent can take the rest).
- If there are **5, 6, or 7** counters, you can **win** by leaving your opponent with 4.
- If there are **8** counters, you **lose** (you cannot avoid leaving 5, 6, or 7).

> **The losing positions are: 4, 8, 12, 16, 20, 24, ...** What pattern do you see?

---

## The Strategy

**Player 2 wins from 21 counters.** Player 1 takes k counters; Player 2 takes (4 − k). After each pair of turns, exactly 4 counters are removed. After 5 rounds: 21 − 20 = 1 counter left, and it is Player 1's turn. Player 1 takes it and wins.

Wait — actually **Player 1 wins from 21!** (21 is not a multiple of 4.) Player 1 takes 1 counter, leaving 20 (a multiple of 4), and then mirrors the opponent's moves.

> **The strategy:** always leave your opponent on a multiple of 4.

---

## Extend the Thinking

- What if you can take 1, 2, 3, 4, or 5 counters? What are the losing positions now?
- What if the player who takes the **last** counter **loses** (misère version)?
- What if you start with a different number of counters? For which starting numbers does Player 1 win?
- Can you write a general rule for any game where you can take 1 to k counters from n?

---

## Teaching Notes

**BTC Practices Used:** Game-based entry, random groups, vertical non-permanent surfaces. Students play before they analyse — the physical experience of winning and losing builds intuition.

**MYP Criterion B Connection:** Students discover the pattern of losing positions (multiples of 4), describe the winning strategy as a general rule, and justify why it works using modular arithmetic reasoning.

**Key Pedagogical Moment:** The discovery that "Player 2 always wins from 20, but Player 1 always wins from 21" is often the aha moment that reveals the mathematical structure beneath the game.