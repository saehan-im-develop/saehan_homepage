import React from "react";
import ImageTextRight from "./ImageTextRight";
import ImageTextLeft from "./ImageTextLeft";
import img1 from "../../assets/solutions/sol3.png"

const Research = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px", marginTop: "5%" }}>🔬 연구개발</h2>
      <ImageTextRight
        image = {img1}
        title="초정밀 사출 성형 기술"
        number="10-2022-XXXXX"
        date="202X년 0X월 0X일"
        description={[
          "나노 단위 정밀도를 갖춘 사출 성형 공정",
          "불량률 감소 및 생산 효율 20% 향상",
          "의료·전자·자동차 부품 제조 적용 가능",
        ]}
      />
      <ImageTextLeft
        image={img1}
        title="AI 기반 스마트 공장 최적화"
        number="10-2022-XXXXX"
        date="202X년 0X월 0X일"
        description={[
          "AI 기반 데이터 분석을 통한 자동 최적화",
          "생산 공정에서의 에너지 효율 극대화",
          "예측 유지보수 및 장애 예방 시스템 적용",
        ]}
      />
    </div>
  );
};

export default Research;
