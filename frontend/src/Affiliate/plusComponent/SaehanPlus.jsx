import React, { useEffect, useState } from "react";
import PlusMain from "./PlusMain";
import PlusProduct from "./PlusProduct";
import PlusEquip from "./PlusEquip"; // 이건 그대로 유지
import PlusFacility from "./PlusFacility"; // 새 컴포넌트 추가
import "./SaehanPlus.css"; // 탭 스타일용 CSS 추가

function SaehanPlus() {
  const [fadeIn, setFadeIn] = useState(false);
  const [activeTab, setActiveTab] = useState("product"); // 탭 상태 추가

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  return (
    <div className={`plus-container ${fadeIn ? "fade-in" : ""}`}>
      <PlusMain />
      <PlusEquip />

      {/* 탭 버튼 */}
      <div className="tab-buttons">
        <button
          className={activeTab === "product" ? "active" : ""}
          onClick={() => setActiveTab("product")}
        >
          주요 생산 제품
        </button>
        <button
          className={activeTab === "facility" ? "active" : ""}
          onClick={() => setActiveTab("facility")}
        >
          주요 설비
        </button>
      </div>

      {/* 탭 전환 콘텐츠 */}
      {activeTab === "product" && <PlusProduct />}
      {activeTab === "facility" && <PlusFacility />}
    </div>
  );
}

export default SaehanPlus;
