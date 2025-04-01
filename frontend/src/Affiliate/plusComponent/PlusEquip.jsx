import React from "react";
import CommonEquip from "../Common/CommonEquip.jsx";
import img1 from "@/assets/equips/plus/eq1/1.jpg";
import img2 from "@/assets/equips/plus/eq2/10.png";
import img3 from "@/assets/Areal/plus/np3.jpg";
import img4 from "@/assets/Areal/plus/np4.JPG";

// 1번
import img1_1 from "@/assets/equips/plus/eq1/2.jpg";
import img1_2 from "@/assets/equips/plus/eq1/3.jpg";

// 1번
import img2_1 from "@/assets/equips/plus/eq2/2.jpg";
import img2_2 from "@/assets/equips/plus/eq2/3.jpg";
import img2_3 from "@/assets/equips/plus/eq2/4.jpg";
import img2_4 from "@/assets/equips/plus/eq2/5.jpg";
import img2_4_4 from "@/assets/equips/plus/eq2/1.png";
import img2_5 from "@/assets/equips/plus/eq2/6.jpg";
import img2_6 from "@/assets/equips/plus/eq2/7.jpg";
import img2_7 from "@/assets/equips/plus/eq2/8.jpg";
import img2_8 from "@/assets/equips/plus/eq2/9.jpg";
import img2_9 from "@/assets/equips/plus/eq2/11.jpg";

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
      { src: img1_1, title: "공정 1", desc: "원재료를 투입합니다." },
      { src: img1_2, title: "공정 2", desc: "금형 성형 공정입니다." },

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

    ]
  },  {
    src: img4,
    title: "장비 1",
    englishtitle: "Machine 1",
    description: "설비 설명 1",
    processes: [
      { src: img1_1, title: "공정 1", desc: "원재료를 투입합니다." },
      { src: img1_2, title: "공정 2", desc: "금형 성형 공정입니다." },

    ]
  },
  {
    src: img4,
    title: "장비 1",
    englishtitle: "Machine 1",
    description: "설비 설명 1",
    processes: [
      { src: img1_1, title: "공정 1", desc: "원재료를 투입합니다." },
      { src: img1_2, title: "공정 2", desc: "금형 성형 공정입니다." },
   
    ]
  },
];

const PlusEquip = () => {
    return (
        <CommonEquip title="Equipments of SaehanPlus" images={images} />
      );
    };
export default PlusEquip;
