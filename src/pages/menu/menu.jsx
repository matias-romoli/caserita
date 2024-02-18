import Empanadas from "./food/empanadas/empanadas";
import Navbar from "../../component/navbar/navbar";
import Footer from "../home/footer/footer";
import React, { useEffect } from "react";
import { useNav } from "../../hooks/nav";
import Pizza from "./food/pizzas/pizza";
import { useState } from "react";
import "./menu.scss";

function Menu() {
  const [active, setactive] = useState(true);
  const { scrollInit } = useNav();

  function isActive(activeValue) {
    setactive(activeValue);
  }
  useEffect(() => {
    scrollInit();
  }, []);
  
  return (
    <>
      <Navbar />
      <div className="menu" id="menu">
        <h2> Menú </h2>
      </div>
      <div className="menu__text">
        <div className="menu__text--pizza">
          <p className={active ? "active" : ""} onClick={() => isActive(true)}>
            Pizzas
          </p>
        </div>
        <div className="menu__text--empanada">
          <p
            className={!active ? "active" : ""}
            onClick={() => isActive(false)}
          >
            Empanadas
          </p>
        </div>
      </div>
      <div className="menu__container">
        {active ? <Pizza /> : <Empanadas />}
      </div>
      <Footer scrollID="menu" />
    </>
  );
}

export default Menu;
