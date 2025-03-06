import React, { useEffect, useState } from "react";
import "../History/HistoryMain.css";
import img1 from "../../assets/mainImage.png";
import img2 from "../../assets/plusMainImage.png";

const historyData = [
  {
    period: "2011 ~ 2020",
    image: img1,
    events: [
      { year: "2011. 01", text: "새한하이테크 설립" },
      { year: "2013. 06", text: "반도체 부품 제조 사업 진출" },
      { year: "2015. 09", text: "연구개발(R&D) 센터 개소" },
      { year: "2017. 12", text: "ISO 9001 품질 경영 시스템 인증 획득" },
      { year: "2019. 05", text: "글로벌 파트너십 체결 (미국, 유럽 시장 진출)" },
    ],
  },
  {
    period: "2021 ~ 현재",
    image: img2,
    events: [
      { year: "2021. 03", text: "스마트 제조 시스템 도입 (AI 기반 자동화 공정)" },
      { year: "2022. 07", text: "친환경 반도체 패키징 기술 개발" },
      { year: "2023. 10", text: "데이터 기반 솔루션 개발 및 클라우드 서비스 확장" },
      { year: "2024. 01", text: "ESG 경영 도입 및 지속 가능성 전략 강화" },
    ],
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
          <div className="history-header" style={{ backgroundImage: `url(${section.image})` }}>
            <h2>{section.period}</h2>
          </div>

          {/* ✅ 타임라인 디자인 적용 */}
          <div className="history-timeline">
            {section.events.map((event, i) => (
              <div key={i} className={`history-item ${i % 2 === 0 ? "left" : "right"}`}>
                <div className="history-content-box">
                  <span className="history-year">{event.year}</span>
                  <p>{event.text}</p>
                </div>
                <div className="history-circle"></div> {/* ✅ 원형 포인트 추가 */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HistoryMain;
