// const btnOpen = document.querySelector('.btn--open')
// const btnClose = document.querySelector('.btn--close')
const menu = document.querySelector('.header__menu')

// btnOpen.addEventListener('click', function () {
//   menu.classList.toggle('show--menu')
// })

// btnClose.addEventListener('click', function () {
//   menu.classList.remove('show--menu')
// })

const linksIcon = document.querySelector(".links__icon");
const svg = document.querySelector("svg");

// BOM
const html = document.documentElement

// console.log(html.scrollHeight) // Altura de la página
// console.log(html.clientHeight) // Altura de la ventana
// console.log(html.scrollTop) // Altura que se ha desplazado el scroll

const progress = document.querySelector('.progress')

window.addEventListener('scroll', function (e) {
const alturaPagina = html.scrollHeight - html.clientHeight

const scrollActual = html.scrollTop

const progreso = scrollActual / alturaPagina

progress.style.width = Math.round(progreso * 100) + '%'

})

/* swiper */
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button--next',
    prevEl: '.button--prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
})

/*
// animated text typing
document.addEventListener("DOMContentLoaded", function () {
  const typingText2 = document.getElementById("typing-text2");
  const words = ["Tierra Azteca", "Tierra Guerrera", "M é x i c o"];

  let wordIndex = 0;
  let charIndex = 0;

  function type() {
      if (charIndex < words[wordIndex].length) {
          typingText2.textContent += words[wordIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, 100); // Velocidad de escritura
      } else {
          setTimeout(erase, 1000); // Tiempo antes de borrar
      }
  }

  function erase() {
      if (charIndex > 0) {
          typingText2.textContent = words[wordIndex].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(erase, 50); // Velocidad de borrado
      } else {
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(type, 500); // Tiempo antes de escribir la siguiente palabra
      }
  }

  type();
});
*/


/* TODO: Logo fills with color */
