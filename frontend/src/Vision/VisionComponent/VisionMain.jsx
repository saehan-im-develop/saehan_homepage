import React, { useEffect, useRef, useState } from "react";
import VisionIntro from "./VisionIntro";
import VisionValues from "./VisionValues";
import VisionPrinciples from "./VisionPrinciples";
import "../VisionCSSFile/VisionMain.css";

const VisionMain = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`vision-main-container ${isVisible ? "vision-main-fade-in" : ""}`}>
      <VisionIntro />
      <VisionValues />
      <VisionPrinciples />
    </div>
  );
};

export default VisionMain;
