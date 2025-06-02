import React, { useEffect, useState } from "react";
import "../History/HistoryMain.css";

const historyData = [
  {
    period: "회사 연혁",
    image: "/assets/Areal/Int/history3.webp",
    mainImage: "/assets/PlusMainImage.webp", // 기존 img2도 문자열로 교체
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
          <div
            className="history-header"
            style={{ backgroundImage: `url(${section.mainImage})` }}
          >
            <h2>{section.period}</h2>
          </div>
          <div className="history-image-container">
            <img
              src={section.image}
              alt={`연혁 ${section.period}`}
              className="history-image"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default HistoryMain;
