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

console.log(input);
console.log(body);

const toggleThemeMode = () => {
  body.classList.toggle("light-theme");
};

input.onchange = toggleThemeMode;
