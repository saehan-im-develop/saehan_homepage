import { useNavigate } from 'react-router-dom';
import "../dropDownCssFile/BizDropdownMenu.css";

const BizDropdownMenu = ({ closeMenu }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/research");
    window.scrollTo(0, 0); // ✅ 렌더링 트리거
    if (closeMenu) closeMenu(); // ✅ 모바일 메뉴 닫기
  };

  return (
    <li className="dropdown">
      <a onClick={handleClick} style={{ cursor: "pointer" }}>
        인증문서
      </a>
    </li>
  );
};

export default BizDropdownMenu;
