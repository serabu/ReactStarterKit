
const footerContent = {
ru: "Главная",
en: "Home ", 

}
console.log(footerContent)

// const select = document.querySelector('select')
//     select.addEventListener('change', function(){
//         let listener = document.querySelector('.header__link-text')
//         listener.innerHTML = footerContent.en
//         console.log(select)
//     })
        
    
const selectElement = document.querySelector('.change-lang');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.header__link-text');
  result.textContent = ` ${event.target.value}`;
});







function switchClass() {
  const element = document.querySelector(".menu__list");
    element.classList.toggle("active"); 
}
