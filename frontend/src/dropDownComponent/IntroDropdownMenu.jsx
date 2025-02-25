import { useState } from "react";
import "../dropDownCssFile/IntroDropdownMenu.css";

const IntroDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <li className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      새한 소개
      {isOpen && (
        <ul className="dropdown-menu">
          <li><a href="#vision">비전 및 이념</a></li>
          <li><a href="#ceo">CEO 인사말</a></li>
          <li><a href="#history">새한 역사</a></li>
          <li><a href="#ci">CI 소개</a></li>
          <li><a href="#network">네트워크</a></li>
        </ul>
      )}
    </li>
  );
};

export default IntroDropdownMenu;
