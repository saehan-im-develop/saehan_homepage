import React from "react";
import CommonEquip from "../Common/CommonEquip.jsx";

const images = [
  {
    src: "/assets/equips/sm/eq1/T1.webp",
    title: "김치냉장고 전용 용기(19.5L) 생산 설비",
    englishtitle: "김치냉장고 전용 용기(19.5L) 생산 공정",
    processes: [
      { src: "/assets/equips/sm/eq1/2.webp", title: "사출 생산", desc: "" },
      { src: "/assets/equips/sm/eq1/3.webp", title: "1단계 제품 운송", desc: "" },
      { src: "/assets/equips/sm/eq1/4.webp", title: "2단계 제품 운송", desc: "" },
      { src: "/assets/equips/sm/eq1/5.webp", title: "김치통 조립(assy)", desc: "" },
      { src: "/assets/equips/sm/eq1/10.webp", title: "김치통 누수 검사", desc: "" },
      { src: "/assets/equips/sm/eq1/6.webp", title: "1단계 김치통 포장", desc: "" },
      { src: "/assets/equips/sm/eq1/7.webp", title: "2단계 김치통 포장", desc: "" },
      { src: "/assets/equips/sm/eq1/8.webp", title: "포장 완료 후 출고 대기", desc: "포장 및 출하 단계" },
    ]
  },
  {
    src: "/assets/equips/sm/eq2/T21.webp",
    title: "김치냉장고 전용 용기(10.8L) 생산 설비",
    englishtitle: "김치냉장고 전용 용기(10.8L) 생산 공정",
    processes: [
      { src: "/assets/equips/sm/eq2/22.webp", title: "사출 생산", desc: "" },
      { src: "/assets/equips/sm/eq2/23.webp", title: "1단계 제품 운송", desc: "" }, 
      { src: "/assets/equips/sm/eq2/25.webp", title: "김치통 조립(assy)", desc: "" },
      { src: "/assets/equips/sm/eq2/30.webp", title: "김치통 누수 검사", desc: "" },
      { src: "/assets/equips/sm/eq2/26.webp", title: "김치통 포장", desc: "" },
      { src: "/assets/equips/sm/eq2/27.webp", title: "김치통 적재", desc: "" },
      { src: "/assets/equips/sm/eq2/29.webp", title: "완료 후 출고 대기", desc: "포장 및 출하 단계" },
    ]
  },
];

const GlobalEquip = () => {
  return (
    <CommonEquip
      title="Equipments of SM Chemical"
      images={images}
      pageType="sm"
    />
  );
};

export default GlobalEquip;
