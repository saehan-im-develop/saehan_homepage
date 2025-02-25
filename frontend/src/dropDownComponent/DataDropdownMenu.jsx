import { useState } from "react";
import "../dropDownCssFile/DataDropdownMenu.css";

const DataDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <li className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      자료실
      {isOpen && (
        <ul className="dropdown-menu">
          <li><a href="#tech-data">기술자료</a></li>
          <li><a href="#catalog">카탈로그</a></li>
          <li><a href="#certification">인증서</a></li>
          <li><a href="#research">연구개발</a></li>
          <li><a href="#news">보도자료</a></li>
          <li><a href="#social">사회공헌</a></li>
          <li><a href="#download">다운로드 센터</a></li>
        </ul>
      )}
    </li>
  );
};

export default DataDropdownMenu;
