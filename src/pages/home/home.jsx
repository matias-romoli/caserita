import ButtonHome from "../../component/button/button";
import { useNav } from "../../hooks/nav";
import { useEffect } from "react";

function Home() {
  const { scrollInit, scrollToSection } = useNav();
  useEffect(() => {
    scrollInit();
  }, []);

  return (
    <div className="home" id="home">
      <img loading="lazy" src="./fondo-home.png" alt="Fondo" />
      <div className="home__text">
        <h2>¡¡Pizzas y empanadas para hornear!!</h2>
        <div className="home__text--button">
          <a
            target="_blank"
            download="precios.pdf"
            href="./pdf/precios.pdf"
            rel="noopener noreferrer"
          >
            <ButtonHome status={false} text="Menú" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            download="promociones.pdf"
            href="./pdf/promociones.pdf"
          >
            <ButtonHome status={true} text="Promociones" />
          </a>
        </div>
        <div className="home__text--scroll">
          <span onClick={() => scrollToSection("menu__home")}></span>
          <p className="paragraph"> Scroll </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
