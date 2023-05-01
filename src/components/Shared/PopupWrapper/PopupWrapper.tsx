import { useState } from "react";
import "./PopupWrapper.scss";
import { PopupRent } from "../../Shared/PopupWrapper/PopupRent/PopupRent";
import { PopupSale } from "../../Shared/PopupWrapper/PopupSale/PopupSale";
import { PopupStatus } from "../../Shared/PopupWrapper/PopupStatus/PopupStatus";

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

export const PopupWrapper = () => {
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
    <div className="popup__wrapper">
      <div className="popup__wrapper__buttons">
        <button
          className={`popup__wrapper__button ${currentPopup === PopupType.Status ? 'active' : ''}`}
          onClick={() => handleButtonClick(PopupType.Status)}
        >
          Any Status
        </button>
        <button
          className={`popup__wrapper__button ${currentPopup === PopupType.Sale ? 'active' : ''}`}
          onClick={() => handleButtonClick(PopupType.Sale)}
        >
          For Sale
        </button>
        <button
          className={`popup__wrapper__button ${currentPopup === PopupType.Rent ? 'active' : ''}`}
          onClick={() => handleButtonClick(PopupType.Rent)}
        >
          For Rent
        </button>
      </div>
      <div className="popup__wrapper__search">{renderPopup()}</div>
    </div>
  );
};
