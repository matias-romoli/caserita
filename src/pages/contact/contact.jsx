import {
  MdOutlineKeyboardArrowDown,
  MdLocationOn,
  MdLocalPhone,
} from "react-icons/md";
import Navbar from "../../component/navbar/navbar";
import ImageGallery from "react-image-gallery";
import Footer from "../home/footer/footer";
import { useNav } from "../../hooks/nav";
import Formulario from "./form/form";
import { useEffect } from "react";
import "./contact.scss";

const image = [
  { original: "./contact/2.png" },
  { original: "./contact/3.png" },
];
function Contact() {
  const { scrollInit, scrollToSection } = useNav();
  useEffect(() => {
    scrollInit();
  }, []);

  return (
    <>
      <Navbar />
      <div className="contacto" id="contact">
        <ImageGallery
          items={image}
          showNav={false}
          autoPlay={true}
          slideDuration={2000}
          slideInterval={10000}
          showPlayButton={false}
          showThumbnails={false}
          showFullscreenButton={false}
        />
        <div className="contacto__text">
          <h2> Contacto </h2>
          <MdOutlineKeyboardArrowDown
            className="contacto__down"
            onClick={() => scrollToSection("form")}
          />
        </div>
      </div>
      <div className="contacto__form" id="form">
        <div className="location">
          <h2> ¡Dejá tu comentario! </h2>
          <div className="location__text">
            <MdLocationOn className="icon__contacto" />
            <p>17 e 40 y 41. La Plata.</p>
          </div>
          <div className="location__text">
            <MdLocalPhone className="icon__contacto" />
            <p>221-308-8740</p>
          </div>
        </div>
        <Formulario />
      </div>
      <Footer scrollID="contact" />
    </>
  );
}

export default Contact;
