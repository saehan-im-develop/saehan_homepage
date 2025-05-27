import CommonEquip from "../Common/CommonEquip.jsx";

const images = [
  {
    src: "/assets/equips/plus/eq1/T1.png",
    title: "LEVER MAGNET 자동 삽입기(1호기)",
    englishtitle: "Machine 1",
    processes: [
      { src: "/assets/equips/plus/eq1/2.png", title: "정렬 공정", desc: "" },
      { src: "/assets/equips/plus/eq1/3.png", title: "MAGNET 미삽입 확인 공정", desc: "" },
    ]
  },
  {
    src: "/assets/equips/plus/eq2/main.png",
    title: "LEVER MAGNET 자동 삽입기(2호기)",
    englishtitle: "",
    processes: [
      { src: "/assets/equips/plus/eq2/1.jpg", title: "LEVER MAGNET 양산품 투입 공정", desc: "" },
      { src: "/assets/equips/plus/eq2/2.jpg", title: "LEVER MAGNET 정렬", desc: "" },
      { src: "/assets/equips/plus/eq2/3.jpg", title: "LEVER MAGNET ASSY", desc: "" },
      { src: "/assets/equips/plus/eq2/4.jpg", title: "본딩 공정", desc: "" },
      { src: "/assets/equips/plus/eq2/5.jpg", title: "ASS'Y 완료", desc: "완료 후 컨베이어벨트 이송 장면" },
      { src: "/assets/equips/plus/eq2/6.png", title: "LEVER MAGNET 자동화 삽입기", desc: "" },
    ]
  },
  {
    src: "/assets/equips/plus/eq3/T1.jpg",
    title: "GEAR CAM 양/부 판별 비전 검사 설비",
    englishtitle: "판별 검사 설비",
    processes: [
      { src: "/assets/equips/plus/eq3/2.jpg", title: "설비에 GEAR CAM 투입 공정", desc: "" },
      { src: "/assets/equips/plus/eq3/4.jpg", title: "자동화 정렬", desc: "" },
      { src: "/assets/equips/plus/eq3/5.jpg", title: "정렬 후 진행", desc: "" },
      { src: "/assets/equips/plus/eq3/6.jpg", title: "양 / 부 선별 공정", desc: "" },
      { src: "/assets/equips/plus/eq3/7.jpg", title: "부적합 자동 선별 공정", desc: "부적합 판정품으로 자동선별 된 부품" },
      { src: "/assets/equips/plus/eq3/8.jpg", title: "양산 판정품", desc: "" },
      { src: "/assets/equips/plus/eq3/pro.png", title: "완료 후 출고대기", desc: "출고 대기 양품" },
    ]
  },
  {
    src: "/assets/equips/plus/eq4/Tsave1.png",
    title: "측정기 및 안전설비",
    englishtitle: "",
    processes: [
      { src: "/assets/equips/plus/eq4/vision.jpg", title: "비전 측정기", desc: "" },
      { src: "/assets/equips/plus/eq4/vision2.jpg", title: "비전 측정기2", desc: "" },
      { src: "/assets/equips/plus/eq4/water.jpg", title: "수분 측정기", desc: "" },
      { src: "/assets/equips/plus/eq4/save1.png", title: "안전설비1", desc: "" },
      { src: "/assets/equips/plus/eq4/save2.jpg", title: "안전설비2", desc: "" },
    ]
  },
  {
    src: "/assets/equips/plus/eq5/T1.png",
    title: "자동차 플라스틱 사출기",
    englishtitle: "",
    processes: [
      { src: "/assets/equips/plus/eq5/2.jpg", title: "JIG", desc: "시양산 후 휨 검사 진행공정" },
      { src: "/assets/equips/plus/eq5/4.jpg", title: "포장 대기", desc: "" },
      { src: "/assets/equips/plus/eq5/pro.png", title: "완료 후 출고대기", desc: "출고 대기 양품" },
    ]
  },
];

const PlusEquip = () => {
  return <CommonEquip title="Equipments of SaehanPlus" images={images} />;
};

export default PlusEquip;
