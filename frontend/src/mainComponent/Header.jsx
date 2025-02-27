import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "../mainCssFile/Header.css"
import AffDropdownMenu from "../dropDownComponent/AffDropdownMenu";
import IntroDropdownMenu from "../dropDownComponent/IntroDropdownMenu";
import BizDropdownMenu from "../dropDownComponent/BizDropdownMenu";
import DataDropdownMenu from "../dropDownComponent/DataDropdownMenu";
import logo from "../assets/temp_logo.png";
import { Link } from "react-router-dom"; 

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <img src={logo} alt="SAEHAN GROUP" className="logo" />
        </Link>
        <nav>
          <ul className="nav-links">
            <IntroDropdownMenu />
            <AffDropdownMenu />
            <BizDropdownMenu />
            <DataDropdownMenu />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
