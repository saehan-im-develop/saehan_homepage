import React from "react";
import "../VisionCSSFiile/VisionMain.css"

const PrincipleLine = ({ from, to }) => {
  const positions = {
    // "left-mid": { x: 0, y: 30 }, // 🔥 기존 (30, 150) → (100, 150)으로 수정
    // "top-mid": { x: 150, y: 60 },  // 위쪽 테두리
    // "right-mid": { x: 240, y: 150 },  // 오른쪽 테두리
    // "bottom-mid": { x: 150, y: 240 },  // 아래쪽 테두리

    // "top-left": { x: -180, y: -40 }, // 🔥 기존 (40, 40) → (-30, -30)으로 수정
    // "top-right": { x: 280, y: 10 },  // 지속적인 기술 개발과 연구
    // "bottom-left": { x: 20, y: 290 },  // 고객 및 협력사와의 신뢰 구축
    // "bottom-right": { x: 280, y: 290 },  // 신속하고 효율적인 생산 및 대응
  };

  const fromPos = positions[from];
  const toPos = positions[to];

  if (!fromPos || !toPos) {
    console.error(`❌ PrincipleLine 오류! from: ${from}, to: ${to} 잘못됨!`);
    return null;
  }

  return (
    <svg className={`principle-line ${from}-${to}`} viewBox="-50 -50 400 400">
      <line
        x1={fromPos.x} y1={fromPos.y}
        x2={toPos.x} y2={toPos.y}
        stroke="#2d66d6"
        strokeWidth="2"
      />
    </svg>
  );
};

export default PrincipleLine;
