// ScrollReveal

window.sr = ScrollReveal({ reset: true })

sr.reveal('.home-text', {duration: 1000, delay: 100})
sr.reveal('.image-cafe', {duration: 1000, delay: 100})

sr.reveal('.about-text', {duration: 1500, delay: 100})
sr.reveal('.about-image', {duration: 1500, delay: 100})

sr.reveal('.products-text',{duration: 1500, delay: 100} )
sr.reveal('.products-image',{duration: 1500, delay: 100} )

sr.reveal('.contact-text', {duration: 1500, delay: 300})
sr.reveal('.input', {interval: 16,
  delay: 200,
  duration: 1000
})
sr.reveal('.button', {delay: 200,
  duration: 1000
})

// Menu responsive

const btnMobile = document.querySelector(".btn-mobile")

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

// Theme Ligth

const input = document.querySelector(".btn-theme");
const body = document.querySelector("body");
const header = document.querySelector("header");
const firstText = document.querySelectorAll("h2");
const text = document.querySelectorAll(".text");
const title = document.querySelector(".title");
const subTitle = document.querySelector(".sub-title");
const logoText = document.querySelector(".logo-text");
const sociais = document.querySelector(".sociais");
const icones = document.querySelector(".icones")
const name = document.querySelector(".name")
const textImage = document.querySelector(".text-image")

const toggleThemeMode = () => {
  body.classList.toggle("ligth-theme");
  header.classList.toggle("ligth-theme");
  title.classList.toggle("ligth-theme");
  subTitle.classList.toggle("ligth-theme");
  logoText.classList.toggle("ligth-theme");
  sociais.classList.toggle("ligth-theme");
  icones.classList.toggle("ligth-theme");
  name.classList.toggle("ligth-theme");
  textImage.classList.toggle("ligth-theme");

  firstText.forEach((text) => text.classList.toggle("ligth-theme"));
  text.forEach((text) => text.classList.toggle("ligth-theme"));
};

input.onchange = toggleThemeMode;