import "./Navigation.scss";
import * as img from "../../images/TestPage";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="logo"><img src={img.logo} alt="" /></div>
      <ul className="menu">
        <li className="menu__item">
          Home
          <div className="menu__dropdown">
            <a href="#" className="dropdown__link">Link 1</a>
            <a href="#" className="dropdown__link">Link 2</a>
            <a href="#" className="dropdown__link">Link 3</a>
          </div>
        </li>
        <li className="menu__item">
          Listings
          <div className="menu__dropdown">
            <a href="#" className="dropdown__link">Link 1</a>
            <a href="#" className="dropdown__link">Link 2</a>
            <a href="#" className="dropdown__link">Link 3</a>
          </div>
        </li>
        <li className="menu__item">
          Features
          <div className="menu__dropdown">
            <a href="#" className="dropdown__link">Link 1</a>
            <a href="#" className="dropdown__link">Link 2</a>
            <a href="#" className="dropdown__link">Link 3</a>
          </div>
        </li>
        <li className="menu__item">
          Pages
          <div className="menu__dropdown">
            <a href="#" className="dropdown__link">Link 1</a>
            <a href="#" className="dropdown__link">Link 2</a>
            <a href="#" className="dropdown__link">Link 3</a>
          </div>
        </li>
        <li className="menu__item">
          Sign Up
          <div className="menu__dropdown">
            <a href="#" className="dropdown__link">Link 1</a>
            <a href="#" className="dropdown__link">Link 2</a>
            <a href="#" className="dropdown__link">Link 3</a>
          </div>
        </li>
      </ul>
      <button className="add__listing-btn">Add Listing</button>
    </nav>
  );
};
