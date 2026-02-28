# LearnLattice Visual Asset Prompts

Use these prompts to generate replacement raster artwork and short looped clips for the homepage and subject pages. The current site already supports swapping in image and video files via `hugo.toml`.

## Style Direction

- Audience: middle school teachers and students
- Tone: curious, cinematic, optimistic, high-clarity, not childish
- Composition: editorial education poster meets science magazine cover
- Avoid: generic stock-photo smiles, corporate office scenes, cluttered text baked into images
- Aspect ratios:
  - Homepage hero media: `4:3`
  - Subject card/subject hero artwork: `4:3`
  - Optional looping clips: `4:3`, 5 to 8 seconds, muted, seamless

## Homepage Hero Reel

### Still image prompt

Create a cinematic educational collage for a middle school inquiry-learning platform homepage. Blend six topic worlds into one coherent scene: algebra graphs and glowing equations, a microscope cell cross-section, an ecology field landscape with food-web arrows, a solar system orbit diagram, tectonic fault lines with seismic wave traces, and chemistry lab glassware with colorful reactions. Use rich teal, sky blue, amber, and rose accents over a bright atmospheric background. The result should feel premium, modern, inviting, and designed for both teachers and students. No visible text labels in the image.

### Video prompt

Create a 6-second seamless loop for an educational homepage hero. Slow camera drift across a collage of inquiry-learning scenes: graph lines animating, a glowing cell pulsing under microscope light, subtle ecosystem arrows and leaves moving, planets orbiting with faint trails, seismic lines rippling, and chemistry flasks bubbling softly. Bright editorial lighting, clean modern composition, no text, no humans, no abrupt cuts, muted motion suitable for autoplay background use.

## Mathematics

### Still image prompt

Create a striking mathematics education illustration for a middle school homepage card. Show a modern inquiry-driven scene built from graph lines, coordinate grids, geometric overlays, and a glowing linear model moving across the composition. Emphasize pattern, motion, and modelling rather than calculators or textbooks. Editorial, cinematic, premium, teal-led palette, bright and accessible.

### Video prompt

Create a seamless 5-second loop showing animated graph lines, points connecting into a linear pattern, geometric shapes rotating slightly, and a glowing equation emerging in a modern educational visual style. Clean, premium, teal palette, no text.

## Biology

### Still image prompt

Create a cinematic biology illustration for middle school inquiry learning. Feature a luminous cell interior, membrane transport, organelles, and a subtle DNA form integrated into the composition. Emphasize systems thinking, microscopy, and living processes. Use bright sky blue and cool light with high clarity and depth. No text.

### Video prompt

Create a seamless 5-second loop showing a stylized cell pulsing gently, particles moving across a membrane, and subtle DNA motion in the background. Premium science-magazine aesthetic, bright and inviting, no text.

## Ecology

### Still image prompt

Create a dynamic ecology illustration for a middle school educational homepage. Show an ecosystem landscape with layered habitats, food-web links, biodiversity cues, and fieldwork energy. Include subtle arrows or visual connections between organisms and environments. Rich green-teal palette, optimistic daylight atmosphere, premium editorial quality, no text.

### Video prompt

Create a seamless 6-second loop of an ecology landscape with subtle wind through plants, food-web connection lines gently animating, and small ecosystem motion cues. Bright, cinematic, premium, no text.

## Space Science

### Still image prompt

Create a cinematic space science illustration for a middle school inquiry-learning site. Show orbit lines, planets, phases, gravity arcs, and deep-space glow in a visually clear, elegant composition. Focus on wonder and model-based reasoning rather than sci-fi battle imagery. Amber, violet, and indigo palette, premium educational editorial look, no text.

### Video prompt

Create a seamless 6-second loop of slow-moving orbit paths, drifting planets, and subtle star-field motion with a bright sun glow. Designed for an educational homepage, no text, premium and clear rather than chaotic.

## Earth Science

### Still image prompt

Create a bold earth science illustration for a middle school learning platform. Show tectonic plates, fault movement, mountains, seismic wave traces, and volcanic heat in one coherent cutaway-style composition. Amber and earth-toned palette, cinematic depth, strong educational clarity, no text.

### Video prompt

Create a seamless 5-second loop with subtle tectonic motion, seismograph pulses, and heat shimmer around a volcanic zone. Premium educational visualization, no text.

## Chemistry

### Still image prompt

Create a high-end chemistry illustration for a middle school homepage card. Show elegant glassware, particle interactions, color-changing reactions, and a clean lab atmosphere. Emphasize visible change, practical investigation, and particle reasoning. Rose and warm laboratory tones, modern editorial style, no text.

### Video prompt

Create a seamless 5-second loop of chemistry glassware with gentle bubbling, particle motion overlays, and subtle color transitions. Clear educational aesthetic, premium and bright, no text.

## Asset Mapping

After generating files, place them in:

- `static/img/topics/` for still images
- `static/video/topics/` for looped clips

Then update:

- `params.home.hero_panel_video`
- `params.home.hero_panel_poster`
- each `params.featured_subjects[].video`
- each `params.featured_subjects[].poster`
- optionally each `params.featured_subjects[].image`
