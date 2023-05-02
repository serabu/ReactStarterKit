import "./PopupSale.scss";
import SearchIcon from "@mui/icons-material/Search";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

export const PopupSale = () => {
  return (
    <form className="popup__container">
      <div className="popup__content">
        <div className="popup__icon">
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="NEIGGBORHOOD"
          className="popup__input-search"
        />
        <div className="popup__icon">
          <BusinessCenterIcon />
        </div>
        <select className="popup__select__property">
          <option value="">PRORETY TYPES</option>
        </select>
        <div className="popup__icon">
          <MenuOpenIcon />
        </div>
        <div className="popup__btnSearch-wrapper">
          <button className="popup__btnSearch">Search</button>
        </div>
      </div>
    </form>
  );
};
