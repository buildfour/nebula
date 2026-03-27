export interface GameAsset {
  id: string;
  name: string;
  filename: string;
  dimensions: string;
  category: 'ship' | 'enemy' | 'environment' | 'effect' | 'ui' | 'powerup';
  description: string;
  url: string;
}

export const GAME_ASSETS: GameAsset[] = [
  {
    id: 'player_ship',
    name: 'Player Ship',
    filename: 'player_ship.png',
    dimensions: '256x256',
    category: 'ship',
    description: 'Large stylized sci-fi fighter spacecraft with silver hull, red/blue accents, and twin engines.',
    url: 'https://r2-pub.rork.com/generated-images/0eab8f80-2692-4959-bc05-fddbb39f0e7c.png',
  },
  {
    id: 'enemy_drone',
    name: 'Drone Enemy',
    filename: 'enemy_drone.png',
    dimensions: '128x128',
    category: 'enemy',
    description: 'Small crab/spider-like robot with glowing eye and mechanical legs. Yellow-green coloring.',
    url: 'https://r2-pub.rork.com/generated-images/bb492411-2437-454f-aa3d-1276ad3e7b56.png',
  },
  {
    id: 'enemy_scout',
    name: 'Scout Enemy',
    filename: 'enemy_scout.png',
    dimensions: '160x160',
    category: 'enemy',
    description: 'Spherical alien craft with tentacle appendages. Purple/magenta with glowing core.',
    url: 'https://r2-pub.rork.com/generated-images/b07074c7-0fc2-4611-9cf3-e2c0a2315bf1.png',
  },
  {
    id: 'enemy_heavy',
    name: 'Heavy Gunship',
    filename: 'enemy_heavy.png',
    dimensions: '256x192',
    category: 'enemy',
    description: 'Large angular armored warship. Dark grey/red with glowing weapon ports.',
    url: 'https://r2-pub.rork.com/generated-images/2657a82c-1adc-4c64-9812-6fc369ced5d2.png',
  },
  {
    id: 'enemy_boss',
    name: 'Boss Enemy',
    filename: 'enemy_boss.png',
    dimensions: '512x384',
    category: 'enemy',
    description: 'Massive multi-segmented mechanical boss with red energy lines and glowing weak point.',
    url: 'https://r2-pub.rork.com/generated-images/ac9ab44e-5f9f-4c34-a2dc-06f5294984b9.png',
  },
  {
    id: 'bg_nebula',
    name: 'Space Nebula BG',
    filename: 'bg_nebula.png',
    dimensions: '1920x1080',
    category: 'environment',
    description: 'Deep space nebula with blues, purples, teals, and pink highlights. Dense star field.',
    url: 'https://r2-pub.rork.com/generated-images/f0f027c8-4981-465a-8ac6-2411d445b3f4.png',
  },
  {
    id: 'asteroid',
    name: 'Asteroid',
    filename: 'asteroid.png',
    dimensions: '128x128',
    category: 'environment',
    description: 'Rocky space asteroid with craters. Grey-brown, irregular shape with fragments.',
    url: 'https://r2-pub.rork.com/generated-images/6f3dd4df-3065-43bc-b879-e45a76374768.png',
  },
  {
    id: 'projectile_laser',
    name: 'Laser Projectile',
    filename: 'projectile_laser.png',
    dimensions: '64x16',
    category: 'effect',
    description: 'Bright cyan energy bolt with white core and glowing trail.',
    url: 'https://r2-pub.rork.com/generated-images/e6353d32-9b0e-401a-b9a9-e9d5251d72f4.png',
  },
  {
    id: 'explosion',
    name: 'Explosion',
    filename: 'explosion.png',
    dimensions: '192x192',
    category: 'effect',
    description: 'Colorful burst with orange/yellow center and expanding sparks.',
    url: 'https://r2-pub.rork.com/generated-images/6df6fcc0-8167-476a-9c7f-30c572e4161b.png',
  },
  {
    id: 'powerup_shield',
    name: 'Shield Power-Up',
    filename: 'powerup_shield.png',
    dimensions: '64x64',
    category: 'powerup',
    description: 'Blue diamond with shield emblem. Cyan aura glow.',
    url: 'https://r2-pub.rork.com/generated-images/c817199b-41f6-469e-8f9b-a6a8fbf4e7ca.png',
  },
  {
    id: 'powerup_power',
    name: 'Power Boost',
    filename: 'powerup_power.png',
    dimensions: '64x64',
    category: 'powerup',
    description: 'Yellow/orange orb with lightning bolt. Electric energy crackles.',
    url: 'https://r2-pub.rork.com/generated-images/1ae81062-1472-4df2-a20c-7ba56b12235c.png',
  },
  {
    id: 'hud_elements',
    name: 'HUD Elements',
    filename: 'hud_elements.png',
    dimensions: '512x256',
    category: 'ui',
    description: 'Sprite sheet with health bar, power gauge, life icon, crosshair, and score frame.',
    url: 'https://r2-pub.rork.com/generated-images/f3fbf32f-15e3-4428-a3e0-468a95603c4c.png',
  },
];

export const ASSET_CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'ship', label: 'Ships' },
  { key: 'enemy', label: 'Enemies' },
  { key: 'environment', label: 'Environment' },
  { key: 'effect', label: 'Effects' },
  { key: 'powerup', label: 'Power-Ups' },
  { key: 'ui', label: 'UI' },
] as const;
