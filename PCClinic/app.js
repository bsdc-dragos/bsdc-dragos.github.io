// Menu functionality
const menu = document.getElementById("nav-menu");
const menuButton = document.querySelector(".img-right");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("show");
});

document.addEventListener("click", function (event) {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickOnMenuButton = menuButton.contains(event.target);
 
  if (!isClickInsideMenu && !isClickOnMenuButton) {
    menu.classList.remove("show");
  }
});

// Theme toggle functionality
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

// Update icon based on current theme
function updateThemeIcon() {
  if (body.classList.contains("dark-theme")) {
    themeIcon.src = "/PCClinic/images/sun.png"; // Sun icon for dark mode
    themeIcon.alt = "Switch to Light Mode";
  } else {
    themeIcon.src = "/PCClinic/images/moon.png"; // Moon icon for light mode
    themeIcon.alt = "Switch to Dark Mode";
  }
}

// Initialize icon (starts in light mode by default)
updateThemeIcon();

// Theme toggle event listener
themeIcon.addEventListener("click", () => {
  console.log("Theme icon clicked!"); // Debug log
  body.classList.toggle("dark-theme");
  
  if (body.classList.contains("dark-theme")) {
    console.log("Switched to dark theme");
  } else {
    console.log("Switched to light theme");
  }
  
  updateThemeIcon();
});