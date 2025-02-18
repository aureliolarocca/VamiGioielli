function toggleMenu() {
  const menu = document.getElementById("ham-menu");
  const menuBtn = document.querySelector(".menu-btn");
  const logo = document.getElementById("logo");

  menu.classList.toggle("show");

  if (menu.classList.contains("show")) {
    menuBtn.style.display = "none";
    logo.style.marginLeft = "180px";
  } else {
    menuBtn.style.display = "block";
    logo.style.margin = "0 auto";
  }
}
