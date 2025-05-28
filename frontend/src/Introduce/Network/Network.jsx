import React, { useEffect, useRef, useState } from "react";
import networkData from "./NetworkData";
import "../Network/Network.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
 // ✅ 배경 이미지 추가

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
        <img src="/assets/010.webp" alt="네트워크 페이지 배경" className="network-header-img" />
      </div>

      <div ref={ref} className="network-container">
        <h2 className={`network-title ${visible ? "fade-in" : ""}`}>새한 그룹 네트워크</h2>

        {networkData.map((company, index) => (
          <div key={index} className={`network-card ${visible ? "fade-in" : ""}`}>
            <h3>{company.name}</h3>
            {company.locations ? (
              company.locations.map((location, locIndex) => (
                <div key={locIndex} className="network-info">
                  <span className="network-type">{location.type || "정보 없음"}</span>
                  <span className="network-address">{location.address || "주소 없음"}</span>

                  {/* ✅ 이름 & 이메일을 두 줄로 배치 */}
                  <div className="network-contact">
                    {Array.isArray(location.names) &&
                      Array.isArray(location.email) &&
                      location.names.length > 0 ? (
                      location.names.map((name, i) => (
                        <div key={i} className="network-contact-item">
                          <div className="contact-name">{name}</div>
                          <div className="contact-email">
                            <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
                            <span className="email-text">{location.email[i] || "이메일 없음"}</span>
                          </div>
                        </div>
                      ))
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

                {/* ✅ 이름 & 이메일 추가 */}
                <div className="network-contact">
                  {Array.isArray(location.names) &&
                    Array.isArray(location.email) &&
                    location.names.length > 0 ? (
                    location.names.map((name, i) => (
                      <div key={i} className="network-contact-item">
                        <div className="contact-name">{name}</div>
                        <div className="contact-email">
                          <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
                          <span className="email-text"> {location.email[i] || "이메일 없음"}</span> {/* 🔹 띄어쓰기 추가 */}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="empty">연락처 정보 없음</p>
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
