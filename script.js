/*
  script.js
  Vanilla JavaScript theme switcher (no libraries).
  Steps, following the codedgar tutorial:
    1. Find the toggle button.
    2. On click, toggle the "dark_mode" class on <body>.
    3. Save the current theme in localStorage.
    4. On page load, read the saved theme and apply it.
    5. BONUS: listen for the "storage" event so other open tabs stay in sync.
*/

// Key used to store the theme in localStorage
const THEME_KEY = 'website_theme';

// 1. Get the toggle button element from the page
let theme_toggler = document.querySelector('#theme_toggler');

/*
  Updates the button icon and label so it always describes
  the theme the user will switch TO when they click it.
*/
function update_button() {
  // true when the dark theme is currently on
  const isDark = document.body.classList.contains('dark_mode');

  // Show a sun in dark mode (switch to light) and a moon in light mode
  theme_toggler.querySelector('.toggle-icon').textContent = isDark ? '☀️' : '🌙';
  theme_toggler.querySelector('.toggle-text').textContent = isDark ? 'Light mode' : 'Dark mode';
}

/*
  3. Saves the current theme to localStorage.
  If <body> has "dark_mode" we save that, otherwise we save "default".
*/
function save_theme() {
  if (document.body.classList.contains('dark_mode')) {
    localStorage.setItem(THEME_KEY, 'dark_mode');
  } else {
    localStorage.setItem(THEME_KEY, 'default');
  }
}

/*
  4. Reads the saved theme and applies it to <body>.
  If nothing has been saved yet (null), the page keeps its default class.
*/
function retrieve_theme() {
  const theme = localStorage.getItem(THEME_KEY);

  if (theme != null) {
    // Remove both possible theme classes, then add the saved one
    document.body.classList.remove('default', 'dark_mode');
    document.body.classList.add(theme);
  }

  // Keep the button text in step with the theme that is now showing
  update_button();
}

// 2. When the button is clicked, flip the theme and remember the choice
theme_toggler.addEventListener('click', function () {
  // Swap between the two theme classes
  document.body.classList.toggle('dark_mode');
  document.body.classList.toggle('default');

  save_theme();     // remember the new theme
  update_button();  // refresh the icon and label
});

// Apply the saved theme as soon as the page loads
retrieve_theme();

/*
  5. BONUS: the "storage" event fires in OTHER tabs of this site when
  localStorage changes. Re-applying the theme keeps every tab matching.
*/
window.addEventListener('storage', function () {
  retrieve_theme();
}, false);
