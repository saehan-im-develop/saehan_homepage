import React from "react";
import networkData from "./NetworkData";
import "../Network/Network.css";

const Network = () => {
  return (
    <div className="network-container">
      <h2 className="network-title">새한 그룹 네트워크</h2>
      {networkData.map((company, index) => (
        <div key={index} className="network-card">
          <h3>{company.name}</h3>
          
          {/* 일반적인 회사 정보 출력 */}
          {company.locations ? (
            // locations 배열이 존재할 경우, 여러 개의 위치 정보를 표시
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
            // 일반적인 단일 회사 정보
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
