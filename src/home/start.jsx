import Navbar from "../component/navbar/navbar";
import Main from "../pages/home/main/main";
import Home from "../pages/home/home";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./start.scss";

function Start() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <Main />
    </>
  );
}

export default Start;
