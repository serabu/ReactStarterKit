import React  from "react";


const Slider = () => {
    return (
        <div className="container">
      <div className="row">
        <div className="slideShow" id="slider-1" role="list">
          <div className="slideShow__wrapper" role="listbox">
            <ul className="slideShow__container"  role="listbox">
              <li className="slideShow__slide"><img className="slideShow__carPicture" src=""
                  aria-label="На фото бемельве "></li>
              <li className="slideShow__slide"><img className="slideShow__carPicture" src=""
                  aria-label="На фото мерседес"></li>
              <li className="slideShow__slide"><img className="slideShow__carPicture" src=""
                  aria-label="На фото ауди"></li>
              <li className="slideShow__slide"><img className="slideShow__carPicture" src=""
                  aria-label="На фото шевроле"></li>
              <li className="slideShow__slide"><img className="slideShow__carPicture" src=""
                  aria-label="На фото додж"></li>
              <li className="slideShow__slide"><img className="slideShow__carPicture" src=""
                  aria-label="На фото форд"></li>
              <li className="slideShow__slide"><img className="slideShow__carPicture" src=""
                  aria-label="На фото тойота"></li>
              <li className="slideShow__slide"><img className="slideShow__carPicture" src=""
                  aria-label="На фото субару"></li>
              <li className="slideShow__slide"><img className="slideShow__carPicture" src=""
                  aria-label="На фото хонда"></li>
              <li className="slideShow__slide"><img className="slideShow__carPicture" src=""
                  aria-label="На фото хонда аккорд"></li>
            </ul>
          </div>
          <div className="slideShowPanel" role="tablist">
            <button className="slideShow__button slideShow__button--back" aria-label="Предыдущий слайд" role="button"
              >PREVIOUS SLIDE</button>
            <button className="slideShow__button slideShow__button--next" aria-label="Следующий слайд" role="button"
              >NEXT SLIDE</button> 
        {/* remove tabindex */}
          </div>
        </div>
      </div>
    </div>
    )
        
  
}

export default Slider;