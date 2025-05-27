import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../mainCssFile/Header.css";
import AffDropdownMenu from "../dropDownComponent/AffDropdownMenu";
import IntroDropdownMenu from "../dropDownComponent/IntroDropdownMenu";
import CertificationMenu from "../dropDownComponent/CertificationMenu";
import DataDropdownMenu from "../dropDownComponent/DataDropdownMenu";
import logo from "@/assets/temp_logo.png";
import profileIcon from "@/assets/Areal/mail.png";

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

        {/* 상단: 로고 + 모바일용 사내 연락망 */}
        <div className="top-row">
          <div className="logo-profile-wrapper">
            <Link to="/" className="logo-container" onClick={handleLogoClick}>
              <img src={logo} alt="SAEHAN GROUP" className="logo" />
              <h1 id="saehan-group">SAEHAN GROUP</h1>
            </Link>

            {/* 모바일 전용 사내 연락망 (햄버거 메뉴 옆에만 노출) */}
            <a
              href="https://mail.worksmobile.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-container mobile-only"
            >
              <img src={profileIcon} alt="사내 연락망" className="profile-icon" />
              {/* 모바일에서는 텍스트 숨김 (아이콘만) */}
              <strong className="profile-text">사내 연락망</strong>
            </a>
          </div>

          {/* 우측 햄버거 버튼 (모바일용) */}
          <div className="menu-toggle" onClick={toggleMenu}>☰</div>
        </div>

        {/* PC 전용 사내 연락망 (로고 우측) */}
        <a
          href="https://mail.worksmobile.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-container desktop-only"
        >
          <img src={profileIcon} alt="사내 연락망" className="profile-icon" />
          <strong className="profile-text">사내 연락망</strong>
        </a>

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
