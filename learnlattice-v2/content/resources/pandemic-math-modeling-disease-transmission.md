---
title: "Pandemic Math: Modeling Disease Transmission"
date: 2026-02-09
description: "Students use real WHO epidemiological data to explore how diseases spread exponentially, build SIR models in spreadsheets, and evaluate how mathematical models informed public health decisions — discovering that exponential growth is the most dangerous pattern humans consistently fail to understand."
subjects:
  - "Mathematics"
  - "Science"
math_topic: functions
year_levels:
  - "Grade 8"
  - "Grade 9"
resource_types:
  - "Investigation Pack"
tags:
  - "Criterion B"
  - "Criterion D"
  - "Exponential Growth"
  - "Functions"
  - "Cross-Disciplinary"
  - "Data Analysis"
  - "Modelling"
  - "Public Health"
  - "Statistics"
key-concepts:
  - "Change"
related_concepts:
  - "Models"
  - "Patterns"
  - "Consequences"
  - "Systems"
global-contexts:
  - "Globalization and Sustainability"
statement_of_inquiry: "Mathematical models of change reveal patterns that intuition cannot detect, empowering communities to act before it is too late."
difficulty: "extended"
flagship: true
download_url: ""
download_label: "Investigation Pack"
duration: "2–3 lessons"
hook: "If one person infects two others, and each of them infects two more, how many people are infected after 30 rounds? Most people guess around 100. The real answer is over one billion."
warmup: "The Rice and Chessboard Problem — place 1 grain on square 1, 2 grains on square 2, 4 grains on square 3. How many grains on square 64? Students calculate in pairs. When they discover the answer exceeds the world's annual rice production, they've felt exponential growth in their gut. Now ask: What else grows this way?"
timeline: "0-5 min: Rice and chessboard — feel exponential growth | 5-15 min: Build a simple doubling model — if R₀=2, how many infected after 10 rounds? | 15-30 min: Introduce the SIR model in a spreadsheet — students adjust R₀ and recovery rate, observe how curves change | 30-40 min: Compare model predictions to real WHO data from a past outbreak | 40-50 min: Reflection — when should governments act, and how does math help them decide?"
teacher_moves:
  - title: "Start with the gut punch, not the formula"
    description: "Students must FEEL exponential growth before they see the equation. The rice problem does this. The 30-round infection chain does this. Do NOT begin with y = 2ˣ. Begin with the shock that human intuition is linear but disease spread is exponential."
  - title: "Let the spreadsheet be the teacher"
    description: "Students don't need to derive the SIR equations. They need to build them in a spreadsheet and watch what happens when they change R₀ from 2 to 3 to 15. The visual — the curve steepening, the peak moving, the 'flatten the curve' moment — teaches more than any lecture."
  - title: "Use the model-vs-reality gap"
    description: "When students compare their model predictions to actual WHO data, the model will be wrong. This is the most important moment. Ask: Why is the model wrong? What did we leave out? (Behaviour change, vaccination, population density, reporting delays.) The imperfection of models is not a weakness — it's the lesson."
listen_for:
  - level: "Approaching"
    phrase: "The number keeps getting bigger really fast."
  - level: "Meeting"
    phrase: "With R₀ of 2, the number of new infections doubles each generation. After n generations there are 2ⁿ total infections — that's exponential growth."
  - level: "Exceeding"
    phrase: "The SIR model shows that reducing R₀ below 1 — through vaccination or social measures — causes the epidemic to decay rather than grow. The threshold R₀ = 1 is the tipping point, and reaching it depends on the proportion of the population that is immune."
misconceptions:
  - myth: "Exponential growth continues forever"
    why: "Students see the doubling pattern and assume it never stops."
    truth: "Exponential growth is always constrained — by population size, resource limits, or behaviour change. The SIR model shows exactly how: as more people recover (and become immune), there are fewer susceptible people to infect, and the growth slows. This is logistic growth, not unbounded exponential."
  - myth: "R₀ is fixed for a disease"
    why: "Students treat R₀ as a permanent property of a virus."
    truth: "R₀ (basic reproduction number) is the average number of people one infected person infects in a fully susceptible population. But Rₑ (effective reproduction number) changes constantly based on behaviour, vaccination, population density, and policy. Masks and distancing reduce Rₑ without changing the virus."
  - myth: "Mathematical models predict the future"
    why: "Students confuse models with crystal balls."
    truth: "Models explore 'what if' scenarios. They show what WOULD happen if conditions remain the same. Their value is in comparing interventions (what if we vaccinate 60% vs 80%?), not in predicting exact numbers."
sentence_starters:
  describing:
    - "After ___ generations with R₀ = ___, the model predicts ___ total infections..."
    - "The SIR model shows that the peak of infections occurs at approximately day ___..."
    - "When R₀ is increased from 2 to 3, the peak number of infections changes from ___ to ___..."
  explaining:
    - "Exponential growth occurs in disease transmission because each infected person creates multiple new cases, leading to..."
    - "The curve flattens when ___ because the effective reproduction number drops below 1, meaning..."
    - "The model diverges from real data because it assumes ___ but in reality..."
  justifying:
    - "Based on the model, the optimal time to implement public health measures is ___ because waiting until ___ results in..."
    - "Vaccination is mathematically effective because reducing the susceptible population by ___% reduces the peak by ___%, which means..."
    - "The SIR model, despite its limitations, is valuable for policy decisions because it shows that small changes in R₀ produce..."
self_check:
  - level: "3-4"
    items:
      - "I can explain what R₀ means in simple terms"
      - "I calculated doubling patterns for at least 10 generations"
      - "I created a graph showing exponential growth"
  - level: "5-6"
    items:
      - "I built a working SIR model in a spreadsheet"
      - "I can explain why exponential growth doesn't continue forever"
      - "I compared my model to real data and identified differences"
      - "I used correct mathematical vocabulary (exponential, R₀, susceptible, recovery rate)"
  - level: "7-8"
    items:
      - "I explored how changing parameters (R₀, recovery rate, vaccination rate) affects the epidemic curve"
      - "I explained the mathematical conditions for an epidemic to grow vs. decay (Rₑ > 1 vs. Rₑ < 1)"
      - "I evaluated the strengths and limitations of mathematical modelling for public health"
      - "I connected the mathematics to real policy decisions with specific evidence"
      - "I discussed ethical dimensions of using models to restrict individual freedom for collective benefit"
exit_ticket:
  - "In one sentence: why does your brain fail to understand exponential growth?"
  - "What is the single most important number in disease modelling, and why?"
  - "Name one thing mathematical models CAN do and one thing they CANNOT do."
differentiated:
  approaching: "Use the provided spreadsheet template with R₀ = 2. Fill in the doubling pattern for 20 generations. Create a line graph. Write 3 sentences explaining what you see."
  meeting: "Build an SIR model from the provided equations. Experiment with R₀ values of 1.5, 2, 3, and 5. Compare the four epidemic curves. Write a Criterion D response evaluating when intervention should begin."
  exceeding: "Research the actual R₀ values for measles (~15), influenza (~1.5), and COVID-19 (~2.5). Model all three using SIR. Explore herd immunity thresholds mathematically (1 - 1/R₀). Write a policy brief recommending vaccination targets with mathematical justification."
journal_prompts:
  - "Before today, I thought diseases spread ___ (linearly/exponentially/randomly). Now I understand..."
  - "The moment in this investigation that surprised me most was..."
  - "If I were advising a government during an outbreak, the first thing I would tell them based on the mathematics is..."
parent_summary: "Students explored how diseases spread using mathematical models. They discovered that disease transmission follows exponential growth — each infected person infects multiple others, creating a rapidly accelerating pattern that human intuition consistently underestimates. Using spreadsheets, they built simplified epidemic models, adjusted parameters to see how interventions change outcomes, and compared their models to real-world data. This investigation connects mathematics (exponential functions, modelling, data analysis) to science (disease transmission, public health) and social studies (policy decisions, ethics of intervention)."
quick_check:
  - type: "recall"
    q: "What does R₀ = 3 mean?"
    a: "On average, one infected person passes the disease to 3 others (in a fully susceptible population)."
  - type: "application"
    q: "If R₀ = 4, what percentage of the population needs to be immune to achieve herd immunity? (Use the formula: 1 - 1/R₀)"
    a: "1 - 1/4 = 0.75 = 75% of the population needs to be immune."
  - type: "extension"
    q: "Why might a government choose to act when cases are still very low, even though it looks like overreaction?"
    a: "Because exponential growth means that by the time cases look large, the doubling has already happened many times. Acting at 100 cases vs 1000 cases might seem like a small difference, but with R₀ = 2, waiting 3 more generations means 8x more infections. Early action exploits the mathematics — small interventions early produce large effects later."
btc_practices:
  - "Visibly Random Groups"
  - "Vertical Non-Permanent Surfaces"
  - "Thinking Tasks"
seo_title: "Pandemic Math: Modeling Disease Transmission | MYP Criter..."
seo_description: "Free MYP Mathematics investigation pack targeting Criterion B, Criterion D for Grade 8-9. Students use real WHO epidemiological data to explore how di"
---

## The Hook

Take a piece of paper. Fold it in half. Fold it again. And again.

**If you could fold it 42 times, how thick would it be?**

The answer: it would reach the Moon.

This is exponential growth. And it is exactly how diseases spread.

---

## Part A: Feel the Exponential (Criterion B)

### The Infection Simulation

Imagine a disease where each infected person infects exactly 2 others per day (R₀ = 2).

**Day 0:** 1 person is infected.

Complete this table:

| Day | New infections | Total infected | Calculation |
|-----|---------------|----------------|-------------|
| 0 | 1 | 1 | Start |
| 1 | 2 | 3 | 1 × 2 |
| 2 | 4 | 7 | 2 × 2 |
| 3 | | | |
| 4 | | | |
| 5 | | | |
| ... | | | |
| 10 | | | |
| 20 | | | |
| 30 | | | |

### The Gut Check

Before calculating Day 30, write your estimate: ___________

Now calculate: 2³⁰ = **1,073,741,824** (over one billion)

**How far off was your estimate?** Most humans guess somewhere between 100 and 10,000. Our brains think in straight lines. Diseases grow in curves.

### Graph It

Plot your table on a graph. Use "Day" on the x-axis and "Total infected" on the y-axis.

What shape do you see? Why does it look flat at the start and then suddenly explode?

*(This is why pandemics feel like they come out of nowhere — the early stages look like nothing is happening.)*

---

## Part B: The SIR Model — Build It Yourself (Criterion B)

### What Is SIR?

Every person in a population is in one of three states:

- **S**usceptible — can catch the disease
- **I**nfected — currently sick and spreading the disease
- **R**ecovered — immune (can't catch or spread it)

The model tracks how people move between these states:

**S → I → R**

### Build It in a Spreadsheet

Open a new spreadsheet. Set up these columns:

| Day | Susceptible (S) | Infected (I) | Recovered (R) | New Infections | New Recoveries |

**Starting values** (for a population of 10,000):
- S₀ = 9,999
- I₀ = 1
- R₀ = 0

**Parameters:**
- **Transmission rate (β):** 0.0003 (probability of infection per contact per day)
- **Recovery rate (γ):** 0.1 (10% of infected people recover each day — meaning average illness lasts 10 days)

**Formulas for each day:**
- New Infections = β × S × I
- New Recoveries = γ × I
- S(next) = S - New Infections
- I(next) = I + New Infections - New Recoveries
- R(next) = R + New Recoveries

**Enter these formulas and drag down for 200 days.** Then create a line chart showing S, I, and R over time.

### Experiment

Now change the parameters and observe what happens:

| Experiment | Change | What happens to the curve? |
|-----------|--------|---------------------------|
| 1 | Increase β to 0.0005 (more infectious) | |
| 2 | Decrease β to 0.0001 (less infectious) | |
| 3 | Increase γ to 0.2 (faster recovery) | |
| 4 | Start with S₀ = 5,000 (half already immune — vaccination) | |
| 5 | Reduce β by 50% after day 30 (intervention) | |

For each experiment, describe: How does the **peak** change? How does the **timing** of the peak change? How does the **total number infected** change?

---

## Part C: Model vs. Reality (Criterion C + D)

### Compare to Real Data

Your teacher will provide data from a real epidemic. Plot the real data alongside your model prediction.

**They won't match perfectly.** This is the most important moment in the investigation.

### Why Is the Model Wrong?

List every reason your model might differ from reality:

Think about:
- Do people behave the same way throughout an epidemic?
- Does everyone have equal contact rates?
- What about geography — do diseases spread evenly?
- How reliable is the reported data?
- What did your model assume that isn't true in real life?

### The Value of Being Wrong

If models are always wrong, why do governments use them?

Write a response to:

> **"Mathematical models of disease spread are imperfect, but they are essential for public health decision-making. Evaluate this statement using evidence from your investigation."**

Your response must:
- Explain what the SIR model does well (and show evidence from your experiments)
- Explain what it misses (and give specific examples)
- Discuss how the model helps decision-makers even though it's imperfect
- Consider the ethical implications: models inform decisions that restrict individual freedom (lockdowns, mandatory vaccination) — is imperfect math good enough for that?

---

## Extension: Herd Immunity — The Mathematics of Protection

The herd immunity threshold is the proportion of the population that must be immune to stop an epidemic from growing.

**Formula:** Herd Immunity Threshold = 1 - 1/R₀

| Disease | R₀ | Herd immunity threshold |
|---------|-----|------------------------|
| Measles | ~15 | 1 - 1/15 = 93% |
| Influenza | ~1.5 | 1 - 1/1.5 = 33% |
| COVID-19 (original) | ~2.5 | 1 - 1/2.5 = 60% |

**Verify this in your spreadsheet:** Set S₀ to different percentages and observe when the epidemic fails to grow. Does your spreadsheet confirm the formula?

**The policy question:** If a vaccine is 90% effective, what percentage of the population must be vaccinated to reach herd immunity for each disease? *(Hint: you need to vaccinate more than the threshold, because not every vaccinated person becomes immune.)*

---

## Teaching Notes

### Why This Investigation Matters

Exponential growth is the single most important mathematical concept that humans consistently fail to intuit. Every student who builds an SIR model and watches the curve change shape has permanently upgraded their ability to think about compound interest, population growth, viral marketing, climate feedback loops, and — yes — pandemics. This isn't a niche investigation. It's the mathematical concept most likely to affect their lives.

### Spreadsheet Guidance

**Google Sheets or Excel both work.** The key is that students build the model from formulas, not use a pre-built simulation. The act of typing `=B2 - E2` and dragging down IS the learning. Pre-built simulations remove exactly the part that creates understanding.

Provide a template with headers and starting values, but leave the formulas blank. Students who get stuck should look at the formulas written on the board and translate them to spreadsheet notation — this is Criterion C (communicating mathematics in different forms).

### Cross-Disciplinary Connections

**Science (Criterion A):** Students explain how pathogens spread, how the immune system responds, and how vaccines create immunity — the biological mechanism behind the mathematical model.

**Science (Criterion D):** Students evaluate the social, ethical, and political implications of using mathematical models to inform public health policy — including tensions between individual freedom and collective protection.

### Sensitivity Note

Some students may have been directly affected by pandemic-related loss. Frame the investigation around the mathematics of epidemiology rather than specific pandemic narratives. Focus on "how do mathematical models help us prepare?" rather than "what happened during COVID." The investigation works equally well with historical data (1918 influenza, 2014 Ebola) if the class context requires it.

### Adaptation for EAL Learners

- Provide the spreadsheet template with all labels pre-filled
- Create a visual glossary card: S = healthy people who CAN get sick, I = sick people NOW, R = people who GOT BETTER
- Use colour coding consistently: S = blue, I = red, R = green (matching the graph)
- Allow students to describe their findings using annotated screenshots of their spreadsheet rather than continuous prose

### Equipment Needed

- Computer with spreadsheet software (one per student or pair)
- Calculator
- Graph paper (for initial hand-drawn exponential curve)
- Optional: WHO data sheet (teacher-provided)
