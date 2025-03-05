import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
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

  return (
    <div ref={scrollRef}>
      {/* 메인 섹션 */}
      <section className="main-section">
        <div className="content-container">
          <div className="text-container">
            <h1 id="main-intro">
              <span className="sehan-title">새한그룹</span>.<br />
              확실한 기술력<br />
              철저한 품질관리
            </h1>
          </div>
          <div className="image-container">
            <img src={mainImage} alt="메인 이미지" className="main-image" />
          </div>
        </div>
      </section>

      {/* 🔹 제조 산업 섹션 */}
      <section className="sub-section" id="section2" data-scroll>
        <div className="content-container">
          <div className="image-container">
            <img src={section2Image} alt="제조 산업" className="section1-image" />
          </div>
          <div className="text-container">
            <h2>제조 산업의 미래를 <br />선도하는 리더</h2>
          </div>
        </div>

        {/* 🔹 새로운 미래 이미지 및 텍스트 */}
        <div className="new-future-container">
          <h3 className="new-future-text">
            <span className="sehan-underline">새한그룹</span>. 새한의 대해서 알아보겠습니다.
          </h3>
          <div className="image-grid">
            <img src={section3Image} alt="미래1" className="new-future-image hover-effect" />
            <img src={section4Image} alt="미래2" className="new-future-image hover-effect" />
            <img src={section5Image} alt="미래3" className="new-future-image hover-effect" />
            <img src={section6Image} alt="미래4" className="new-future-image hover-effect" />
          </div>
        </div>
      </section>

      {/* 🔹 사업 부문 소개 섹션 */}
      <section className="sub-section" id="section1" data-scroll>
        <h2>
          <span className="sehan-underline">새한그룹</span>.<br />
          사업 부문을 소개합니다.
        </h2>

        {/* 🔹 동그라미 컨테이너 */}
        <div className="circle-container">
          <div className="circle center">새한그룹</div>
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
