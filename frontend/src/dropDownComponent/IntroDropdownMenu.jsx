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
      새한 소개
      {isDropdownOpen && (
       <ul className="dropdown-menu">
       <li><a onClick={() => navigate("/vision")} style={{ cursor: "pointer" }}>비전 및 이념</a></li> {/* ✅ 페이지 이동 추가 */}
       <li><a onClick={() => navigate("/ceo")} style={{ cursor: "pointer" }}>CEO 인사말</a></li> {/* ✅ 페이지 이동 추가 */}
       <li><a onClick={() => navigate("/history")} style={{ cursor: "pointer" }}>회사 연혁</a></li> {/* ✅ 페이지 이동 추가 */}
       <li><a onClick={() => navigate("/network")} style={{ cursor: "pointer" }}>네트워크</a></li> {/* ✅ 페이지 이동 추가 */}
     </ul>
      )}
    </li>
  );
};

export default IntroDropdownMenu;
