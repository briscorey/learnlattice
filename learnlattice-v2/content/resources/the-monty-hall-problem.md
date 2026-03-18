---
title: The Monty Hall Problem
date: 2025-09-08
description: There are three doors. Behind one is a car. You pick Door 1. The host opens Door 3 — it's a goat. Should you switch? The correct answer has triggered arguments among mathematicians, letters
  to newspapers, and a genuine crisis in probabilistic reasoning. Run the simulation. Prove the answer. Survive the argument.
subjects:
- Mathematics
math_topic: Statistics
year_levels:
- Grade 8
- Grade 9
- MYP Year 3
- MYP Year 4
difficulty: "exceeding"
resource_types:
- Investigation Pack
tags:
- Probability
- Conditional Probability
- Simulation
- Tree Diagrams
- Criterion B
- Criterion D
key_concept: Logic
global_context: Fairness and Development
statement_of_inquiry: Human intuition about probability is systematically biased — understanding why is as important as knowing the correct answer.
formula: P(win|switch) = 2/3
download_url: ''
download_label: Investigation Pack PDF
hook: You pick a door. The host opens another. Should you switch? Your intuition is probably wrong.
warmup: 'Play a quick ''pick a door'' game with 3 cups and a prize. Ask: After I show an empty cup, would you switch? Record class predictions.'
timeline: '10 min: Introduce the problem. Students predict before investigating. | 25 min: Students work through the investigation in pairs or small groups. | 15 min: Gallery walk or class discussion. Compare
  approaches and findings.'
self_check:
- level: Getting started
  items:
  - I can describe what we investigated
- level: Making progress
  items:
  - I can explain the key patterns or relationships
- level: Going deeper
  items:
  - I can use evidence to justify my conclusions
- level: Extending
  items:
  - I can connect this to other topics or real-world situations
sentence_starters:
  approaching:
  - I noticed that...
  - The pattern I see is...
  - My prediction was...
  meeting:
  - The evidence shows that...
  - I can explain this because...
  - Comparing the results...
  exceeding:
  - This connects to... because...
  - If we changed the variable...
  - The limitation of this approach is...
misconceptions:
- myth: Finding one example proves a rule
  why: This is a common intuition but leads to incorrect conclusions.
  truth: One example supports a conjecture but doesn't prove it. Look for a general argument.
- myth: The pattern must continue forever
  why: This is a common intuition but leads to incorrect conclusions.
  truth: Patterns can break. We need to test edge cases and justify why the pattern holds.
- myth: There is only one correct method
  why: This is a common intuition but leads to incorrect conclusions.
  truth: Mathematics values different approaches. The reasoning matters more than the method.
listen_for:
- level: 3-4
  phrase: Describes observations about the monty hall problem without explanation
- level: 5-6
  phrase: Explains patterns using evidence from the investigation
- level: 7-8
  phrase: Evaluates the method, identifies limitations, and connects to broader concepts
quick_check:
- q: What is the key question this investigation explores?
  a: Students should reference the central question of The Monty Hall Problem
  type: recall
- q: What evidence supports your conclusion?
  a: Students should cite specific data or observations from their investigation
  type: apply
- q: How would your results change if you modified one variable?
  a: Students should predict and justify based on their understanding
  type: extend
exit_ticket:
- What is one thing you learned today that surprised you?
- What question do you still have about this topic?
- Rate your confidence from 1-5 on the key concept.
journal_prompts:
- Explain the monty hall problem to someone who hasn't studied it. What would you say?
- What was the hardest part of today's investigation? How did you work through it?
- How does this topic connect to something you already knew?
- If you could investigate one more question about this topic, what would it be?
differentiated:
  approaching: Complete the guided investigation with scaffolded questions. Focus on describing what you observe.
  meeting: Complete the investigation independently. Explain the patterns you find using evidence.
  exceeding: Extend the investigation with your own question. Evaluate your method and suggest improvements.
seo_title: "The Monty Hall Problem | MYP Maths Crit B & Crit D"
seo_description: "Free MYP Mathematics investigation pack targeting Criterion B, Criterion D for Grade 8-9. There are three doors. Behind one is a car. You pick Door 1"
---



## The Hook

Present the scenario without explanation. Do not reveal the answer.

> You are on a game show. There are three doors. Behind one door is a car. Behind the other two are goats. You pick Door 1.
> 
> The host — who knows where the car is — opens Door 3. Behind it: a goat.
> 
> The host offers you a choice: stick with Door 1, or switch to Door 2.
> 
> **What do you do? Does it matter?**

Run a class vote. Record the numbers. Almost always: majority says "it doesn't matter — 50/50."

Then tell them the correct answer: **switching wins 2/3 of the time. Staying wins 1/3.**

Watch the reaction. Resistance is the lesson.

---

## Why This Investigation Matters

The Monty Hall problem is famous not because it is difficult but because it is counterintuitive in a *systematic* way. When this problem was published in *Parade* magazine in 1990, thousands of readers — including hundreds of mathematics PhDs — wrote in to say the published answer was wrong. It wasn't.

The problem exposes a genuine flaw in how humans reason about conditional probability: we update probabilities based on new information in ways that feel correct but are systematically biased.

Students who work through this investigation will understand:
- Why simulation is a tool for checking theoretical probability claims
- What conditional probability means and how new information changes probability
- Why "equally likely outcomes" is an assumption that must be verified, not assumed
- Why expert consensus is not the same as correct

---

## Core Concepts

### Why 50/50 Feels Right (and Isn't)

The intuitive argument goes: *After Door 3 is opened, there are two doors left. One has the car. That's 50/50.*

This argument ignores the information carried by the host's action. The host does not open a random door — the host **never opens the door hiding the car**. That constraint means the host's choice tells you something.

### The Tree Diagram

List every possible starting situation:

**Case 1: Car is behind Door 1 (you picked correctly, probability 1/3)**
- Host opens Door 2 or Door 3 (either, since both have goats)
- If you STAY → Win. If you SWITCH → Lose.

**Case 2: Car is behind Door 2 (probability 1/3)**
- Host must open Door 3 (can't open Door 2)
- If you STAY → Lose. If you SWITCH → Win.

**Case 3: Car is behind Door 3 (probability 1/3)**
- Host must open Door 2 (can't open Door 3)
- If you STAY → Lose. If you SWITCH → Win.

Count outcomes:
- STAY wins in 1 out of 3 equally likely cases → P(win | stay) = **1/3**
- SWITCH wins in 2 out of 3 equally likely cases → P(win | switch) = **2/3**

### Why the Host's Behaviour Matters

If the host opened doors randomly (sometimes revealing the car), the problem would be different. The 2/3 answer depends entirely on the rule: **the host always reveals a goat.**

This is conditional probability: P(car behind Door 2 | host opened Door 3). Because the host cannot open Door 2 when the car is there, Door 3 being opened increases the probability that the car is behind Door 2.

When you switch, you are effectively betting on "the car is NOT behind your original door" — which has probability 2/3.

---

## Investigation Tasks

### Part A — The Simulation

Run this experiment 30 times with a partner. Use three cards (one labelled CAR, two labelled GOAT) face-down.

**Round setup:** One person is the "host" (knows where the car is). Other person picks a card without looking. Host removes one goat card. Player records: stay or switch. Check result.

Track on a table:

| Trial | Initial pick | Host removes | Strategy | Win/Lose |
|-------|-------------|--------------|----------|---------|
| 1 | | | Switch | |
| ... | | | | |

After 30 trials: What fraction of Stay rounds won? What fraction of Switch rounds won?

Pool class data. With 300 trials: what do the numbers show?

### Part B — The Tree Diagram

Draw a complete probability tree for the Monty Hall problem, beginning with the three possible car positions (each with probability 1/3).

For each starting position, show what the host can do, and what the outcome is for both strategies.

From your tree: calculate P(win | stay) and P(win | switch).

**Does your tree agree with the simulation results?**

### Part C — Variations That Change the Answer

The Monty Hall answer changes when the rules change. For each variation below, use a tree diagram or simulation to find P(win | switch):

1. **4 doors, host opens 1 goat door.** After the host opens one door, there are 3 remaining (including yours). Should you switch?

2. **4 doors, host opens 2 goat doors.** Now only 2 doors remain. Should you switch?

3. **The host opens a door randomly** (sometimes revealing the car). If the host accidentally reveals a goat, should you switch?

*Variation 3 is the hardest. The answer: if the host reveals a goat randomly, switching gives you 50/50 — not 2/3.*

### Part D — The Argument (Criterion D)

The following objection was published by a professor of mathematics in 1990:

> *"You blundered. The problem as stated clearly shows that there is a 50-50 chance. There is no reason to switch. The two remaining doors have equal probabilities of hiding the car."*

Write a response to this objection. Your response must:
1. Identify the specific error in the professor's reasoning
2. Explain using the tree diagram why the probabilities are not equal
3. Describe the role of the host's knowledge in creating the asymmetry
4. Address the general principle: when does new information change probability, and when doesn't it?

---

## Common Misconceptions

| Belief | What's accurate |
|--------|----------------|
| "After one door is eliminated, it's 50/50" | The two remaining doors do not have equal probability because the host's action was not random. The original probabilities are preserved and redistributed. |
| "My original choice was 1/3, now the car is definitely in one of the two — so each must be 1/2" | This logic would apply if one door were eliminated randomly. The host's constraint means the *switching* door absorbs the probability of all doors the host could have opened. |
| "Switching is superstitious — previous probabilities don't transfer" | This is the core error. The 2/3 probability is not "attached" to a door — it reflects the proportion of game configurations in which switching wins. |
| "If I run this 10 times and staying won 6, then staying is better" | Sample size of 10 is too small to distinguish 1/3 from 1/2 reliably. This is a separate lesson about sample size and inference. |
| "The problem is ambiguous" | It is well-defined once the host's rule is specified. The controversy arose because some formulations left the host's behaviour unclear. |

---

## Teaching Notes

**On the initial vote:** Record the vote numbers. Return to them at the end. Students who voted "doesn't matter" need the explicit moment where they update — not because the teacher said so, but because their own simulation showed so.

**On resistance:** The most valuable part of this lesson is the productive disagreement. Students who are convinced switching is right will argue with students who aren't. Facilitate, don't adjudicate. The goal is for the simulation and tree diagram to adjudicate, not you.

**On Part C, Variation 3:** This is genuinely subtle. When the host opens a door randomly and happens to reveal a goat, the structure of the problem changes. This is a beautiful example of how the same surface-level problem can have a different answer depending on a single rule change.

**On the history:** After Marilyn vos Savant published the correct answer in *Parade*, she received approximately 10,000 letters, many from credentialed mathematicians, telling her she was wrong. She was right. The aftermath is documented and worth sharing — it illustrates that credentials are not a substitute for careful reasoning.

---

## Assessment Alignment

| Task | MYP Criterion | Descriptor |
|------|--------------|-----------|
| Part A | Criterion B | Investigating patterns: using simulation to explore probability |
| Parts B + C | Criterion B | Investigating patterns: using tree diagrams and extending to new cases |
| Part D | Criterion D | Applying mathematics in real-world contexts: evaluating probabilistic reasoning |

---

> **The bigger idea:** The Monty Hall problem is not really about game shows. It is about the difference between the probability you calculate from first principles and the probability you feel is correct. These two things are frequently different. A person who understands *why* they feel 50/50 is wrong — and can articulate the error — has developed a skill worth far more than any formula.
