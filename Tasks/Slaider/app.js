const debounce = (fun, ms) => {
  let timeout;
  return function () {
    const fnCall = () => { fun.apply(this, arguments) }
    clearTimeout(timeout)
    timeout = setTimeout(fnCall, ms);
  };
}

const styleOptions = {
  count: 3,
}

const initSlider = (slider, option) => {
  const container = slider.querySelector('.slideShow__container');
  const sliderContainer = slider.querySelector('.slideShow__wrapper');
  const widthSlide = slider.querySelector('.slideShow__slide').offsetWidth;
  const buttonRight = slider.querySelector('.slideShow__button--next');
  const buttonLeft = slider.querySelector('.slideShow__button--back');
  const availableSlidesCount = Math.round((slider.offsetWidth - 200) / widthSlide);
  const { count, dots = true, responsible = true } = option;
  const checkCounts = count < availableSlidesCount ? count : availableSlidesCount;
  const widthOfContainer = widthSlide * checkCounts;
  const dotsCount = Math.ceil(container.children.length / checkCounts);

  if (dots) {
    slider.querySelector('.slideShow__dots')?.remove();
    const dotsWrapper = document.createElement('div');
    dotsWrapper.classList.add('slideShow__dots');
    sliderContainer.appendChild(dotsWrapper);

    for (let i = 0; i < dotsCount; i++) {
      const dot = document.createElement('div');
      dot.classList.add('slideShow__dot-item');
      dotsWrapper.appendChild(dot);
      dotsWrapper.firstChild.classList.add('active');
    };
  }

  const clearSlider = () => {
    container.style.left = '0px';
    buttonLeft.style.display = 'none';
    buttonRight.style.display = 'block';
  }

  const calcIndex = (step) => {
    const dotsList = [...slider.querySelector('.slideShow__dots').children];
    const dot = [...slider.querySelectorAll('.slideShow__dot-item')]
      .find(el => [...el.classList]
        .includes('active'));
    const index = dotsList.indexOf(dot);
    dot.classList.remove('active');
    dotsList[step === 'right' ? index + 1 : index - 1].classList.add('active');
  }

  const dotHandler = (e) => {
    if (e.target.className === 'slideShow__dot-item') {
      const { target } = e;
      const dotsList = [...slider.querySelector('.slideShow__dots').children];
      const index = dotsList.indexOf(target);
      const dot = [...slider.querySelectorAll('.slideShow__dot-item')]
        .find(el => [...el.classList].includes('active'));
      dot.classList.remove('active');
      container.style.left = -widthOfContainer * index + 'px'
      target.classList.add('active');
      buttonLeft.style.display = index === 0 ? 'none' : 'block'
      buttonRight.style.display = index === dotsList.length - 1 ? 'none' : 'block'
    }
  }

  const moveLeft = () => {
    const leftPosition = container.offsetLeft;
    container.style.left = leftPosition + widthOfContainer + 'px';
    if (widthOfContainer + leftPosition === 0) buttonLeft.style.display = 'none';
    if (leftPosition < 0) buttonRight.style.display = 'block';
    calcIndex('left');
  }

  const moveRight = () => {
    const leftPosition = container.offsetLeft;
    const isHide = checkCounts <= 2
      ? leftPosition + (container.offsetWidth - widthOfContainer) - widthOfContainer === 0
      : container.offsetWidth + container.offsetLeft - widthOfContainer < widthOfContainer;
    container.style.left = leftPosition - widthOfContainer + 'px';
    if (leftPosition <= 0) buttonLeft.style.display = 'block';
    if (isHide) buttonRight.style.display = 'none';
    calcIndex('right');
  }

  const responsibleHandler = () => {
    clearSlider();
    const id = slider.getAttribute('id');
    slider.replaceWith(slider.cloneNode(true));
    initSlider(document.getElementById(id), option);
  }

  buttonLeft.addEventListener('click', debounce(moveLeft, 250));
  buttonRight.addEventListener('click', debounce(moveRight, 250));
  if (responsible) window.addEventListener('resize', debounce(responsibleHandler, 800));
  slider.addEventListener('click', debounce(dotHandler))
  sliderContainer.style.width = widthOfContainer + 'px';
};

initSlider(document.getElementById('slider-1'), styleOptions);

