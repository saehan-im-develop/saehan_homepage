import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../dropDownCssFile/IntroDropdownMenu.css";

const IntroDropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  return (
    <li className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a>새한 소개</a>
      {isDropdownOpen && (
        <ul className="dropdown-menu">
          <li><a onClick={() => navigate("/ceo")} style={{ cursor: "pointer" }}>CEO 인사말</a></li>
          <li><a onClick={() => navigate("/vision")} style={{ cursor: "pointer" }}>비전 및 가치관</a></li>
          <li><a onClick={() => navigate("/history")} style={{ cursor: "pointer" }}>회사 연혁</a></li>
          <li><a onClick={() => navigate("/network")} style={{ cursor: "pointer" }}>네트워크</a></li>
        </ul>
      )}
    </li>
  );
};

export default IntroDropdownMenu;
