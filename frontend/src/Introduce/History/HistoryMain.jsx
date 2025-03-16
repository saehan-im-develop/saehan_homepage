import React, { useEffect, useState } from "react";
import "../History/HistoryMain.css";
import historyImage2 from "@/assets/Areal/Int/history.png"
import img2 from "@/assets/PlusMainImage.png";

const historyData = [
  {
    period: "새한의 역사",
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
