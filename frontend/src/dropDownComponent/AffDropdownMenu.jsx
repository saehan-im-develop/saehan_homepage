import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../dropDownCssFile/AffDropdownMenu.css";

const AffDropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  return (
    <li className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a href="#" className="dropdown-title">계열사 소개</a>
      {isDropdownOpen && (
        <div className="dropdown-container">  {/* ✅ <ul>을 <div>로 감싸기 */}
          <ul className="dropdown-menu">
            <li><a onClick={() => navigate("/im")} style={{ cursor: "pointer" }}>새한 아이엠</a></li> 
            <li><a onClick={() => navigate("/hightech")} style={{ cursor: "pointer" }}>새한 하이테크</a></li> 
            <li><a onClick={() => navigate("/plus")} style={{ cursor: "pointer" }}>새한 플러스</a></li> 
            <li><a onClick={() => navigate("/global")} style={{ cursor: "pointer" }}>SM 케미칼</a></li> 
          </ul>
        </div>
      )}
    </li>
  );
};

export default AffDropdownMenu;
