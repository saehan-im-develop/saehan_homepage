import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../dropDownCssFile/AffDropdownMenu.css";

const AffDropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate(); // ✅ 페이지 이동을 위한 useNavigate 추가

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  return (
    <li className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a href="#section2">계열사 소개</a>
      {isDropdownOpen && (
        <ul className="dropdown-menu">
          <li><a onClick={() => navigate("/hightech")} style={{ cursor: "pointer" }}>새한하이테크</a></li> 
          <li><a onClick={() => navigate("/plus")} style={{ cursor: "pointer" }}>새한플러스</a></li> 
          <li><a onClick={() => navigate("/global")} style={{ cursor: "pointer" }}>새한글로벌</a></li> 
          <li><a onClick={() => navigate("/im")} style={{ cursor: "pointer" }}>새한아이엠</a></li> 
        </ul>
      )}
    </li>
  );
};


export default AffDropdownMenu;
