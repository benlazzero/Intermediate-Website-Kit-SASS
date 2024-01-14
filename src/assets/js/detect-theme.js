function detectColorScheme() {
  // default to the light theme
  let theme = "light";

  // check localStorage for a saved 'theme' variable. if it's there, the user has visited before, so apply the necessary theme choices
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  // if it's not there, check to see if the user has applied dark mode preferences themselves in the browser
  else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    theme = "dark";
  }
  return theme;
}
