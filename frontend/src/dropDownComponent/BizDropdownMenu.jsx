import { useState } from "react";
import "../dropDownCssFile/BizDropdownMenu.css";

const BizDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <li className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      비즈니스
      {isOpen && (
        <ul className="dropdown-menu">
          <li><a href="#biz-area">사업 영역</a></li>
          <li><a href="#products">주요 제품 및 서비스</a></li>
          <li><a href="#tech">기술 & 혁신</a></li>
          <li><a href="#solutions">고객 맞춤형 솔루션</a></li>
          <li><a href="#investment">투자 & 글로벌</a></li>
        </ul>
      )}
    </li>
  );
};

export default BizDropdownMenu;
