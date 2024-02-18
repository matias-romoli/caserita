import { imageEmpanada, imagePizza, promo } from "../../../const/const";
import Swiper from "../../../component/swiper/swiper";
import Card from "../../../component/card/card";
import Contact from "../contact/contact";
import Footer from "../footer/footer";

function Main() {
  return (
    <>
      <div className="main" id="menu__home">
        <div className="main__title" data-aos="fade-up">
          <h2> ¡Disfrutá de nuestro menú!</h2>
        </div>
        <div className="main__card" data-aos="fade-up">
          <Card link="/menu" image={imagePizza} text="PIZZAS" />
          <Card link="/menu" image={imageEmpanada} text="EMPANADAS" />
        </div>
      </div>
      <div className="main">
        <div className="main__title" data-aos="fade-up">
          <h2> ¡Nuestras promociones!</h2>
        </div>
        <div className="main__swiper" data-aos="fade-up">
          <Swiper image={promo} />
        </div>
      </div>
      <Contact />
      <Footer scrollID="home" />
    </>
  );
}

export default Main;
