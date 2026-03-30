---
title: "IDU: Disease Detectives. Epidemiology Meets Statistics"
date: 2026-02-23
description: "A mystery illness is spreading through the school. Students use contact tracing, statistical analysis, and biological knowledge to identify the source, model the spread, and propose interventions. A math-science IDU connecting statistics, probability, and infectious disease biology."
subjects:
  - "Mathematics"
  - "Science"
  - "Biology"
math_topic: "Statistics"
year_levels:
  - "Grade 8"
  - "Grade 9"
resource_types:
  - "Investigation Pack"
tags:
  - "Interdisciplinary"
  - "Criterion B"
  - "Criterion C"
  - "Criterion D"
  - "Statistics"
  - "Probability"
  - "Biology"
  - "Epidemiology"
  - "Data Analysis"
key-concepts:
  - "Systems"
related_concepts:
  - "Patterns"
  - "Evidence"
  - "Consequences"
global-contexts:
  - "Scientific and Technical Innovation"
statement_of_inquiry: "Statistical patterns in disease data reveal the structure of transmission systems. and mathematical models allow us to predict and prevent outbreaks before they escalate."
difficulty: "exceeding"
duration: "4–5 lessons"
hook: "23 students in our school reported feeling ill this week. Is this an outbreak. or just normal? And if it is an outbreak, can you find patient zero?"
warmup: "If one person in this room had a cold and shook hands with 3 people, and each of those people shook hands with 3 more, how many people would be 'infected' after 5 rounds?"
seo_title: "IDU Disease Detectives | MYP Math-Science Epidemiology"
seo_description: "Free MYP interdisciplinary unit: students investigate a simulated disease outbreak using statistics and biology. Contact tracing, modelling, and data analysis."
teacher_moves:
  - title: "The simulation makes it real"
    description: "Run the outbreak simulation BEFORE revealing it is an investigation. Students genuinely try to figure out who started it. The emotional engagement drives the mathematical analysis."
  - title: "Contact tracing is graph theory"
    description: "When students map who interacted with whom, they are building a network graph. This visual representation makes the mathematics of transmission accessible and reveals the concept of superspreaders."
  - title: "The R-number is the key insight"
    description: "If each infected person infects more than 1 other person (R > 1), the outbreak grows exponentially. If R < 1, it dies out. This single number connects the biology of transmission to the mathematics of exponential growth."
btc_practices:
  - "Whole-class simulation activity"
  - "Random groups for data analysis"
  - "Vertical whiteboards for epidemic curve construction"
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
## Overview: Why This Works as an IDU

This investigation connects MYP Mathematics (statistics, probability, exponential modelling) with MYP Sciences (infectious disease biology, epidemiology) through a simulated disease outbreak. The interdisciplinary need is genuine. epidemiology is inherently mathematical, and understanding disease spread requires both biological knowledge of transmission AND statistical analysis of patterns.

**Mathematics contributes:** Data collection and organisation, frequency tables and epidemic curves (histograms), measures of central tendency and spread, probability calculations (risk ratios), exponential growth modelling, the reproduction number (R₀).

**Science contributes:** Pathogen types and transmission methods, immune system response, factors affecting disease spread, vaccination and herd immunity, public health intervention strategies.

---

## Unit Structure (4-5 Lessons)

### Lesson 1: The Outbreak Simulation

**Setup (before class):** Prepare identical cups of clear liquid for every student. One cup contains a few drops of indicator solution (phenolphthalein or starch/iodine). This is "patient zero."

**Simulation:** Students exchange liquid with 3 different partners over 3 rounds (simulating social interaction). After all exchanges, add the test reagent. "infected" cups change colour.

**The reveal:** Some students are "infected" and some are not. Record who is infected and who they exchanged with.

**Key question:** Can you figure out who was patient zero?

### Lesson 2: Contact Tracing and Data Analysis

Students reconstruct the transmission network:
1. Map all exchanges as a **network graph** (nodes = students, edges = exchanges)
2. Build an **epidemic curve**. a histogram showing the number of new infections per round
3. Calculate the **attack rate** (proportion infected) and **reproduction number** (average infections per infected person per round)

**MYP Maths Criterion B:** Students investigate the pattern of disease spread, identify the exponential growth phase, and calculate R₀ from their data.

**MYP Maths Criterion C:** The epidemic curve, network graph, and statistical calculations require clear mathematical communication.

### Lesson 3: Mathematical Modelling

Using their calculated R₀, students model what would happen with different scenarios:
- What if R₀ = 2 and there are 1000 people? How many rounds until 50% are infected?
- What if 70% of people are vaccinated (and therefore cannot transmit)? How does this change R₀? (Effective R = R₀ × (1 - vaccination rate))
- At what vaccination rate does R drop below 1? (This is the herd immunity threshold)

**The formula:** Herd immunity threshold = 1 - (1/R₀)

If R₀ = 3, then 1 - 1/3 = 67% must be immune to stop transmission.

### Lesson 4: Biological Understanding and Public Health

Connect the mathematics to biology:
- How do different pathogens spread? (Airborne, droplet, contact, vector-borne)
- Why do some diseases have higher R₀ values? (Measles R₀ ≈ 15; seasonal flu R₀ ≈ 1.3)
- How do public health interventions work mathematically? (Quarantine reduces contact rate; vaccination reduces susceptible population; masks reduce transmission probability)

**MYP Science Criterion A:** Students explain pathogen transmission, immune response, and the biological basis for public health measures.

**MYP Science Criterion D:** Students evaluate the social, ethical, and economic implications of different intervention strategies (lockdowns, vaccination mandates, travel restrictions).

### Lesson 5: Policy Recommendation

Each group presents a public health recommendation for a hypothetical outbreak scenario, supported by both mathematical modelling and biological evidence.

---

## Assessment Pairing

**Mathematics:** Criterion B (exponential growth pattern investigation) + Criterion C (epidemic curve and statistical communication) + Criterion D (model application and evaluation)

**Science:** Criterion A (pathogen biology and immunity) + Criterion D (public health implications and ethical evaluation)

---

## EAL Scaffolds

- The physical simulation is fully participatory regardless of language level
- Network graphs are visual. students can draw connections before writing analysis
- Provide a data recording template with pre-labelled columns
- Sentence frames: "The R₀ of our simulated outbreak was ___, which means each infected person spread the disease to approximately ___ others."
- Key vocabulary with visual support: pathogen, transmission, epidemic curve, reproduction number, herd immunity, quarantine
