import { Link, useLocation } from "react-router-dom";
import "../mainCssFile/Header.css";
import AffDropdownMenu from "../dropDownComponent/AffDropdownMenu";
import IntroDropdownMenu from "../dropDownComponent/IntroDropdownMenu";
import BizDropdownMenu from "../dropDownComponent/BizDropdownMenu";
import DataDropdownMenu from "../dropDownComponent/DataDropdownMenu";
import logo from "../assets/temp_logo.png";

const Header = () => {
  const location = useLocation();

  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault(); // 기본 이동 방지
      window.location.reload(); // 페이지 새로고침
    }
  };

  return (
    <header className="header">
      <div className="container">
        {/* 로고 클릭 시 handleLogoClick 실행 */}
        <Link to="/" className="logo-container" onClick={handleLogoClick}>
          <img src={logo} alt="SAEHAN GROUP" className="logo" />
          <h1 id="saehan-group">SEAHAN</h1>
        </Link>
        <nav>
          <ul className="nav-links">
            <IntroDropdownMenu />
            <AffDropdownMenu />
            <BizDropdownMenu />
            {/* <DataDropdownMenu /> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
