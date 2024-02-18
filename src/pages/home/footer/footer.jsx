import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { useNav } from "../../../hooks/nav";
import { Link } from "react-router-dom";
import "./footer.scss";

function Footer({scrollID}) {
  const { scrollToSection } = useNav();

  return (
    <>
      <footer className="footer">
        <div className="footer__text">
          <p> © 2023 Caserita. Todos los derechos reservados. </p>
        </div>
        <div className="footer__icon">
          <Link to="https://www.instagram.com/caserita.lp/">
            <IoLogoInstagram className="icon__footer" />
          </Link>
          <MdOutlineKeyboardArrowUp
            onClick={() => scrollToSection(scrollID)}
            className="icon__footer"
          />
        </div>
      </footer>
    </>
  );
}

export default Footer;
