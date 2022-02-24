import "./Footer.css";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__main">
        <img className="footer__logo" src="/brand/logo.svg" />
        <ul className="footer__link whiteTxt">
          <li>
            <a href="">Become Ambassador</a>
          </li>
          <li>
            <a href="">Register</a>
          </li>
        </ul>
        <ul className="footer__link whiteTxt">
          <li>
            <a href="">Meet our team</a>
          </li>
          <li>
            <a href="">Virtual Swags</a>
          </li>
        </ul>
        <ul className="footer__social">
          <li>
            <a>
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a>
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p>&copy; Copyright 2022 | HackBox Official</p>
      </div>
    </footer>
  );
};

export default Footer;
