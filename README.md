# Nebula

A space shooter mobile game built with React Native and Expo, created with Rork AI.

## Overview

Nebula is an arcade-style space shooter where players defend against waves of alien enemies across multiple themed levels. The game features dynamic enemy behaviors, power-ups, and progressively challenging gameplay.

## Features

- **Multiple Enemy Types**: Face various alien ships with unique behaviors and health pools
- **Weapon Systems**: Primary laser weapons and secondary abilities with cooldowns
- **Power-ups**: Shield, Speed Boost, Multi-Shot, and Health pickups
- **Themed Levels**: Progress through different space environments with unique mechanics
- **Score System**: Track high scores and compete for the best performance
- **Mobile Optimized**: Touch controls designed for mobile gameplay

## Tech Stack

- **Framework**: React Native with Expo
- **Router**: Expo Router (file-based routing)
- **UI Components**: Custom game components
- **State Management**: React hooks and context
- **Build Tool**: Rork AI toolkit SDK
- **Runtime**: Bun

## Getting Started

1. Install dependencies:
```bash
bun install
# or
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on your device:
   - Install Expo Go app on your mobile device
   - Scan the QR code from the terminal

## Web Version

To run the web version:
```bash
npm run start-web
```

## Project Structure

```
expo/
├── app/              # Screens and routes
│   ├── (tabs)/      # Tab navigation screens
│   ├── modal.tsx    # Modal screens
│   └── _layout.tsx  # Root layout
├── components/       # Reusable game components
├── constants/        # Game design document, colors, assets
└── assets/          # Images, sounds, and other media
```

## Game Design

The game features:
- **Enemies**: Scouts, Fighters, Tanks, and Bosses
- **Weapons**: Standard Laser and Power Beam secondary
- **Levels**: 5 themed levels with increasing difficulty
- **Power-ups**: Temporary buffs to enhance gameplay

## Development

Created with [Rork AI](https://rork.ai) - an AI-powered mobile app development platform.

## License

GNU General Public License v3.0 - See LICENSE file for details.
