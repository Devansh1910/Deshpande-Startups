
import logo1 from "./assets/Logo 1.png";
import {  Link } from "react-router-dom";
import "./style/Navbar.css";
function Navbar() {

  return (
    <>
      <div className="nav">

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
}

export default Navbar;