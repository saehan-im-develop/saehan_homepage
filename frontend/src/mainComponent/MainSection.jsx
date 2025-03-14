import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewFuture from "./NewFuture";
import "../mainCssFile/MainSection.css";
import ContactSection from "./ContactSection";
import section2Image from "@/assets/Areal/main2.jpg"
import mainImage1 from "@/assets/back1.png";
import mainImage2 from "@/assets/back2.jpg";
import mainImage3 from "@/assets/back3.jpg";
import mainImage4 from "@/assets/back4.jpg";
import AFMain from "./AFMain";

const images = [mainImage1, mainImage2, mainImage3, mainImage4];

const MainSection = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // 다음 슬라이드 이동
  const goToNextSlide = () => {
    if (currentIndex === images.length - 1) {
      // 마지막 슬라이드에서 첫 번째로 이동할 때
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);

      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 200); // 애니메이션이 끝난 후 0번으로 변경
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // 이전 슬라이드 이동
  const goToPrevSlide = () => {
    if (currentIndex === 0) {
      // 첫 번째 슬라이드에서 마지막으로 이동할 때
      setIsTransitioning(false);
      setCurrentIndex(images.length);
      
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(images.length - 1);
      }, 0);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // 네비게이션 도트 클릭 시 이동
  const goToSlide = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  return (
    <div ref={scrollRef}>
      {/* 🔹 메인 섹션 */}
      <section className="main-section">
        <div className="slider-container">
          {/* 🔹 슬라이드 */}
          <div
            className={`slider ${isTransitioning ? "transition" : ""}`}
            style={{
              transform: `translateX(-${currentIndex * 100}vw)`,
            }}
          >
            {/* 🔹 실제 이미지 리스트 (무한 루프 구현) */}
            {images.map((img, index) => (
              <img key={index} src={img} alt={`메인 이미지 ${index}`} className="slide-image" />
            ))}
            {/* 🔹 마지막 이미지 이후에 첫 번째 이미지 추가 (자연스러운 이동) */}
            <img src={images[0]} alt="첫 번째" className="slide-image" />
          </div>

          {/* 🔹 좌우 버튼 */}
          <button className="slider-button left" onClick={goToPrevSlide}>◀</button>
          <button className="slider-button right" onClick={goToNextSlide}>▶</button>

          {/* 🔹 네비게이션 바 */}
          <div className="slider-nav">
            {images.map((_, index) => (
              <span
                key={index}
                className={`nav-dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>

        {/* 🔹 텍스트 오버레이 */}
        <div className="text-overlay">
          <p>확실한 기술력과</p>
          <p>철저한 품질관리로</p>
          <p>앞서가는 새한그룹</p>
        </div>
      </section>

      <section className="sub-section">
        <div className="content-container">
          <div className="image-container">
            <img src={section2Image} alt="제조 산업" className="section1-image" />
            <div className="text-overlay-sub">
              <p>제조산업의 미래를</p> 
              <p>선도하는 리더</p>
            </div>
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
