
const footerContent = {
ru: "Главная",
en: "Home ", 

}

const selectElement = document.querySelector('.change-lang');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.header__link-text');
  result.textContent = footerContent[event.target.value];
});


function switchClass() {
  const element = document.querySelector(".menu__list");
    element.classList.toggle("active"); 
}
