import "./PopupStatus.scss";
import SearchIcon from "@mui/icons-material/Search";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export const PopupStatus = () => {
  return (
    <div className="popupStatus__container">
      <div className="popupStatus__content">
        <div className="popupStatus__icon">
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="NEIGGBORHOOD"
          className="input__search"
        />
        <div className="popupStatus__icon">
          <BusinessCenterIcon />
        </div>
        <select className="select__property-types">
          <option value="">PRORETY TYPES</option>
          
        </select>
        <div className="popupStatus__icon">
          <EditLocationIcon />
        </div>
        <select className="select__location">
          <option value="">LOCATION</option>
          {}
        </select>
        <div className="popupStatus__icon">
          <MenuOpenIcon />
        </div>
        <div className="btn__search-wrapper">
        <button className="btn__search">Search</button>
        </div>
      </div>
    </div>
  );
};
