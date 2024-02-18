import { HashRouter, Routes, Route } from "react-router-dom";
import { NavContextProvider } from "../hooks/nav";
import Contact from "../pages/contact/contact";
import Menu from "../pages/menu/menu";
import Home from "../home/start";

function Navigation() {
  return (
    <NavContextProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </NavContextProvider>
  );
}

export default Navigation;
