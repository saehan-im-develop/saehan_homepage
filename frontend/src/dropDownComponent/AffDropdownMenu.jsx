import { useState } from "react";
import "../dropDownCssFile/AffDropdownMenu.css"

const DropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  return (
    <li className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a href="#section2">계열사 소개</a>
      {isDropdownOpen && (
        <ul className="dropdown-menu">
          <li><a href="#sub1">새한하이테크</a></li>
          <li><a href="#sub2">새한플러스(본점)</a></li>
          <li><a href="#sub3">새한플러스(지점)</a></li>
          <li><a href="#sub4">새한글로벌</a></li>
          <li><a href="#sub5">새한아이엠</a></li>
        </ul>
      )}
    </li>
  );
};

export default DropdownMenu;
