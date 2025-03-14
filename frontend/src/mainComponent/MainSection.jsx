import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NewFuture from "./NewFuture";
import "../mainCssFile/MainSection.css";
import ContactSection from "./ContactSection";
import section2Image from "@/assets/back1.png"
import mainImage1 from "@/assets/back1.png";
import mainImage2 from "@/assets/back2.jpg";
import mainImage3 from "@/assets/back3.jpg";
import mainImage4 from "@/assets/back4.jpg";
import AFMain from "./AFMain";

const images = [mainImage1, mainImage2, mainImage3, mainImage4];

const MainSection = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [fadeKey, setFadeKey] = useState(0);  // ✅ state 선언

    useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex >= images.length -1) {
        setIsTransitioning(false); // 트랜지션 OFF (순간 이동)
        setCurrentIndex(0);

        setTimeout(() => {
          setIsTransitioning(true);
          setCurrentIndex(1);
        }, 100);
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }

      // 텍스트 애니메이션을 위해 fadeKey 변경
      setFadeKey((prevKey) => prevKey + 1);
    }, 5000); // 5초마다 이동

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
              <p>제조산업의 미래를 </p> 
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
