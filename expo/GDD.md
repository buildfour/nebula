# Game Design Document (GDD)

---

## Game Name Options

1. **Nebula Strike** — Evokes the cosmic setting and aggressive combat gameplay.
2. **Void Reapers** — Dark, edgy name suggesting dominance over the void of space.
3. **Starfront Blitz** — Conveys fast-paced, frontline space warfare.

---

## 1. Game Overview

### High Concept
A fast-paced, 2D horizontal-scrolling space shooter where the player pilots a massive, heavily armed starship through waves of diverse alien enemies set against a breathtaking deep-space nebula. The game emphasizes fluid combat, escalating difficulty, and visual spectacle.

### Genre
2D Side-Scrolling Shoot 'em Up (Shmup)

### Platform
Web (2D browser game)

### Target Audience
Casual to mid-core gamers aged 12+, fans of classic arcade shooters like Gradius, R-Type, and Galaga with a modern visual twist.

### Art Style
Vibrant, cartoon/comic-book style with bold outlines, saturated colors, and dynamic lighting effects. Ships and enemies feature chunky, exaggerated proportions with metallic textures and glowing energy accents. The overall aesthetic is colorful and energetic — not grimdark, but stylized sci-fi with a playful edge.

### Color Palette
- **Background:** Deep blues (#0a0e2a), teals (#1a4a6a), purples (#3a1a5a), with pink/magenta nebula highlights (#d44a8a)
- **Player Ship:** Silver/white hull (#c8d0dc), red accents (#e04040), blue accents (#4488cc), orange engine glow (#ff8833)
- **Enemies:** Varied bright colors — yellow (#eedd33), green (#44cc55), pink (#ee55aa), purple (#aa44dd), red (#dd4444)
- **Projectiles:** Bright cyan/electric blue (#44ddff) for player, orange/red (#ff6622) for enemies
- **HUD:** Semi-transparent dark panels with cyan text (#44ffee), yellow power bars (#ffcc00), red target indicators (#ff3333)

---

## 2. Gameplay Mechanics

### Core Loop
1. **Engage** — Navigate the ship through space, encountering waves of enemies.
2. **Destroy** — Shoot down enemies using primary and secondary weapons.
3. **Survive** — Manage shield, power, and lives to stay alive.
4. **Upgrade** — Collect power-ups dropped by destroyed enemies.
5. **Progress** — Clear all waves in a level to advance to the next stage.

### Player Controls
| Input | Action |
|-------|--------|
| Mouse / Touch drag | Move ship vertically and horizontally |
| Auto-fire (toggle) | Primary weapon fires continuously |
| Tap/Click special button | Activate special weapon / bomb |
| Keyboard (WASD / Arrow Keys) | Alternative movement (desktop) |

### Player Ship
- **Size:** Large and prominent on screen (~15-20% of screen width), making it feel powerful
- **Movement:** Smooth 8-directional movement with slight momentum/inertia
- **Hitbox:** Smaller than visual sprite (core cockpit area only) for fair gameplay

### Health & Defense System
| Stat | Description |
|------|-------------|
| **Shield** | Regenerating energy barrier (0-100%). Absorbs damage first. Shown as segmented blue bar. |
| **Hull HP** | Base health. Does not regenerate. Damaged when shield is depleted. |
| **Lives** | Player starts with 3 lives (shown as rocket icons). Losing all hull HP costs 1 life. |

### Weapons System

#### Primary Weapons (Auto-fire)
| Weapon | Description | Visual |
|--------|-------------|--------|
| **Pulse Cannon** (default) | Single forward-firing blue energy bolt | Small cyan projectile |
| **Twin Lasers** (upgrade) | Two parallel continuous laser beams | Twin cyan beam lines |
| **Spread Shot** (upgrade) | 5-way fan of energy bolts | Multiple angled cyan bolts |
| **Mega Beam** (upgrade) | Wide, powerful continuous beam | Thick bright white-blue beam |

#### Secondary Weapons (Cooldown-based)
| Weapon | Description | Cooldown |
|--------|-------------|----------|
| **Homing Missiles** | Lock-on missiles that track nearest enemy | 5 seconds |
| **EMP Blast** | Area-of-effect pulse that stuns enemies | 12 seconds |
| **Nova Bomb** | Screen-clearing explosion (limited uses per life) | 1 use per life |

### Power System
- **Power Gauge** (0-100%): Fuels special weapons and boost abilities
- Regenerates slowly over time (~2% per second)
- Collected power-ups instantly restore 25%
- Using special weapons drains 30-50% power

### Scoring System
- Points awarded per enemy destroyed (varies by type)
- Combo multiplier: Destroying enemies in rapid succession increases multiplier (x2, x3, x4, max x8)
- Wave clear bonus: Extra points for clearing a wave without taking damage
- End-of-level score tally with grade (S / A / B / C / D)

---

## 3. Enemy Types

### Enemy Type 1: Drone (Swarm)
- **Appearance:** Small, colorful crab/spider-like robots with 4-6 mechanical legs and a glowing central eye. Come in yellow, green, and pink color variants.
- **Size:** Small (~5% screen width)
- **Behavior:** Spawns in groups of 6-12. Moves in wave/sine patterns toward the player. Weak individually but dangerous in numbers.
- **Health:** 1 hit (pulse cannon)
- **Attack:** Kamikaze — damages player on contact
- **Score Value:** 100 points
- **Drop Rate:** 10% chance to drop small power-up

### Enemy Type 2: Scout (Orb)
- **Appearance:** Medium spherical alien craft with rotating tentacle-like appendages and a glowing energy core. Purple, teal, and magenta variants with swirl patterns.
- **Size:** Medium (~8% screen width)
- **Behavior:** Moves in circular/orbital patterns. Stops periodically to fire aimed shots at player.
- **Health:** 3 hits
- **Attack:** Single aimed orange energy bolt (1.5s interval)
- **Score Value:** 300 points
- **Drop Rate:** 20% chance to drop power-up

### Enemy Type 3: Heavy Gunship
- **Appearance:** Large, angular armored warship with twin engines, heavy plating, red/grey color scheme with glowing weapon ports. Similar in bulk to the player's ship.
- **Size:** Large (~12% screen width)
- **Behavior:** Enters from the right side slowly. Holds position and fires barrages. Takes significant damage before destruction.
- **Health:** 12 hits
- **Attack:** Triple-spread orange bolts (2s interval) + forward laser beam (every 8s)
- **Score Value:** 1,000 points
- **Drop Rate:** 50% chance to drop major power-up

### Enemy Type 4: Boss
- **Appearance:** Massive mechanical monstrosity — 2-3x the size of the player ship. Multi-segmented body with rotating turrets, armored plating, and a glowing weak point. Dark metallic hull with red energy lines.
- **Size:** Huge (~25-30% screen width)
- **Behavior:** Appears at the end of every 4th level. Has multiple attack phases with different patterns. Weak point only exposed during certain phases.
- **Health:** 100+ hits (varies by level)
- **Attack Phases:**
  - Phase 1: Wide bullet spread + homing missiles
  - Phase 2: Sweeping laser beam + drone spawning
  - Phase 3: Rapid-fire barrage + charge attack
- **Score Value:** 10,000+ points
- **Drop Rate:** Guaranteed major power-up + extra life

---

## 4. Power-Ups & Collectibles

| Power-Up | Icon | Effect | Duration |
|----------|------|--------|----------|
| **Shield Restore** | Blue diamond with shield emblem | Restores 50% shield | Instant |
| **Power Boost** | Yellow lightning bolt in orange orb | +25% power gauge, temporary fire rate boost | 10 seconds (fire rate) |
| **Weapon Upgrade** | Red arrow-up chevron | Upgrades primary weapon to next tier | Until death |
| **Extra Life** | Small rocket icon | +1 life | Permanent |
| **Score Multiplier** | Gold star | x2 score for limited time | 15 seconds |
| **Magnet** | Purple swirl | Auto-collects nearby pickups | 12 seconds |

---

## 5. Level Design

### Structure
- **12 Waves per Level** (as shown in reference UI: "Wave 10/12")
- **5 Levels** in the initial release
- Each level set in a different nebula region with distinct color themes

### Level Themes
| Level | Name | Background Theme | Special Mechanic |
|-------|------|-----------------|------------------|
| 1 | **Orion Drift** | Blue nebula with scattered stars | Tutorial waves, basic enemies only |
| 2 | **Crimson Veil** | Red/orange nebula with asteroid fields | Asteroids as environmental hazards |
| 3 | **Emerald Abyss** | Green/teal deep space with gas clouds | Gas clouds reduce visibility |
| 4 | **Phantom Reach** | Purple/pink nebula, dense star field | Wormhole portals spawn enemies from any direction |
| 5 | **The Void Core** | Dark void with electric energy storms | Lightning hazards + final boss gauntlet |

### Wave Composition (Level 3 Example)
| Wave | Enemies | Objective |
|------|---------|-----------|
| 1-3 | 8-12 Drones | Defeat Swarm |
| 4-5 | 6 Drones + 2 Scouts | Mixed Assault |
| 6 | 4 Scouts | Defeat Squadron |
| 7-8 | 10 Drones + 3 Scouts + 1 Heavy | Heavy Assault |
| 9 | Asteroid field + 6 Drones | Navigate & Survive |
| 10-11 | 2 Heavies + 8 Scouts | Defeat Swarm |
| 12 | **Boss Battle** | Destroy Boss |

### Difficulty Scaling
- Enemy count increases +20% per level
- Enemy health scales +15% per level
- Enemy fire rate increases +10% per level
- More complex movement patterns introduced per level
- Power-up drop rate slightly decreases per level

---

## 6. User Interface (HUD)

### In-Game HUD Layout (Reference Image Based)

```
+----------------------------------------------------------+
| [Rocket]x3   [Shield Bar |||||||||| ]   P1 Score: 39,780 |
| Shield: 85%                          Wave: 10/12 | Defeat|
|                                              Level 3     |
|                                                          |
|                    << GAMEPLAY AREA >>                    |
|                                                          |
| [Lightning] Power: 90%                   Target: 90%     |
| [===========-------]   [X]   [Target] [==========------] |
+----------------------------------------------------------+
```

### HUD Elements Detail

| Element | Position | Description |
|---------|----------|-------------|
| **Lives Counter** | Top-left | Rocket icon + "x3" remaining lives |
| **Shield Bar** | Top-left center | Segmented bar showing shield percentage, blue/cyan color |
| **Shield Percentage** | Below shield bar | Text readout "Shield: 85%" |
| **Score Display** | Top-right | "P1 Score: 39,780" in bold white text |
| **Wave Counter** | Right side | "Wave 10/12 | Defeat Swarm" — current objective |
| **Level Indicator** | Below wave counter | "Level 3" |
| **Power Gauge** | Bottom-left | Yellow bar with lightning icon, "Power: 90%" |
| **Special Weapon Button** | Bottom-center | Circular button with X icon (Nova Bomb) |
| **Target Indicator** | Bottom-right | Crosshair icon with "Target: 90%" (boss health or wave progress) |

### Menu Screens

#### Main Menu
- Animated nebula background with floating asteroids
- Game logo at top (stylized metallic text with glow)
- Buttons: **Play**, **Hangar** (ship upgrades), **Leaderboard**, **Settings**
- Ship slowly rotating in center as hero element

#### Pause Menu
- Semi-transparent dark overlay
- Options: **Resume**, **Restart Wave**, **Settings**, **Quit to Menu**

#### Game Over Screen
- Dramatic explosion background
- Final score display with grade
- Stats: Enemies destroyed, accuracy, time survived
- Buttons: **Retry**, **Main Menu**

---

## 7. Audio Design

### Music
- **Menu:** Ambient synth with slow cosmic pads
- **Gameplay:** Upbeat electronic/synthwave tracks, increasing intensity per level
- **Boss Battle:** Heavy, driving electronic beat with tension-building elements
- **Game Over:** Somber, fading synth

### Sound Effects
| Event | Sound Description |
|-------|-------------------|
| Player shoot | Short, punchy laser "pew" |
| Enemy shoot | Lower-pitched, warbling energy shot |
| Explosion (small) | Quick pop with crackle |
| Explosion (large) | Deep boom with reverb |
| Shield hit | Metallic shimmer/deflection |
| Hull damage | Heavy impact thud |
| Power-up collect | Bright ascending chime |
| Boss entrance | Deep horn/siren |
| Wave clear | Triumphant short fanfare |

---

## 8. Technical Specifications

### Engine & Framework
- **Rendering:** HTML5 Canvas / WebGL (2D)
- **Framework:** Phaser.js, PixiJS, or custom canvas engine
- **Language:** TypeScript / JavaScript
- **Target Resolution:** 1920x1080 (16:9), responsive scaling
- **Target FPS:** 60fps

### Performance Considerations
- Sprite batching for particle effects and projectiles
- Object pooling for bullets, enemies, and explosions
- Texture atlases for all game sprites
- Parallax scrolling for background layers (3 layers: stars, nebula, foreground debris)

### Save System
- Local storage for high scores and settings
- Progress saved per level completion
- Ship upgrade state persisted

---

## 9. Art Asset List (12 Assets)

Below are the 12 image assets required for the game. All assets follow the vibrant, cartoon/comic-book 2D game art style with bold outlines and saturated colors as shown in the reference image.

### Asset 1: Player Ship
- **File:** `player_ship.png`
- **Dimensions:** 256x256px (transparent background)
- **Description:** A large, stylized sci-fi fighter spacecraft viewed from the side (facing right). Silver/white hull with red and blue accent panels, a visible cockpit canopy, twin rear engines glowing orange, and forward-mounted weapon ports with blue energy glow. Chunky, exaggerated proportions with bold black outlines. Cartoon 2D game art style.
- **Generation Prompt:** "2d game art, side view of a large stylized sci-fi fighter spaceship facing right, silver white hull with red and blue accent panels, visible cockpit canopy with pilot silhouette, twin rear engines glowing orange, forward mounted weapon ports with blue energy glow, chunky exaggerated proportions, bold black outlines, vibrant cartoon comic book style, transparent background, clean sprite sheet ready"

### Asset 2: Drone Enemy (Swarm)
- **File:** `enemy_drone.png`
- **Dimensions:** 128x128px (transparent background)
- **Description:** A small crab/spider-like robot enemy with 4-6 mechanical legs, a round body, and a single glowing central eye. Yellow-green coloring with metallic grey joints. Bold outlines, cartoon style. Menacing but cute.
- **Generation Prompt:** "2d game art, small alien crab spider robot enemy sprite, round body with single glowing red central eye, 4 to 6 mechanical legs, yellow green coloring with metallic grey joints, bold black outlines, vibrant cartoon sci-fi style, menacing but cute design, side view facing left, transparent background, game sprite"

### Asset 3: Scout Enemy (Orb)
- **File:** `enemy_scout.png`
- **Dimensions:** 160x160px (transparent background)
- **Description:** A medium-sized spherical alien craft with rotating tentacle-like mechanical appendages extending from a central orb. Purple and magenta body with swirl patterns and a bright glowing energy core. Bold outlines, vibrant colors.
- **Generation Prompt:** "2d game art, medium spherical alien spacecraft enemy, central glowing orb body with tentacle-like mechanical appendages, purple and magenta coloring with swirl energy patterns, bright cyan glowing energy core in center, bold black outlines, vibrant cartoon comic style, side view facing left, transparent background, game sprite"

### Asset 4: Heavy Gunship Enemy
- **File:** `enemy_heavy.png`
- **Dimensions:** 256x192px (transparent background)
- **Description:** A large, angular armored warship with heavy plating, twin rear engines, and visible weapon turrets. Dark grey and red color scheme with glowing orange weapon ports. Intimidating, bulky design with bold outlines.
- **Generation Prompt:** "2d game art, large angular armored alien warship enemy sprite, heavy armor plating, twin rear engines with orange glow, visible weapon turrets on top and bottom, dark grey and red color scheme with glowing orange weapon ports, intimidating bulky military design, bold black outlines, vibrant cartoon sci-fi style, side view facing left, transparent background"

### Asset 5: Boss Enemy
- **File:** `enemy_boss.png`
- **Dimensions:** 512x384px (transparent background)
- **Description:** A massive, multi-segmented mechanical boss ship. Dark metallic hull with red energy lines running across the body. Multiple rotating turrets, armored segments, and a glowing weak point on the central body. Terrifying and imposing.
- **Generation Prompt:** "2d game art, massive mechanical boss spaceship enemy, multi-segmented body with dark metallic hull, red glowing energy lines across armor, multiple rotating gun turrets, armored plating segments, bright glowing yellow weak point on central body, terrifying imposing design, bold black outlines, vibrant cartoon sci-fi comic style, side view facing left, transparent background"

### Asset 6: Space Nebula Background
- **File:** `bg_nebula.png`
- **Dimensions:** 1920x1080px (opaque)
- **Description:** A deep space nebula background with rich blues, purples, teals, and pink/magenta highlights. Dense star field with varying star sizes and brightness. Wispy gas clouds creating depth. No foreground objects — pure background.
- **Generation Prompt:** "2d game art deep space nebula background for horizontal scrolling shooter game, rich deep blues and purples and teals with pink magenta nebula cloud highlights, dense star field with varying star sizes and brightness, wispy cosmic gas clouds creating depth and atmosphere, no foreground objects, seamless tileable horizontal, painterly vibrant cartoon style, 1920x1080"

### Asset 7: Asteroid
- **File:** `asteroid.png`
- **Dimensions:** 128x128px (transparent background)
- **Description:** A large rocky space asteroid/debris chunk. Grey-brown rocky surface with craters and rough texture. Slightly irregular shape. Some small fragments floating nearby. Bold outlines matching the cartoon art style.
- **Generation Prompt:** "2d game art, large rocky space asteroid chunk, grey brown rocky surface with craters and rough texture, irregular jagged shape, small rock fragments floating nearby, bold black outlines, vibrant cartoon comic style matching space shooter game, transparent background, game sprite"

### Asset 8: Player Laser Projectile
- **File:** `projectile_laser.png`
- **Dimensions:** 64x16px (transparent background)
- **Description:** A bright cyan/electric blue energy bolt projectile. Elongated horizontal shape with a bright white core fading to cyan edges. Glowing energy trail effect. Clean and sharp.
- **Generation Prompt:** "2d game art, horizontal energy laser bolt projectile sprite, bright cyan electric blue color, elongated shape pointing right, bright white hot core fading to cyan blue edges, glowing energy trail effect behind, clean sharp design, bold style, transparent background, game projectile sprite"

### Asset 9: Explosion Effect
- **File:** `explosion.png`
- **Dimensions:** 192x192px (transparent background)
- **Description:** A colorful, energetic explosion burst. Bright orange/yellow center with expanding rings of red, pink, and cyan sparks and debris particles. Cartoon-style with dynamic rays and sparkle effects. Single frame representing peak explosion.
- **Generation Prompt:** "2d game art, colorful energetic explosion burst effect sprite, bright orange yellow fiery center, expanding rings of red pink and cyan colored sparks and energy particles, cartoon comic style with dynamic light rays and sparkle effects, vibrant saturated colors, single frame peak explosion moment, transparent background, game effect sprite"

### Asset 10: Shield Power-Up
- **File:** `powerup_shield.png`
- **Dimensions:** 64x64px (transparent background)
- **Description:** A glowing blue diamond/crystal shape with a shield emblem inside. Surrounded by a soft cyan aura/glow. Clean, iconic design that reads well at small sizes.
- **Generation Prompt:** "2d game art, shield power up pickup item sprite, glowing blue diamond crystal shape with shield emblem icon inside, surrounded by soft cyan energy aura glow, clean iconic design readable at small sizes, bold outlines, vibrant cartoon sci-fi style, transparent background, game collectible sprite"

### Asset 11: Power Boost Power-Up
- **File:** `powerup_power.png`
- **Dimensions:** 64x64px (transparent background)
- **Description:** A glowing yellow/orange orb with a lightning bolt symbol inside. Surrounded by electric energy crackles and a warm golden aura. Energetic and eye-catching.
- **Generation Prompt:** "2d game art, power boost energy power up pickup item sprite, glowing yellow orange orb sphere with bold lightning bolt symbol inside, surrounded by electric energy crackles and warm golden aura glow, energetic eye-catching design, bold outlines, vibrant cartoon sci-fi style, transparent background, game collectible sprite"

### Asset 12: HUD Elements Sprite Sheet
- **File:** `hud_elements.png`
- **Dimensions:** 512x256px (transparent background)
- **Description:** A collection of HUD/UI elements arranged in a sprite sheet: segmented health/shield bar frame (horizontal), power gauge frame (horizontal), life counter rocket icon, crosshair/target icon, special weapon button frame (circular), and score display frame. All in a semi-transparent dark panel style with cyan/teal accent borders and glow effects.
- **Generation Prompt:** "2d game art, HUD user interface elements sprite sheet for space shooter game, includes segmented horizontal health shield bar frame, horizontal power gauge bar frame, small rocket life counter icon, circular crosshair target reticle icon, circular special weapon button frame, rectangular score display frame, all in semi-transparent dark panel style with cyan teal accent borders and subtle glow effects, bold clean design, transparent background, game UI sprite sheet"

---

## 10. Monetization (Optional / Future)

- **Free-to-play** with ad support (interstitial between levels)
- **Premium unlock** ($2.99): Remove ads, +2 extra starting lives
- **Cosmetic ship skins** ($0.99 each): Alternate color schemes and visual effects
- **Level packs** ($1.99): Additional 5-level campaigns

---

## 11. Development Milestones

| Phase | Duration | Deliverables |
|-------|----------|-------------|
| **Pre-production** | 1 week | GDD finalized, art assets complete, tech stack confirmed |
| **Prototype** | 2 weeks | Player movement, shooting, 1 enemy type, basic collision |
| **Alpha** | 3 weeks | All enemy types, power-ups, 2 complete levels, HUD |
| **Beta** | 2 weeks | All 5 levels, boss battles, audio, UI menus, balancing |
| **Polish** | 1 week | Bug fixes, performance optimization, juice/effects |
| **Release** | — | Web deployment, leaderboard integration |

---

## 12. References & Inspirations

- **Gradius (Konami)** — Classic horizontal shooter pacing and power-up system
- **R-Type** — Massive ship feel, beam weapon mechanics
- **Galaga** — Wave-based enemy swarm patterns
- **Geometry Wars** — Visual spectacle and particle effects
- **Jamestown** — Modern indie shmup with beautiful art and accessible design

---

*Document Version: 1.0*
*Last Updated: 2026-03-06*
