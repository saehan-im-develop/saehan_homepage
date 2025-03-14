import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../dropDownCssFile/DataDropdownMenu.css";

const DataDropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  return (
    <li className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a href="#" className="dropdown-title">자료실</a>
      {isDropdownOpen && (
        <div className="dropdown-container">
          <ul className="dropdown-menu">
            <li><a onClick={() => navigate("/research")} style={{ cursor: "pointer" }}>연구개발</a></li> 
            <li><a onClick={() => navigate("/news")} style={{ cursor: "pointer" }}>보도자료</a></li> 
          </ul>
        </div>
      )}
    </li>
  );
};

export default DataDropdownMenu;
