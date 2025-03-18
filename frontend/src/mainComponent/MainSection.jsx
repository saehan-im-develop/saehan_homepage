import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import NewFuture from "./NewFuture";
import "../mainCssFile/MainSection.css";
import ContactSection from "./ContactSection";
import section2Image from "@/assets/ai00.jpg";
import mainImage4 from "@/assets/back4.jpg";
import AFMain from "./AFMain";

const MainSection = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  return (
    <div ref={scrollRef}>
      {/* 🔹 메인 섹션 */}
      <section className="main-section">
        {/* 🔹 고정된 메인 이미지 */}
        <div className="fixed-image-container">
          <img src={mainImage4} alt="메인 이미지" className="fixed-image" />
        </div>

        {/* 🔹 텍스트 오버레이 */}
        <div className="text-overlay">
          <p>확실한 기술력과</p>
          <p>철저한 품질관리</p>
          <p>시대를 앞서가는</p>
          <p>새   한   그   룹</p>
        </div>
      </section>

      <section className="sub-section">
        <div className="content-container">
          {/* 이미지 컨테이너 */}
          <div className="image-container">
            <img src={section2Image} alt="제조 산업" className="section2-image" />
          </div>

          {/* 텍스트 컨테이너 */}
          <div className="text-container">
            <h2 className="large-text">
              <p>IT 산업의 미래를</p> 
              <p>선도하는 리더</p>
            </h2>
          </div>
        </div>
      </section>

      <NewFuture />
      <AFMain />
      <ContactSection />
      <div id="main-contact"></div>
    </div>
  );
};

export default MainSection;
