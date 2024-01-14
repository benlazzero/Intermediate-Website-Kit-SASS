//
//    The Dark Mode System
//
// helper functions to toggle dark mode
const navElm = document.getElementById("cs-navigation");
function enableDarkMode() {
  document.body.classList.add("dark-mode");
  localStorage.setItem("theme", "dark");
  navElm.style.backgroundColor = null;
}
function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("theme", "light");
  document.documentElement.style.backgroundColor = lightBgColor;
  navElm.style.backgroundColor = "#fff";
}

// determines a new users dark mode preferences
const theme = detectColorScheme();
theme === "dark" ? enableDarkMode() : disableDarkMode();

// add event listener to the dark mode button toggle
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
  // on click, check localStorage for the dark mode value, use to apply the opposite of what's saved
  localStorage.getItem("theme") === "light" ? enableDarkMode() : disableDarkMode();
});
