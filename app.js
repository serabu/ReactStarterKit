function switchClass() {
  const element = document.querySelector(".menu__list");
    element.classList.toggle("active");
}
const langArr = {
  "home" :  {
      "ru": "Главная",
      "en": "Home ",
  }, 
  "products": {
      "ru": "Продукция",
      "en": "Products",
  }, 
  "about": {
      "ru": "О нас",
      "en": "About",
  }, 
}

const select = document.querySelector('.change-lang');
console.log(select)
const allLang = ['en', 'ru'];

select.addEventListener('change', changeURLLanguage);

