# Korok-timer
Korok Timer is a Zelda-inspired Pomodoro timer built to help you focus!

## About

Instead of a plain countdown, Korok Timer frames your focus sessions as pulling the Master Sword: complete 3 focus sessions to fill your heart containers and claim the sword. Built to be simple, calming, and a little playful, with inspiration from The Legend of Zelda – Korok Forest.

## Features

- **Focus and break timer**: pick a focus length (15, 25, 45 or 60 min) and a break length (5, 10 or 15 min)
- **Automatic switching**: when a focus session ends, the timer switches to break, and back again
- **Progress bar**: fills up as time passes, with a Korok seed that gently bounces along the edge
- **Heart containers**: three dots that turn green for each completed focus session. Complete all three to claim the Master Sword
- **Start / stop / restart controls**: settings are locked while the timer is running
- **Pixel art**: a crisp pixel-art Master Sword in a glowing forest circle
- **Reduced motion**: animations are turned off for users who prefer less motion

## Tech stack

- HTML
- CSS (Flexbox, transitions, keyframe animations)
- Vanilla JavaScript (no frameworks or libraries)
- [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts
- Designed in Figma

## Getting started

No installation needed.

1. Clone the repository:
   ```bash
   git clone https://github.com/radwaag0211/Korok-timer.git
   ```
2. Open `app/index.html` in your browser.

## Project structure

```
Korok-timer/
├── app/
│   ├── index.html   # markup
│   ├── style.css    # styling and animations
│   └── app.js       # timer logic
└── img/             # sword, glow circle and Korok seed
```

## Status

Core features are done. Ideas for next steps:

- Light and dark forest themes
- Sound when a session ends
- More accurate timing when the tab is in the background

## Acknowledgments

- Timer concept inspired by [Codedex's Pomodoro App guide](https://www.codedex.io/projects/build-a-pomodoro-app-with-html-css-js)
- Visual direction inspired by Korok Forest (The Legend of Zelda)
- I built the core timer and designed the app myself. I used AI (Claude) as a coding assistant for some features: the progress bar with the bouncing seed, the focus/break settings and the heart containers

## License

This project is licensed under the MIT License.
