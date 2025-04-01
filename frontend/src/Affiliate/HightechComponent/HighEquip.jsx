import React from "react";
import CommonEquip from "../Common/CommonEquip"; // ✅ 공통 컴포넌트 사용
import img1 from "@/assets/equips/high/eq1/0.png";
import img2 from "@/assets/Areal/high/nh2.png";
import img3 from "@/assets/Areal/high/nh3.png";
import img4 from "@/assets/Areal/high/nh1.jpg";

// ✅ 공정 이미지들도 임포트
import img1_1 from "@/assets/equips/high/eq1/1.png";
import img1_2 from "@/assets/equips/high/eq1/2.png";
import img1_3 from "@/assets/equips/high/eq1/3.png";
import img1_4 from "@/assets/equips/high/eq1/4.jpg";
import img1_5 from "@/assets/equips/high/eq1/5.jpg";
import img1_6 from "@/assets/equips/high/eq1/6.png";

const images = [
  {
    src: img1,
    title: "장비 1",
    englishtitle: "Machine 1",
    description: "설비 설명 1",
    processes: [
      { src: img1_1, title: "공정 1", desc: "원재료를 투입합니다." },
      { src: img1_2, title: "공정 2", desc: "금형 성형 공정입니다." },
      { src: img1_3, title: "공정 3", desc: "표면을 정리하고 검사합니다." },
      { src: img1_4, title: "공정 4", desc: "포장 및 출하 단계입니다." },
      { src: img1_5, title: "공정 5", desc: "포장 및 출하 단계입니다." },
      { src: img1_6, title: "공정 6", desc: "포장 및 출하 단계입니다." },
    ]
  },
  {
    src: img2,
    title: "장비 2",
    englishtitle: "Machine 2",
    description: "설비 설명 2",
        processes: [
      { src: img1_1, title: "공정 1", desc: "원재료를 투입합니다." },
      { src: img1_2, title: "공정 2", desc: "금형 성형 공정입니다." },
      { src: img1_3, title: "공정 3", desc: "표면을 정리하고 검사합니다." },
      { src: img1_4, title: "공정 4", desc: "포장 및 출하 단계입니다." }
    ]
  },
  {
    src: img3,
    title: "장비 3",
    englishtitle: "Machine 3",
    description: "설비 설명 3",
        processes: [
      { src: img1_1, title: "공정 1", desc: "원재료를 투입합니다." },
      { src: img1_2, title: "공정 2", desc: "금형 성형 공정입니다." },
      { src: img1_3, title: "공정 3", desc: "표면을 정리하고 검사합니다." },
      { src: img1_4, title: "공정 4", desc: "포장 및 출하 단계입니다." }
    ]
  },
  {
    src: img4,
    title: "장비 4",
    englishtitle: "Machine 4",
    description: "설비 설명 4",
        processes: [
      { src: img1_1, title: "공정 1", desc: "원재료를 투입합니다." },
      { src: img1_2, title: "공정 2", desc: "금형 성형 공정입니다." },
      { src: img1_3, title: "공정 3", desc: "표면을 정리하고 검사합니다." },
      { src: img1_4, title: "공정 4", desc: "포장 및 출하 단계입니다." }
    ]
  }
];

const HighEquip = () => {
  return (
    <CommonEquip title="Equipments of Hightech" images={images} />
  );
};

export default HighEquip;
