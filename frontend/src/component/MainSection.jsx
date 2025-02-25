import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "../cssFile/MainSection.css";
import mainImage from "../assets/mainImage.png"; // 메인 이미지
import section1Image from "../assets/001.png"
import section2Image from "../assets/002.png"
import section3Image from "../assets/003.png"

const MainSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,  // 부드러운 스크롤
      lerp: 0.1, // 스크롤 속도 조절 (0~1 사이 값, 낮을수록 부드러움)
    });

    return () => {
      scroll.destroy(); // 컴포넌트 언마운트 시 메모리 해제
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
        <img src={section1Image} alt="사업 부문" className="section-image" />
        <h2>새한그룹. <br />사업 부문을 소개합니다.</h2>
      </section>

      <section className="sub-section" id="section2" data-scroll>
        <img src={section2Image} alt="제조 산업" className="section-image" />
        <h2>제조 산업의 미래를 <br />선도하는 리더</h2>
      </section>
    </div>
  );
};

export default MainSection;
