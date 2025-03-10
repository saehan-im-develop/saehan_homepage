import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../dropDownCssFile/DataDropdownMenu.css";

const DataDropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate(); //페이지 이동을 위한 useNavigate 추가

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  return (
    <li className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a>자료실</a>
      {isDropdownOpen && (
        <ul className="dropdown-menu">
          {/* <li><a onClick={() => navigate("/tech-data")} style={{ cursor: "pointer" }}>기술자료</a></li>   */}
          <li><a onClick={() => navigate("/research")} style={{ cursor: "pointer" }}>연구개발</a></li> 
          {/* <li><a onClick={() => navigate("/news")} style={{ cursor: "pointer" }}>보도자료</a></li>  */}
          {/* <li><a onClick={() => navigate("/social")} style={{ cursor: "pointer" }}>사회공헌</a></li>  */}
          {/* <li><a onClick={() => navigate("/catalog")} style={{ cursor: "pointer" }}>카탈로그</a></li>  */}
          {/* <li><a onClick={() => navigate("/certificate")} style={{ cursor: "pointer" }}>인증서</a></li>  */}
          {/* <li><a onClick={() => navigate("/download")} style={{ cursor: "pointer" }}>다운로드 센터</a></li>  */}
        </ul>
      )}
    </li>
  );
};

export default DataDropdownMenu;
