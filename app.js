const pageContent = {
  Headertext: {
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
  bodytext: {
    divText: {
      ru: "Бла бла бла",
      en: "Bla bla bla",
    },
    footertext: {
      ru: "Футер текст",
      en: "Footer text",
    },
  },
};


const selectElement = document.querySelector("select");
const menu = document.querySelectorAll('.header__link-text, .header__link-submenu');


const swapMenuElements = (event) => {
  const MenuLinks = [...menu]
  MenuLinks.map(element => {
    const { change } = element.dataset
    const Parentalrow = element.closest('.menu__list-item')?.querySelector('.header__link span, .header__link-text').dataset.change
    const value = pageContent.Headertext[change]
      ? pageContent.Headertext[change][event.target.value]
      : pageContent.Headertext[Parentalrow].children[change][event.target.value]
    element.textContent = value
  })
}
selectElement.addEventListener('change', swapMenuElements, true)








function switchClass() {
  const element = document.querySelector(".menu__list");
  element.classList.toggle("active");
}
