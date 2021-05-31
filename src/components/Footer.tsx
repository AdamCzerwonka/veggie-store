import { FaGithub } from "react-icons/fa";

import "./../static/styles/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer__left">
        <p>Adam Czerwonka &copy; 2021</p>
        <div className="footer__left__link">
          <FaGithub className="footer__left__icon" />
          <a href="https://github.com/AdamCzerwonka">Github</a>
        </div>
      </div>
      <div className="footer__right"></div>
    </footer>
  );
};

export default Footer;
