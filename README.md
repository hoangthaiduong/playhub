# PlayHub

**One Website. Endless Fun.**

PlayHub is a fully client-side browser game platform with 12 playable games, local favorites, achievements, statistics, daily challenges, settings, keyboard support, touch controls, and optional Web Audio feedback.

## Games

1. Kéo Búa Bao — Rock Paper Scissors
2. UNO
3. Cờ vua — Chess
4. Đoán số — Number Guess
5. Pong
6. Flappy-style arcade
7. Dò mìn — Minesweeper
8. Rắn săn mồi — Snake
9. Tetris
10. Doodle-style vertical jumper
11. Memory Match
12. Tic-Tac-Toe

## Run

The application is designed to run directly from `index.html`. No server, database, API key, package manager, or backend is required.

For optional development with a local server, any static server works, for example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## Structure

- `index.html` — shell and script/style loading
- `css/` — shared UI and responsive styling
- `js/` — storage, settings, audio, statistics, achievements, router, game registry
- `games/<game>/` — isolated game implementation and styles
- `assets/` — local asset directories

Each game exposes a small `mount(root, context)` entry point. The router/game manager owns navigation, while each game owns its gameplay state and cleanup.

## Controls

- Chess: click/tap squares. Promotion is selected from the on-screen chooser.
- RPS/UNO/Guess/Memory/Tic-Tac-Toe/Minesweeper: pointer controls plus accessible buttons.
- Pong: Arrow Up/Down or W/S; on-screen controls on touch screens.
- Flappy: Space, click, tap.
- Snake: Arrow keys or WASD; touch buttons.
- Tetris: ← → ↓, ↑ rotate, Space hard drop; touch buttons.
- Doodle: ← → or A/D; touch buttons.

## Local storage

`StorageManager` is the only module that directly talks to `localStorage`. It keeps a versioned JSON object under a single PlayHub storage key and validates data on load.

Stored areas include favorites, high scores, achievements, statistics, settings, and the current daily challenge/progress.

## Achievements

Achievements unlock only when real events are recorded by games. Examples include First Game, First Win, 10 Games Played, Snake Master, Tetris Master, Minesweeper Winner, Chess Winner, UNO Winner, Memory Master, Pong Champion, Flappy Flyer, and Tic-Tac-Toe Winner.

## Statistics

PlayHub records total games, wins, losses, draws, play time, per-game play counts, best scores, and streaks when the game reports them.

## Daily challenge

A deterministic challenge is selected from the current local date. Progress is updated only by relevant gameplay events and is stored locally so a refresh does not erase the day's progress.

## Settings

Light/dark theme, sound, music flag, reduced motion, and reset actions are available from Settings. Reduced-motion settings also respect the system `prefers-reduced-motion` preference.

## Add a game

1. Create a new folder in `games/your-game/`.
2. Add `index.js` to define/register the game descriptor.
3. Add `game.js` with `mount(root, context)` and a cleanup function.
4. Add `styles.css` for game-specific rules.
5. Register the game in `js/game-manager.js`.
6. Add the script and stylesheet to `index.html`.
7. Use `Statistics.recordGame()` for real results/high scores.

## Modify a game

Work primarily inside its own `games/<game>/` directory. Shared storage/audio/UI services are available through the global `PlayHub` namespace and should be preferred over direct access to browser storage.

## Static deployment

Upload the entire `PlayHub/` folder to any static hosting provider that serves HTML/CSS/JS files. Because there is no backend, no environment configuration is required.

## Visual/UI Notes

The project includes a shared `css/game-polish.css` visual layer for the 12 game surfaces. It improves game panels, sidebars, buttons, touch controls, canvas frames, memory cards, Minesweeper cells, Tic-Tac-Toe cells, Tetris framing, RPS controls, and responsive behavior. Chess uses a container-sized board with coordinate labels and clearer legal-move highlights.
