import React from "react";
import CommonEquip from "../Common/CommonEquip.jsx";
import img1 from "@/assets/equips/sm/eq1/1.jpg";
import img2 from "@/assets/equips/sm/eq2/21.jpg";

// 1번째 
import img1_1 from "@/assets/equips/sm/eq1/2.jpg";
import img1_2 from "@/assets/equips/sm/eq1/3.jpg";
import img1_3 from "@/assets/equips/sm/eq1/4.jpg";
import img1_4 from "@/assets/equips/sm/eq1/5.jpg";
import img1_5 from "@/assets/equips/sm/eq1/6.jpg";
import img1_6 from "@/assets/equips/sm/eq1/7.jpg";
import img1_7 from "@/assets/equips/sm/eq1/pro.png";
import img1_8 from "@/assets/equips/sm/eq1/8.png";

// 2번째

import img2_2 from "@/assets/equips/sm/eq2/22.jpg";
import img2_3 from "@/assets/equips/sm/eq2/23.jpg";
// import img2_4 from "@/assets/equips/sm/eq2/24.jpg";
import img2_5 from "@/assets/equips/sm/eq2/25.jpg"
import img2_6 from "@/assets/equips/sm/eq2/26.jpg";
import img2_7 from "@/assets/equips/sm/eq2/27.jpg";
import img2_8 from "@/assets/equips/sm/eq2/28pro.png";
import img2_9 from "@/assets/equips/sm/eq2/29.png";


const images = [
  {
    src: img1,
    title: "김치냉장고 전용 용기(19.8L) 생산 설비",
    englishtitle: "김치냉장고 전용 용기(19.8L) 생산 공정",
    // description: "설비 설명 1",
    processes: [
      { src: img1_1, title: "사출 생산", desc: "" },
      { src: img1_2, title: "1단계 제품 운송", desc: "" },
      { src: img1_3, title: "2단계 제품 운송", desc: "" },
      { src: img1_4, title: "김치통 조립(assy)", desc: "" },
      { src: img1_5, title: "1단계 김치통 포장", desc: "" },
      { src: img1_6, title: "2단계 김치통 포장", desc: "" },
      { src: img1_8, title: "포장 완료 후 출고 대기", desc: "포장 및 출하 단계" },
    ]
  },

  
  {
    src: img2,
    title: "김치냉장고 전용 용기(10.5L) 생산 설비",
    englishtitle: "김치냉장고 전용 용기(10.5L) 생산 공정",
    // description: "설비 설명 2",
    processes: [
      { src: img2_2, title: "사출 생산", desc: "" },
      { src: img2_3, title: "1단계 제품 운송", desc: "" },
      { src: img2_5, title: "김치통 조립(assy)", desc: "" },
      { src: img2_6, title: "김치통 포장", desc: "" },
      { src: img2_7, title: "김치통 적재", desc: "" },
      { src: img2_9, title: "완료 후 출고 대기", desc: "포장 및 출하 단계" },
    ]
  },

];


const GlobalEquip = () => {
  return (
      <CommonEquip
          title="Equipments of SM Chemical"
          images={images}
          pageType="sm" // ✅ 이걸로 구분!
      />
  );
};

export default GlobalEquip;
