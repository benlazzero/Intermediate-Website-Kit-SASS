//
//    The Dark Helper to combat FOUC in page switches
//
// Theses vars need to match your --dark and light background color.
const darkBgColor = "#082032";
const lightBgColor = "#fff";
function backgroundDark() {
  document.documentElement.style.backgroundColor = darkBgColor;
}
function backgroundLight() {
  document.documentElement.style.backgroundColor = lightBgColor;
}

// determines a new users dark mode preferences
const currentTheme = detectColorScheme();
currentTheme === "dark" ? backgroundDark() : backgroundLight();
