import React, { useEffect, useRef, useState } from "react";
import networkData from "./NetworkData";
import "../Network/Network.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
      {/* 상단 배경 이미지 */}
      <div ref={bgRef} className={`network-header-bg ${visible ? "fade-in" : ""}`}>
        <img src="/assets/010.webp" alt="네트워크 페이지 배경" className="network-header-img" />
      </div>

      <div ref={ref} className="network-container">
        <h2 className={`network-title ${visible ? "fade-in" : ""}`}>새한 그룹 네트워크</h2>

        {networkData.map((company, index) => (
          <div key={index}>
            <div className={`network-card ${visible ? "fade-in" : ""}`}>
              <div className="network-company-name">{company.name}</div>
              {company.locations && company.locations.map((location, locIndex) => (
                <div key={locIndex} className="network-info">
                  {/* 주소 (좌측) */}
                  <div className="network-address-block">
                    <span className="network-location-type">{location.type}</span>
                    <span className="network-location-address">: {location.address}</span>
                  </div>
                  {/* 담당자 정보 (우측, 한 줄씩) */}
                  <div className="network-contact-lines">
                    <div className="network-contact-line">
                      <div className="contact-info-left">
                        <span className="contact-label manager-label">관리 담당</span>
                        <span className="contact-name">{location.manager?.name}{location.manager?.position && `(${location.manager.position})`}</span>
                      </div>
                      {location.manager?.email && (
                        <span className="contact-email">
                          <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
                          {location.manager.email}
                        </span>
                      )}
                    </div>
                    <div className="network-contact-line">
                      <div className="contact-info-left">
                        <span className="contact-label staff-label">실무 담당</span>
                        <span className="contact-name">{location.staff?.name}{location.staff?.position && `(${location.staff.position})`}</span>
                      </div>
                      {location.staff?.email && (
                        <span className="contact-email">
                          <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
                          {location.staff.email}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Network;
