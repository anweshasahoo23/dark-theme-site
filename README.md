# Alternate Color Theme (Dark Mode)

A personal website with a light theme and an alternate dark theme, built with **CSS variables** and **vanilla JavaScript**. Based on the tutorial [How to create a dark theme system in 5 minutes or less with vanilla JS](https://dev.to/codedgar/how-to-create-a-dark-theme-system-in-5-minutes-or-less-with-vanilla-js-2922).

## How it works

| File | Role |
|------|------|
| `index.html` | Page structure and the `#theme_toggler` button |
| `style.css` | Light colors as variables in `:root`, dark colors redefined in `.dark_mode` |
| `script.js` | Toggles `dark_mode` on `<body>`, saves the choice in `localStorage`, restores it on load, and syncs open tabs |

## Run it

Open `index.html` in any browser, then click the theme button in the top-right corner. Reload the page and the theme you picked is still applied.
