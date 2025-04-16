import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../dropDownCssFile/IntroDropdownMenu.css";

const IntroDropdownMenu = ({ closeMenu }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768;

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  const handleNavigate = (path) => {
    navigate(path);

    // ✅ 모바일에서 강제 리렌더링 트리거
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    if (closeMenu) closeMenu();
  };

  return (
    <li
      className="dropdown"
      onMouseEnter={!isMobile ? handleMouseEnter : undefined}
      onMouseLeave={!isMobile ? handleMouseLeave : undefined}
    >
      <a
        onClick={(e) => {
          e.preventDefault();
          if (isMobile) setIsDropdownOpen(!isDropdownOpen);
        }}
        className="dropdown-title"
      >
        새한그룹 소개
      </a>
      {isDropdownOpen && (
        <ul className="dropdown-menu">
          <li><a onClick={() => handleNavigate("/ceo")}>CEO 인사말</a></li>
          <li><a onClick={() => handleNavigate("/vision")}>비전 및 가치관</a></li>
          <li><a onClick={() => handleNavigate("/history")}>회사 연혁</a></li>
          <li><a onClick={() => handleNavigate("/network")}>네트워크</a></li>
        </ul>
      )}
    </li>
  );
};

export default IntroDropdownMenu;
