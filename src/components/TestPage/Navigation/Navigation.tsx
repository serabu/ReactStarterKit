import "./Navigation.scss";
import { Logo } from "../../Styles/Logo/logo";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <h1 className="logo">
        <Logo />
      </h1>
      <ul className="menu">
        <li className="menu__item">
          Home
          <div className="menu__dropdown">
            <ul>
              <li>
                <a href="#" className="dropdown__link">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#" className="dropdown__link">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#" className="dropdown__link">
                  Link 3
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="menu__item">
          Listings
          <div className="menu__dropdown">
            <ul>
              <li>
                <a href="#" className="dropdown__link">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#" className="dropdown__link">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#" className="dropdown__link">
                  Link 3
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="menu__item">
          Features
          <div className="menu__dropdown">
            <ul>
              <li>
                <a href="#" className="dropdown__link">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#" className="dropdown__link">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#" className="dropdown__link">
                  Link 3
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="menu__item">
          Pages
          <div className="menu__dropdown">
            <ul>
              <li>
                <a href="#" className="dropdown__link">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#" className="dropdown__link">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#" className="dropdown__link">
                  Link 3
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="menu__item">
          Sign Up
          <div className="menu__dropdown">
            <ul>
              <li>
                <a href="#" className="dropdown__link">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#" className="dropdown__link">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#" className="dropdown__link">
                  Link 3
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <button className="add__listing-btn">Add Listing</button>
    </nav>
  );
};
