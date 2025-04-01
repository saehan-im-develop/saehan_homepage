import { useState } from "react";
import "../mainCssFile/Footer.css";
import ButtonSection from "./ButtonSection";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBusinessInfo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ✅ 왼쪽 영역: 텍스트 + 사업자등록번호를 같은 줄에 배치 */}
        <div className="footer-left">
          <p>© 2024 SAEHAN GROUP. All rights reserved.</p>
          <p>대표자명 | 김원만</p>
          <br />
          {/* ✅ 사업자등록번호 + 사업자정보를 같은 컨테이너에 배치 */}
          <div className="business-info-container">
            <p className="business-toggle" onClick={toggleBusinessInfo}>
              주소 {isOpen ? "▲" : "▼"}
            </p>

            {/* ✅ 사업자 정보가 "사업자등록번호" 바로 아래에서 나타나도록 조정 */}
            <div className={`business-info ${isOpen ? "open" : ""}`}>
              <p>(주)새한아이엠 | 본점 : 광주광역시 광산구 하남산단 4번로 126(장덕동)</p>
              <p>(주)새한아이엠 | 금남로 지점 : 광주광역시 동구 금남로 193-12</p>
              <p>(주)새한하이테크 | 본점: 광주광역시 광산구 사암로 827-47(도천동)</p>
              <p>(유)SM 캐미칼 | 본점: 전라남도 장성군 동화면 가정길 8</p>
              <p>(유)새한플러스 | 본점: 광주광역시 광산구 우산천변길 63(우산동)</p>
            </div>
          </div>
        </div>

        {/* ✅ 오른쪽 영역: 아이콘 버튼 */}
        <div className="footer-buttons">
          <ButtonSection />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
