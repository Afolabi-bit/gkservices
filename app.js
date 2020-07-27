const burger = document.querySelector(".burger");
const navbar = document.querySelector(".sidebar");
const navlinks = document.querySelectorAll(".sidebar li");

function bar() {
  //open & close side bar
  navbar.classList.toggle("active");
  //animate links
  navlinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `nav-link-fade 0.8s ease forwards ${
        index / 7 + 0.5
      }s`;
    }
  });
  //rotate lines
  burger.classList.toggle("toggle");
}

burger.addEventListener("click", bar);
navlinks.forEach((item) => item.addEventListener("click", bar));
