const selectElement = document.querySelector(".footer__select");
const menu = document.querySelectorAll('.menu__link-text');
const pageContent = {
  headerContent: {
    home: {
      ru: "Главная",
      en: "Home",
    },
    products: {
      ru: "Продукция",
      en: "Products",
      children: {
        germ: {
          ru: "Немецкие",
          en: "German",
        },
        amer: {
          ru: "Американские",
          en: "American",
        },
        japan: {
          ru: "Японские",
          en: "Japanese",
        },
      },
    },
    about: {
      ru: "О нас",
      en: "About",
      children: {
        gall: {
          ru: "Галерея",
          en: "Gallery",
        },
        cont: {
          ru: "Контакты",
          en: "Contacts",
        },
      },
    },
  },
};

const swapMenuElements = (event) => {
  const MenuLinks = [...menu];
  MenuLinks.map(element => {
    const { change } = element.dataset
    const parent = element.closest('[data-order=parent]')?.querySelector('.menu__link .menu__link-text').dataset.change
    element.textContent = pageContent.headerContent[change]
      ? pageContent.headerContent[change][event.target.value]
      : pageContent.headerContent[parent].children[change][event.target.value]
  });
}
selectElement.addEventListener('change', swapMenuElements, true);



function switchClass() {
  const element = document.querySelector(".menu__list");
  element.classList.toggle("active");
}

let slideIndex = 1
slideShow(slideIndex)

function toggleSlide(num) {
  slideShow(slideIndex += num)
}

function slideShow(num) {
 let picture
 let slides = document.querySelectorAll('.slideshow__slide')
 if (num > slides.length) {slideIndex = 1}
 if (num < 1) {slideIndex = slides.length}
 for (picture = 0; picture < slides.length; picture++) {
  slides[picture].style.display = "none"
 }
 slides[slideIndex-1].style.display = "block"
}0