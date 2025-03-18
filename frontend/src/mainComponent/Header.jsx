import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../mainCssFile/Header.css";
import AffDropdownMenu from "../dropDownComponent/AffDropdownMenu";
import IntroDropdownMenu from "../dropDownComponent/IntroDropdownMenu";
import CertificationMenu from "../dropDownComponent/CertificationMenu";
import DataDropdownMenu from "../dropDownComponent/DataDropdownMenu";
import logo from "@/assets/temp_logo.png";
import profileIcon from "@/assets/Areal/mail.png"; // 🔹 사용할 이미지 파일 추가

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

  return (
    <header className="header">
      <div className="container">
        {/* 로고 */}
        <Link to="/" className="logo-container" onClick={handleLogoClick}>
          <img src={logo} alt="SAEHAN GROUP" className="logo" />
          <h1 id="saehan-group">SAEHAN GROUP</h1>
        </Link>

        {/* 네비게이션 메뉴 */}
        <nav>
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <IntroDropdownMenu />
            <AffDropdownMenu />
            <CertificationMenu />
            <DataDropdownMenu />
          </ul>
        </nav>

        {/* 햄버거 버튼 */}
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>

        {/* ✅ 사내 연락망 링크 추가 */}
        <a href="https://mail.worksmobile.com/" target="_blank" rel="noopener noreferrer" className="profile-container">
          <img src={profileIcon} alt="사내 연락망" className="profile-icon" />
          <strong className="profile-text">사내 연락망</strong>
        </a>
      </div>
    </header>
  );
};

export default Header;
