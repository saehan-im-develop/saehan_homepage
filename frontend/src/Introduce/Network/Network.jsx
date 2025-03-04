import React, { useEffect, useRef, useState } from "react";
import networkData from "./NetworkData";
import "../Network/Network.css";

const Network = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
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
                <div className="network-phone">
                  {Array.isArray(location.phone) && location.phone.length > 0 ? (
                    location.phone.map((num, i) => <p key={i}>📞 {num}</p>)
                  ) : (
                    <p className="empty">연락처 정보 없음</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="network-info">
              <span className="network-type">{company.type || "정보 없음"}</span>
              <span className="network-address">{company.address || "주소 없음"}</span>
              <div className="network-phone">
                {Array.isArray(company.phone) && company.phone.length > 0 ? (
                  company.phone.map((num, i) => <p key={i}>📞 {num}</p>)
                ) : (
                  <p className="empty">연락처 정보 없음</p>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Network;
