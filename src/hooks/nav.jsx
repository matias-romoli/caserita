import { createContext, useContext } from "react";
const NavContext = createContext();

export const NavContextProvider = ({ children }) => {
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollInit = () => {
    window.scrollTo({
      top: -1,
      behavior: "smooth",
    });
  };
  return (
    <NavContext.Provider value={{ scrollToSection, scrollInit }}>
      {children}
    </NavContext.Provider>
  );
};
export const useNav = () => {
  return useContext(NavContext);
};
