import { useState } from "react";
import { Navigation } from "../Navigation/Navigation";
import "./Header.scss";
import { PopupRent } from "./PopupRent/PopupRent";
import { PopupSale } from "./PopupSale/PopupSale";
import { PopupStatus } from "./PopupStatus/PopupStatus";

enum PopupType {
  Status = "status",
  Sale = "sale",
  Rent = "rent",
}

const popupComponents: Record<PopupType, React.FC> = {
  [PopupType.Status]: PopupStatus,
  [PopupType.Sale]: PopupSale,
  [PopupType.Rent]: PopupRent,
};

export const Header = () => {
  const [currentPopup, setCurrentPopup] = useState<PopupType | null>(null);

  const handleButtonClick = (popupType: PopupType) => {
    if (currentPopup === popupType) {
      setCurrentPopup(null);
    } else {
      setCurrentPopup(popupType);
    }
  };

  const renderPopup = () => {
    const Component = currentPopup ? popupComponents[currentPopup] : null;
    return Component ? <Component /> : null;
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <Navigation />
        <div className="header__title">
          <h2 className="header__title__h1">Find Your Property</h2>
          <h3 className="header__title__h2">
            From as low as $10 per day with limited time offer
          </h3>
        </div>
        <div className="header__buttons">
          <button
            className="header__button"
            onClick={() => handleButtonClick(PopupType.Status)}
          >
            Any Status
          </button>
          <button
            className="header__button"
            onClick={() => handleButtonClick(PopupType.Sale)}
          >
            For Sale
          </button>
          <button
            className="header__button"
            onClick={() => handleButtonClick(PopupType.Rent)}
          >
            For Rent
          </button>
        </div>
        <div className="header__search">{renderPopup()}</div>
      </div>
    </header>
  );
};
