import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { BiFoodMenu } from "react-icons/bi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavItem = ({ icon, text, section, onClick }) => (
  <li className="nav__li" onClick={onClick}>
    <Link to={section}>
      {icon} {text}
    </Link>
  </li>
);
function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [query, setQuery] = useState(false);

  const li = [
    {
      icon: <AiFillHome className="nav__li--logo" />,
      text: "Inicio",
      section: "/",
    },
    {
      icon: <BiFoodMenu className="nav__li--logo" />,
      section: "/menu",
      text: "Menú",
    },
    {
      icon: <IoMdContacts className="nav__li--logo" />,
      section: "/contact",
      text: "Contacto",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={scrollPosition > 0 ? "navbar" : "nav"}>
        <Link to="/">
          <img loading="lazy" src="./logo-1.png" alt="Logo-caserita" />
        </Link>
        <ul className={`${!query ? "nav__ul" : "nav__ul--responsive"}`}>
          {li.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              text={item.text}
              section={item.section}
              onClick={() => setQuery(!query)}
            />
          ))}
        </ul>
        <AiOutlineMenu
          className="nav__li--logo--responsive"
          onClick={() => setQuery(!query)}
        />
      </nav>
    </>
  );
}

export default Navbar;
