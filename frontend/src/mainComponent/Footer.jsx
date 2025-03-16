import { useState } from "react";
import "../mainCssFile/Footer.css";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBusinessInfo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 SAEHAN GROUP. All rights reserved.</p>
        <p>대표 : 김원만</p>

        {/* 🔽 클릭하면 목록이 펼쳐짐 */}
        <p className="business-toggle" onClick={toggleBusinessInfo}>
          사업자등록번호 {isOpen ? "▲" : "▼"}
        </p>

        {/* ✅ 사업자 정보 (토글 기능) */}
        <div className={`business-info ${isOpen ? "open" : ""}`}>
          <p>(주)새한아이엠 : 577-86-03122   | 본점: 광주광역시 광산구 하남산단 4번로 126(장덕동)</p>
          <p>(주)새한아이엠 개발부서 577-86-03122 | 금남로 지점: 광주광역시 동구 금남로 193-12</p>
          <p>(주)새한하이테크: 410-86-28892  | 본점: 광주광역시 광산구 사암로 827-47(도천동)</p>
          <p>(유)새한플러스 : 102-81-46408 | 본점: 광주광역시 광산구 우산천변길 63(우산동)</p>
          <p>(유)새한글로벌 : 746-88-00894 | 본점: 전라남도 장성군 동화면 가정길 8</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
