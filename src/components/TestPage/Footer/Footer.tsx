import "./Footer.scss";
import * as img from "../IMG/index";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__sub">
          <div className="footer__sub__title">
            <h2 className="footer__sub__title__h1">Join Our Newsletter</h2>
            <h3 className="footer__sub__title__h2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              tempor incididunt
            </h3>
          </div>
          <div className="footer__sub__wrapper">
            <input
              type="text"
              className="footer__sub__input"
              placeholder="Enter Your Email Addres"
            ></input>
            <button className="footer__sub__button">Subscribe Now</button>
          </div>
        </div>
        <div className="footer__container">
          <div className="footer__column">
            <img className="footer__column__title" src={img.logo}></img>
            <ul className="footer__column__links">
              <li>
                Lorem ipsum amet, consectetur adipisicing elit, sed do eiusmod
                tempor magna aliqua.
              </li>
              <li className="footer__column__icons">
              <TelegramIcon />
              <WhatsAppIcon />
              <TwitterIcon />
              <InstagramIcon />
              </li>
            </ul>
          </div>
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
                Location:
                <span>3064/3065 Silver Busunnes Point Uttran Surat</span>
              </li>
              <li>
                Email:
                <span> info@lathityasolutions.com</span>
              </li>
              <li>
                Phone:
                <span> (+91) 78785 35701</span>
              </li>
              <li>
                <a href="/">View location on GoogleMaps</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__rights">
          <h2 className="footer__rights__title">
            ⓒ 2023 Luxurious House. All Rights Reserved.
          </h2>
        </div>
      </div>
    </footer>
  );
};
