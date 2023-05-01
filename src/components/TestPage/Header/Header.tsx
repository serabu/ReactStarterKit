import { PopupWrapper } from "../../Shared/PopupWrapper/PopupWrapper";
import { Navigation } from "../Navigation/Navigation";
import "./Header.scss";

export const Header = () => {
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
    <PopupWrapper />
      </div>
    </header>
  );
};
