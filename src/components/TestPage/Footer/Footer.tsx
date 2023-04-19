import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__sub">
          <div className="footer__sub__title">
            <h1 className="footer__sub__title__h1">Join Our Newsletter</h1>
            <h2 className="footer__sub__title__h2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              tempor incididunt
            </h2>
          </div>
          <input
            type="text"
            className="footer__sub__input"
            placeholder="Enter Your Email Addres"
          ></input>
          <button className="footer__sub__button">Subscribe Now</button>
        </div>
        <div className="footer__container">
          <div className="footer__column">
            <h4 className="footer__column__title">Services</h4>
            <ul className="footer__column__links">
              <li>
                <a href="/">Tearms of Use</a>
              </li>
              <li>
                <a href="/">License & Condition</a>
              </li>
              <li>
                <a href="/">Payment Methods</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Licensencing</a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h4 className="footer__column__title">Quick Links</h4>
            <ul className="footer__column__links">
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Blogs</a>
              </li>
              <li>
                <a href="/">Gallery</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h4 className="footer__column__title">Contact</h4>
            <ul className="footer__column__links">
              <li>
                <span>
                  Location: 3064/3065 Silver Busunnes Point Uttran Surat
                </span>
              </li>
              <li>
                <span>info@lathityasolutions.com</span>
              </li>
              <li>
                <span>Phone: (+91) 78785 35701</span>
              </li>
              <li>
                <a href="/">View location on GoogleMaps</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__rights">
          <h2 className="footer__rights__title">
            {" "}
            ⓒ 2023 Luxurious House. All Rights Reserved.{" "}
          </h2>
        </div>
      </div>
    </footer>
  );
};
