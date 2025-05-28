import React from "react";
import CommonEquip from "../Common/CommonEquip"; // ✅ 공통 컴포넌트 사용

const images = [
  {
    src: "/assets/equips/high/eq1/T0.webp",
    title: "Fan Balancing Machine 1",
    englishtitle: "FAN 제품에 회전 동작을 실험하여 회전 값이 SPEC 내에 들어오는지 측정하여 양품 생산",
    processes: [
      { src: "/assets/equips/high/eq1/1.webp", title: "SHAFT에 제품 삽입", desc: "FAN BALANCING  측정기에 제품 안착 공정" },
      { src: "/assets/equips/high/eq1/2.webp", title: "고정", desc: "회전 측정시 유격을 최소화 하기 위한  공정" },
      { src: "/assets/equips/high/eq1/3.webp", title: "측정 시작", desc: "측정 시작 버튼을 눌러 유격 측정 시작" },
      { src: "/assets/equips/high/eq1/4.webp", title: "측정 중", desc: "측정기 회전 측정 공정" },
      { src: "/assets/equips/high/eq1/5.webp", title: "측정 완료", desc: "측정기에서 OK 메시지가 뜨면 측정완료 공정" },
      { src: "/assets/equips/high/eq1/6.webp", title: "완료 후 출고대기", desc: "출고 대기 양품" },
    ]
  },
  {
    src: "/assets/equips/high/eq2/T21.webp",
    title: "Fan Balancing Machine 2",
    englishtitle: "FAN 제품에 회전 동작을 실험하여 회전 값이 SPEC 내에 들어오는지 측정하여 양품 생산",
    processes: [
      { src: "/assets/equips/high/eq2/22.webp", title: "제품 삽입", desc: "FAN BALANCING  측정기에 제품을 안착시키는 공정" },
      { src: "/assets/equips/high/eq2/23.webp", title: "제품 고정 및 기계 조정", desc: "회전 측정 공정" },
      { src: "/assets/equips/high/eq2/24.webp", title: "제품 검사 가동 중", desc: "" },
      { src: "/assets/equips/high/eq2/20.webp", title: "완료 후 출고 대기", desc: "출고 대기 양품" },
    ]
  },
  {
    src: "/assets/equips/high/eq3/T31.webp",
    title: "Fan Balancing Machine 3",
    englishtitle: "FAN 제품에 회전 동작을 실험하여 회전 값이 SPEC 내에 들어오는지 측정하여 양품 생산",
    processes: [
      { src: "/assets/equips/high/eq3/32.webp", title: "제품 삽입", desc: "FAN BALANCING  측정기에 제품을 안착시키는 공정" },
      { src: "/assets/equips/high/eq3/33.webp", title: "제품 측정 시작", desc: "측정을 시작하기 위한 기계 가동" },
      { src: "/assets/equips/high/eq3/34.webp", title: "제품 검사 진행", desc: "" },
      { src: "/assets/equips/high/eq3/30.webp", title: "완료 후 출고 대기", desc: "출고 대기 양품" },
    ]
  },
];

const HighEquip = () => {
  return (
    <CommonEquip title="Equipments of Hightech" images={images} />
  );
};

export default HighEquip;
