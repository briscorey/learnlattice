import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.1/build/three.module.js";

const CELL_SIZE = 6;
const HALF_CELL = CELL_SIZE / 2;
const WALL_HEIGHT = 5;
const PLAYER_RADIUS = 1.05;
const PLAYER_HEIGHT = 1.45;
const PLAYER_MAX_LIVES = 5;
const PLAYER_SPEED = 12;
const SPRINT_MULTIPLIER = 1.45;
const EXIT_DISTANCE = 2.2;
const PICKUP_DISTANCE = 1.95;
const ENEMY_HIT_DISTANCE = 2.2;
const ENEMY_HIT_COOLDOWN = 1.4;
const ENEMY_PATROL_SPEED = 4.4;
const ENEMY_CHASE_MULTIPLIER = 1.35;
const ENEMY_RADIUS = 0.95;
const SPEED_BOOST_DURATION = 8;
const SHIELD_BOOST_DURATION = 12;
const PICKUP_SCORE = 45;
const COIN_SCORE = 20;
const KEY_SCORE = 80;
const TRAP_PENALTY = 55;
const TRAP_TRIGGER_DISTANCE = 1.7;
const TRAP_TRIGGER_COOLDOWN = 0.8;
const BOSS_HIT_COOLDOWN = 1.8;
const BOSS_BONUS = 160;
const LEVEL_RESET_DELAY_MS = 1100;

const LEVELS = [
  {
    title: "Prime Path",
    scaffold: "Scaffold 1 of 4",
    targetLabel: "Prime focus",
    objective: "Collect 2, 3, and 5. Leave the composite numbers behind and unlock the portal.",
    support: "Prime numbers have exactly two factors: 1 and the number itself.",
    prompt: "Find the small prime numbers in the maze.",
    showRequiredList: true,
    maze: [
      "#########",
      "#.......#",
      "#.#####.#",
      "#.#...#.#",
      "#.#.#.#.#",
      "#...#...#",
      "###.#.###",
      "#.......#",
      "#########"
    ],
    start: [1, 1],
    exit: [7, 7],
    enemies: [
      { kind: "patrol", start: [7, 1], patrol: [[7, 1], [7, 5], [5, 5], [5, 7], [1, 7]] }
    ],
    pickups: [
      { type: "speed", cell: [1, 3] },
      { type: "shield", cell: [7, 5] }
    ],
    coins: [
      [2, 1],
      [4, 1],
      [6, 5],
      [1, 7]
    ],
    keys: [
      [3, 7]
    ],
    traps: [
      [3, 5]
    ],
    requiredValues: [2, 3, 5],
    tokens: [
      { value: 2, cell: [3, 1] },
      { value: 4, cell: [6, 1] },
      { value: 3, cell: [5, 3] },
      { value: 6, cell: [1, 5] },
      { value: 5, cell: [5, 7] }
    ]
  },
  {
    title: "Composite Corridor",
    scaffold: "Scaffold 2 of 4",
    targetLabel: "Composite focus",
    objective: "Collect 4, 6, 8, and 9. Use factor pairs to avoid the prime decoy.",
    support: "Composite numbers can be split into a smaller factor pair, like 3 x 3 = 9.",
    prompt: "Collect the composite numbers in the maze.",
    showRequiredList: true,
    maze: [
      "###########",
      "#...#.....#",
      "#.#.#.###.#",
      "#.#...#...#",
      "#.###.#.#.#",
      "#.....#.#.#",
      "###.###.#.#",
      "#...#...#.#",
      "#.#.#.###.#",
      "#.....#...#",
      "###########"
    ],
    start: [1, 1],
    exit: [9, 9],
    enemies: [
      { kind: "patrol", start: [1, 3], patrol: [[1, 3], [1, 5], [5, 5], [5, 3]] },
      { kind: "sprinter", start: [9, 1], patrol: [[9, 1], [9, 9], [7, 9]] }
    ],
    pickups: [
      { type: "speed", cell: [5, 3] },
      { type: "shield", cell: [3, 9] }
    ],
    coins: [
      [3, 1],
      [5, 1],
      [1, 5],
      [5, 9],
      [8, 9]
    ],
    keys: [
      [7, 5]
    ],
    traps: [
      [3, 7],
      [7, 9]
    ],
    requiredValues: [4, 6, 8, 9],
    tokens: [
      { value: 4, cell: [2, 1] },
      { value: 6, cell: [7, 1] },
      { value: 8, cell: [3, 5] },
      { value: 7, cell: [8, 3] },
      { value: 9, cell: [9, 7] }
    ]
  },
  {
    title: "Prime Sorter",
    scaffold: "Scaffold 3 of 4",
    targetLabel: "Mixed maze",
    objective: "Collect every prime number in the maze. No target list this time.",
    support: "Try testing divisibility by 2, 3, and 5 before you decide a number is prime.",
    prompt: "Collect every prime number in this mixed maze.",
    showRequiredList: false,
    maze: [
      "###########",
      "#.....#...#",
      "#.###.#.#.#",
      "#.#...#.#.#",
      "#.#.###.#.#",
      "#.#.....#.#",
      "#.#####.#.#",
      "#...#...#.#",
      "###.#.###.#",
      "#.........#",
      "###########"
    ],
    start: [1, 1],
    exit: [9, 9],
    enemies: [
      { kind: "ambusher", start: [1, 5], patrol: [[1, 5], [1, 7], [3, 7], [3, 9]] },
      { kind: "sprinter", start: [9, 1], patrol: [[9, 1], [7, 1], [7, 7], [5, 7], [5, 9]] }
    ],
    pickups: [
      { type: "speed", cell: [3, 3] },
      { type: "shield", cell: [1, 9] }
    ],
    coins: [
      [2, 1],
      [5, 1],
      [7, 3],
      [6, 5],
      [3, 9],
      [8, 9]
    ],
    keys: [
      [9, 7]
    ],
    traps: [
      [3, 7],
      [5, 8]
    ],
    requiredValues: [11, 13, 17, 19],
    tokens: [
      { value: 11, cell: [4, 1] },
      { value: 13, cell: [7, 1] },
      { value: 12, cell: [1, 3] },
      { value: 17, cell: [3, 5] },
      { value: 15, cell: [5, 5] },
      { value: 18, cell: [9, 5] },
      { value: 19, cell: [7, 7] },
      { value: 21, cell: [5, 9] }
    ]
  },
  {
    title: "Factor Fortress",
    scaffold: "Scaffold 4 of 4",
    targetLabel: "Mastery",
    objective: "Collect every composite number in the fortress. The maze is larger, the decoys are stronger, and the guardian wakes at the end.",
    support: "If you can find any factor besides 1 and the number itself, the number is composite.",
    prompt: "Collect every composite number in the fortress.",
    showRequiredList: false,
    maze: [
      "#############",
      "#.....#.....#",
      "#.###.#.###.#",
      "#...#...#...#",
      "###.###.#.#.#",
      "#...#...#.#.#",
      "#.#.#.###.#.#",
      "#.#.#.....#.#",
      "#.#.#######.#",
      "#.#.........#",
      "#.#####.###.#",
      "#.......#...#",
      "#############"
    ],
    start: [1, 1],
    exit: [11, 11],
    enemies: [
      { kind: "patrol", start: [3, 1], patrol: [[3, 1], [5, 1], [5, 3], [7, 3]] },
      { kind: "ambusher", start: [11, 1], patrol: [[11, 1], [11, 9], [7, 9], [7, 11]] },
      { kind: "sprinter", start: [1, 5], patrol: [[1, 5], [1, 11], [7, 11]] }
    ],
    pickups: [
      { type: "speed", cell: [9, 5] },
      { type: "shield", cell: [9, 7] },
      { type: "shield", cell: [11, 3] }
    ],
    coins: [
      [2, 1],
      [8, 1],
      [6, 3],
      [1, 7],
      [8, 7],
      [10, 9],
      [9, 11]
    ],
    keys: [
      [7, 5],
      [3, 11]
    ],
    boss: {
      name: "Fortress Golem",
      start: [3, 9],
      speed: 8.2,
      radius: 1.55,
      hitDistance: 2.8,
      wakeOn: "numbers"
    },
    traps: [
      [1, 8],
      [10, 3],
      [7, 10]
    ],
    requiredValues: [21, 22, 24, 25, 27],
    tokens: [
      { value: 21, cell: [4, 1] },
      { value: 22, cell: [9, 1] },
      { value: 23, cell: [2, 3] },
      { value: 24, cell: [3, 5] },
      { value: 29, cell: [9, 3] },
      { value: 27, cell: [7, 7] },
      { value: 31, cell: [5, 9] },
      { value: 25, cell: [11, 9] }
    ]
  }
];

function isPrime(value) {
  if (value <= 1) {
    return false;
  }
  if (value === 2) {
    return true;
  }
  if (value % 2 === 0) {
    return false;
  }
  const limit = Math.floor(Math.sqrt(value));
  for (let divisor = 3; divisor <= limit; divisor += 2) {
    if (value % divisor === 0) {
      return false;
    }
  }
  return true;
}

function classify(value) {
  return isPrime(value) ? "prime" : "composite";
}

function smallestFactor(value) {
  if (value % 2 === 0) {
    return 2;
  }
  const limit = Math.floor(Math.sqrt(value));
  for (let divisor = 3; divisor <= limit; divisor += 2) {
    if (value % divisor === 0) {
      return divisor;
    }
  }
  return null;
}

function explain(value) {
  if (isPrime(value)) {
    return `${value} is prime because its only factors are 1 and ${value}.`;
  }
  const factor = smallestFactor(value);
  if (!factor) {
    return `${value} is composite because it has more than two factors.`;
  }
  return `${value} is composite because ${factor} x ${value / factor} = ${value}.`;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function formatTime(seconds) {
  const wholeSeconds = Math.floor(seconds);
  const minutes = String(Math.floor(wholeSeconds / 60)).padStart(2, "0");
  const remainder = String(wholeSeconds % 60).padStart(2, "0");
  return `${minutes}:${remainder}`;
}

class PrimeMazeGame {
  constructor() {
    this.canvas = document.getElementById("prime-maze-canvas");
    if (!this.canvas) {
      return;
    }

    this.refs = {
      banner: document.getElementById("maze-banner"),
      miniFeedback: document.getElementById("maze-mini-feedback"),
      scaffold: document.getElementById("maze-scaffold"),
      targetKind: document.getElementById("maze-target-kind"),
      levelTitle: document.getElementById("maze-level-title"),
      objective: document.getElementById("maze-objective"),
      support: document.getElementById("maze-support"),
      lives: document.getElementById("maze-lives"),
      time: document.getElementById("maze-time"),
      score: document.getElementById("maze-score"),
      boost: document.getElementById("maze-boost"),
      keys: document.getElementById("maze-keys"),
      streak: document.getElementById("maze-streak"),
      correct: document.getElementById("maze-correct"),
      goal: document.getElementById("maze-goal"),
      progressBar: document.getElementById("maze-progress-bar"),
      progressText: document.getElementById("maze-progress-text"),
      feedback: document.getElementById("maze-feedback"),
      next: document.getElementById("maze-next"),
      reset: document.getElementById("maze-reset"),
      levelPicker: document.getElementById("maze-level-picker"),
      touchpad: document.getElementById("maze-touchpad"),
      canvasShell: this.canvas.closest(".prime-maze-canvas-shell")
    };

	    this.scene = new THREE.Scene();
	    this.scene.fog = new THREE.Fog(0x0a1620, 24, 115);

	    this.camera = new THREE.PerspectiveCamera(56, 1, 0.1, 260);
	    this.camera.position.set(0, 28, 20);

    this.renderer = this.createRenderer();
    if (!this.renderer) {
      this.showRendererUnavailable();
      return;
    }

	    this.clock = new THREE.Clock();
    this.keys = new Set();
    this.touchState = { up: false, down: false, left: false, right: false };
    this.levelIndex = 0;
    this.unlockedLevels = 1;
    this.elapsed = 0;
    this.lives = 3;
    this.correctCount = 0;
    this.score = 0;
    this.levelStartScore = 0;
    this.resetTimer = null;
    this.enemyHitCooldown = 0;
    this.trapCooldown = 0;
    this.speedBoostTimer = 0;
    this.shieldBoostTimer = 0;
    this.shieldBoostHits = 0;
    this.isResetting = false;
    this.levelComplete = false;
    this.tokens = [];
    this.enemies = [];
    this.pickups = [];
    this.coins = [];
    this.keyItems = [];
    this.traps = [];
    this.boss = null;
    this.keysCollected = 0;
    this.totalKeys = 0;
    this.coinsCollected = 0;
    this.wallRows = [];
    this.flashTimer = null;

    this.player = {
      mesh: this.createPlayerMesh(),
      bob: 0,
      lastMove: new THREE.Vector3(0, 0, 1)
    };
    this.scene.add(this.player.mesh);

    this.levelGroup = new THREE.Group();
    this.scene.add(this.levelGroup);

    this.buildEnvironment();
    this.buildLevelPicker();
    this.bindEvents();
    this.loadLevel(0);
    this.handleResize();
	    this.renderer.setAnimationLoop(() => this.animate());
	  }

  createRenderer() {
    if (!this.canCreateWebGLContext()) {
      return null;
    }

    const attempts = [
      { antialias: true, alpha: true, powerPreference: "high-performance" },
      { antialias: false, alpha: true, powerPreference: "default" }
    ];

    for (const options of attempts) {
      try {
        const renderer = new THREE.WebGLRenderer({
          canvas: this.canvas,
          ...options
        });
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        return renderer;
      } catch (error) {
        console.warn("Prime maze renderer init failed.", error);
      }
    }

    return null;
  }

  canCreateWebGLContext() {
    const probe = document.createElement("canvas");
    const context =
      probe.getContext("webgl2", { antialias: false }) ||
      probe.getContext("webgl", { antialias: false }) ||
      probe.getContext("experimental-webgl", { antialias: false });

    if (!context) {
      return false;
    }

    context.getExtension("WEBGL_lose_context")?.loseContext();
    return true;
  }

  showRendererUnavailable() {
    const message = "This device could not start the 3D maze renderer.";
    this.refs.banner.textContent = "3D maze unavailable on this device.";
    this.refs.miniFeedback.textContent = "Turn on hardware acceleration or try another browser, then reload the page.";
    this.setFeedback(`${message} Try Chrome, Edge, or Safari with WebGL enabled.`, "danger");
    this.refs.objective.textContent = "3D graphics are unavailable right now.";
    this.refs.support.textContent = "The page loaded, but the browser could not create a WebGL context for the maze.";
    this.refs.progressText.textContent = "Reload after enabling WebGL or hardware acceleration.";
    this.refs.next.disabled = true;
    this.refs.next.textContent = "3D unavailable";

    this.canvas.setAttribute("aria-label", "3D maze unavailable");
    this.canvas.parentElement.classList.add("prime-maze-renderer-unavailable");

    const context = this.canvas.getContext("2d");
    if (!context) {
      return;
    }

    const rect = this.canvas.parentElement.getBoundingClientRect();
    const width = Math.max(320, Math.floor(rect.width || 960));
    const height = Math.max(320, Math.floor(rect.height || 620));
    this.canvas.width = width;
    this.canvas.height = height;

    const background = context.createLinearGradient(0, 0, width, height);
    background.addColorStop(0, "#08151f");
    background.addColorStop(1, "#0b2535");
    context.fillStyle = background;
    context.fillRect(0, 0, width, height);

    context.fillStyle = "rgba(255,255,255,0.08)";
    context.fillRect(42, 42, width - 84, height - 84);
    context.strokeStyle = "rgba(125, 211, 252, 0.32)";
    context.lineWidth = 2;
    context.strokeRect(42, 42, width - 84, height - 84);

    context.fillStyle = "#f8fafc";
    context.font = "700 34px DM Serif Display, serif";
    context.fillText("3D Maze Unavailable", 84, 138);
    context.fillStyle = "rgba(248,250,252,0.86)";
    context.font = "500 22px Outfit, sans-serif";
    context.fillText("Your browser could not create a WebGL context.", 84, 196);
    context.fillText("Enable hardware acceleration and reload.", 84, 232);
    context.fillText("If that fails, try Chrome, Edge, or Safari.", 84, 268);
  }

  buildEnvironment() {
    const ambient = new THREE.HemisphereLight(0xcffafe, 0x09121a, 1.15);
    this.scene.add(ambient);

    const sun = new THREE.DirectionalLight(0xfff4d6, 1.8);
    sun.position.set(18, 30, 12);
    this.scene.add(sun);

    const fill = new THREE.DirectionalLight(0x60a5fa, 0.7);
    fill.position.set(-20, 16, -12);
    this.scene.add(fill);

    const starGeometry = new THREE.BufferGeometry();
    const starCount = 170;
    const positions = new Float32Array(starCount * 3);
    for (let index = 0; index < starCount; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * 210;
      positions[index * 3 + 1] = 22 + Math.random() * 56;
      positions[index * 3 + 2] = (Math.random() - 0.5) * 210;
    }
    starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const stars = new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({
        color: 0xf8fafc,
        size: 0.55,
        transparent: true,
        opacity: 0.8
      })
    );
    this.scene.add(stars);
  }

  buildLevelPicker() {
    LEVELS.forEach((level, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "prime-maze-level-button";
      button.innerHTML = `
        <span class="prime-maze-level-index">${index + 1}</span>
        <span>
          <strong>${level.title}</strong>
          <span>${level.targetLabel}</span>
        </span>
        <span class="prime-maze-level-lock">Lock</span>
      `;
      button.addEventListener("click", () => {
        if (index < this.unlockedLevels) {
          this.loadLevel(index);
        }
      });
      this.refs.levelPicker.appendChild(button);
    });
    this.refreshLevelButtons();
  }

  bindEvents() {
    window.addEventListener("resize", () => this.handleResize());
    window.addEventListener("keydown", (event) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "KeyW", "KeyA", "KeyS", "KeyD", "ShiftLeft", "ShiftRight"].includes(event.code)) {
        event.preventDefault();
      }
      this.keys.add(event.code);
    });
    window.addEventListener("keyup", (event) => {
      this.keys.delete(event.code);
    });
    window.addEventListener("pointerup", () => this.resetTouchState());
    window.addEventListener("pointercancel", () => this.resetTouchState());

    this.refs.reset.addEventListener("click", () => this.loadLevel(this.levelIndex, { restoreLevelScore: true }));
    this.refs.next.addEventListener("click", () => this.advanceLevel());

    this.refs.touchpad.querySelectorAll("button[data-move]").forEach((button) => {
      const direction = button.dataset.move;
      const activate = (event) => {
        event.preventDefault();
        this.touchState[direction] = true;
      };
      const deactivate = (event) => {
        event.preventDefault();
        this.touchState[direction] = false;
      };

      button.addEventListener("pointerdown", activate);
      button.addEventListener("pointerup", deactivate);
      button.addEventListener("pointerleave", deactivate);
      button.addEventListener("pointercancel", deactivate);
      button.addEventListener("lostpointercapture", deactivate);
    });
  }

  resetTouchState() {
    this.touchState.up = false;
    this.touchState.down = false;
    this.touchState.left = false;
    this.touchState.right = false;
  }

	  createPlayerMesh() {
    const group = new THREE.Group();
    const shadow = new THREE.Mesh(
      new THREE.CylinderGeometry(1.45, 1.45, 0.14, 24),
      new THREE.MeshBasicMaterial({
        color: 0x07131e,
        transparent: true,
        opacity: 0.3
      })
    );
    shadow.position.y = -1.24;
    group.add(shadow);

    const body = new THREE.Group();
    const slimeTexture = this.createPixelTexture({
      base: "#34d399",
      dark: "#15803d",
      light: "#bbf7d0"
    });
    const cubeMaterial = new THREE.MeshStandardMaterial({
      map: slimeTexture,
      roughness: 0.58,
      metalness: 0.08,
      emissive: 0x0d9488,
      emissiveIntensity: 0.16
    });
    const cubeGeometry = new THREE.BoxGeometry(0.56, 0.56, 0.56);
    const voxelPositions = [
      [0, 0, 0],
      [0.48, 0, 0],
      [-0.48, 0, 0],
      [0, 0, 0.48],
      [0, 0, -0.48],
      [0.48, 0, 0.48],
      [-0.48, 0, 0.48],
      [0.48, 0, -0.48],
      [-0.48, 0, -0.48],
      [0, 0.48, 0],
      [0.48, 0.48, 0],
      [-0.48, 0.48, 0],
      [0, 0.48, 0.48],
      [0, 0.48, -0.48],
      [0, -0.48, 0],
      [0.48, -0.48, 0],
      [-0.48, -0.48, 0],
      [0, -0.48, 0.48],
      [0, -0.48, -0.48],
      [0, 0.96, 0],
      [0, -0.96, 0]
    ];

    voxelPositions.forEach(([x, y, z]) => {
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.set(x, y, z);
      body.add(cube);
    });

    const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x0b1724 });
    const eyeGeometry = new THREE.BoxGeometry(0.18, 0.18, 0.18);
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.2, 0.12, 0.72);
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.2, 0.12, 0.72);
    body.add(leftEye);
    body.add(rightEye);

    const mouthMaterial = new THREE.MeshBasicMaterial({ color: 0x166534 });
    const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.12, 0.12), mouthMaterial);
    mouth.position.set(0, -0.2, 0.74);
    body.add(mouth);

    const topCap = new THREE.Mesh(
      new THREE.BoxGeometry(0.78, 0.18, 0.78),
      new THREE.MeshStandardMaterial({
        color: 0xecfccb,
        roughness: 0.44,
        metalness: 0.04,
        emissive: 0x86efac,
        emissiveIntensity: 0.12
      })
    );
    topCap.position.set(0, 1.22, 0);
    body.add(topCap);

    body.rotation.y = Math.PI / 6;
    group.add(body);

	    group.position.y = PLAYER_HEIGHT;
	    group.userData.body = body;
	    return group;
	  }

  createVoxelEnemyBody(kind) {
    const styles = {
      patrol: {
        base: "#fda4af",
        dark: "#be123c",
        light: "#ffe4e6",
        accent: "#fb7185",
        emissive: 0xe11d48,
        ring: 0xfb7185,
        badge: "PAT",
        body: [
          [0, 0, 0],
          [0.46, 0, 0],
          [-0.46, 0, 0],
          [0, 0, 0.46],
          [0, 0, -0.46],
          [0.46, 0, 0.46],
          [-0.46, 0, 0.46],
          [0.46, 0, -0.46],
          [-0.46, 0, -0.46],
          [0, 0.46, 0],
          [0.46, 0.46, 0],
          [-0.46, 0.46, 0],
          [0, 0.9, 0]
        ],
        accents: [
          [0, 1.28, 0],
          [0, 0.92, 0.46]
        ]
      },
      ambusher: {
        base: "#fcd34d",
        dark: "#b45309",
        light: "#fef3c7",
        accent: "#f59e0b",
        emissive: 0xf59e0b,
        ring: 0xfbbf24,
        badge: "AMB",
        body: [
          [0, 0, 0],
          [0.5, 0, 0],
          [-0.5, 0, 0],
          [0, 0, 0.46],
          [0, 0, -0.46],
          [0.46, 0, 0.46],
          [-0.46, 0, 0.46],
          [0.46, 0, -0.46],
          [-0.46, 0, -0.46],
          [0, 0.42, 0],
          [0.46, 0.42, 0],
          [-0.46, 0.42, 0]
        ],
        accents: [
          [0.9, -0.18, 0],
          [-0.9, -0.18, 0],
          [0.62, -0.18, 0.62],
          [-0.62, -0.18, 0.62],
          [0, 0.86, 0.34]
        ]
      },
      sprinter: {
        base: "#7dd3fc",
        dark: "#0369a1",
        light: "#e0f2fe",
        accent: "#38bdf8",
        emissive: 0x0ea5e9,
        ring: 0x38bdf8,
        badge: "SPR",
        body: [
          [0, 0, 0],
          [0.42, 0, 0],
          [-0.42, 0, 0],
          [0, 0, 0.48],
          [0, 0, -0.48],
          [0, 0.42, 0],
          [0, 0.84, 0],
          [0.42, 0.42, 0],
          [-0.42, 0.42, 0],
          [0, -0.42, 0]
        ],
        accents: [
          [0, 0.1, 0.94],
          [0, -0.18, -0.88],
          [0.88, 0.12, 0],
          [-0.88, 0.12, 0]
        ]
      },
      boss: {
        base: "#374151",
        dark: "#111827",
        light: "#9ca3af",
        accent: "#f97316",
        emissive: 0xea580c,
        ring: 0xfb923c,
        badge: "BOSS",
        body: [
          [0, 0, 0],
          [0.54, 0, 0],
          [-0.54, 0, 0],
          [0, 0, 0.54],
          [0, 0, -0.54],
          [0.54, 0, 0.54],
          [-0.54, 0, 0.54],
          [0.54, 0, -0.54],
          [-0.54, 0, -0.54],
          [0, 0.48, 0],
          [0.54, 0.48, 0],
          [-0.54, 0.48, 0],
          [0, 0.96, 0],
          [0.54, 0.96, 0],
          [-0.54, 0.96, 0]
        ],
        accents: [
          [0, 1.38, 0],
          [0.82, 0.24, 0],
          [-0.82, 0.24, 0],
          [0, 0.24, 0.82],
          [0, 0.24, -0.82]
        ]
      }
    };
    const style = styles[kind] ?? styles.patrol;
    const group = new THREE.Group();
    const bodyMaterial = new THREE.MeshStandardMaterial({
      map: this.createPixelTexture({
        base: style.base,
        dark: style.dark,
        light: style.light
      }),
      roughness: 0.42,
      metalness: 0.08,
      emissive: style.emissive,
      emissiveIntensity: 0.48
    });
    const accentMaterial = new THREE.MeshStandardMaterial({
      color: style.accent,
      roughness: 0.28,
      metalness: 0.12,
      emissive: style.emissive,
      emissiveIntensity: 0.34
    });
    const cubeGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);

    style.body.forEach(([x, y, z]) => {
      const cube = new THREE.Mesh(cubeGeometry, bodyMaterial);
      cube.position.set(x, y + 1.2, z);
      group.add(cube);
    });

    style.accents.forEach(([x, y, z]) => {
      const cube = new THREE.Mesh(cubeGeometry, accentMaterial);
      cube.scale.set(0.8, 0.8, 0.8);
      cube.position.set(x, y + 1.2, z);
      group.add(cube);
    });

    const eyeGeometry = new THREE.BoxGeometry(0.15, 0.15, 0.15);
    const leftEye = new THREE.Mesh(eyeGeometry, new THREE.MeshBasicMaterial({ color: 0xfffbeb }));
    leftEye.position.set(-0.18, 1.28, 0.82);
    const rightEye = new THREE.Mesh(eyeGeometry, new THREE.MeshBasicMaterial({ color: 0xfffbeb }));
    rightEye.position.set(0.18, 1.28, 0.82);
    group.add(leftEye);
    group.add(rightEye);

    const badge = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: this.createBadgeTexture(style.badge, style.base),
        transparent: true
      })
    );
    badge.scale.set(2.1, 1.1, 1);
    badge.position.set(0, 3.2, 0);
    group.add(badge);

    return {
      group,
      badge,
      materials: [bodyMaterial, accentMaterial],
      ringColor: style.ring,
      emissive: style.emissive
    };
  }

  loadLevel(index, options = {}) {
    if (this.resetTimer) {
      window.clearTimeout(this.resetTimer);
      this.resetTimer = null;
    }

    if (options.restoreLevelScore) {
      this.score = this.levelStartScore;
    }

    this.isResetting = false;
    this.levelIndex = index;
    this.levelComplete = false;
    this.elapsed = 0;
    this.correctCount = 0;
    this.collectedValues = new Set();
    this.level = LEVELS[index];
    this.requiredValues = new Set(this.level.requiredValues);
    this.remainingValues = new Set(this.level.requiredValues);
    this.lives = 3;
    this.wallRows = this.level.maze;
    this.tokens = [];
    this.enemies = [];
    this.pickups = [];
    this.coins = [];
    this.keyItems = [];
    this.traps = [];
    this.boss = null;
    this.keysCollected = 0;
    this.coinsCollected = 0;
    this.enemyHitCooldown = 0;
    this.trapCooldown = 0;
    this.speedBoostTimer = 0;
    this.shieldBoostTimer = 0;
    this.shieldBoostHits = 0;
    this.levelStartScore = this.score;
    this.totalKeys = (this.level.keys || []).length;

    this.clearLevel();
    this.buildMaze();
    this.placePlayer();
    this.updateHud();
    this.refs.miniFeedback.textContent = this.level.boss
      ? `The fortress golem is dormant for now. Clear the maze, grab ${this.totalKeys} key cubes, and be ready to run.`
      : `Avoid ${this.enemies.length} sentr${this.enemies.length === 1 ? "y" : "ies"}, grab ${this.totalKeys} key cube${this.totalKeys === 1 ? "" : "s"}, and watch for ${this.traps.length} trap door${this.traps.length === 1 ? "" : "s"}.`;
    this.setFeedback(this.level.prompt, "info");
    this.refreshLevelButtons();
  }

  clearLevel() {
    while (this.levelGroup.children.length > 0) {
      const child = this.levelGroup.children[this.levelGroup.children.length - 1];
      this.levelGroup.remove(child);
      this.disposeObject(child);
    }
  }

  disposeObject(object) {
    object.traverse((node) => {
      if (node.geometry) {
        node.geometry.dispose();
      }
      if (node.material) {
        const materials = Array.isArray(node.material) ? node.material : [node.material];
        materials.forEach((material) => {
          if (material.map) {
            material.map.dispose();
          }
          material.dispose();
        });
      }
    });
  }

  buildMaze() {
    const rows = this.level.maze.length;
    const columns = this.level.maze[0].length;

    const floorMaterialA = new THREE.MeshStandardMaterial({
      map: this.createBlockTexture("moss-floor"),
      roughness: 0.98,
      metalness: 0.02
    });
    const floorMaterialB = new THREE.MeshStandardMaterial({
      map: this.createBlockTexture("slate-floor"),
      roughness: 0.98,
      metalness: 0.02
    });
    const wallMaterialSet = this.createCubeMaterialSet({
      side: this.createBlockTexture("stone-wall-side"),
      top: this.createBlockTexture("stone-wall-top"),
      bottom: this.createBlockTexture("stone-wall-bottom"),
      roughness: 0.88,
      metalness: 0.06
    });
    const wallCapMaterial = new THREE.MeshStandardMaterial({
      map: this.createBlockTexture("stone-cap"),
      roughness: 0.7,
      metalness: 0.06
    });

    const wallGeometry = new THREE.BoxGeometry(CELL_SIZE, WALL_HEIGHT, CELL_SIZE);
    const floorGeometry = new THREE.BoxGeometry(CELL_SIZE, 0.6, CELL_SIZE);

    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const tile = this.level.maze[row][column];
        const world = this.cellToWorld(column, row);

        const floor = new THREE.Mesh(
          floorGeometry,
          (row + column) % 2 === 0 ? floorMaterialA : floorMaterialB
        );
        floor.position.set(world.x, -0.3, world.z);
        this.levelGroup.add(floor);

        if (tile === "#") {
          const wall = new THREE.Mesh(wallGeometry, wallMaterialSet);
          wall.position.set(world.x, WALL_HEIGHT / 2, world.z);
          this.levelGroup.add(wall);

          const cap = new THREE.Mesh(
            new THREE.BoxGeometry(CELL_SIZE - 0.5, 0.5, CELL_SIZE - 0.5),
            wallCapMaterial
          );
          cap.position.set(world.x, WALL_HEIGHT + 0.25, world.z);
          this.levelGroup.add(cap);
        }
      }
    }

    const padGeometry = new THREE.CylinderGeometry(1.7, 1.7, 0.4, 32);
    const startPad = new THREE.Mesh(
      padGeometry,
      new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x0284c7,
        emissiveIntensity: 0.35,
        roughness: 0.3,
        metalness: 0.5
      })
    );
    const startWorld = this.cellToWorld(this.level.start[0], this.level.start[1]);
    startPad.position.set(startWorld.x, 0.2, startWorld.z);
    this.levelGroup.add(startPad);

    this.exitGroup = this.createExitPortal();
    const exitWorld = this.cellToWorld(this.level.exit[0], this.level.exit[1]);
    this.exitGroup.position.set(exitWorld.x, 0.4, exitWorld.z);
    this.levelGroup.add(this.exitGroup);

    this.level.tokens.forEach((tokenConfig) => {
      const token = this.createToken(tokenConfig.value);
      const world = this.cellToWorld(tokenConfig.cell[0], tokenConfig.cell[1]);
      token.group.position.set(world.x, 1.25, world.z);
      token.group.userData.value = tokenConfig.value;
      const tokenState = {
        value: tokenConfig.value,
        kind: classify(tokenConfig.value),
        group: token.group,
        crystal: token.crystal,
        label: token.label,
        pulse: Math.random() * Math.PI * 2,
        collected: false
      };
      this.tokens.push(tokenState);
      this.levelGroup.add(token.group);
    });

    (this.level.enemies || []).forEach((enemyConfig) => {
      const enemy = this.createEnemy(enemyConfig);
      this.enemies.push(enemy);
      this.levelGroup.add(enemy.group);
    });

	    (this.level.pickups || []).forEach((pickupConfig) => {
	      const pickup = this.createPickup(pickupConfig);
	      this.pickups.push(pickup);
	      this.levelGroup.add(pickup.group);
	    });

    (this.level.coins || []).forEach((cell) => {
      const coin = this.createCoin(cell);
      this.coins.push(coin);
      this.levelGroup.add(coin.group);
    });

    (this.level.keys || []).forEach((cell) => {
      const keyItem = this.createKeyItem(cell);
      this.keyItems.push(keyItem);
      this.levelGroup.add(keyItem.group);
    });

    (this.level.traps || []).forEach((cell) => {
      const trap = this.createTrapDoor(cell);
      this.traps.push(trap);
      this.levelGroup.add(trap.group);
    });

    if (this.level.boss) {
      this.boss = this.createBoss(this.level.boss);
      this.levelGroup.add(this.boss.group);
    }
  }

  createExitPortal() {
    const group = new THREE.Group();

    const base = new THREE.Mesh(
      new THREE.CylinderGeometry(2.3, 2.3, 0.5, 40),
      new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        emissive: 0x1d4ed8,
        emissiveIntensity: 0.18,
        roughness: 0.28,
        metalness: 0.55
      })
    );
    group.add(base);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.2, 0.22, 18, 56),
      new THREE.MeshStandardMaterial({
        color: 0x93c5fd,
        emissive: 0x60a5fa,
        emissiveIntensity: 0.45,
        roughness: 0.24,
        metalness: 0.72
      })
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 1.9;
    group.add(ring);

    const core = new THREE.Mesh(
      new THREE.CylinderGeometry(1.5, 1.5, 2.7, 32, 1, true),
      new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.22,
        side: THREE.DoubleSide
      })
    );
    core.position.y = 1.35;
    group.add(core);

    group.userData.ring = ring;
    group.userData.core = core;
    return group;
  }

  createToken(value) {
    const group = new THREE.Group();

    const base = new THREE.Mesh(
      new THREE.CylinderGeometry(1.25, 1.25, 0.42, 20),
      new THREE.MeshStandardMaterial({
        color: 0x101f2f,
        roughness: 0.42,
        metalness: 0.5
      })
    );
    group.add(base);

    const crystal = new THREE.Mesh(
      new THREE.OctahedronGeometry(1.05, 0),
      new THREE.MeshStandardMaterial({
        color: 0xfff8e8,
        emissive: 0xf59e0b,
        emissiveIntensity: 0.45,
        roughness: 0.2,
        metalness: 0.15
      })
    );
    crystal.position.y = 1.2;
    group.add(crystal);

    const label = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: this.createLabelTexture(value),
        transparent: true
      })
    );
    label.scale.set(3.2, 2.1, 1);
    label.position.set(0, 3.1, 0);
    group.add(label);

    return { group, crystal, label };
  }

  createEnemy(enemyConfig) {
    const kind = enemyConfig.kind ?? "patrol";
    const core = this.createVoxelEnemyBody(kind);
    const group = new THREE.Group();
    group.add(core.group);

	    const ring = new THREE.Mesh(
	      new THREE.TorusGeometry(1.45, 0.12, 12, 36),
	      new THREE.MeshStandardMaterial({
	        color: core.ringColor,
	        emissive: core.emissive,
	        emissiveIntensity: 0.42,
	        roughness: 0.32,
	        metalness: 0.25
      })
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.4;
    group.add(ring);

    const startWorld = this.cellToWorld(enemyConfig.start[0], enemyConfig.start[1]);
    group.position.set(startWorld.x, 0, startWorld.z);

	    return {
	      group,
      body: core.group,
      badge: core.badge,
      materials: core.materials,
	      ring,
	      kind,
	      speed: enemyConfig.speed ?? ENEMY_PATROL_SPEED,
	      patrol: enemyConfig.patrol.map(([column, row]) => this.cellToWorld(column, row)),
	      waypointIndex: 0,
	      direction: 1,
	      noticeRadius: enemyConfig.noticeRadius ?? CELL_SIZE * 3.4,
      facing: 0
    };
  }

  createBoss(bossConfig) {
    const core = this.createVoxelEnemyBody("boss");
    core.group.scale.setScalar(1.75);
    const group = new THREE.Group();
    group.add(core.group);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.45, 0.18, 16, 42),
      new THREE.MeshStandardMaterial({
        color: 0xfb923c,
        emissive: 0xea580c,
        emissiveIntensity: 0.58,
        roughness: 0.28,
        metalness: 0.18
      })
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.6;
    group.add(ring);

    const aura = new THREE.Mesh(
      new THREE.CylinderGeometry(2.1, 2.1, 4.8, 28, 1, true),
      new THREE.MeshBasicMaterial({
        color: 0xfb923c,
        transparent: true,
        opacity: 0.12,
        side: THREE.DoubleSide
      })
    );
    aura.position.y = 2.2;
    group.add(aura);

    const shadow = new THREE.Mesh(
      new THREE.CylinderGeometry(2.35, 2.35, 0.14, 28),
      new THREE.MeshBasicMaterial({
        color: 0x020617,
        transparent: true,
        opacity: 0.34
      })
    );
    shadow.position.y = -1.1;
    group.add(shadow);

    const startWorld = this.cellToWorld(bossConfig.start[0], bossConfig.start[1]);
    group.position.set(startWorld.x, 0, startWorld.z);

    return {
      group,
      body: core.group,
      badge: core.badge,
      materials: core.materials,
      ring,
      aura,
      shadow,
      name: bossConfig.name ?? "Fortress Golem",
      wakeOn: bossConfig.wakeOn ?? "numbers",
      speed: bossConfig.speed ?? 7.8,
      radius: bossConfig.radius ?? 1.5,
      hitDistance: bossConfig.hitDistance ?? 2.8,
      active: false,
      awakened: false,
      facing: 0,
      nextStep: null,
      pathCooldown: 0
    };
  }

  createPickup(pickupConfig) {
    const style = pickupConfig.type === "shield"
      ? {
          base: "#f59e0b",
          label: "SHD"
        }
      : {
          base: "#38bdf8",
          label: "SPD"
        };

    const group = new THREE.Group();
    const cubeMaterials = pickupConfig.type === "shield"
      ? this.createCubeMaterialSet({
          side: this.createBlockTexture("shield-block-side"),
          top: this.createBlockTexture("shield-block-top"),
          bottom: this.createBlockTexture("stone-wall-bottom"),
          roughness: 0.48,
          metalness: 0.08,
          emissive: 0xf59e0b,
          emissiveIntensity: 0.16
        })
      : this.createCubeMaterialSet({
          side: this.createBlockTexture("speed-block-side"),
          top: this.createBlockTexture("speed-block-top"),
          bottom: this.createBlockTexture("stone-wall-bottom"),
          roughness: 0.42,
          metalness: 0.12,
          emissive: 0x38bdf8,
          emissiveIntensity: 0.16
        });
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(0.95, 0.95, 0.95),
      cubeMaterials
    );
    cube.position.y = 1.05;
    group.add(cube);

    const halo = new THREE.Mesh(
      new THREE.TorusGeometry(1.0, 0.12, 12, 32),
      new THREE.MeshStandardMaterial({
        color: pickupConfig.type === "shield" ? 0xfacc15 : 0x7dd3fc,
        emissive: pickupConfig.type === "shield" ? 0xf59e0b : 0x38bdf8,
        emissiveIntensity: 0.35,
        roughness: 0.3,
        metalness: 0.28
      })
    );
    halo.rotation.x = Math.PI / 2;
    halo.position.y = 0.35;
    group.add(halo);

    const label = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: this.createBadgeTexture(style.label, style.base),
        transparent: true
      })
    );
    label.scale.set(2.5, 1.4, 1);
    label.position.set(0, 2.55, 0);
    group.add(label);

    const world = this.cellToWorld(pickupConfig.cell[0], pickupConfig.cell[1]);
    group.position.set(world.x, 0, world.z);

	    return {
	      type: pickupConfig.type,
      group,
      cube,
      halo,
      label,
      pulse: Math.random() * Math.PI * 2,
	      collected: false
	    };
	  }

  createCoin(cell) {
    const group = new THREE.Group();
    const texture = this.createPixelTexture({
      base: "#facc15",
      dark: "#b45309",
      light: "#fef08a"
    });
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.34,
      metalness: 0.24,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.22
    });
    const voxelGeometry = new THREE.BoxGeometry(0.34, 0.34, 0.34);
    [
      [-0.34, 0, 0],
      [0, 0, 0],
      [0.34, 0, 0],
      [-0.17, 0.34, 0],
      [0.17, 0.34, 0]
    ].forEach(([x, y, z]) => {
      const voxel = new THREE.Mesh(voxelGeometry, material);
      voxel.position.set(x, y + 1.05, z);
      group.add(voxel);
    });

    const halo = new THREE.Mesh(
      new THREE.TorusGeometry(0.9, 0.08, 10, 26),
      new THREE.MeshStandardMaterial({
        color: 0xfde68a,
        emissive: 0xf59e0b,
        emissiveIntensity: 0.26,
        roughness: 0.18,
        metalness: 0.22
      })
    );
    halo.rotation.x = Math.PI / 2;
    halo.position.y = 0.28;
    group.add(halo);

    const world = this.cellToWorld(cell[0], cell[1]);
    group.position.set(world.x, 0, world.z);
    return {
      group,
      halo,
      material,
      pulse: Math.random() * Math.PI * 2,
      collected: false
    };
  }

  createKeyItem(cell) {
    const group = new THREE.Group();
    const texture = this.createPixelTexture({
      base: "#f59e0b",
      dark: "#92400e",
      light: "#fde68a"
    });
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.36,
      metalness: 0.14,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.24
    });
    const cubeGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    [
      [0, 1.1, 0],
      [0, 1.45, 0],
      [0, 1.8, 0],
      [0.35, 1.8, 0],
      [0.7, 1.8, 0],
      [0.7, 1.45, 0],
      [0.35, 1.1, 0],
      [-0.35, 1.1, 0]
    ].forEach(([x, y, z]) => {
      const cube = new THREE.Mesh(cubeGeometry, material);
      cube.position.set(x, y, z);
      group.add(cube);
    });

    const badge = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: this.createBadgeTexture("KEY", "#f59e0b"),
        transparent: true
      })
    );
    badge.scale.set(2.2, 1.15, 1);
    badge.position.set(0, 2.75, 0);
    group.add(badge);

    const halo = new THREE.Mesh(
      new THREE.TorusGeometry(1.02, 0.1, 10, 28),
      new THREE.MeshStandardMaterial({
        color: 0xfef3c7,
        emissive: 0xf59e0b,
        emissiveIntensity: 0.3,
        roughness: 0.24,
        metalness: 0.18
      })
    );
    halo.rotation.x = Math.PI / 2;
    halo.position.y = 0.34;
    group.add(halo);

    const world = this.cellToWorld(cell[0], cell[1]);
    group.position.set(world.x, 0, world.z);
    return {
      group,
      badge,
      halo,
      material,
      pulse: Math.random() * Math.PI * 2,
      collected: false
    };
  }

  createTrapDoor(cell) {
    const group = new THREE.Group();
    const frame = new THREE.Mesh(
      new THREE.BoxGeometry(3.2, 0.12, 3.2),
      new THREE.MeshStandardMaterial({
        color: 0x1f2937,
        roughness: 0.84,
        metalness: 0.12
      })
    );
    frame.position.y = 0.02;
    group.add(frame);

    const panelMaterial = new THREE.MeshStandardMaterial({
      color: 0x7f1d1d,
      roughness: 0.72,
      metalness: 0.06,
      emissive: 0x991b1b,
      emissiveIntensity: 0.12
    });
    const panelGeometry = new THREE.BoxGeometry(1.18, 0.12, 1.18);
    const panels = [
      [-0.62, 0.09, -0.62],
      [0.62, 0.09, -0.62],
      [-0.62, 0.09, 0.62],
      [0.62, 0.09, 0.62]
    ].map(([x, y, z], index) => {
      const panel = new THREE.Mesh(panelGeometry, panelMaterial);
      panel.position.set(x, y, z);
      panel.userData.index = index;
      group.add(panel);
      return panel;
    });

    const pit = new THREE.Mesh(
      new THREE.CylinderGeometry(1.15, 1.15, 0.4, 24),
      new THREE.MeshStandardMaterial({
        color: 0x020617,
        roughness: 1,
        metalness: 0,
        emissive: 0x111827,
        emissiveIntensity: 0.06
      })
    );
    pit.position.y = -0.18;
    group.add(pit);

    const world = this.cellToWorld(cell[0], cell[1]);
    group.position.set(world.x, 0, world.z);
    return {
      group,
      panels,
      pit,
      material: panelMaterial,
      pulse: Math.random() * Math.PI * 2,
      triggered: false,
      progress: 0
    };
  }

  createPixelTexture({ base, dark, light }) {
    const canvas = document.createElement("canvas");
    canvas.width = 16;
    canvas.height = 16;
    const context = canvas.getContext("2d");

    context.fillStyle = base;
    context.fillRect(0, 0, 16, 16);

    context.fillStyle = dark;
    context.fillRect(0, 0, 16, 4);
    context.fillRect(0, 4, 4, 12);
    context.fillRect(12, 6, 4, 10);

    context.fillStyle = light;
    context.fillRect(4, 4, 8, 4);
    context.fillRect(4, 8, 6, 4);
    context.fillRect(6, 12, 4, 2);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    return texture;
  }

  createBlockTexture(kind) {
    const canvas = document.createElement("canvas");
    canvas.width = 16;
    canvas.height = 16;
    const context = canvas.getContext("2d");

    const drawPixel = (x, y, width, height, color) => {
      context.fillStyle = color;
      context.fillRect(x, y, width, height);
    };

    switch (kind) {
      case "moss-floor":
        drawPixel(0, 0, 16, 16, "#173c33");
        drawPixel(0, 0, 16, 4, "#245347");
        drawPixel(0, 12, 16, 4, "#102a24");
        drawPixel(2, 2, 4, 4, "#326857");
        drawPixel(8, 2, 6, 4, "#2b5f50");
        drawPixel(4, 8, 4, 4, "#4d7c65");
        drawPixel(10, 8, 4, 4, "#1f4b40");
        break;
      case "slate-floor":
        drawPixel(0, 0, 16, 16, "#12293a");
        drawPixel(0, 0, 16, 4, "#1e3a4d");
        drawPixel(0, 12, 16, 4, "#0b1a28");
        drawPixel(2, 2, 5, 4, "#214257");
        drawPixel(9, 4, 5, 4, "#1a3446");
        drawPixel(4, 10, 4, 4, "#294e63");
        drawPixel(10, 10, 4, 4, "#173243");
        break;
      case "stone-wall-side":
        drawPixel(0, 0, 16, 16, "#8c7355");
        drawPixel(0, 0, 16, 2, "#5f4a34");
        drawPixel(0, 7, 16, 2, "#5f4a34");
        drawPixel(0, 14, 16, 2, "#5f4a34");
        drawPixel(0, 2, 6, 5, "#b09572");
        drawPixel(6, 2, 10, 5, "#9f8463");
        drawPixel(0, 9, 8, 5, "#9b7d59");
        drawPixel(8, 9, 8, 5, "#b79a76");
        drawPixel(5, 2, 1, 5, "#5f4a34");
        drawPixel(8, 9, 1, 5, "#5f4a34");
        break;
      case "stone-wall-top":
        drawPixel(0, 0, 16, 16, "#b79a76");
        drawPixel(0, 0, 16, 4, "#d2b48c");
        drawPixel(0, 12, 16, 4, "#8c7355");
        drawPixel(2, 3, 4, 4, "#c8ad88");
        drawPixel(8, 4, 5, 4, "#ab8e69");
        drawPixel(4, 9, 3, 3, "#e2c6a2");
        drawPixel(10, 9, 3, 3, "#9f8463");
        break;
      case "stone-wall-bottom":
        drawPixel(0, 0, 16, 16, "#4b3d2d");
        drawPixel(0, 0, 16, 3, "#64503c");
        drawPixel(0, 13, 16, 3, "#2f2418");
        drawPixel(2, 4, 4, 4, "#5a4936");
        drawPixel(9, 5, 5, 4, "#3b2f24");
        drawPixel(4, 10, 4, 3, "#6b5641");
        break;
      case "stone-cap":
        drawPixel(0, 0, 16, 16, "#d5b48a");
        drawPixel(0, 0, 16, 4, "#ecd2b1");
        drawPixel(0, 12, 16, 4, "#9f8463");
        drawPixel(2, 4, 4, 4, "#f2dfc4");
        drawPixel(8, 4, 6, 4, "#caa97f");
        drawPixel(4, 9, 5, 3, "#b9966c");
        break;
      case "speed-block-side":
        drawPixel(0, 0, 16, 16, "#0ea5e9");
        drawPixel(0, 0, 16, 4, "#7dd3fc");
        drawPixel(0, 12, 16, 4, "#075985");
        drawPixel(2, 2, 5, 4, "#bae6fd");
        drawPixel(9, 3, 5, 4, "#38bdf8");
        drawPixel(4, 9, 8, 3, "#0369a1");
        break;
      case "speed-block-top":
        drawPixel(0, 0, 16, 16, "#bae6fd");
        drawPixel(0, 0, 16, 4, "#e0f2fe");
        drawPixel(0, 12, 16, 4, "#38bdf8");
        drawPixel(2, 4, 12, 4, "#7dd3fc");
        drawPixel(4, 9, 8, 3, "#0ea5e9");
        break;
      case "shield-block-side":
        drawPixel(0, 0, 16, 16, "#f59e0b");
        drawPixel(0, 0, 16, 4, "#fde68a");
        drawPixel(0, 12, 16, 4, "#92400e");
        drawPixel(2, 2, 4, 4, "#fbbf24");
        drawPixel(8, 3, 5, 4, "#fcd34d");
        drawPixel(4, 9, 8, 3, "#b45309");
        break;
      case "shield-block-top":
        drawPixel(0, 0, 16, 16, "#fde68a");
        drawPixel(0, 0, 16, 4, "#fef3c7");
        drawPixel(0, 12, 16, 4, "#f59e0b");
        drawPixel(2, 4, 12, 4, "#fcd34d");
        drawPixel(4, 9, 8, 3, "#d97706");
        break;
      default:
        drawPixel(0, 0, 16, 16, "#6b7280");
        drawPixel(0, 0, 16, 4, "#9ca3af");
        drawPixel(0, 12, 16, 4, "#374151");
        break;
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    return texture;
  }

  createCubeMaterialSet({ side, top = side, bottom = side, roughness = 0.5, metalness = 0.08, emissive = 0x000000, emissiveIntensity = 0 }) {
    const createMaterial = (map) => new THREE.MeshStandardMaterial({
      map,
      roughness,
      metalness,
      emissive,
      emissiveIntensity
    });
    return [
      createMaterial(side),
      createMaterial(side),
      createMaterial(top),
      createMaterial(bottom),
      createMaterial(side),
      createMaterial(side)
    ];
  }

  createBadgeTexture(text, baseColor) {
    const canvas = document.createElement("canvas");
    canvas.width = 192;
    canvas.height = 96;
    const context = canvas.getContext("2d");

    context.fillStyle = "#ffffff";
    context.strokeStyle = baseColor;
    context.lineWidth = 10;
    this.drawRoundedRect(context, 12, 12, 168, 72, 20);
    context.fill();
    context.stroke();

    context.fillStyle = "#103e3c";
    context.font = "700 40px JetBrains Mono, monospace";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(text, 96, 50);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }

  createLabelTexture(value) {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 160;
    const context = canvas.getContext("2d");

    context.fillStyle = "#ffffff";
    context.strokeStyle = "#0f3d38";
    context.lineWidth = 12;
    this.drawRoundedRect(context, 18, 18, 220, 124, 34);
    context.fill();
    context.stroke();

    context.fillStyle = "#103e3c";
    context.font = "700 72px Outfit, sans-serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(String(value), canvas.width / 2, canvas.height / 2 + 6);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }

  drawRoundedRect(context, x, y, width, height, radius) {
    context.beginPath();
    context.moveTo(x + radius, y);
    context.lineTo(x + width - radius, y);
    context.quadraticCurveTo(x + width, y, x + width, y + radius);
    context.lineTo(x + width, y + height - radius);
    context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    context.lineTo(x + radius, y + height);
    context.quadraticCurveTo(x, y + height, x, y + height - radius);
    context.lineTo(x, y + radius);
    context.quadraticCurveTo(x, y, x + radius, y);
    context.closePath();
  }

	  placePlayer() {
	    const startWorld = this.cellToWorld(this.level.start[0], this.level.start[1]);
	    this.player.mesh.position.set(startWorld.x, PLAYER_HEIGHT, startWorld.z);
    this.player.lastMove.set(0, 0, 1);
	  }

	  resetPlayerPosition() {
	    const startWorld = this.cellToWorld(this.level.start[0], this.level.start[1]);
	    this.player.mesh.position.set(startWorld.x, PLAYER_HEIGHT, startWorld.z);
	    this.player.bob = 0;
    this.player.lastMove.set(0, 0, 1);
	  }

  handleResize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.camera.aspect = rect.width / rect.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(rect.width, rect.height, false);
  }

	  animate() {
	    const delta = Math.min(this.clock.getDelta(), 0.05);
	    this.elapsed += delta;
	    this.enemyHitCooldown = Math.max(0, this.enemyHitCooldown - delta);
    this.trapCooldown = Math.max(0, this.trapCooldown - delta);
	    this.speedBoostTimer = Math.max(0, this.speedBoostTimer - delta);
	    this.shieldBoostTimer = Math.max(0, this.shieldBoostTimer - delta);
	    if (this.shieldBoostTimer === 0) {
	      this.shieldBoostHits = 0;
	    }
    if (!this.levelComplete) {
      this.updateMovement(delta);
      this.updateEnemies(delta);
      this.updateBoss(delta);
      this.checkPickupCollisions();
      this.checkCoinCollisions();
      this.checkKeyCollisions();
      this.checkTrapCollisions();
	      this.checkTokenCollisions();
	      this.checkExit();
	    }
    this.updateVisuals(delta);
    this.updateCamera(delta);
    this.renderer.render(this.scene, this.camera);
    this.refs.time.textContent = formatTime(this.elapsed);
    this.refs.boost.textContent = this.describeBoostState();
  }

  updateMovement(delta) {
    const moveX =
      (this.keys.has("ArrowRight") || this.keys.has("KeyD") || this.touchState.right ? 1 : 0) -
      (this.keys.has("ArrowLeft") || this.keys.has("KeyA") || this.touchState.left ? 1 : 0);
    const moveZ =
      (this.keys.has("ArrowDown") || this.keys.has("KeyS") || this.touchState.down ? 1 : 0) -
      (this.keys.has("ArrowUp") || this.keys.has("KeyW") || this.touchState.up ? 1 : 0);
    const sprinting = this.keys.has("ShiftLeft") || this.keys.has("ShiftRight");
    const direction = new THREE.Vector3(moveX, 0, moveZ);

    if (direction.lengthSq() > 0) {
      const boostMultiplier = this.speedBoostTimer > 0 ? 1.4 : 1;
      const speed = PLAYER_SPEED * (sprinting ? SPRINT_MULTIPLIER : 1) * boostMultiplier;
      direction.normalize().multiplyScalar(speed * delta);
      this.player.lastMove.copy(direction).normalize();
      this.refs.miniFeedback.textContent = sprinting
        ? "Sprint active. Break away before the sentries close in."
        : this.speedBoostTimer > 0
          ? "Speed boost active. Use it to outrun the hunters."
          : "Stay in the corridor, read each number, and collect only the correct targets.";
    }

    const nextX = this.player.mesh.position.x + direction.x;
    if (!this.collides(nextX, this.player.mesh.position.z)) {
      this.player.mesh.position.x = nextX;
    }

    const nextZ = this.player.mesh.position.z + direction.z;
    if (!this.collides(this.player.mesh.position.x, nextZ)) {
      this.player.mesh.position.z = nextZ;
    }

    this.player.bob += direction.length() > 0 ? delta * 8 : delta * 2;
    this.player.mesh.position.y = PLAYER_HEIGHT + Math.sin(this.player.bob) * 0.08;
  }

  updateVisuals(delta) {
    const pulseTime = this.elapsed * 2.4;
    const body = this.player.mesh.userData.body;
    if (body) {
      body.rotation.y += delta * 0.8;
      body.rotation.z = Math.sin(this.player.bob * 0.9) * 0.06;
    }

    this.tokens.forEach((token) => {
      if (token.collected) {
        return;
      }
      token.group.rotation.y += delta * 1.1;
      token.group.position.y = 1.25 + Math.sin(pulseTime + token.pulse) * 0.22;
      token.group.scale.lerp(new THREE.Vector3(1, 1, 1), 0.18);
      token.crystal.material.emissiveIntensity = 0.45;
      token.label.material.opacity = 0.88;
    });

	    this.pickups.forEach((pickup) => {
	      if (pickup.collected) {
	        return;
	      }
	      pickup.group.rotation.y += delta * (pickup.type === "shield" ? 1.7 : 2.3);
	      pickup.group.position.y = Math.sin(pulseTime + pickup.pulse) * 0.16;
	      pickup.halo.rotation.z += delta * 2.1;
	    });

    this.coins.forEach((coin) => {
      if (coin.collected) {
        return;
      }
      coin.group.rotation.y += delta * 2.4;
      coin.group.position.y = Math.sin(pulseTime * 1.2 + coin.pulse) * 0.12;
      coin.halo.rotation.z += delta * 2.8;
      coin.material.emissiveIntensity = 0.22 + Math.sin(pulseTime + coin.pulse) * 0.08;
    });

    this.keyItems.forEach((keyItem) => {
      if (keyItem.collected) {
        return;
      }
      keyItem.group.rotation.y += delta * 1.6;
      keyItem.group.position.y = Math.sin(pulseTime + keyItem.pulse) * 0.15;
      keyItem.halo.rotation.z -= delta * 1.8;
      keyItem.material.emissiveIntensity = 0.24 + Math.sin(pulseTime + keyItem.pulse) * 0.08;
    });

    this.traps.forEach((trap) => {
      if (trap.triggered) {
        trap.progress = Math.min(1, trap.progress + delta * 2.4);
      }
      const pulse = trap.triggered ? 0 : (0.12 + Math.sin(pulseTime + trap.pulse) * 0.03);
      trap.material.emissiveIntensity = pulse;
      trap.panels.forEach((panel, index) => {
        const progress = trap.progress;
        const xDirection = index % 2 === 0 ? -1 : 1;
        const zDirection = index < 2 ? -1 : 1;
        panel.position.y = 0.09 - progress * 0.9;
        panel.rotation.x = zDirection * progress * 0.45;
        panel.rotation.z = -xDirection * progress * 0.45;
      });
      trap.pit.material.emissiveIntensity = trap.triggered ? 0.18 : 0.06;
    });

    this.enemies.forEach((enemy, index) => {
      enemy.group.position.y = Math.sin(pulseTime * 1.4 + index) * 0.14;
      const turn = Math.atan2(Math.sin(enemy.facing - enemy.group.rotation.y), Math.cos(enemy.facing - enemy.group.rotation.y));
      enemy.group.rotation.y += turn * Math.min(1, delta * 8);
      enemy.body.rotation.z = Math.sin(pulseTime * 1.6 + index) * 0.06;
	      enemy.ring.rotation.z += delta * 2.2;
      enemy.materials.forEach((material, materialIndex) => {
        material.emissiveIntensity = enemy.alert
          ? (materialIndex === 0 ? 0.92 : 0.72)
          : (materialIndex === 0 ? 0.48 : 0.34);
      });
      enemy.badge.material.opacity = enemy.alert ? 1 : 0.82;
    });

    if (this.boss) {
      const bossPulse = Math.sin(pulseTime * (this.boss.active ? 2.4 : 1.1)) * 0.12;
      this.boss.group.position.y = bossPulse;
      const bossTurn = Math.atan2(
        Math.sin(this.boss.facing - this.boss.group.rotation.y),
        Math.cos(this.boss.facing - this.boss.group.rotation.y)
      );
      this.boss.group.rotation.y += bossTurn * Math.min(1, delta * 7);
      this.boss.body.rotation.z = Math.sin(pulseTime * 1.3) * 0.05;
      this.boss.ring.rotation.z += delta * (this.boss.active ? 3 : 1.2);
      this.boss.aura.material.opacity = this.boss.active ? 0.18 + Math.sin(pulseTime * 2) * 0.04 : 0.06;
      this.boss.materials.forEach((material, index) => {
        material.emissiveIntensity = this.boss.active
          ? (index === 0 ? 1.04 : 0.86)
          : (index === 0 ? 0.28 : 0.2);
      });
      this.boss.badge.material.opacity = this.boss.active ? 1 : 0.64;
    }

    if (this.exitGroup) {
      const ring = this.exitGroup.userData.ring;
	      const core = this.exitGroup.userData.core;
      const exitReady = this.isPortalReady();
	      ring.rotation.z += delta * (this.levelComplete || exitReady ? 1.8 : 0.7);
	      core.material.opacity = exitReady ? 0.44 + Math.sin(pulseTime) * 0.08 : 0.16;
	      ring.material.emissiveIntensity = exitReady ? 1.15 : 0.45;
	    }
	  }

  updateCamera(delta) {
    const target = this.player.mesh.position.clone();
    const desired = target.clone().add(new THREE.Vector3(0, 26, 12));
    this.camera.position.lerp(desired, 1 - Math.pow(0.002, delta));
    this.camera.lookAt(target.x, 0, target.z);
  }

  collides(x, z) {
    return this.collidesAt(x, z, PLAYER_RADIUS);
  }

  updateEnemies(delta) {
    this.enemies.forEach((enemy) => {
      const playerPosition = this.player.mesh.position.clone();
      const distanceToPlayer = enemy.group.position.distanceTo(playerPosition);
      const hasSightline = this.enemyCanSeePlayer(enemy);
      let target = null;
      let speed = enemy.speed;
      enemy.alert = false;

      if (enemy.kind === "sprinter") {
        if (hasSightline || distanceToPlayer < enemy.noticeRadius) {
          target = playerPosition;
          speed *= ENEMY_CHASE_MULTIPLIER * 1.18;
          enemy.alert = true;
        }
      } else if (enemy.kind === "ambusher") {
        if (hasSightline || distanceToPlayer < enemy.noticeRadius) {
          const predicted = playerPosition.clone().add(this.player.lastMove.clone().multiplyScalar(CELL_SIZE * 1.4));
          target = this.collidesAt(predicted.x, predicted.z, ENEMY_RADIUS) ? playerPosition : predicted;
          speed *= ENEMY_CHASE_MULTIPLIER;
          enemy.alert = true;
        }
      } else if (hasSightline) {
        target = playerPosition;
        speed *= ENEMY_CHASE_MULTIPLIER;
        enemy.alert = true;
      }

      if (!target && enemy.patrol.length > 0) {
        target = new THREE.Vector3(enemy.patrol[enemy.waypointIndex].x, 0, enemy.patrol[enemy.waypointIndex].z);
      }

      if (!target) {
        return;
      }

      const toTarget = target.clone().sub(enemy.group.position);
      toTarget.y = 0;
      const distance = toTarget.length();

      if (!hasSightline && distance < 0.2 && enemy.patrol.length > 1) {
        if (enemy.waypointIndex === enemy.patrol.length - 1) {
          enemy.direction = -1;
        } else if (enemy.waypointIndex === 0) {
          enemy.direction = 1;
        }
        enemy.waypointIndex += enemy.direction;
        return;
      }

	      if (distance > 0.001) {
        enemy.facing = Math.atan2(toTarget.x, toTarget.z);
	        toTarget.normalize().multiplyScalar(speed * delta);
	        this.moveEntity(enemy.group, toTarget, ENEMY_RADIUS);
	      }

      if (enemy.group.position.distanceTo(this.player.mesh.position) <= ENEMY_HIT_DISTANCE && this.enemyHitCooldown <= 0) {
        this.handleEnemyHit();
      }
    });
  }

  updateBoss(delta) {
    if (!this.boss) {
      return;
    }

    if (!this.boss.active) {
      if (this.shouldWakeBoss()) {
        this.activateBoss();
      } else {
        return;
      }
    }

    this.boss.pathCooldown = Math.max(0, this.boss.pathCooldown - delta);

    const playerPosition = this.player.mesh.position.clone();
    const bossCell = this.worldToCell(this.boss.group.position.x, this.boss.group.position.z);
    const playerCell = this.worldToCell(playerPosition.x, playerPosition.z);

    if (
      this.boss.pathCooldown === 0 ||
      !this.boss.nextStep ||
      (bossCell.column === this.boss.nextStep.column && bossCell.row === this.boss.nextStep.row)
    ) {
      this.boss.nextStep = this.findNextStepToward(bossCell, playerCell);
      this.boss.pathCooldown = 0.16;
    }

    let target = playerPosition;
    if (this.boss.nextStep) {
      const nextWorld = this.cellToWorld(this.boss.nextStep.column, this.boss.nextStep.row);
      target = new THREE.Vector3(nextWorld.x, 0, nextWorld.z);
    }

    const toTarget = target.clone().sub(this.boss.group.position);
    toTarget.y = 0;
    if (toTarget.lengthSq() > 0.001) {
      this.boss.facing = Math.atan2(toTarget.x, toTarget.z);
      const speedBoost = this.isPortalReady() ? 1.16 : 1;
      toTarget.normalize().multiplyScalar(this.boss.speed * speedBoost * delta);
      this.moveEntity(this.boss.group, toTarget, this.boss.radius);
    }

    if (this.boss.group.position.distanceTo(this.player.mesh.position) <= this.boss.hitDistance && this.enemyHitCooldown <= 0) {
      this.handleEnemyHit({
        cooldown: BOSS_HIT_COOLDOWN,
        penalty: 140,
        barrierMessage: `${this.boss.name} crashed into your barrier and knocked you back to the start.`,
        feedback: `${this.boss.name} caught you. -140 points and back to the start pad.`,
        miniFeedback: "The boss is on you now. Grab space, then sprint for the portal route."
      });
    }
  }

  shouldWakeBoss() {
    if (!this.boss || this.boss.awakened) {
      return false;
    }

    if (this.boss.wakeOn === "portal") {
      return this.isPortalReady();
    }

    return this.remainingValues.size === 0;
  }

  activateBoss() {
    if (!this.boss || this.boss.awakened) {
      return;
    }

    this.boss.awakened = true;
    this.boss.active = true;
    this.boss.pathCooldown = 0;
    this.pulseCanvas("danger");
    this.refs.banner.textContent = `${this.boss.name} is awake. Run.`;
    this.setFeedback(`${this.boss.name} has broken out of the fortress core. Finish the route and escape the maze.`, "danger");
    this.refs.miniFeedback.textContent = this.isPortalReady()
      ? "The portal is open, but the boss is chasing you. Sprint for the ring."
      : "The fortress guardian is hunting you now. Grab the last key cubes and keep moving.";
  }

  findNextStepToward(startCell, targetCell) {
    if (startCell.column === targetCell.column && startCell.row === targetCell.row) {
      return targetCell;
    }

    const queue = [startCell];
    const visited = new Set([`${startCell.column},${startCell.row}`]);
    const previous = new Map();
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1]
    ];

    while (queue.length > 0) {
      const cell = queue.shift();
      for (const [columnStep, rowStep] of directions) {
        const nextColumn = cell.column + columnStep;
        const nextRow = cell.row + rowStep;
        const key = `${nextColumn},${nextRow}`;
        if (visited.has(key)) {
          continue;
        }
        if (
          nextRow < 0 ||
          nextRow >= this.wallRows.length ||
          nextColumn < 0 ||
          nextColumn >= this.wallRows[0].length
        ) {
          continue;
        }
        if (!this.wallRows[nextRow] || this.wallRows[nextRow][nextColumn] === "#") {
          continue;
        }

        visited.add(key);
        previous.set(key, cell);

        if (nextColumn === targetCell.column && nextRow === targetCell.row) {
          let step = { column: nextColumn, row: nextRow };
          let parent = previous.get(key);
          while (parent && !(parent.column === startCell.column && parent.row === startCell.row)) {
            step = parent;
            parent = previous.get(`${parent.column},${parent.row}`);
          }
          return step;
        }

        queue.push({ column: nextColumn, row: nextRow });
      }
    }

    return null;
  }

  enemyCanSeePlayer(enemy) {
    const enemyCell = this.worldToCell(enemy.group.position.x, enemy.group.position.z);
    const playerCell = this.worldToCell(this.player.mesh.position.x, this.player.mesh.position.z);

    if (enemyCell.row === playerCell.row) {
      const step = enemyCell.column < playerCell.column ? 1 : -1;
      for (let column = enemyCell.column + step; column !== playerCell.column; column += step) {
        if (this.wallRows[enemyCell.row][column] === "#") {
          return false;
        }
      }
      return true;
    }

    if (enemyCell.column === playerCell.column) {
      const step = enemyCell.row < playerCell.row ? 1 : -1;
      for (let row = enemyCell.row + step; row !== playerCell.row; row += step) {
        if (this.wallRows[row][enemyCell.column] === "#") {
          return false;
        }
      }
      return true;
    }

    return false;
  }

  moveEntity(group, movement, radius) {
    const nextX = group.position.x + movement.x;
    if (!this.collidesAt(nextX, group.position.z, radius)) {
      group.position.x = nextX;
    }

    const nextZ = group.position.z + movement.z;
    if (!this.collidesAt(group.position.x, nextZ, radius)) {
      group.position.z = nextZ;
    }
  }

  collidesAt(x, z, radius = PLAYER_RADIUS) {
    const cell = this.worldToCell(x, z);
    for (let row = cell.row - 1; row <= cell.row + 1; row += 1) {
      for (let column = cell.column - 1; column <= cell.column + 1; column += 1) {
        if (this.wallRows[row] && this.wallRows[row][column] === "#") {
          const world = this.cellToWorld(column, row);
          if (
            Math.abs(x - world.x) < HALF_CELL + radius &&
            Math.abs(z - world.z) < HALF_CELL + radius
          ) {
            return true;
          }
        }
      }
    }
    return false;
  }

  handleEnemyHit(options = {}) {
    const cooldown = options.cooldown ?? ENEMY_HIT_COOLDOWN;
    const penalty = options.penalty ?? 90;
    const barrierMessage = options.barrierMessage ?? "Sentry hit absorbed by your barrier cube.";
    const feedback = options.feedback ?? `A sentry caught you. -${penalty} points and back to the start pad.`;
    const miniFeedback = options.miniFeedback ?? "Enemy contact. Regroup and choose a safer route through the maze.";

    this.enemyHitCooldown = cooldown;
    if (this.consumeBarrier(barrierMessage)) {
      this.resetPlayerPosition();
      return;
    }

    this.lives -= 1;
    this.score = Math.max(0, this.score - penalty);
    this.pulseCanvas("danger");
    this.resetPlayerPosition();
    this.setFeedback(feedback, "danger");
    this.refs.miniFeedback.textContent = miniFeedback;

    if (this.lives <= 0) {
      this.isResetting = true;
      this.refs.banner.textContent = "Shields depleted. Restarting the level.";
      this.refs.next.disabled = true;
      this.refs.next.textContent = "Restarting...";
      this.levelComplete = true;
      this.resetTimer = window.setTimeout(() => {
        this.loadLevel(this.levelIndex, { restoreLevelScore: true });
      }, LEVEL_RESET_DELAY_MS);
    }

    this.updateHud();
  }

  checkPickupCollisions() {
    const playerPosition = this.player.mesh.position;
    for (const pickup of this.pickups) {
      if (pickup.collected) {
        continue;
      }

      if (playerPosition.distanceTo(pickup.group.position) <= PICKUP_DISTANCE) {
        this.collectPickup(pickup);
        break;
      }
    }
  }

  checkCoinCollisions() {
    const playerPosition = this.player.mesh.position;
    for (const coin of this.coins) {
      if (coin.collected) {
        continue;
      }

      if (playerPosition.distanceTo(coin.group.position) <= PICKUP_DISTANCE) {
        coin.collected = true;
        coin.group.visible = false;
        this.coinsCollected += 1;
        this.score += COIN_SCORE;
        this.setFeedback(`Coin trail collected. +${COIN_SCORE} points.`, "arcade");
        this.refs.miniFeedback.textContent = "Bonus coin grabbed. Stay moving and keep the route clean.";
        this.pulseCanvas("success");
        this.updateHud();
        break;
      }
    }
  }

  checkKeyCollisions() {
    const playerPosition = this.player.mesh.position;
    for (const keyItem of this.keyItems) {
      if (keyItem.collected) {
        continue;
      }

      if (playerPosition.distanceTo(keyItem.group.position) <= PICKUP_DISTANCE) {
        keyItem.collected = true;
        keyItem.group.visible = false;
        this.keysCollected += 1;
        this.score += KEY_SCORE;
        const remainingKeys = this.totalKeys - this.keysCollected;
        if (this.isPortalReady()) {
          this.refs.banner.textContent = "Portal unlocked. Head to the blue ring.";
          this.setFeedback(`Key cube secured. +${KEY_SCORE} points. The portal is now fully unlocked.`, "success");
          this.refs.miniFeedback.textContent = "Final gate opened. Dash to the exit before a sentry cuts you off.";
        } else {
          const keyStatus = remainingKeys > 0
            ? `${remainingKeys} key cube${remainingKeys === 1 ? "" : "s"} left.`
            : "All key cubes secured.";
          this.setFeedback(`Key cube secured. +${KEY_SCORE} points. ${keyStatus}`, "arcade");
          this.refs.miniFeedback.textContent = this.remainingValues.size === 0
            ? "Numbers cleared. Find the last key cube to unlock the portal."
            : "Key cube banked. Finish the target numbers to open the portal.";
        }
        this.pulseCanvas("success");
        this.updateHud();
        break;
      }
    }
  }

  checkTrapCollisions() {
    if (this.trapCooldown > 0) {
      return;
    }

    const playerPosition = this.player.mesh.position;
    for (const trap of this.traps) {
      if (trap.triggered) {
        continue;
      }

      const distance = Math.hypot(playerPosition.x - trap.group.position.x, playerPosition.z - trap.group.position.z);
      if (distance <= TRAP_TRIGGER_DISTANCE) {
        this.triggerTrapDoor(trap);
        break;
      }
    }
  }

  triggerTrapDoor(trap) {
    trap.triggered = true;
    this.trapCooldown = TRAP_TRIGGER_COOLDOWN;
    if (this.consumeBarrier("Barrier cube held while the trap door collapsed.")) {
      this.resetPlayerPosition();
      this.refs.miniFeedback.textContent = "Trap sprung. The barrier saved you, but that route is gone.";
      return;
    }

    this.lives -= 1;
    this.score = Math.max(0, this.score - TRAP_PENALTY);
    this.pulseCanvas("danger");
    this.resetPlayerPosition();
    this.setFeedback(`Trap door triggered. -${TRAP_PENALTY} points and one shield lost.`, "danger");
    this.refs.miniFeedback.textContent = "A trap door dumped you back to the start. Reroute fast before the sentries recover.";

    if (this.lives <= 0) {
      this.isResetting = true;
      this.refs.banner.textContent = "Shields depleted. Restarting the level.";
      this.refs.next.disabled = true;
      this.refs.next.textContent = "Restarting...";
      this.levelComplete = true;
      this.resetTimer = window.setTimeout(() => {
        this.loadLevel(this.levelIndex, { restoreLevelScore: true });
      }, LEVEL_RESET_DELAY_MS);
    }

    this.updateHud();
  }

  collectPickup(pickup) {
    pickup.collected = true;
    pickup.group.visible = false;
    this.score += PICKUP_SCORE;

    if (pickup.type === "speed") {
      this.speedBoostTimer = Math.max(this.speedBoostTimer, SPEED_BOOST_DURATION);
      this.setFeedback(`Speed cube collected. +${PICKUP_SCORE} points and ${SPEED_BOOST_DURATION}s of boost.`, "arcade");
      this.refs.miniFeedback.textContent = "Speed boost live. Cut across the maze before the enemies close in.";
      this.pulseCanvas("success");
    } else {
      this.shieldBoostTimer = Math.max(this.shieldBoostTimer, SHIELD_BOOST_DURATION);
      this.shieldBoostHits = Math.min(this.shieldBoostHits + 1, 2);
      this.setFeedback(`Barrier cube collected. +${PICKUP_SCORE} points and ${this.shieldBoostHits} protected hit${this.shieldBoostHits === 1 ? "" : "s"}.`, "arcade");
      this.refs.miniFeedback.textContent = "Barrier active. You can absorb the next danger hit.";
      this.pulseCanvas("success");
    }

    this.updateHud();
  }

  consumeBarrier(message) {
    if (this.shieldBoostHits <= 0 || this.shieldBoostTimer <= 0) {
      return false;
    }

    this.shieldBoostHits -= 1;
    if (this.shieldBoostHits === 0) {
      this.shieldBoostTimer = 0;
    }
    this.pulseCanvas("success");
    this.setFeedback(message, "arcade");
    this.refs.miniFeedback.textContent = "Barrier absorbed the hit. Keep moving.";
    this.updateHud();
    return true;
  }

  checkTokenCollisions() {
    const playerPosition = this.player.mesh.position;
    for (const token of this.tokens) {
      if (token.collected) {
        continue;
      }

      if (playerPosition.distanceTo(token.group.position) <= PICKUP_DISTANCE) {
        this.resolveToken(token);
        break;
      }
    }
  }

	  resolveToken(token) {
    if (token.collected) {
      return;
    }
    token.collected = true;
    token.group.visible = false;
    const isCorrect = this.requiredValues.has(token.value);

    if (isCorrect) {
      this.remainingValues.delete(token.value);
      this.collectedValues.add(token.value);
      this.correctCount += 1;
      const points = 120 + Math.max(0, 8 - Math.floor(this.elapsed)) * 3;
      this.score += points;
      this.pulseCanvas("success");
      this.setFeedback(`${explain(token.value)} +${points} points. Keep moving before the sentries close in.`, "success");
      this.refs.miniFeedback.textContent = `Correct. +${points} points. ${this.remainingValues.size} target numbers left.`;
	      if (this.remainingValues.size === 0) {
        if (this.isPortalReady()) {
	          this.refs.banner.textContent = "Portal unlocked. Head to the blue ring.";
	          this.refs.miniFeedback.textContent = "The exit portal is now open.";
	          this.setFeedback(`All correct numbers collected. ${explain(token.value)} Portal unlocked.`, "success");
        } else {
          const keysLeft = this.totalKeys - this.keysCollected;
          this.refs.banner.textContent = "Numbers cleared. Find the key cube.";
          this.refs.miniFeedback.textContent = `${keysLeft} key cube${keysLeft === 1 ? "" : "s"} still needed to unlock the portal.`;
          this.setFeedback(`All correct numbers collected. ${explain(token.value)} Now find the remaining key cube${keysLeft === 1 ? "" : "s"}.`, "success");
        }
	      }
	    } else {
      if (this.consumeBarrier("Barrier absorbed your mistake. No shield lost.")) {
        token.group.visible = false;
        this.setFeedback(`${explain(token.value)} Barrier saved you, but the token is gone.`, "arcade");
        this.refs.miniFeedback.textContent = "Barrier used. You kept your shield, but the wrong token is still lost.";
        this.updateHud();
        return;
      }
      this.lives -= 1;
      this.score = Math.max(0, this.score - 60);
      this.pulseCanvas("danger");
      this.setFeedback(`${explain(token.value)} Wrong target. -60 points and one shield lost.`, "danger");
      this.refs.miniFeedback.textContent = "Wrong pick. You lost a shield, so route carefully around the sentries.";
      this.resetPlayerPosition();
      if (this.lives <= 0) {
        this.isResetting = true;
        this.refs.banner.textContent = "Shields depleted. Restarting the level.";
        this.refs.next.disabled = true;
        this.refs.next.textContent = "Restarting...";
        this.levelComplete = true;
        this.resetTimer = window.setTimeout(() => {
          this.loadLevel(this.levelIndex, { restoreLevelScore: true });
        }, LEVEL_RESET_DELAY_MS);
      }
    }

    this.updateHud();
  }

	  checkExit() {
	    const exitWorld = this.cellToWorld(this.level.exit[0], this.level.exit[1]);
	    const distance = this.player.mesh.position.distanceTo(new THREE.Vector3(exitWorld.x, PLAYER_HEIGHT, exitWorld.z));
	    if (distance > EXIT_DISTANCE) {
	      return;
	    }

    if (!this.isPortalReady()) {
	      this.setFeedback(`The portal is locked. ${this.describePortalNeeds()}.`, "info");
	      this.refs.miniFeedback.textContent = `Portal locked. You still need ${this.describePortalNeeds()}.`;
	      return;
	    }

    if (this.levelComplete) {
      return;
    }

    this.levelComplete = true;
    this.unlockedLevels = Math.max(this.unlockedLevels, Math.min(LEVELS.length, this.levelIndex + 2));
    this.refreshLevelButtons();
    this.refs.banner.textContent = `${this.level.title} complete.`;

    const isLastLevel = this.levelIndex === LEVELS.length - 1;
    const levelBonus = Math.max(120, 420 - Math.floor(this.elapsed * 12)) + this.lives * 120 + this.enemies.length * 40 + (this.boss?.awakened ? BOSS_BONUS : 0);
    this.score += levelBonus;
    this.refs.next.disabled = false;
    this.refs.next.textContent = isLastLevel ? "Play levels again" : "Next level";
    this.setFeedback(
      isLastLevel
        ? `You cleared every scaffolded maze${this.boss?.awakened ? ` and outran ${this.boss.name}` : ""}. Level bonus +${levelBonus}. Replay any level to chase a higher score.`
        : `Portal crossed. Level bonus +${levelBonus}. Move on when you are ready for the next scaffolded level.`,
      "arcade"
    );
    this.refs.miniFeedback.textContent = `Level clear. Bonus +${levelBonus}.`;
    this.updateHud();
  }

  advanceLevel() {
    if (!this.levelComplete) {
      return;
    }
    const nextIndex = this.levelIndex === LEVELS.length - 1 ? 0 : this.levelIndex + 1;
    this.loadLevel(nextIndex);
  }

  updateHud() {
    const goalCount = this.level.requiredValues.length;
    const progress = goalCount === 0 ? 0 : this.correctCount / goalCount;
    const totalThreats = this.enemies.length + (this.boss ? 1 : 0);
    this.refs.scaffold.textContent = this.level.scaffold;
    this.refs.targetKind.textContent = `${this.level.targetLabel} / Escape`;
    this.refs.levelTitle.textContent = this.level.title;
    this.refs.objective.textContent = `${this.level.objective} Grab ${this.totalKeys} key cube${this.totalKeys === 1 ? "" : "s"}, dodge ${this.traps.length} trap door${this.traps.length === 1 ? "" : "s"}, and avoid ${totalThreats} threat${totalThreats === 1 ? "" : "s"}.`;
    this.refs.support.textContent = this.boss
      ? `${this.level.support} The fortress uses block-textured stone, and the golem wakes once you clear the target numbers.`
      : `${this.level.support} Gold voxels mark coin trails, and cracked floor plates collapse once.`;
    this.refs.lives.textContent = String(this.lives);
    this.refs.score.textContent = String(this.score);
    this.refs.boost.textContent = this.describeBoostState();
    this.refs.keys.textContent = `${this.keysCollected}/${this.totalKeys}`;
    this.refs.streak.textContent = String(totalThreats);
    this.refs.correct.textContent = String(this.correctCount);
    this.refs.goal.textContent = String(goalCount);
    this.refs.progressBar.style.width = `${progress * 100}%`;
    if (this.isResetting) {
      this.refs.banner.textContent = "Shields depleted. Restarting the level.";
      this.refs.progressText.textContent = "Reloading the current maze.";
      this.refs.next.disabled = true;
      this.refs.next.textContent = "Restarting...";
      return;
    }

    if (this.levelComplete) {
      this.refs.banner.textContent = `${this.level.title} complete.`;
      this.refs.progressText.textContent = "Portal crossed. Your score is banked for the next level.";
      this.refs.next.disabled = false;
      this.refs.next.textContent = this.levelIndex === LEVELS.length - 1 ? "Play levels again" : "Next level";
      return;
    }

    this.refs.banner.textContent = this.isPortalReady()
      ? (this.boss?.active ? `${this.boss.name} is chasing you. Reach the exit ring.` : "Portal unlocked. Reach the exit ring.")
      : this.boss?.active
        ? `${this.boss.name} is hunting you.`
      : this.remainingValues.size === 0
        ? "Numbers cleared. Find the key cube."
        : this.level.prompt;
    const baseProgressText = this.level.showRequiredList
      ? this.describeRemainingList()
      : this.describeRemainingCount();
    this.refs.progressText.textContent = this.boss?.active
      ? `${baseProgressText} ${this.isPortalReady() ? "Boss active: sprint to the portal." : "Boss active: keep moving."}`
      : baseProgressText;
    this.refs.next.disabled = !this.levelComplete;
    this.refs.next.textContent = this.levelComplete
      ? (this.levelIndex === LEVELS.length - 1 ? "Play levels again" : "Next level")
      : "Finish the maze first";
  }

	  describeRemainingList() {
	    const remaining = this.level.requiredValues.filter((value) => this.remainingValues.has(value));
	    if (remaining.length === 0) {
      if (!this.hasAllKeys()) {
        return `All target numbers collected. Key cubes: ${this.keysCollected}/${this.totalKeys}.`;
      }
	      return "All target numbers and keys collected. Use the portal.";
	    }
    const keySuffix = this.totalKeys > 0 ? ` Keys: ${this.keysCollected}/${this.totalKeys}.` : "";
	    return `Still needed: ${remaining.join(", ")}.${keySuffix}`;
	  }

	  describeRemainingCount() {
	    if (this.remainingValues.size === 0) {
      if (!this.hasAllKeys()) {
        return `${this.totalKeys - this.keysCollected} key cube${this.totalKeys - this.keysCollected === 1 ? "" : "s"} left before the portal opens.`;
      }
	      return "All target numbers and keys collected. Use the portal.";
	    }
    const keySuffix = this.totalKeys > 0 ? ` Keys ${this.keysCollected}/${this.totalKeys}.` : "";
	    return `${this.remainingValues.size} correct number${this.remainingValues.size === 1 ? "" : "s"} left in this maze.${keySuffix}`;
	  }

  setFeedback(message, tone) {
    this.refs.feedback.textContent = message;
    this.refs.feedback.className = `prime-maze-feedback prime-maze-feedback-${tone}`;
  }

	  describeBoostState() {
    const states = [];
    if (this.speedBoostTimer > 0) {
      states.push(`SPD ${Math.ceil(this.speedBoostTimer)}s`);
    }
    if (this.shieldBoostHits > 0 && this.shieldBoostTimer > 0) {
      states.push(`SHD ${this.shieldBoostHits}`);
    }
	    return states.join(" / ") || "None";
	  }

  hasAllKeys() {
    return this.keysCollected >= this.totalKeys;
  }

  isPortalReady() {
    return this.remainingValues.size === 0 && this.hasAllKeys();
  }

  describePortalNeeds() {
    const needs = [];
    if (this.remainingValues.size > 0) {
      needs.push(`${this.remainingValues.size} correct number${this.remainingValues.size === 1 ? "" : "s"}`);
    }
    if (!this.hasAllKeys()) {
      const keysLeft = this.totalKeys - this.keysCollected;
      needs.push(`${keysLeft} key cube${keysLeft === 1 ? "" : "s"}`);
    }
    return needs.join(" and ");
  }

  pulseCanvas(tone) {
    if (this.flashTimer) {
      window.clearTimeout(this.flashTimer);
    }
    this.refs.canvasShell.classList.remove("flash-success", "flash-danger");
    this.refs.canvasShell.classList.add(tone === "success" ? "flash-success" : "flash-danger");
    this.flashTimer = window.setTimeout(() => {
      this.refs.canvasShell.classList.remove("flash-success", "flash-danger");
    }, 180);
  }

  refreshLevelButtons() {
    [...this.refs.levelPicker.children].forEach((button, index) => {
      const lockLabel = button.querySelector(".prime-maze-level-lock");
      const unlocked = index < this.unlockedLevels;
      button.disabled = !unlocked;
      button.classList.toggle("active", index === this.levelIndex);
      lockLabel.textContent = unlocked ? "Open" : "Lock";
    });
  }

  cellToWorld(column, row) {
    const width = this.level.maze[0].length;
    const height = this.level.maze.length;
    return {
      x: (column - width / 2 + 0.5) * CELL_SIZE,
      z: (row - height / 2 + 0.5) * CELL_SIZE
    };
  }

  worldToCell(x, z) {
    const width = this.level.maze[0].length;
    const height = this.level.maze.length;
    const column = Math.round(x / CELL_SIZE + width / 2 - 0.5);
    const row = Math.round(z / CELL_SIZE + height / 2 - 0.5);
    return {
      column: clamp(column, 0, width - 1),
      row: clamp(row, 0, height - 1)
    };
  }
}

new PrimeMazeGame();
