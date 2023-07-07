import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/Logo 1.png";
import "../style/Navbar.css";

const Navbar = () => {
  const [isSection1Visible, setIsSection1Visible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section1 = document.getElementById("section1");
      const navbar = document.getElementById("navbar");

      if (section1 && navbar) {
        const rect = section1.getBoundingClientRect();
        const isVisible =
          rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsSection1Visible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        id="navbar"
        className={isSection1Visible ? "nav visible" : "nav"}
      >
        {/* Main Logo of Website */}
        <div className="img">
          <img src={logo1} alt="" srcSet="" />
        </div>
        <div className="navlinks">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/offering" className="nav-link">
                OFFERING
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link">
                PORTFOLIO
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/media offering" className="nav-link">
                MEDIA OFFERING
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
