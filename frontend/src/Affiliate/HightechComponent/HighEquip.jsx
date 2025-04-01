import React from "react";
import CommonEquip from "../Common/CommonEquip"; // ✅ 공통 컴포넌트 사용
import img1 from "@/assets/equips/high/eq1/0.png";
import img2 from "@/assets/equips/high/eq2/21.png";
import img3 from "@/assets/equips/high/eq3/31.png";

// 1번째 
import img1_1 from "@/assets/equips/high/eq1/1.png";
import img1_2 from "@/assets/equips/high/eq1/2.png";
import img1_3 from "@/assets/equips/high/eq1/3.png";
import img1_4 from "@/assets/equips/high/eq1/4.jpg";
import img1_5 from "@/assets/equips/high/eq1/5.jpg";
import img1_6 from "@/assets/equips/high/eq1/6.png";


// 2번째 

import img2_1 from "@/assets/equips/high/eq2/22.png";
import img2_2 from "@/assets/equips/high/eq2/23.png";
import img2_3 from "@/assets/equips/high/eq2/24.png";
import img2_4 from "@/assets/equips/high/eq2/20.png";

// 3번째

import img3_1 from "@/assets/equips/high/eq3/32.png";
import img3_2 from "@/assets/equips/high/eq3/33.png";
import img3_3 from "@/assets/equips/high/eq3/34.png";
import img3_4 from "@/assets/equips/high/eq3/30.png";

const images = [
  {
    src: img1,
    title: "FAN BALANCING MACHINE 1",
    englishtitle: "FAN 제품에 회전 동작을 실험하여 회전 값이 SPEC 내에 들어오는지 측정하여 양품 생산",
    // description: "FAN 제품의 회전 값을 측정하는 기구",
    processes: [
      { src: img1_1, title: "SHAFT에 제품 삽입", desc: "FAN BALANCING  측정기에 제품을 안착시키는 공정" },
      { src: img1_2, title: "고정", desc: "회전 측정시 유격을 최소화 하기 위한  공정" },
      { src: img1_3, title: "측정 시작", desc: "측정 시작 버튼을 눌러 유격 측정 시작" },
      { src: img1_4, title: "가동 중", desc: "측정기 회전 측정 공정" },
      { src: img1_5, title: "측정 완료", desc: "측정기에서 OK 메시지가 뜨면 측정완료 공정" },
      { src: img1_6, title: "완료 후 출고대기", desc: "출고 대기 양품" },
    ]
  },
  {
    src: img2,
    title: "FAN BALANCING MACHINE 2",
    englishtitle: "FAN 제품에 회전 동작을 실험하여 회전 값이 SPEC 내에 들어오는지 측정하여 양품 생산",
    // description: "FAN 제품의 회전 값을 측정하는 기구",
        processes: [
          { src: img2_1, title: "제품 삽입", desc: "FAN BALANCING  측정기에 제품을 안착시키는 공정" },
          { src: img2_2, title: "제품 고정 및 기계 조정", desc: "회전 측정 공정" },
          { src: img2_3, title: "제품 검사 가동 중", desc: "" },
          { src: img2_4, title: "완료 후 출고대기", desc: "출고 대기 양품" },
    ]
  },
  {
    src: img3,
    title: "FAN BALANCING MACHINE 3",
    englishtitle: "FAN 제품에 회전 동작을 실험하여 회전 값이 SPEC 내에 들어오는지 측정하여 양품 생산",
    // description: "FAN 제품의 회전 값을 측정하는 기구",
        processes: [
          { src: img3_1, title: "제품 삽입", desc: "FAN BALANCING  측정기에 제품을 안착시키는 공정" },
          { src: img3_2, title: "제품 측정 시작", desc: "측정을 시작하기 위한 기계 가동" },
          { src: img3_3, title: "제품 검사 진행", desc: "" },
          { src: img3_4, title: "완료 후 출고대기", desc: "출고 대기 양품" },
    ]
  },
];

const HighEquip = () => {
  return (
    <CommonEquip title="Equipments of Hightech" images={images} />
  );
};

export default HighEquip;
