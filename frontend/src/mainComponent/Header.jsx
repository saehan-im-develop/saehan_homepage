import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../mainCssFile/Header.css";
import AffDropdownMenu from "../dropDownComponent/AffDropdownMenu";
import IntroDropdownMenu from "../dropDownComponent/IntroDropdownMenu";
import CertificationMenu from "../dropDownComponent/CertificationMenu";
import DataDropdownMenu from "../dropDownComponent/DataDropdownMenu";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.location.reload();
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        {/* 상단: 로고 */}
        <div className="top-row">
          <div className="logo-profile-wrapper">
            <Link to="/" className="logo-container" onClick={handleLogoClick}>
              <img src="/assets/temp_logo.webp" alt="SAEHAN GROUP" className="logo" />
              <h1 id="saehan-group">SAEHAN GROUP</h1>
            </Link>
          </div>
          {/* 우측 햄버거 버튼 (모바일용) */}
          <div className="menu-toggle" onClick={toggleMenu}>☰</div>
        </div>

        {/* 내비게이션 메뉴 */}
        <nav>
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <IntroDropdownMenu closeMenu={closeMenu} />
            <AffDropdownMenu closeMenu={closeMenu} />
            <CertificationMenu closeMenu={closeMenu} />
            <DataDropdownMenu closeMenu={closeMenu} />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
