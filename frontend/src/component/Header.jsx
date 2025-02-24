import { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">새한그룹</h1>

        <nav className="relative">
          <ul className="flex space-x-6">
            <li
              className="relative cursor-pointer px-4 py-2 text-lg font-semibold hover:text-blue-600"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              계열사 소개
              {isDropdownOpen && (
                <ul className="absolute left-0 top-full mt-2 w-auto bg-white shadow-lg border rounded-md flex space-x-4 p-4">
                  <li className="px-4 py-2 hover:bg-gray-100">새한하이테크</li>
                  <li className="px-4 py-2 hover:bg-gray-100">새한플러스(본점)</li>
                  <li className="px-4 py-2 hover:bg-gray-100">새한플러스(지점)</li>
                  <li className="px-4 py-2 hover:bg-gray-100">새한글로벌</li>
                  <li className="px-4 py-2 hover:bg-gray-100">새한아이엠</li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
