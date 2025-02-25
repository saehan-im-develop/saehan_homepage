import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "../mainCssFile/Header.css"
import DropdownMenu from "../dropDownComponent/AffDropdownMenu";
import IntroDropdownMenu from "../dropDownComponent/IntroDropdownMenu";
import BizDropdownMenu from "../dropDownComponent/BizDropdownMenu";
import DataDropdownMenu from "../dropDownComponent/DataDropdownMenu";
import logo from "../assets/temp_logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="SAEHAN GROUP" className="logo" />
        <nav>
          <ul className="nav-links">
            <IntroDropdownMenu />
            <DropdownMenu />
            <BizDropdownMenu />
            <DataDropdownMenu />

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
