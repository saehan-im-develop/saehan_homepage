import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../dropDownCssFile/AffDropdownMenu.css";

const AffDropdownMenu = ({ closeMenu }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768; // ✅ 모바일 환경 판단

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  const handleClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // ✅ 강제로 스크롤 초기화
    if (closeMenu) closeMenu(); // ✅ 메뉴 닫기
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
          if (isMobile) setIsDropdownOpen(!isDropdownOpen); // ✅ 모바일 클릭시 토글
        }}
        className="dropdown-title"
      >
        계열사 소개
      </a>

      {isDropdownOpen && (
        <div className="dropdown-container">
          <ul className="dropdown-menu">
            <li>
              <a onClick={() => handleClick("/im")} style={{ cursor: "pointer" }}>
                새한 아이엠
              </a>
            </li>
            <li>
              <a onClick={() => handleClick("/hightech")} style={{ cursor: "pointer" }}>
                새한 하이테크
              </a>
            </li>
            <li>
              <a onClick={() => handleClick("/plus")} style={{ cursor: "pointer" }}>
                새한 플러스
              </a>
            </li>
            <li>
              <a onClick={() => handleClick("/global")} style={{ cursor: "pointer" }}>
                SM 케미칼
              </a>
            </li>
          </ul>
        </div>
      )}
    </li>
  );
};

export default AffDropdownMenu;
