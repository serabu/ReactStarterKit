import "./PopupStatus.scss"; 
import SearchIcon from '@mui/icons-material/Search';

export const PopupStatus = () => {
  return (
    <div className="popupStatus__container">
      <div className="popupStatus__content">
        <input type="text" placeholder="NEIGGBORHOOD" className="input__search" />
        <select className="select__property-types">
          <option value="">PRORETY TYPES</option>
          {}
        </select>
        <select className="select__location">
          <option value="">LOCATION</option>
          {}
        </select>
        <button className="btn__search">Search</button>
      </div>
    </div>
  );
};