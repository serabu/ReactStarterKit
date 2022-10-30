
const pageContent = {
   headertext: {
      home: {
          ru: 'Главная',
          en: 'Home',
      },
      products: {
        ru: 'Продукция',
        en: 'Products',
    },
    about: {
      ru: 'нас',
      en: 'About',
    },
    germ: {
    ru: 'Немецкие',
    en: 'German',
    },
    amer: {
    ru: 'Американские',
    en: 'American',
    },
    japan: {
    ru: 'Японские',
    en: 'Japanese',
    },
    gall: {
    ru: 'Галерея',
    en: 'Gallery',
    },
    cont: {
    ru: 'Контакты',
    en: 'Contacts',
    },
  },
  bodytext: {
            divText: {
                ru: 'Бла бла бла',
                en: 'Bla bla bla',
            },
          },
      footertext: {
            ru: 'Футер текст',
            en: 'Footer text',
      },
    
}

const { headertext: {home, products, about, germ, amer, japan, gall, cont} } = pageContent

 console.log(home)
// const pageindex = pageContent.reduce((accumulator, currentValue) => {
//   return currentValue.products
// })

// let trydata = document.querySelector('.header__link-text')
// trydata.dataset.innerHTML = ''
// console.log(shit)

// console.log(pageindex)
// const pagefind = pageContent.map(pageContent => pageContent.home)


// console.log(pagefind)
    
const selectElement = document.querySelector('.change-lang');

selectElement.addEventListener('change', (event) => {
  const dom = document.querySelector('.header__link-text');
  const product = document.querySelector('.prod');
  const abouttext = document.querySelector('.about');
  dom.textContent = home[event.target.value];
  product.textContent = products[event.target.value];
  abouttext.textContent = about[event.target.value];
  
});
selectElement.removeEventListener('change', Event )






function switchClass() {
  const element = document.querySelector(".menu__list");
    element.classList.toggle("active"); 
}
