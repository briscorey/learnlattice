---
title: "Grade 7 Electromagnetism and Circuits Unit"
date: 2026-02-28
description: "Grade 7 physical science unit on electromagnetism, electric transfer, and circuit design through inquiry challenges."
subjects:
  - "Science"
year_levels:
  - "Grade 7"
  - "MYP Year 2"
resource_types:
  - "Unit Plan"
tags:
  - "Grade 7"
  - "Electricity"
  - "Electromagnetism"
  - "Criterion B"
  - "Criterion C"
formula: "current + magnetic field -> effect"
download_url: ""
download_label: "Unit Plan PDF"
---

## The Hook

In August 2003, a software bug in Ohio caused a high-voltage power line to sag into overgrown trees. The line tripped. A cascade of failures followed over 90 minutes — each tripped line dumping its load onto neighbouring lines, overloading them in turn. By 4:11pm, 55 million people across Ontario and eight US states had lost power. Hospitals ran on generators. Traffic lights went dark. Millions were stranded on subways. The blackout lasted up to 4 days in some areas and cost an estimated $6 billion.

The entire disaster traced back to one circuit failure — and a failure to understand how loads and paths interact in a network.

This unit builds students from "electricity is mysterious" to "I can design, build, troubleshoot, and explain a working circuit" — with the conceptual understanding to go with it.

---

## MYP Curriculum Focus

- **MYP Big idea:** Electromagnetism can be used to create useful devices.
- MYP content links: static and current electricity, simple circuits, series and parallel circuits, electromagnets, motors, and technological applications.

---

## Inquiry Questions

**Factual:** What is the difference between voltage, current, and resistance, and how are they related?

**Conceptual:** Why does a parallel circuit behave differently from a series circuit when one component fails?

**Debatable:** How should engineers balance the efficiency, cost, and reliability of an electrical system when lives depend on it?

---

## Core Concepts: Step by Step

### 1. Static Electricity

Electrons can be transferred from one object to another by rubbing. This creates a charge imbalance.

- Objects with the **same** charge repel each other.
- Objects with **opposite** charges attract each other.
- A charged object can attract neutral objects by *induction* — causing the nearest charges in the neutral object to shift toward or away from it.

> **Real-world example:** Lightning. Ice crystals and water droplets collide in a storm cloud, transferring electrons. The bottom of the cloud becomes negatively charged. This repels electrons in the ground below, making the ground surface positively charged. When the charge difference becomes large enough, electrons jump between cloud and ground — a lightning bolt.

### 2. Current Electricity: Voltage, Current, Resistance

These three quantities describe how electric circuits work:

| Quantity | Symbol | Unit | What it means |
|---------|--------|------|--------------|
| Voltage | V | Volts (V) | The "push" driving charge around the circuit — like water pressure |
| Current | I | Amperes / amps (A) | The rate of charge flow — like water flow rate |
| Resistance | R | Ohms (Ω) | Opposition to current flow — like the width of a pipe |

**Ohm's Law** links all three:

$$V = I \times R$$

Or rearranged:
- $I = V ÷ R$ (higher resistance → less current for same voltage)
- $R = V ÷ I$

**Step-by-step worked example:**
A light bulb has a resistance of 10 Ω. It is connected to a 5 V battery.
1. Use $I = V ÷ R$
2. $I = 5 ÷ 10$
3. $I = 0.5$ A

If we add a second identical bulb *in series* (increasing total resistance to 20 Ω):
1. $I = 5 ÷ 20 = 0.25$ A — half the current, so each bulb is dimmer.

### 3. Series vs Parallel Circuits

**Series circuit:** Components connected in a single loop. Current has only one path.
- The same current flows through every component.
- Total resistance = sum of individual resistances.
- If one component fails (e.g. a bulb blows), the entire circuit breaks. **No current flows.**
- Voltage is *shared* across components.

**Parallel circuit:** Components connected across separate branches. Current has multiple paths.
- Voltage is the *same* across every branch.
- Each branch has its own current.
- If one branch fails, current continues flowing through the other branches. **Other components keep working.**
- Total resistance is *less* than the smallest individual resistance.

> **Why your house uses parallel wiring:** If your lights were wired in series, turning off one light would turn off all of them (like old-style Christmas lights). In parallel, each light is independently connected to the mains voltage. Switching one off doesn't affect the others.

**Step-by-step: Series vs Parallel comparison**

Scenario: Two 6 Ω bulbs, 12 V battery.

*Series:*
- Total R = 6 + 6 = 12 Ω
- I = 12 ÷ 12 = **1 A** through each bulb
- Each bulb gets 6 V (12 V shared equally)

*Parallel:*
- Voltage across each bulb = 12 V (same as battery)
- Current through each bulb = 12 ÷ 6 = **2 A**
- Total current from battery = 2 + 2 = 4 A
- Each bulb is **brighter** in parallel than in series.

### 4. Electromagnetism

A moving electric charge creates a magnetic field. A wire carrying current is surrounded by a circular magnetic field. Coil the wire into a helix and the fields add together, creating a **solenoid** — an electromagnet.

**Factors that affect electromagnet strength:**
1. **Number of coil turns** — more turns = stronger field
2. **Current through the wire** — more current = stronger field
3. **Core material** — iron core concentrates and amplifies the field (soft iron, not steel — steel stays permanently magnetised)

**Step-by-step: Build an electromagnet**
1. Wind 20 turns of insulated wire around an iron nail.
2. Connect to a 1.5 V battery.
3. Test: how many paper clips can it lift?
4. Increase to 30 turns. Test again.
5. Increase to 40 turns. Test again.
6. Graph: turns vs paper clips lifted.

Prediction: the relationship should be approximately linear. If it plateaus, students investigate why (the iron core saturates — it can't be magnetised further).

### 5. The Motor Effect

When a current-carrying wire is placed inside a magnetic field, it experiences a **force**. This is the motor effect.

Direction of force depends on:
- Direction of current in the wire
- Direction of the magnetic field

A simple DC motor works by:
1. A coil of wire sits between two magnets.
2. Current flows through the coil, creating force on each side of the coil in opposite directions.
3. This creates a turning force (torque), spinning the coil.
4. A commutator reverses current direction every half turn, keeping the rotation going in one direction.

> **Real-world scale:** The motor in a Tesla Model S produces ~386 kW of power from a design that traces directly back to these same principles. Every electric vehicle, washing machine, and hard drive uses a variant of the motor effect.

---

## Learning Flow (4–5 Weeks)

**Week 1 — Static Electricity and Charge**
- Balloon and hair demonstration: charge transfer, attraction/repulsion.
- Van de Graaff generator (if available): static discharge, hair standing on end.
- Electroscope investigation: students build a simple foil electroscope and test which materials transfer charge.
- Lightning case study: connect static discharge to real-world scale.

**Week 2 — Circuits: Building and Troubleshooting**
- Introduce circuit symbols and schematic diagrams.
- Students build a simple series circuit (battery, switch, bulb) using circuit boards or bare components.
- Fault-finding challenge: teacher provides 5 circuits with a hidden fault. Students must identify and explain each fault before fixing it.
- Introduce Ohm's Law with worked examples. Students calculate current for various V and R combinations.

**Week 3 — Series vs Parallel**
- Students build a series circuit with 2 bulbs, then remove one bulb. Observe and explain.
- Students build a parallel circuit with 2 bulbs, then remove one bulb from one branch. Observe and explain.
- Ammeter and voltmeter readings: measure and compare current and voltage at different points in series and parallel circuits.
- The 2003 blackout case: students apply their series/parallel understanding to explain why a single fault cascaded.

**Week 4 — Electromagnetism and Motors**
- Electromagnet build and investigation (see step-by-step above).
- Introduce the motor effect with a live demonstration (current-carrying wire in a magnetic field deflects).
- Students build a simple motor using a battery, magnet, safety pins, and an enamel-coated wire coil.
- Design challenge: modify the motor to make it spin faster. Students must justify design choices with physics reasoning.

**Week 5 — Summative Assessment**
- Students receive a novel circuit problem (a design brief: a lighthouse needs a backup lighting system that keeps at least some lights on even if one circuit fails). They produce a circuit design with schematic, calculations, and written justification.

---

## Assessment Alignment

| Task | MYP Criterion | Focus |
|------|--------------|-------|
| Circuit fault-finding | Criterion B | Designing investigations |
| Series/parallel data collection | Criterion C | Processing and evaluating |
| Motor design challenge | Criterion C + D | Evaluation and real-world application |
| Lighthouse summative | Criterion B + C + D | Full inquiry cycle |

---

## Common Misconceptions

| What students often think | What's accurate |
|--------------------------|----------------|
| Electricity is "used up" as it flows through a circuit | Current is the same throughout a series circuit. Voltage drops, not current |
| Batteries produce electrons | Batteries use chemical energy to push existing electrons already in the wire |
| A thicker wire has more resistance | Thicker wires have *less* resistance — more space for electrons to flow |
| Parallel circuits use more battery power | Each branch draws its own current; total current drawn is higher, so battery drains faster |

---

> **Teaching Tip:** The fault-finding challenge is the most valuable activity in this unit. Students who can explain *why* a circuit doesn't work — not just fix it by trial and error — are demonstrating genuine causal understanding of current flow. Require a written explanation before they're allowed to test their fix.

