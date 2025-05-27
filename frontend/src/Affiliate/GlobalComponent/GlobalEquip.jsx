import React from "react";
import CommonEquip from "../Common/CommonEquip.jsx";

const images = [
  {
    src: "/assets/equips/sm/eq1/T1.jpg",
    title: "김치냉장고 전용 용기(19.5L) 생산 설비",
    englishtitle: "김치냉장고 전용 용기(19.5L) 생산 공정",
    processes: [
      { src: "/assets/equips/sm/eq1/2.jpg", title: "사출 생산", desc: "" },
      { src: "/assets/equips/sm/eq1/3.jpg", title: "1단계 제품 운송", desc: "" },
      { src: "/assets/equips/sm/eq1/4.jpg", title: "2단계 제품 운송", desc: "" },
      { src: "/assets/equips/sm/eq1/5.jpg", title: "김치통 조립(assy)", desc: "" },
      { src: "/assets/equips/sm/eq1/10.png", title: "김치통 누수 검사", desc: "" },
      { src: "/assets/equips/sm/eq1/6.jpg", title: "1단계 김치통 포장", desc: "" },
      { src: "/assets/equips/sm/eq1/7.jpg", title: "2단계 김치통 포장", desc: "" },
      { src: "/assets/equips/sm/eq1/8.png", title: "포장 완료 후 출고 대기", desc: "포장 및 출하 단계" },
    ]
  },
  {
    src: "/assets/equips/sm/eq2/T21.jpg",
    title: "김치냉장고 전용 용기(10.8L) 생산 설비",
    englishtitle: "김치냉장고 전용 용기(10.8L) 생산 공정",
    processes: [
      { src: "/assets/equips/sm/eq2/22.jpg", title: "사출 생산", desc: "" },
      { src: "/assets/equips/sm/eq2/23.jpg", title: "1단계 제품 운송", desc: "" }, 
      { src: "/assets/equips/sm/eq2/25.jpg", title: "김치통 조립(assy)", desc: "" },
      { src: "/assets/equips/sm/eq2/30.png", title: "김치통 누수 검사", desc: "" },
      { src: "/assets/equips/sm/eq2/26.jpg", title: "김치통 포장", desc: "" },
      { src: "/assets/equips/sm/eq2/27.jpg", title: "김치통 적재", desc: "" },
      { src: "/assets/equips/sm/eq2/29.png", title: "완료 후 출고 대기", desc: "포장 및 출하 단계" },
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
