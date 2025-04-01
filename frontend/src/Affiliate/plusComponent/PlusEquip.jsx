import React from "react";
import CommonEquip from "../Common/CommonEquip.jsx";
import img1 from "@/assets/equips/plus/eq1/1.jpg";
import img2 from "@/assets/equips/plus/eq2/10.png";
import img3 from "@/assets/equips/plus/eq3/1.jpg";
import img4 from "@/assets/equips/plus/eq4/save1.png";
import img5 from "@/assets/equips/plus/eq5/1.png"

// 1번
import img1_1 from "@/assets/equips/plus/eq1/2.png";
import img1_2 from "@/assets/equips/plus/eq1/3.png";

// 2번
import img2_1 from "@/assets/equips/plus/eq2/2.jpg";
import img2_2 from "@/assets/equips/plus/eq2/3.png";
import img2_3 from "@/assets/equips/plus/eq2/4.png";
import img2_4 from "@/assets/equips/plus/eq2/5.png";
import img2_4_4 from "@/assets/equips/plus/eq2/1.png";
import img2_5 from "@/assets/equips/plus/eq2/6.jpg";
import img2_6 from "@/assets/equips/plus/eq2/7.jpg";
import img2_7 from "@/assets/equips/plus/eq2/8.jpg";
import img2_8 from "@/assets/equips/plus/eq2/9.jpg";
import img2_9 from "@/assets/equips/plus/eq2/11.jpg";

// 3번
import img3_1 from "@/assets/equips/plus/eq3/2.jpg";
import img3_2 from "@/assets/equips/plus/eq3/3.jpg";
import img3_3 from "@/assets/equips/plus/eq3/4.jpg";
import img3_4 from "@/assets/equips/plus/eq3/5.jpg";
import img3_5 from "@/assets/equips/plus/eq3/6.png";
import img3_6 from "@/assets/equips/plus/eq3/7.png";
import img3_7 from "@/assets/equips/plus/eq3/8.jpg";
import img3_8 from "@/assets/equips/plus/eq3/pro.png";

// 4번
import img4_1 from "@/assets/equips/plus/eq4/vision.jpg";
import img4_2 from "@/assets/equips/plus/eq4/vision2.jpg";
import img4_3 from "@/assets/equips/plus/eq4/save1.png";
import img4_4 from "@/assets/equips/plus/eq4/save2.jpg";
import img4_5 from "@/assets/equips/plus/eq4/water.jpg";

// 5번번
import img5_1 from "@/assets/equips/plus/eq5/2.jpg";
import img5_2 from "@/assets/equips/plus/eq5/3.jpg";
import img5_3 from "@/assets/equips/plus/eq5/4.jpg";
import img5_4 from "@/assets/equips/plus/eq5/pro.png";

const images = [
  {
    src: img1,
    title: "마그넷1",
    englishtitle: "Machine 1",
    description: "설비 설명 1",
    processes: [
      { src: img1_1, title: "공정 1", desc: "" },
      { src: img1_2, title: "공정 2", desc: "" },
    ]
  },
  {
    src: img2,
    title: "마그넷2",
    englishtitle: "Machine 2",
    description: "설비 설명 2",
        processes: [
      { src: img2_1, title: "자재투하", desc: "원재료를 투입합니다." },
      { src: img2_2, title: "자재이동", desc: "금형 성형 공정입니다." },
      { src: img2_3, title: "자재검사1", desc: "표면을 정리하고 검사합니다." },
      { src: img2_4, title: "자재검사2", desc: "" },
      { src: img2_4_4, title: "자재검사3", desc: "" },
      { src: img2_5, title: "자재검사4", desc: "" },
      { src: img2_6, title: "자재검사5", desc: "" },
      { src: img2_7, title: "자재검사6", desc: "" },
      { src: img2_8, title: "자재검사6", desc: "" },
      { src: img2_9, title: "자재 조립", desc: "" },
    ]
  },
  {
    src: img3,
    title: "장비 3",
    englishtitle: "Machine 3",
    description: "설비 설명 3",
        processes: [
          { src: img3_1, title: "물량 조절", desc: "" },
          { src: img3_2, title: "자재 정리", desc: "" },
          { src: img3_3, title: "1단계 자재 운반", desc: "" },
          { src: img3_4, title: "2단계 자재 운반", desc: "" },
          { src: img3_5, title: "불량 선별", desc: "" },
          { src: img3_6, title: "불량", desc: "" },
          { src: img3_7, title: "양품", desc: "" },
          { src: img3_8, title: "완료 후 출고대기", desc: "출고 대기 양품" },

    ]
  },
  {
    src: img4,
    title: "측정기 및 안전설비",
    englishtitle: "Machine 4",
    description: "설비 설명 4",
        processes: [
          { src: img4_1, title: "비전 측정기", desc: "" },
          { src: img4_2, title: "비전 측정기2", desc: "" },
          { src: img4_5, title: "수분 측정기", desc: "" },
          { src: img4_3, title: "안전설비1", desc: "" },
          { src: img4_4, title: "안전설비2", desc: "" },
    ]
  },  {
    src: img5,
    title: "자동차 부품 설비",
    englishtitle: "Machine 1",
    description: "설비 설명 1",
    processes: [
      { src: img5_1, title: "조립 과정1", desc: "" },
      { src: img5_2, title: "조립 과정2", desc: "" },
      { src: img5_3, title: "조립 과정3", desc: "" },
      { src: img5_4, title: "완료 후 출고대기기", desc: "출고 대기 양품" },

    ]
  },

];

const PlusEquip = () => {
    return (
        <CommonEquip title="Equipments of SaehanPlus" images={images} />
      );
    };
export default PlusEquip;
