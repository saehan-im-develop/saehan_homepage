import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NewFuture from "./NewFuture";
import "../mainCssFile/MainSection.css";
import ContactSection from "./ContactSection";


import AFMain from "./AFMain";
import AOS from "aos";
import "aos/dist/aos.css";

const MainSection = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const spacedText = ["새", "한", "그", "룹"].join("\u00A0\u00A0");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
    setTimeout(() => AOS.refresh(), 500);
  }, []);

  return (
    <div ref={scrollRef}>
      {/* 🔹 메인 섹션 */}
      <section className="main-section">
        <div className="fixed-image-container">
          <img src="/assets/back6.jpg" alt="메인 이미지" className="fixed-image" />
        </div>

        <div className="text-overlay">
          <p data-aos="fade-up" data-aos-delay="0">확실한 기술력과</p>
          <p data-aos="fade-up" data-aos-delay="100">철저한 품질관리</p>
          <p data-aos="fade-up" data-aos-delay="200">시대를 앞서가는</p>
          <p data-aos="fade-up" data-aos-delay="300" className="spaced-text">
            <span>새</span>
            <span>한</span>
            <span>그</span>
            <span>룹</span>
          </p>
        </div>
      </section>

      {/* 🔹 제조 산업 소개 섹션 */}
      <section className="sub-section">
        <div className="content-container">
          <div className="image-container" data-aos="fade-up" data-aos-delay="100">
            <img src="/assets/ai00.jpg" alt="제조 산업" className="section2-image" />
          </div>

          <div className="text-container">
            <h2 className="large-text">
              <p data-aos="fade-left" data-aos-delay="200">IT 산업의 미래를</p>
              <p data-aos="fade-left" data-aos-delay="250">선도하는 리더</p>
            </h2>
          </div>
        </div>
      </section>

      {/* 🔹 하위 컴포넌트들 */}
      <AFMain />
      <NewFuture />
      <ContactSection />
      <div id="main-contact"></div>
    </div>
  );
};

export default MainSection;
