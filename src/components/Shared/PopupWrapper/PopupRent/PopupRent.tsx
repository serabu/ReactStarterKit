import "./PopupRent.scss"; 


export const PopupRent = () => {
  return (
    <div className="popupRent__container">
    <div className="popupRent__content">
      <input type="text" placeholder="NEIGGBORHOOD" className="input__search" />
      <select className="select__property-types">
        <option value="">PRORETY TYPES</option>
        
      </select>
      <select className="select__location">
        <option value="">LOCATION</option>
        
      </select>
      <button className="btn__search">Search</button>
    </div>
  </div>
  );
};