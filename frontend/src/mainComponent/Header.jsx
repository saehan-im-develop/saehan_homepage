import { Link, useLocation } from "react-router-dom";
import { useState } from "react"; // ✅ 상태 관리 추가
import "../mainCssFile/Header.css";
import AffDropdownMenu from "../dropDownComponent/AffDropdownMenu";
import IntroDropdownMenu from "../dropDownComponent/IntroDropdownMenu";
import BizDropdownMenu from "../dropDownComponent/BizDropdownMenu";
import DataDropdownMenu from "../dropDownComponent/DataDropdownMenu";
import logo from "@/assets/temp_logo.png";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ 메뉴 상태 추가

  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.location.reload();
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // ✅ 메뉴 상태 토글
  };

  return (
    <header className="header">
      <div className="container">
        {/* 로고 클릭 시 handleLogoClick 실행 */}
        <Link to="/" className="logo-container" onClick={handleLogoClick}>
          <img src={logo} alt="SAEHAN GROUP" className="logo" />
          <h1 id="saehan-group">SAEHAN</h1>
        </Link>

        {/* ✅ 햄버거 버튼 추가 */}
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>

        {/* ✅ 메뉴가 열려있을 때 class에 active 추가 */}
        <nav>
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
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
