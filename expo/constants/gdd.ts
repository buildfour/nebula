interface NameItem {
  label: string;
  desc: string;
}

interface DetailItem {
  key: string;
  value: string;
}

interface EnemyItem {
  name: string;
  health: string;
  score: string;
  behavior: string;
  color: string;
}

interface WeaponPrimary {
  name: string;
  desc: string;
}

interface WeaponSecondary {
  name: string;
  cooldown: string;
}

interface LevelItem {
  name: string;
  theme: string;
  mechanic: string;
  color: string;
}

interface PowerupItem {
  name: string;
  effect: string;
  color: string;
}

interface SpecItem {
  key: string;
  value: string;
}

interface NamesSection {
  id: 'names';
  title: string;
  icon: string;
  items: NameItem[];
}

interface OverviewSection {
  id: 'overview';
  title: string;
  icon: string;
  details: DetailItem[];
}

interface EnemiesSection {
  id: 'enemies';
  title: string;
  icon: string;
  enemies: EnemyItem[];
}

interface WeaponsSection {
  id: 'weapons';
  title: string;
  icon: string;
  primary: WeaponPrimary[];
  secondary: WeaponSecondary[];
}

interface LevelsSection {
  id: 'levels';
  title: string;
  icon: string;
  levels: LevelItem[];
}

interface PowerupsSection {
  id: 'powerups';
  title: string;
  icon: string;
  items: PowerupItem[];
}

interface HudSection {
  id: 'hud';
  title: string;
  icon: string;
  elements: string[];
}

interface TechSection {
  id: 'tech';
  title: string;
  icon: string;
  specs: SpecItem[];
}

export type GDDSection =
  | NamesSection
  | OverviewSection
  | EnemiesSection
  | WeaponsSection
  | LevelsSection
  | PowerupsSection
  | HudSection
  | TechSection;

export const GDD_SECTIONS: GDDSection[] = [
  {
    id: 'names',
    title: 'Game Names',
    icon: 'Sparkles',
    items: [
      { label: 'Nebula Strike', desc: 'Evokes the cosmic setting and aggressive combat gameplay.' },
      { label: 'Void Reapers', desc: 'Dark, edgy name suggesting dominance over the void of space.' },
      { label: 'Starfront Blitz', desc: 'Conveys fast-paced, frontline space warfare.' },
    ],
  },
  {
    id: 'overview',
    title: 'Game Overview',
    icon: 'Gamepad2',
    details: [
      { key: 'Genre', value: '2D Side-Scrolling Shoot \'em Up' },
      { key: 'Platform', value: 'Web (HTML5 Canvas / WebGL)' },
      { key: 'Audience', value: 'Casual to mid-core, ages 12+' },
      { key: 'Art Style', value: 'Vibrant cartoon/comic with bold outlines' },
      { key: 'Inspirations', value: 'Gradius, R-Type, Galaga, Geometry Wars' },
    ],
  },
  {
    id: 'enemies',
    title: 'Enemy Types',
    icon: 'Bug',
    enemies: [
      {
        name: 'Drone (Swarm)',
        health: '1 hit',
        score: '100 pts',
        behavior: 'Spawns in groups of 6-12. Sine wave movement. Kamikaze attack.',
        color: '#eedd33',
      },
      {
        name: 'Scout (Orb)',
        health: '3 hits',
        score: '300 pts',
        behavior: 'Circular patterns. Fires aimed shots at player (1.5s interval).',
        color: '#aa44dd',
      },
      {
        name: 'Heavy Gunship',
        health: '12 hits',
        score: '1,000 pts',
        behavior: 'Holds position, fires triple-spread + laser beam.',
        color: '#dd4444',
      },
      {
        name: 'Boss',
        health: '100+ hits',
        score: '10,000+ pts',
        behavior: '3 attack phases: spread fire, laser sweep + drones, rapid barrage.',
        color: '#ff6622',
      },
    ],
  },
  {
    id: 'weapons',
    title: 'Weapons',
    icon: 'Crosshair',
    primary: [
      { name: 'Pulse Cannon', desc: 'Single forward blue energy bolt (default)' },
      { name: 'Twin Lasers', desc: 'Two parallel continuous laser beams' },
      { name: 'Spread Shot', desc: '5-way fan of energy bolts' },
      { name: 'Mega Beam', desc: 'Wide, powerful continuous beam' },
    ],
    secondary: [
      { name: 'Homing Missiles', cooldown: '5s' },
      { name: 'EMP Blast', cooldown: '12s' },
      { name: 'Nova Bomb', cooldown: '1/life' },
    ],
  },
  {
    id: 'levels',
    title: 'Levels',
    icon: 'Map',
    levels: [
      { name: 'Orion Drift', theme: 'Blue nebula', mechanic: 'Tutorial waves', color: '#4488cc' },
      { name: 'Crimson Veil', theme: 'Red/orange nebula', mechanic: 'Asteroid hazards', color: '#dd4444' },
      { name: 'Emerald Abyss', theme: 'Green/teal deep space', mechanic: 'Gas clouds reduce visibility', color: '#44cc55' },
      { name: 'Phantom Reach', theme: 'Purple/pink nebula', mechanic: 'Wormhole portals', color: '#aa44dd' },
      { name: 'The Void Core', theme: 'Dark void', mechanic: 'Lightning + final boss', color: '#ff6622' },
    ],
  },
  {
    id: 'powerups',
    title: 'Power-Ups',
    icon: 'Zap',
    items: [
      { name: 'Shield Restore', effect: '+50% shield', color: '#44ddff' },
      { name: 'Power Boost', effect: '+25% power, fire rate boost (10s)', color: '#ffcc00' },
      { name: 'Weapon Upgrade', effect: 'Next weapon tier (until death)', color: '#dd4444' },
      { name: 'Extra Life', effect: '+1 life', color: '#44cc55' },
      { name: 'Score Multiplier', effect: 'x2 score (15s)', color: '#ffa500' },
      { name: 'Magnet', effect: 'Auto-collect pickups (12s)', color: '#aa44dd' },
    ],
  },
  {
    id: 'hud',
    title: 'HUD & UI',
    icon: 'Monitor',
    elements: [
      'Lives counter (rocket icon x3) — top-left',
      'Shield bar (segmented, blue/cyan) — top-left center',
      'Score display (bold white) — top-right',
      'Wave counter + objective — right side',
      'Power gauge (yellow bar) — bottom-left',
      'Special weapon button — bottom-center',
      'Target/boss health indicator — bottom-right',
    ],
  },
  {
    id: 'tech',
    title: 'Tech Specs',
    icon: 'Cpu',
    specs: [
      { key: 'Rendering', value: 'HTML5 Canvas / WebGL' },
      { key: 'Resolution', value: '1920x1080 (16:9)' },
      { key: 'Target FPS', value: '60fps' },
      { key: 'Optimization', value: 'Sprite batching, object pooling, texture atlases' },
      { key: 'Parallax', value: '3 layers: stars, nebula, foreground debris' },
    ],
  },
];
