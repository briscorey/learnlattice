---
title: "How Many Fish?"
date: 2026-03-28
description: "You cannot count every fish in a lake. But you can catch some, mark them, release them, catch again, and use the ratio of marked to unmarked fish to estimate the total population. Students simulate capture-recapture using coloured beads and discover the mathematics behind wildlife conservation."
subjects:
  - "Mathematics"
math_topic: Statistics
year_levels:
  - "Grade 9"
resource_types:
  - "Investigation Pack"
tags:
  - "Sampling"
  - "Estimation"
  - "Proportional Reasoning"
  - "Criterion B"
  - "Criterion D"
key-concepts:
  - "Relationships"
  - "Logic"
global-contexts:
  - "Globalization and Sustainability"
statement_of_inquiry: "Sampling methods allow estimation of quantities too large to count directly — a mathematical tool with real consequences for conservation and policy."
difficulty: "meeting"
hook: "A lake contains thousands of fish. You need to know how many for a conservation report. You cannot drain the lake. You cannot count them. How do you estimate a number you can never directly measure?"
warmup: "A bag contains an unknown number of blue beads. You pull out 20 beads, mark them with a dot, put them back, and shake. You pull out 20 again. 4 of them have dots. Estimate the total number of beads in the bag."
timeline: "0-5 min: Warmup — the bead problem | 5-8 min: Reveal the answer and the formula | 8-12 min: Set up the simulation | 12-30 min: Run 5 capture-recapture trials | 30-38 min: Calculate estimates, compare with actual count | 38-45 min: Discuss sources of error and real-world applications | 45-48 min: Exit ticket"
teacher_moves:
  - title: "Start with the bag of beads"
    description: "The warmup IS the method. Put an unknown number of beads in a bag (you know, but students do not). Students take a sample, mark them, return them, remix, resample, and use the proportion of marked beads to estimate the total. The reveal (actual count) creates a satisfying moment."
  - title: "Multiple trials improve the estimate"
    description: "One capture-recapture gives a rough estimate. Five trials averaged together are much closer to the true value. This teaches the power of repeated sampling without needing to explain standard error formally."
  - title: "Discuss the assumptions"
    description: "The formula assumes: (1) marked fish mix evenly with unmarked fish, (2) no fish die or leave between captures, (3) marks do not affect behaviour, (4) the population does not change. Each assumption can be violated in the real world. This is where the discussion gets rich."
listen_for:
  - level: "3-4"
    phrase: "We used the marked ones to guess how many were in the bag"
  - level: "5-6"
    phrase: "The proportion of marked beads in the recapture sample should be the same as the proportion of marked beads in the whole population — so we can set up an equation"
  - level: "7-8"
    phrase: "N = (M × S) / R, where M is the number marked, S is the recapture sample size, and R is the number of marked individuals recaptured. Larger samples and more trials reduce the margin of error."
misconceptions:
  - myth: "You can just count them"
    why: "Students do not appreciate the scale of wild populations"
    truth: "Wild populations are often too large, too mobile, or too hidden to count directly. Sampling is the only practical method for most species."
  - myth: "One sample is enough"
    why: "Students want a quick answer"
    truth: "A single capture-recapture is unreliable because of random variation. Multiple trials averaged together give a much better estimate. This is the principle behind all statistical sampling."
  - myth: "The estimate should be exactly right"
    why: "Students expect precision"
    truth: "Every estimate has a margin of error. The goal is not perfection but a useful approximation. Scientists report ranges, not single numbers: 'the population is estimated at 2,000-3,500 individuals.'"
sentence_starters:
  approaching:
    - "In our recapture, we found ___ marked beads out of ___ total, so we estimate..."
    - "Our estimate was ___ and the actual number was ___"
  meeting:
    - "Using the formula N = (M × S) / R, I calculated..."
    - "Averaging multiple trials gave a better estimate because..."
  exceeding:
    - "The assumptions of capture-recapture are... and in real life, these could be violated when..."
    - "The margin of error decreases as sample size increases because..."
self_check:
  - level: "Getting started"
    items:
      - "I completed the capture-recapture simulation"
      - "I recorded results from all trials"
  - level: "Building understanding"
    items:
      - "I used the formula to calculate population estimates"
      - "I averaged multiple trials and compared with the actual count"
  - level: "Going deeper"
    items:
      - "I can explain why larger samples give better estimates"
      - "I can evaluate the assumptions and identify potential sources of error"
exit_ticket:
  - "You mark 50 fish, release them, and recapture 40 fish, of which 8 are marked. Estimate the total population."
  - "Why is the average of 5 trials more reliable than a single trial?"
  - "Name one assumption of capture-recapture that might not hold in a real lake."
quick_check:
  - type: "recall"
    q: "Write the capture-recapture formula."
    a: "N = (M × S) / R, where N = estimated population, M = number marked and released, S = total recaptured, R = marked individuals in recapture."
  - type: "apply"
    q: "200 butterflies are caught, marked, and released. A week later, 150 butterflies are caught and 30 have marks. Estimate the total population."
    a: "N = (200 × 150) / 30 = 1,000 butterflies."
  - type: "extend"
    q: "Your estimate of a fish population is 500. But some marked fish were eaten by predators before the recapture. Would your estimate be too high or too low? Explain."
    a: "Too high. Fewer marked fish in the recapture makes R smaller, which makes N = (M×S)/R larger. The loss of marked fish inflates the population estimate."
differentiated:
  approaching: "Run the bead simulation 5 times. Use the formula to estimate the total for each trial. Average your estimates. Compare with the actual count."
  meeting: "Calculate the percentage error for each trial. Explain why some trials were more accurate than others. Discuss how sample size affects accuracy."
  exceeding: "Research how capture-recapture is used in real wildlife conservation. Evaluate the limitations of the method for (a) migratory species, (b) endangered species with very small populations, (c) marine populations."
journal_prompts:
  - "Why would a government need to know how many fish are in a lake before setting fishing quotas?"
  - "Could capture-recapture be used to estimate the number of homeless people in a city? What would the 'marking' step look like?"
  - "What happens to the accuracy of your estimate if the population is changing (births and deaths) between capture and recapture?"
parent_summary: "Your child learned capture-recapture — a sampling method used by wildlife biologists to estimate animal populations. They simulated it with beads, used proportional reasoning to calculate estimates, and evaluated the assumptions behind the method. Ask them: how many fish are in the lake?"
seo_title: "How Many Fish? | Capture-Recapture Sampling | MYP Math Grade 9"
seo_description: "Free MYP Mathematics investigation for Grade 9. Students simulate capture-recapture sampling, estimate populations, and explore statistical reasoning."
---

## The Hook

A conservation biologist needs to know how many fish live in a lake. The lake is 2 km across. The fish are underwater. They move. There are thousands of them.

She cannot drain the lake. She cannot count them. But she needs a number for the government's fishing quota report.

How do you estimate a number you can never directly measure?

---

## The Method: Capture-Recapture

### The Idea

1. **Capture** a sample of fish. Count them. Mark them (a small fin clip or dye). Release them.
2. Wait for the marked fish to mix back into the population.
3. **Recapture** another sample. Count how many of these are marked.
4. The proportion of marked fish in the recapture should equal the proportion of marked fish in the whole lake.

### The Formula

$$\frac{\text{Marked in recapture}}{\text{Total in recapture}} = \frac{\text{Total marked}}{\text{Total population}}$$

Rearranged:

$$N = \frac{M \times S}{R}$$

Where:
- N = estimated population
- M = number marked and released
- S = total number in recapture sample
- R = number of marked individuals in the recapture

---

## The Simulation

### Setup

Your teacher has placed an **unknown number** of beads in a large opaque bag.

### Run the Simulation

1. **Capture:** Remove 30 beads. Mark each one with a dot. Record: M = 30. Return all marked beads to the bag.
2. **Mix thoroughly.** Shake for 30 seconds.
3. **Recapture:** Remove 30 beads. Count how many have dots. Record: S = 30, R = number with dots.
4. Calculate: N = (30 × 30) / R
5. Return all beads and repeat **4 more times** (5 trials total).

### Results Table

| Trial | M (marked) | S (recaptured) | R (marked in recapture) | Estimate N |
|---|---|---|---|---|
| 1 | 30 | 30 | | |
| 2 | 30 | 30 | | |
| 3 | 30 | 30 | | |
| 4 | 30 | 30 | | |
| 5 | 30 | 30 | | |
| **Average** | | | | |

**Actual count:** Your teacher reveals the true number: ___

**Percentage error** of your average estimate: ____%

---

## What You Should Find

Individual trials will give estimates that vary — some too high, some too low. But the **average of 5 trials** should be reasonably close to the actual number (typically within 15-20%).

Larger samples → better estimates. More trials → better averages. This is the fundamental principle of statistical sampling.

---

## The Real-World Connection

Capture-recapture is used worldwide:
- **Fisheries management** — setting sustainable catch limits
- **Endangered species monitoring** — tracking population trends for tigers, whales, pandas
- **Epidemiology** — estimating the number of people with an undiagnosed disease
- **Ecology** — monitoring biodiversity in habitats

The method only works if certain assumptions hold: marked individuals mix randomly, the population does not change between captures, and marks do not affect survival. When these assumptions are violated, estimates become unreliable — which is why scientists report ranges, not single numbers.

---

## Teaching Notes

Use at least 150 beads in the bag (but count them exactly beforehand). Fewer than 100 makes the proportions too coarse. More than 300 works well but requires larger samples.

The most common error: students forget to return ALL beads (including marked ones) before each trial. If marked beads accumulate outside the bag, every subsequent trial overestimates the population.

For the Criterion D extension, the Yangtze River finless porpoise is an excellent case study — capture-recapture surveys estimate fewer than 1,000 individuals remain, directly informing Chinese government conservation policy.
