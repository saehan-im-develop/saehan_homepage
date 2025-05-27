import React from "react";
import CommonEquip from "../Common/CommonEquip.jsx";
import img1 from "@/assets/equips/plus/eq1/T1.png";
import img2 from "@/assets/equips/plus/eq2/main.png";
import img3 from "@/assets/equips/plus/eq3/T1.jpg"
import img4 from "@/assets/equips/plus/eq4/Tsave1.png";
import img5 from "@/assets/equips/plus/eq5/T1.png";

// 1번
import img1_1 from "@/assets/equips/plus/eq1/2.png";
import img1_2 from "@/assets/equips/plus/eq1/3.png";

// 2번
import img2_1 from "@/assets/equips/plus/eq2/1.jpg";
import img2_2 from "@/assets/equips/plus/eq2/2.jpg";
import img2_3 from "@/assets/equips/plus/eq2/3.jpg";
import img2_4 from "@/assets/equips/plus/eq2/4.jpg";
import img2_5 from "@/assets/equips/plus/eq2/5.jpg";
import img2_6 from "@/assets/equips/plus/eq2/6.png";

// 3번
import img3_2 from "@/assets/equips/plus/eq3/2.jpg";
import img3_4 from "@/assets/equips/plus/eq3/4.jpg";
import img3_5 from "@/assets/equips/plus/eq3/5.jpg";
import img3_6 from "@/assets/equips/plus/eq3/6.jpg";
import img3_7 from "@/assets/equips/plus/eq3/7.jpg";
import img3_8 from "@/assets/equips/plus/eq3/8.jpg";
import img3_9 from "@/assets/equips/plus/eq3/pro.png";

// 4번
import img4_1 from "@/assets/equips/plus/eq4/vision.jpg";
import img4_2 from "@/assets/equips/plus/eq4/vision2.jpg";
import img4_3 from "@/assets/equips/plus/eq4/save1.png";
import img4_4 from "@/assets/equips/plus/eq4/save2.jpg";
import img4_5 from "@/assets/equips/plus/eq4/water.jpg";

// 5번
import img5_1 from "@/assets/equips/plus/eq5/2.jpg";
import img5_3 from "@/assets/equips/plus/eq5/4.jpg";
import img5_4 from "@/assets/equips/plus/eq5/pro.png";

const images = [
  {
    src: img1,
    title: "LEVER MAGNET 자동 삽입기(1호기)",
    englishtitle: "Machine 1",
    //description: "설비 설명 1",
    processes: [
      { src: img1_1, title: "정렬 공정", desc: "" },
      { src: img1_2, title: "MAGNET 미삽입 확인 공정", desc: "" },
    ]
  },
  {
    src: img2,
    title: "LEVER MAGNET 자동 삽입기(2호기)",
    englishtitle: "",
    //description: "설비 설명 2",
        processes: [
      { src: img2_1, title: "LEVER MAGNET 양산품 투입 공정", desc: "" },
      { src: img2_2, title: "LEVER MAGNET 정렬", desc: "" },
      { src: img2_3, title: "LEVER MAGNET ASSY", desc: "" },
      { src: img2_4, title: "본딩 공정", desc: "" },
      { src: img2_5, title: "ASS'Y 완료", desc: "완료 후 컨베이어벨트 이송 장면" },
      { src: img2_6, title: "LEVER MAGNET 자동화 삽입기", desc: "" },
    ]
  },
  {
    src: img3,
    title: "GEAR CAM 양/부 판별 비전 검사 설비",
    englishtitle: "판별 검사 설비",
    //description: "설비 설명 3",
        processes: [
          { src: img3_2, title: "설비에 GEAR CAM 투입 공정", desc: "" },
          { src: img3_4, title: "자동화 정렬", desc: "" },
          { src: img3_5, title: "정렬 후 진행", desc: "" },
          { src: img3_6, title: "양 / 부 선별 공정", desc: "" },
          { src: img3_7, title: "부적합 자동 선별 공정", desc: "부적합 판정품으로 자동선별 된 부품" },
          { src: img3_8, title: "양산 판정품", desc: "" },
          { src: img3_9, title: "완료 후 출고대기", desc: "출고 대기 양품" },

    ]
  },
  {
    src: img4,
    title: "측정기 및 안전설비",
    englishtitle: "",
    //description: "설비 설명 4",
        processes: [
          { src: img4_1, title: "비전 측정기", desc: "" },
          { src: img4_2, title: "비전 측정기2", desc: "" },
          { src: img4_5, title: "수분 측정기", desc: "" },
          { src: img4_3, title: "안전설비1", desc: "" },
          { src: img4_4, title: "안전설비2", desc: "" },
    ]
  },  {
    src: img5,
    title: "자동차 플라스틱 사출기",
    englishtitle: "",
    //description: "설비 설명 1",
    processes: [
      { src: img5_1, title: "JIG", desc: "시양산 후 휨 검사 진행공정" },
      { src: img5_3, title: "포장 대기", desc: "" },
      { src: img5_4, title: "완료 후 출고대기", desc: "출고 대기 양품" },

    ]
  },

];

const PlusEquip = () => {
    return (
        <CommonEquip title="Equipments of SaehanPlus" images={images} />
      );
    };
export default PlusEquip;
