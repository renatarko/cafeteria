const btnMobile = document.querySelector(".btn-mobile");

function showMenu() {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("show");

  const links = document.querySelectorAll("nav ul li a");

  for (let link of links) {
    link.addEventListener("click", function () {
      nav.classList.remove("show");
    });
  }
}

btnMobile.addEventListener("click", showMenu);

// Carrousel seção produtos

const btnNext = document.querySelector(".btn-next-rigth");

let current = 0;

const images = document.querySelectorAll(".img-carrousel");

let maxCurrent = images.length - 1;
console.log(maxCurrent);

function handleClickNext() {
  if (current < maxCurrent) {
    current += 1;
  } else {
    current = 0;
  }
  console.log(current);

  images.forEach((image) => image.classList.remove("current"));

  images[current].scrollIntoView({
    inline: "center",
    behavior: "smooth",
  });

  images[current].classList.add("current");
}

// btnNext.addEventListener("click", handleClickNext);

// Theme Ligth

const input = document.querySelector(".btn-theme");
const body = document.querySelector("body");
const header = document.querySelector("header");
const firstText = document.querySelectorAll("h2");
const text = document.querySelectorAll(".text");
const title = document.querySelector(".title");
const subTitle = document.querySelector(".sub-title");
const logoText = document.querySelector(".logo-text");

const toggleThemeMode = () => {
  body.classList.toggle("light-theme");
  header.classList.toggle("light-theme");
  title.classList.toggle("light-theme");
  subTitle.classList.toggle("ligth-theme");
  logoText.classList.toggle("ligth-theme");

  firstText.forEach((text) => text.classList.toggle("light-theme"));
  text.forEach((text) => text.classList.toggle("light-theme"));
};

input.onchange = toggleThemeMode;
