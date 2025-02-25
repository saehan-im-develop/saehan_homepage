import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "../mainCssFile/Header.css"
import DropdownMenu from "../dropDownComponent/AffDropdownMenu";
import logo from "../assets/temp_logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="SAEHAN GROUP" className="logo" />
        <nav>
          <ul className="nav-links">
            <li><a href="#section1">새한 소개</a></li>
            
            <DropdownMenu />
            <li><a href="#section3">비즈니스</a></li>
            <li><a href="#section4">자료실</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
