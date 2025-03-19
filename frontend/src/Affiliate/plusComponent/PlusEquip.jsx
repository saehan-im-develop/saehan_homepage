import React from "react";
import CommonEquip from "../Common/CommonEquip.jsx";
import img1 from "@/assets/Areal/plus/np1.png";
import img2 from "@/assets/Areal/plus/np2.png";
import img3 from "@/assets/Areal/plus/np3.jpg";
import img4 from "@/assets/Areal/plus/np4.JPG";
import img6 from "@/assets/Areal/plus/np6.png";
import img7 from "@/assets/Areal/plus/np7.jpg";
import img8 from "@/assets/Areal/plus/np8.jpg";
import img9 from "@/assets/Areal/plus/np9.jpg";
import img10 from "@/assets/Areal/plus/np10.png";
import img11 from "@/assets/Areal/plus/np11.jpg";
import img12 from "@/assets/Areal/plus/np12.png";
import img13 from "@/assets/Areal/plus/np13.png";
import img14 from "@/assets/Areal/plus/np14.png";

const images = [
    { src: img1, title: "사출 성형기", englishtitle: "Injection Molding Machine", description: "정밀한 플라스틱 부품 사출 성형기" },
    { src: img2, title: "자동 컨베이어 벨트", englishtitle: "Automated Conveyor Belt", description: "효율적인 자재 운반을 위한 컨베이어 시스템" },
    { src: img3, title: "조립 라인 시스템", englishtitle: "Assembly Line System", description: "대량 생산을 위한 완전 자동 조립 라인" },
    { src: img4, title: "품질 검사 장치", englishtitle: "Quality Inspection Unit", description: "결함 감지를 위한 AI 기반 고급 검사 장치" },
    { src: img6, title: "초음파 용접기", englishtitle: "Ultrasonic Welding Machine", description: "매끄러운 접합을 위한 고속 초음파 용접기" },
    { src: img7, title: "산업용 믹서", englishtitle: "Industrial Mixer", description: "원료 혼합을 위한 강력한 산업용 믹서" },
    { src: img8, title: "CNC 가공 센터", englishtitle: "CNC Machining Center", description: "복잡한 부품 제작을 위한 정밀 CNC 머신" },
    { src: img9, title: "자동 포장 시스템", englishtitle: "Automated Packaging System", description: "로봇 통합형 고효율 포장 시스템" },
    { src: img10, title: "레이저 조각기", englishtitle: "Laser Engraving Machine", description: "제품 맞춤화를 위한 고속 레이저 조각기" },
    { src: img11, title: "3D 프린팅 시스템", englishtitle: "3D Printing System", description: "신속한 프로토타이핑을 위한 고급 3D 프린팅" },
    { src: img12, title: "열처리로", englishtitle: "Heat Treatment Furnace", description: "금속 부품을 위한 산업용 열처리 장비" },
    { src: img13, title: "전기도금 라인", englishtitle: "Electroplating Line", description: "표면 마감을 위한 자동 전기도금 시스템" },
    { src: img14, title: "고속 드릴링 머신", englishtitle: "High-Speed Drilling Machine", description: "대량 생산을 위한 정밀 드릴링 머신" }
];


const PlusEquip = () => {
    return <CommonEquip title="Equipments of Plus" images={images} />;
};

export default PlusEquip;
