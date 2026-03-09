---
title: "Impossible Shapes"
date: 2026-03-03
description: "Can you draw a triangle where all three angles are 90°? On a football, you can. This investigation uses the geometry of spheres, impossible objects, and non-Euclidean space to reveal that the rules of geometry aren't universal — they depend on where you are."
subjects:
  - "Mathematics"
math_topic: "Geometry"
year_levels:
  - "Grade 7"
  - "Grade 8"
  - "MYP Year 2"
  - "MYP Year 3"
resource_types:
  - "Investigation Pack"
tags:
  - "Geometry"
  - "Angle Properties"
  - "Similarity"
  - "Non-Euclidean Geometry"
  - "Criterion A"
  - "Criterion B"
key_concept: "Form"
global_context: "Scientific and Technical Innovation"
statement_of_inquiry: "The properties of geometric forms depend on the space in which they exist — and questioning assumptions is how mathematics advances."
formula: "angle sum of triangle = 180° (in flat space)"

btc_practices:
  - "Visibly Random Groups"
  - "Vertical Non-Permanent Surfaces"
  - "Thinking Tasks"
download_url: ""
download_label: "Investigation Pack PDF"
teacher_moves:
  - title: "Tear, don't measure"
    description: "Have students tear the corners off a triangle and arrange them. They form a straight line. This is more convincing than any protractor measurement."
  - title: "Build from triangles"
    description: "Every polygon can be divided into triangles. A pentagon = 3 triangles = 540 degrees. Students who discover this have found the general rule."
  - title: "The impossible shape is the extension"
    description: "Can you have a triangle with angles 90-90-90? Draw it on a sphere. Flat geometry rules break on curved surfaces. This is genuinely mind-bending."

hints:
  - "Start by drawing a triangle, a square, and a pentagon. What is the angle sum of each?"
  - "Make a table: number of sides vs. angle sum. Do you see a pattern?"
  - "Each time you add a side, the angle sum increases by 180 degrees. Why?"
  - "Think of it this way: any polygon can be split into triangles. A quadrilateral = 2 triangles = 360 degrees."

difficulty: "meeting"
duration: "2–3 lessons"
warmup: Draw a triangle on your mini whiteboard. Without measuring, estimate the total
  of all three angles. Now tear off the three corners and arrange them. What do they
  make?
listen_for:
- level: 3-4
  phrase: The angles make a straight line
- level: 5-6
  phrase: Triangles always add to 180 degrees, so a quadrilateral is two triangles
    which is 360
- level: 7-8
  phrase: Any polygon with n sides can be split into n minus 2 triangles, so the angle
    sum is (n-2) times 180
self_check:
- level: Getting started
  items:
  - I measured the angles of a triangle and found they add to about 180
  - I drew several different polygons
- level: Building understanding
  items:
  - I made a table of sides vs angle sum
  - I found the pattern — it goes up by 180 each time
- level: Going deeper
  items:
  - 'I wrote a formula: angle sum = (n-2) × 180'
  - I can explain why this formula works using triangle decomposition
- level: Pushing further
  items:
  - I proved the formula works for any polygon by showing every polygon splits into
    n-2 triangles
  - I explored what happens on curved surfaces
misconceptions:
- myth: All triangles add to exactly 180 degrees when you measure
  why: The rule says 180, so measurement should give exactly 180
  truth: Measurement always has error. You will get 178 or 182. The mathematical truth
    is exactly 180, but physical measurement is approximate.
- myth: The angle sum formula only works for regular polygons
  why: It is easier to see with regular shapes
  truth: The formula works for ALL polygons — regular or irregular. You can always
    decompose any polygon into triangles.
- myth: A circle has infinite sides so its angle sum is infinite
  why: If more sides means more degrees, infinity sides should mean infinity degrees
  truth: A circle is not a polygon. As the number of sides increases, each interior
    angle approaches 180 degrees, but the total does increase without bound.
timeline: '0-5 min: Tear corners off a triangle — they form a straight line. | 5-15
  min: Measure angle sums of quadrilateral, pentagon, hexagon. | 15-25 min: Make a
  table, find the pattern. | 25-35 min: Derive the formula, test it on an octagon.
  | 35-45 min: WHY does it work? The triangle decomposition proof. | 45-50 min: Can
  you have a triangle with three 90-degree angles?'
sentence_starters:
  describing:
  - The angle sum of a ___ is...
  - Each time I add a side, the angle sum...
  explaining:
  - The formula is (n-2) × 180 because...
  - I can split any polygon into triangles by...
  justifying:
  - This formula must work for all polygons because...
  - The reason adding a side adds exactly 180 degrees is...
warm_up:
  title: Angle hunt
  activity: Find 3 angles in the classroom. Estimate each in degrees. Check with a
    protractor. The skill of estimating angles activates before they need to measure
    them.
  time: 5 minutes
---

## The Hook

Draw a triangle on the board. Write inside it: **180°.**

Then say: "Everything you've been taught about triangles assumes you're on flat paper. What if you're not?"

Take a ball — a basketball, a globe, a football. Draw on it with a marker. Start at the equator. Draw a line straight up to the North Pole. Come back down to the equator via a different meridian (90° away). Connect along the equator.

Ask: "How many right angles does this triangle have?"

The answer is three. An equatorial triangle on a sphere has angles summing to 270°, not 180°. This does not mean the students were lied to. It means that 180° is the correct answer — in flat space. In curved space, the rules change.

This is not a trick. This is the genuine frontier of geometry: the question of what space is, and how its shape constrains what's possible within it.

---

<div class="teacher-moves">
  <button class="teacher-moves-toggle" aria-expanded="false">
    <span class="tm-icon">🧭</span>
    <span class="tm-label">Teacher Moves<small>Pacing guide, EAL scaffolds, and classroom cues</small></span>
    <svg class="tm-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
  </button>
  <div class="teacher-moves-body">
    <div class="teacher-moves-content">

<h3>Pacing Guide</h3>

<div class="tm-phase">
  <span class="tm-phase-time">0–2 min</span>
  <div class="tm-phase-body">
    <div class="tm-phase-title">Launch</div>
    <p>Draw a triangle on the board. Write 180° inside it. Then say: "Everything you've been taught about triangles assumes you're on flat paper." Pick up a ball — basketball, globe, anything spherical. Draw on it with a whiteboard marker: equator line up to the pole, back down 90° away, connect along the equator.</p>
  </div>
</div>

<div class="tm-phase">
  <span class="tm-phase-time">2–4 min</span>
  <div class="tm-phase-body">
    <div class="tm-phase-title">The question</div>
    <p>"How many right angles does this triangle have?" Pass the ball around. Let students trace the lines with their fingers. The answer — three — should come from them, not from you. When someone says "three," ask the room: "Is that possible?"</p>
  </div>
</div>

<div class="tm-phase">
  <span class="tm-phase-time">4–6 min</span>
  <div class="tm-phase-body">
    <div class="tm-phase-title">Silent exploration</div>
    <p>Give each group a ball and a marker. Task: "Draw as many different triangles on the sphere as you can. Measure (estimate) the angles. What do you notice about the angle sum?" Two minutes of exploration.</p>
  </div>
</div>

<div class="tm-phase">
  <span class="tm-phase-time">6–10 min</span>
  <div class="tm-phase-body">
    <div class="tm-phase-title">Groups investigate</div>
    <p>Whiteboards: "On flat paper, triangle angles sum to 180°. On a sphere, what do they sum to? Is there a pattern?" Circulate. Some groups will discover that larger triangles have larger angle sums. This is the key insight — curvature affects geometry.</p>
  </div>
</div>

<div class="tm-callout tm-callout--listen">
  <strong>What you're listening for</strong>
  <p>"The bigger the triangle, the more than 180°" — they've found the relationship between area and angle excess. "So 180° only works on flat things?" — bingo. "What about a saddle shape?" — if anyone asks this, they're thinking about negative curvature. Run with it.</p>
</div>

<div class="tm-callout tm-callout--eal">
  <strong>EAL scaffold</strong>
  <p>This is one of the most accessible investigations for EAL students because the discovery is entirely physical. Drawing on a ball requires no English. The numbers (angles) are universal. If a student needs the word "triangle," point at the shape on the ball and hold up three fingers. The concept "flat vs curved" can be shown by pressing a piece of paper flat, then curving it.</p>
</div>

<div class="tm-callout tm-callout--say">
  <strong>Say this</strong>
  <p>"What happens to the angles as the triangle gets bigger?" · "Were you lied to about 180°?" · "Where in the real world are we on a curved surface?"</p>
</div>

    </div>
  </div>
</div>


## Core Concepts

### Euclidean Geometry: The Flat Plane

**Euclid's five postulates** (stated in student-accessible language):
1. You can draw a straight line between any two points.
2. You can extend any line segment indefinitely.
3. You can draw a circle with any centre and any radius.
4. All right angles are equal.
5. *(The parallel postulate)* Through a point not on a line, there is exactly **one** line parallel to the original.

The fifth postulate is the critical one. For 2,000 years, mathematicians tried to prove it from the first four — and couldn't. In the 19th century, they realised why: it's possible to build consistent geometries where the fifth postulate is *false*. Those are the non-Euclidean geometries.

### The Angle Sum of a Triangle

In Euclidean (flat) geometry, the angles of every triangle sum to exactly 180°.

**Proof via parallel lines:**
Draw triangle ABC. Draw line DE parallel to AC through B.
- Angle DBA = Angle BAC (alternate interior angles)
- Angle EBC = Angle BCA (alternate interior angles)
- Angles DBA + ABC + EBC = 180° (angles on a straight line)
- Therefore: Angle BAC + ABC + BCA = 180° ✓

### Properties in Flat Geometry (Core Reference)

**Triangles:**
| Triangle Type | Angle Properties | Side Properties |
|--------------|-----------------|----------------|
| Equilateral | Three 60° angles | Three equal sides |
| Isosceles | Two equal angles (base angles) | Two equal sides |
| Right-angled | One 90° angle | Hypotenuse is longest side |
| Scalene | All angles different | All sides different |

**Quadrilaterals:**
| Shape | Angle Sum | Special Properties |
|-------|-----------|-------------------|
| Any quadrilateral | 360° | — |
| Rectangle | Four 90° angles | Diagonals equal |
| Parallelogram | Opposite angles equal | Diagonals bisect each other |
| Trapezoid | Co-interior angles sum to 180° | One pair of parallel sides |

### Similar Triangles

Two triangles are **similar** if their angles are equal (same shape, different size). Similar triangles have **proportional** corresponding sides.

**The AA Similarity Rule:** If two angles of one triangle equal two angles of another, the triangles are similar.

**Worked example:**
Triangle PQR has angles 50°, 70°, 60°. Triangle STU has angles 50°, 70°, 60°. They are similar.
If PQ = 6 cm and the corresponding side ST = 9 cm, what is the scale factor?
Scale factor = 9/6 = 1.5. All sides of triangle STU are 1.5 times the corresponding sides of PQR.

> **Formative checkpoint:** "Two triangles have angles 40° and 70°. Without knowing the third angle, can you determine if they're similar? Explain." — Answer: yes, because the third angle must be 70° in both cases (180° − 40° − 70°).

---

## Investigation Tasks

### Part A — Triangle Angle Sum Investigations

**A1 — The paper tearing proof:**
Draw any triangle. Tear off all three corners. Arrange the three torn corners with their vertices touching. What do you notice? Does it work for every triangle you try? What does this prove?

**A2 — Building the proof:**
Using the diagram below (a triangle with a parallel line through the top vertex), write a formal geometric argument for why the angles sum to 180°. Label every step and the rule you used at each step.

**A3 — Polygon extension:**
If a triangle's angles sum to 180°, what do the angles of a quadrilateral sum to? A pentagon? A hexagon? Find the pattern. Write the rule for an n-sided polygon.

*[Rule: $(n-2) \times 180°$. Students should derive this by seeing that any polygon can be divided into (n-2) triangles.]*

### Part B — The Sphere Problem

You need: a large ball (basketball or sphere model) and string or a marker.

1. Draw a "triangle" on the sphere by connecting three points on its surface with the shortest path between each pair. (On a sphere, the shortest path is along a *great circle* — a circle whose centre is the centre of the sphere.)

2. Measure (approximately) each angle of your spherical triangle using a protractor held tangent to the surface.

3. Sum the three angles. What do you get?

4. Explain in writing: why doesn't the flat-geometry rule apply on a sphere? What assumption of Euclid's fails on a curved surface?

### Part C — Similarity and Scale

A building casts a shadow 24 m long at the same time that a metre stick casts a shadow 1.5 m long. The sun's rays create similar triangles.

1. Draw a diagram showing the two similar triangles.
2. Identify the corresponding sides and set up a proportion.
3. Calculate the height of the building.
4. Why do the sun's rays create similar (not just proportional) triangles? What is the angle that is equal in both triangles?

**Extension:** How would you measure the height of an object that casts no shadow — say, a flagpole on a completely overcast day — using only a tape measure, a mirror, and the principle of similar triangles?

### Part D — The Impossible Objects Task

**Part D1:** The Penrose triangle (impossible triangle) appears to show a triangular object where each corner is a proper 90° angle, but the object curves back on itself impossibly. Explain *geometrically* why the Penrose triangle cannot exist in 3D Euclidean space.

**Part D2:** Artists like M.C. Escher built entire worlds with impossible geometry. Choose one Escher work from the provided images and write 150 words identifying: which Euclidean rules are being violated, and what type of space *would* make the image geometrically consistent.

---

## Common Misconceptions

| What students often believe | What's accurate |
|-----------------------------|----------------|
| "All triangles have angles summing to 180°" | Only in flat (Euclidean) space. On a sphere, the sum is greater than 180°. On a hyperbolic surface (like a saddle), the sum is less than 180°. |
| "Similar means the same shape, but there's only one way to be similar" | Any pair of shapes with the same angles are similar — including at very different scales and orientations |
| "Geometry is just measuring shapes" | Geometry is the study of *space itself* — what assumptions we make about it, and what properties follow from those assumptions |
| "Parallel lines never meet" | In Euclidean geometry, yes. On a sphere, all great circles (the equivalent of straight lines) eventually meet. Longitude lines are parallel at the equator but meet at the poles. |
| "The rules of geometry are obvious and don't need proving" | Euclid's fifth postulate — that through a point there is exactly one parallel — is *not* obvious. Mathematicians spent 2,000 years trying to prove it, and failed. That failure produced non-Euclidean geometry. |

---

## Teaching Notes

**On the sphere demonstration:** This needs a physical sphere. Footballs work well. A globe is even better — the latitude and longitude lines make it easy to trace great circles. The physical manipulation is essential; a diagram of a spherical triangle doesn't carry the same cognitive weight as one you've drawn yourself on a ball.

**On Part B:** Students often measure angles greater than 90° because they're physically fitting a protractor to a curved surface awkwardly. Have them measure as best they can and acknowledge that their measurement has error — this is a good place to discuss the difference between *theoretical* and *measured* geometry.

**On the Escher task:** Some students will want to simply describe what they see. Push for geometric precision: "Which Euclidean rule specifically is being broken?" This requires them to know the rules well enough to identify violations — which is a deeper understanding than being able to apply them.

**On the bigger story:** The historical narrative is genuinely exciting and worth sharing: mathematicians tried for 2,000 years to prove Euclid's parallel postulate, failed, and discovered entirely new geometries in the process. Einstein's general relativity describes gravity as a curvature of space-time — meaning the universe itself may be non-Euclidean. The geometry students learn in school is not *the* geometry. It's the geometry of flat surfaces, which is a special case.

---

## Teacher Moves

### Launch (Minutes 0–3)

Draw a triangle on the board. Write three angles inside: 60°, 70°, 80°. Ask: **"Can this triangle exist?"** (It can't — angles sum to 210°.) Let students figure out why.

Then draw another triangle: 60°, 60°, 60°. **"What about this one?"** (Yes — equilateral.)

Then: **"Can you draw a triangle where all angles are 90°?"** Say nothing more.

**EAL move:** Draw the shapes large and clear. Use a protractor visibly. Point at each angle and write the degree. The mathematics is entirely visual.

### During the Investigation (Minutes 3–25)

**Watch for:** Students who immediately say "impossible" to the 90-90-90 triangle. Hand them a ball (a globe or sports ball). Say: "Try it on this." Drawing on a sphere changes everything — and that's the point.

**Watch for:** Students who add angles incorrectly. This is not the time for correction — the investigation will self-correct when their shapes fail to close. Let the failure teach.

**Do not say:** "Angles in a triangle sum to 180°." Let students discover this through the investigation, and let the spherical geometry challenge break it open again.

**Key moment:** When a student draws a valid triangle on a sphere where every angle is 90°. Stop the class. Hold up the ball. Ask: "Is this a triangle?" The answer is yes — it has three straight sides and three angles. But the rule they just "discovered" doesn't apply here. This is the moment that Euclidean assumptions become visible.

### Pulling It Together (Minutes 25–35)

Create two columns on the board: "Flat Surface Rules" and "Curved Surface Rules." Have students fill in what they've discovered. The punchline: the angle sum depends on the surface, not on the shape.

**EAL move:** Use the flat desk and the ball as physical anchors. Point at each surface when discussing the rules. Students can demonstrate rather than explain.

### What You Are Listening For

- "Wait, that works on the ball but not on paper" — the Euclidean assumption is becoming visible
- Students arguing about whether a "curved line" counts as "straight" — this is a deep question about geodesics
- "So the rules change?" — yes, and knowing when rules change is more important than memorising rules

---

## Assessment Alignment

| Task | MYP Criterion | Descriptor |
|------|--------------|-----------|
| Part A — proofs and polygon rule | Criterion A | Knowing and understanding: applying geometric reasoning and properties |
| Part B — sphere investigation | Criterion B | Investigating patterns: testing geometric rules in non-standard contexts |
| Part C — similarity calculation | Criterion A | Knowing and understanding: applying similar triangles to real-world measurement |
| Part D — impossible objects | Criterion B | Investigating patterns: identifying which geometric rules are and aren't violated |

---

> **The bigger idea:** Geometry is a mirror held up to assumptions. Every theorem follows from definitions and postulates — and those postulates are choices, not given truths. The moment students understand this, mathematics stops being a set of rules to memorise and becomes something more interesting: a system of consequences that follow, rigorously, from premises. Change the premises, change the geometry. That this is possible — that coherent, consistent geometry can exist where parallel lines meet — is one of the most remarkable intellectual achievements of the nineteenth century.
