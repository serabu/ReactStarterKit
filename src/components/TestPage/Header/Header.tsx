import { Navigation } from "../Navigation/Navigation";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Navigation />
        <div className="header__title">
          <h1 className="header__title__h1">Find Your Property</h1>
          <h2 className="header__title__h2">
            From as low as $10 per day with limited time offer
          </h2>
        </div>
        <div className="header__buttons">
          <button className="header__button">Any Status</button>
          <button className="header__button">For Sale</button>
          <button className="header__button">For Rent</button>
        </div>
        <div className="header__search">
          <input
            type="text"
            className="header__search__input"
            placeholder="Serch..."
          ></input>
          <button className="header__search__button">Serch</button>
        </div>
      </div>
    </header>
  );
};
