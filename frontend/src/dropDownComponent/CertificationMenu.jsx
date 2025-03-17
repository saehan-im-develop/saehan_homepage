import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../dropDownCssFile/BizDropdownMenu.css";

const BizDropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 추가

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  return (
    <li className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a onClick={() => navigate("/biz-area")} style={{ cursor: "pointer" }}>인증문서</a>  
    </li>
  );
};

export default BizDropdownMenu;
