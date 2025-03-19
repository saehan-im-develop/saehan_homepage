import React, { useState, useEffect } from "react";
import "./Carousel.css"; // ✅ 스타일 파일 추가

const Carousel = ({ images, onClose }) => {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const time = 5000; // 5초마다 변경

  useEffect(() => {
    if (pause) return;
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, time);
    return () => clearTimeout(timer);
  }, [index, pause]);

  return (
    <div className="carousel-modal-overlay" onClick={onClose}>
      <div className="carousel-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="carousel-close-button" onClick={onClose}>✖</button>

        {/* ✅ Jumbotron - 메인 이미지 표시 */}
        <div className="carousel">
          <div className="jumbotron">
            <img src={images[index]} alt={`Slide ${index + 1}`} />
          </div>

          {/* ✅ Gallery - 이미지 리스트 */}
          <div className="gallery">
            {images.map((img, i) => (
              <figure key={i} className={i === index ? "active" : ""} onClick={() => setIndex(i)}>
                <img src={img} alt={`Thumbnail ${i + 1}`} />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
