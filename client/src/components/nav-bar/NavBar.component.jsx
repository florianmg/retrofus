import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES, TEXTES } from "../../constants";

import "./NavBar.scss";

const NavBar = ({ logged }) => {
  const size = useWindowSize();
  const [burgerMode, setBurgerMode] = useState(size.width < 550);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (size.width < 550 && !burgerMode) {
      console.log("burger to true");
      setBurgerMode(true);
    }
    if (size.width >= 550 && burgerMode) {
      console.log("burger to false");
      setBurgerMode(false);
    }
  }, [size, burgerMode]);

  const userInfos = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="nav-bar">
      {burgerMode ? (
        <div className="burger-container">
          <ul>
            <li className="burger" onClick={() => setIsOpen(!isOpen)}>
              <span className="line" />
              <span className="line" />
              <span className="line" />
            </li>
            <li className={isOpen ? "item" : "item-hidden"}>
              <Link to={ROUTES.HOME}>Accueil</Link>
            </li>
            <li className={isOpen ? "item" : "item-hidden"}>
              <Link to={ROUTES.DONJON}>{TEXTES.NAVBAR.DONJONS}</Link>
            </li>
            <li className={isOpen ? "item" : "item-hidden"}>
              <Link to={ROUTES.ZONES}>{TEXTES.NAVBAR.ZONES}</Link>
            </li>
          </ul>
          {logged ? (
            <Link to="/profile" className="profile-link">
              <span className={`class __${userInfos.class}`} />
              {`Profile ${userInfos.pseudo}`}
            </Link>
          ) : (
            <Link to={ROUTES.NEW}>{TEXTES.NAVBAR.NEW_CHARACTER}</Link>
          )}
        </div>
      ) : (
        <div className="container">
          <div className="left">
            <Link to="/">Retro Match</Link>
            <Link to={ROUTES.DONJON}>{TEXTES.NAVBAR.DONJONS}</Link>
            <Link to={ROUTES.ZONES}>{TEXTES.NAVBAR.ZONES}</Link>
          </div>
          {logged ? (
            <Link to="/profile" className="profile-link">
              <span className={`class __${userInfos.class}`} />
              {`Profile ${userInfos.pseudo}`}
            </Link>
          ) : (
            <Link to={ROUTES.NEW}>{TEXTES.NAVBAR.NEW_CHARACTER}</Link>
          )}
        </div>
      )}
    </nav>
  );
};

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export default NavBar;
