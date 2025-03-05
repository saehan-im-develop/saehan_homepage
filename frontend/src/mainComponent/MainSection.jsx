import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../mainCssFile/MainSection.css";
import ContactSection from "./ContactSection";
import mainImage from "../assets/mainImage.png";
import section1Image from "../assets/001.png";
import section2Image from "../assets/004.jpg";
import section3Image from "../assets/003.png";
import section4Image from "../assets/005.jpg";
import section5Image from "../assets/006.jpg";
import section6Image from "../assets/007.jpg";

const MainSection = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  return (
    <div ref={scrollRef}>
      {/* 🔹 메인 섹션 */}
      <section className="main-section">
        <div className="image-container">
          <img src={mainImage} alt="메인 이미지" className="main-image" />
          <div className="text-overlay">
            <p>확실한 기술력</p>
            <p>철저한 품질관리</p>
            <p>새한그룹</p>
          </div>
        </div>
      </section>

      {/* 🔹 제조 산업 섹션 (수정됨) */}
      <section className="sub-section manufacturing-section">
        <div className="content-container">
          <div className="image-container">
            <img src={section2Image} alt="제조 산업" className="section1-image" />
            <div className="text-overlay">
              <h2>제조 산업의 미래를 <br /> 선도하는 리더</h2>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 새로운 미래 이미지 및 텍스트 */}
      <div className="new-future-container">
        <h3 className="new-future-text">
          <span className="sehan-underline">새한그룹</span>.<br />
          새한에 대해서.
        </h3>
        <ul className="image-grid">
          <li className="image-wrapper" onClick={() => navigate("/vision")}>
            <img src={section6Image} alt="비전 및 이념" className="new-future-image hover-effect" />
            <span className="image-text">비전 및 이념</span>
          </li>
          <li className="image-wrapper" onClick={() => navigate("/ceo")}>
            <img src={section6Image} alt="CEO 인사말" className="new-future-image hover-effect" />
            <span className="image-text">CEO 인사말</span>
          </li>
          <li className="image-wrapper" onClick={() => navigate("/history")}>
            <img src={section6Image} alt="회사 연혁" className="new-future-image hover-effect" />
            <span className="image-text">회사 연혁</span>
          </li>
          <li className="image-wrapper" onClick={() => navigate("/network")}>
            <img src={section6Image} alt="네트워크" className="new-future-image hover-effect" />
            <span className="image-text">네트워크</span>
          </li>
        </ul>
      </div>

      {/* 🔹 사업 부문 소개 섹션 */}
      <section className="sub-section" id="section1">
        <h2 id="business-intro">
          <span className="sehan-underline">새한그룹</span>.<br />
          사업 부문을 소개합니다.
        </h2>

        {/* 🔹 동그라미 컨테이너 */}
        <div className="circle-container">
          <div className="circle center">새한그룹</div>
          <div className="circle top">(주)SM</div>
          <div className="circle bottom">(주)리그리그</div>
          <div className="circle top-left">(주) 새한하이테크</div>
          <div className="circle top-right">(주) 새한아이엠</div>
          <div className="circle bottom-left">(주) 새한글로벌</div>
          <div className="circle bottom-right">(주) 새한플러스</div>
        </div>

        <img src={section1Image} alt="사업 부문" className="section-image" />
      </section>

      <ContactSection />
      <div id="main-contact"></div>
    </div>
  );
};

export default MainSection;
