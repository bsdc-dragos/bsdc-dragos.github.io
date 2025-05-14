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