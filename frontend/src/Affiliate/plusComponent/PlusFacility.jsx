import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import "./PlusFacility.css";
import temp from "@/assets/Areal/plus/np4.JPG";
import temp2 from "@/assets/Areal/plus/p3.JPG";

const facilityData = [
  {
    title: "주제1",
    image: temp,
    description: "설명1"
  },
  {
    title: "주제2",
    image: temp2,
    description: "설명2"
  },
  {
    title: "주제3",
    image: temp,
    description: "설명3"
  },
  {
    title: "주제4",
    image: temp,
    description: "설명4"
  }
];

function PlusFacility() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="facility-layout">
      {/* 왼쪽 탭 */}
      <div className="facility-tabs">
        {facilityData.map((item, index) => (
          <div
            key={index}
            className={`tab-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <span className="tab-indicator" />
            <span className="tab-text">{item.title}</span>
          </div>
        ))}
      </div>

      {/* 오른쪽 슬라이드 영역 */}
      <div className="facility-content-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="facility-content"
          >
            <img
              src={facilityData[activeIndex].image}
              alt="facility"
              className="facility-image"
            />
            <p className="facility-description">{facilityData[activeIndex].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default PlusFacility;
