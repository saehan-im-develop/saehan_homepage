import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "../mainCssFile/MainSection.css";
import Footer from "./Footer"
import ContactSection from "./ContactSection";  // 문의 섹션 추가
import mainImage from "../assets/mainImage.png"; // 메인 이미지
import section1Image from "../assets/001.png"
import section2Image from "../assets/002.png"
import section3Image from "../assets/003.png"

const MainSection = () => {
  const scrollRef = useRef(null);
/*  */
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true, 
      lerp: 0.1, // 스크롤 속도 조절 (0~1 사이 값, 낮을수록 부드러움)
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef}>
      <section className="main-section">
        <div className="overlay">
          <h1>확실한 기술력<br />철저한 품질관리<br />새한그룹</h1>
        </div>
        <img src={mainImage} alt="메인 이미지" className="main-image" />
      </section>

      <section className="sub-section" id="section1" data-scroll>
        <h2>새한그룹. <br />사업 부문을 소개합니다.</h2>
        
        {/* 🔹 동그라미 컨테이너 */}
        <div className="circle-container">
          <div className="circle center">새한그룹</div>
          <div className="circle top-left">(유) 새한하이테크</div>
          <div className="circle top-right">(유) 새한아이엠</div>
          <div className="circle bottom-left">(유) 새한글로벌</div>
          <div className="circle bottom-right">(유) 새한플러스</div>
        </div>

        <img src={section1Image} alt="사업 부문" className="section-image" />
      </section>


      <section className="sub-section" id="section2" data-scroll>
        <img src={section2Image} alt="제조 산업" className="section-image" />
        <h2>제조 산업의 미래를 <br />선도하는 리더</h2>
      </section>

      <ContactSection />
      <Footer />

    </div>
  );
};

export default MainSection;
