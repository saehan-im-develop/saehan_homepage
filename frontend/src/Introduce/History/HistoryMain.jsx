import React, { useEffect, useState } from "react";
import "../History/HistoryMain.css";
import historyImage1 from "@/assets/historyimage1.png";
import historyImage2 from "@/assets/historyimage2.png";
import img1 from "@/assets/mainImage.png";
import img2 from "@/assets/PlusMainImage.png";

const historyData = [
  {
    period: "2011 ~ 2020",
    image: historyImage1,
    mainImage: img1, // 추가된 기존 이미지
  },
  {
    period: "2021 ~ 현재",
    image: historyImage2,
    mainImage: img2, // 추가된 기존 이미지
  },
];

function HistoryMain() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  return (
    <div className="history-container">
      {historyData.map((section, index) => (
        <div key={index} className={`history-section ${visible ? "fade-in" : ""}`}>
          <div className="history-header" style={{ backgroundImage: `url(${section.mainImage})` }}>
            <h2>{section.period}</h2>
          </div>
          <div className="history-image-container">
            <img src={section.image} alt={`연혁 ${section.period}`} className="history-image" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default HistoryMain;
