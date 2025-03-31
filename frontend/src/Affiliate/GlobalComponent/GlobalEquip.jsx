import React from "react";
import CommonEquip from "../Common/CommonEquip.jsx";
import img1 from "@/assets/Areal/global/sm1.png";
import img2 from "@/assets/Areal/global/sm2.png";
import img3 from "@/assets/Areal/global/sm3.png";
import img4 from "@/assets/Areal/global/sm4.jpg";

import img1_1 from "@/assets/Areal/high/nh1.jpg";
import img1_2 from "@/assets/Areal/high/nh2.png";
import img1_3 from "@/assets/Areal/high/nh3.png";
import img1_4 from "@/assets/Areal/high/nh7.png";

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
      { src: img1_4, title: "공정 5", desc: "포장 및 출하 단계입니다." },
      { src: img1_4, title: "공정 6", desc: "포장 및 출하 단계입니다." },
      { src: img1_4, title: "공정 7", desc: "포장 및 출하 단계입니다." },
      { src: img1_4, title: "공정 8", desc: "포장 및 출하 단계입니다." },
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


const GlobalEquip = () => {
    return <CommonEquip title="SM캐미칼 기계설비" images={images} />;
};

export default GlobalEquip;
