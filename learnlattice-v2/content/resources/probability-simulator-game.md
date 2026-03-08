---
title: "Probability Simulator"
date: 2026-03-08
description: "Roll fair dice, loaded dice, coins, and octahedrons. Compare experimental and theoretical probability in real time. How many rolls do you need to prove a die is loaded?"
subjects:
  - "Mathematics"
math_topic: "Probability"
year_levels:
  - "Grade 6"
  - "Grade 7"
  - "Grade 8"
  - "Grade 9"
  - "MYP Year 1"
  - "MYP Year 2"
  - "MYP Year 3"
  - "MYP Year 4"
resource_types:
  - "Interactive Game"
tags:
  - "Probability"
  - "Experimental Probability"
  - "Theoretical Probability"
  - "Sample Size"
  - "Statistics"
  - "Simulation"
  - "Interactive"
  - "Criterion B"
  - "Criterion D"
key_concept: "Logic"
global_context: "Scientific and Technical Innovation"
statement_of_inquiry: "Logical reasoning helps us evaluate claims about fairness by comparing what we observe with what we expect."
formula: "P(event) = favourable outcomes ÷ total outcomes"
---

## Play the Simulator

<iframe src="/games/probability-simulator" style="width:100%;height:800px;border:none;border-radius:12px;background:#0a0f1a;" loading="lazy" title="Probability Simulator"></iframe>

<a href="/games/probability-simulator" target="_blank" style="display:inline-block;margin-top:12px;font-size:0.85rem;color:var(--teal);">Open in full screen →</a>

---

## How to Use This in a Lesson

This simulator is designed to pair with [Is This Die Cheating?](/resources/is-this-die-cheating-probability-investigation/) — but it works as a standalone tool for any probability unit.

### As a Hook (5 minutes)
Project the simulator. Select "Loaded Die" (but don't tell students). Roll 10 times. Ask: **"Is this die fair?"** Students will argue. Some will say yes, some no. Then ask: **"How would you prove it?"** That question is the lesson.

### As an Investigation Tool (20 minutes)
Students work in pairs on their own devices. Challenge them to determine how many rolls are needed to distinguish a fair die from a loaded one. Start with the fair die, roll 30 times, record results. Then switch to the loaded die, roll 30 times. Can they tell the difference? What about 100 rolls? 500?

### As a Formative Assessment
Ask students to write a paragraph answering: *"A student rolls a die 10 times and gets three 6s. They say the die is loaded. Do you agree? Use evidence from the simulator to support your argument."*

---

## The Mathematics Behind It

**Theoretical probability** tells us what *should* happen with a perfectly fair tool over infinite trials. For a fair six-sided die, each face has a probability of $\frac{1}{6} \approx 16.7\%$.

**Experimental probability** tells us what *actually* happened in a finite number of trials. With only 10 rolls, it's common to see wild variation — one face might appear 40% of the time by pure chance.

**The Law of Large Numbers** tells us that as the number of trials increases, experimental probability converges toward theoretical probability. This is why 30 rolls is often not enough to prove unfairness, but 500 rolls makes it obvious.

The **fairness score** in the simulator uses a simplified chi-squared test — the same statistical method scientists use to determine whether observed data matches expected distributions.
