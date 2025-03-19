import React from "react";
import CommonEquip from "../Common/CommonEquip.jsx";
import img1 from "@/assets/Areal/high/nh1.jpg";
import img3 from "@/assets/Areal/high/nh3.png";
import img7 from "@/assets/Areal/high/nh7.png";
import img8 from "@/assets/Areal/high/nh8.png";
import img9 from "@/assets/Areal/high/nh9.png";

const images = [
    { src: img1, title: "사출 성형기", englishtitle: "Injection Molding Machine", description: "정밀한 플라스틱 부품 사출 성형기" },
    { src: img3, title: "자동 컨베이어 벨트", englishtitle: "Automated Conveyor Belt", description: "효율적인 자재 운반을 위한 컨베이어 시스템" },
    { src: img7, title: "조립 라인 시스템", englishtitle: "Assembly Line System", description: "대량 생산을 위한 완전 자동 조립 라인" },
    { src: img8, title: "품질 검사 장치", englishtitle: "Quality Inspection Unit", description: "결함 감지를 위한 AI 기반 고급 검사 장치" },
    { src: img9, title: "초음파 용접기", englishtitle: "Ultrasonic Welding Machine", description: "매끄러운 접합을 위한 고속 초음파 용접기" },
];

const HighEquip = () => {
    return <CommonEquip title="Equipments of Hightech" images={images} />;
};

export default HighEquip;
