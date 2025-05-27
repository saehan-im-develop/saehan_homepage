import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../dropDownCssFile/DataDropdownMenu.css";

const DataDropdownMenu = ({ closeMenu }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // ✅ 강제 렌더링 트리거 (모바일 대응)
    if (typeof closeMenu === "function") closeMenu(); // ✅ 안정성 추가
  };

  return (
    <li
      className="dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        className="dropdown-title"
        onClick={(e) => e.preventDefault()}
        style={{ cursor: "default" }}
      >
        자료실
      </a>
      {isDropdownOpen && (
        <div className="dropdown-container">
          <ul className="dropdown-menu">
            <li>
              <a
                onClick={() => handleNavigate("/news")}
                style={{ cursor: "pointer" }}
              >
                보도자료
              </a>
            </li>
            {/* ✅ [테스트] 방 추가 */}
            <li>
              <a
                onClick={() => handleNavigate("/test")}
                style={{ cursor: "pointer" }}
              >
                테스트
              </a>
            </li>
          </ul>
        </div>
      )}
    </li>
  );
};

export default DataDropdownMenu;
