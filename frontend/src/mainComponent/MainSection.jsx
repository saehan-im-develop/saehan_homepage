import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../mainCssFile/MainSection.css";
import ContactSection from "./ContactSection";
import mainImage1 from "../assets/back1.jpg";
import mainImage2 from "../assets/back2.jpg";
import mainImage3 from "../assets/back3.jpg";
import mainImage4 from "../assets/back4.jpg";
import section1Image from "../assets/001.png";
import section2Image from "../assets/004.jpg";
import section6Image from "../assets/007.jpg";

const images = [mainImage1, mainImage2, mainImage3, mainImage4];

const MainSection = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex >= images.length) {
        setIsTransitioning(false); // 🚨 트랜지션 OFF (순간 이동)
        setCurrentIndex(0); // 🚀 복제된 1번에서 원래 1번으로 순간 이동

        setTimeout(() => {
          setIsTransitioning(true); //  다시 트랜지션 ON
          setCurrentIndex(1); // 1번부터 다시 슬라이드 시작
        }, 100); // 짧은 시간 후 transition 활성화
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 5000); // 3초마다 이동

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div ref={scrollRef}>
      {/* 🔹 메인 섹션 */}
      <section className="main-section">
        <div className="slider-container">
          <div
            className={`slider ${isTransitioning ? "transition" : ""}`}
            style={{
              transform: `translateX(-${currentIndex * 100}vw)`,
            }}
          >
            {/* 🔹 마지막 이미지를 앞에 추가 */}
            <img src={images[images.length - 1]} alt="마지막" className="slide-image" />

            {/* 🔹 실제 이미지 리스트 */}
            {images.map((img, index) => (
              <img key={index} src={img} alt={`메인 이미지 ${index}`} className="slide-image" />
            ))}

            {/* 🔹 첫 번째 이미지를 뒤에 추가 */}
            <img src={images[0]} alt="첫 번째" className="slide-image" />
          </div>
        </div>

        <div className="text-overlay">
          <p>확실한 기술력</p>
          <p>철저한 품질관리</p>
          <p>새한그룹</p>
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
