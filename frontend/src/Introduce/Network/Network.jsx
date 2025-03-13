import React, { useEffect, useRef, useState } from "react";
import networkData from "./NetworkData";
import "../Network/Network.css";
import backgroundImage from "@/assets/010.jpg"; // ✅ 추가된 배경 이미지

const Network = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    if (bgRef.current) {
      observer.observe(bgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* ✅ 상단 배경 이미지 */}
      <div ref={bgRef} className={`network-header-bg ${visible ? "fade-in" : ""}`}>
        <img src={backgroundImage} alt="네트워크 페이지 배경" className="network-header-img" />
      </div>

      <div ref={ref} className="network-container">
        {/* ✅ 제목에도 fade-in 클래스 추가 */}
        <h2 className={`network-title ${visible ? "fade-in" : ""}`}>새한 그룹 네트워크</h2>

        {networkData.map((company, index) => (
          <div key={index} className={`network-card ${visible ? "fade-in" : ""}`}>
            <h3>{company.name}</h3>
            {company.locations ? (
              company.locations.map((location, locIndex) => (
                <div key={locIndex} className="network-info">
                  <span className="network-type">{location.type || "정보 없음"}</span>
                  <span className="network-address">{location.address || "주소 없음"}</span>
                  <div className="network-email">
                    {Array.isArray(location.email) && location.email.length > 0 ? (
                      location.email.map((mail, i) => <p key={i}>📧 {mail}</p>)
                    ) : (
                      <p className="empty">이메일 정보 없음</p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="network-info">
                <span className="network-type">{company.type || "정보 없음"}</span>
                <span className="network-address">{company.address || "주소 없음"}</span>
                <div className="network-email">
                  {Array.isArray(company.email) && company.email.length > 0 ? (
                    company.email.map((mail, i) => <p key={i}>📧 {mail}</p>)
                  ) : (
                    <p className="empty">이메일 정보 없음</p>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Network;
