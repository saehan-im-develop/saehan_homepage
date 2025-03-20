import React from "react";
import CommonEquip from "../Common/CommonEquip.jsx";
import img1 from "@/assets/Areal/global/sm1.png";
import img2 from "@/assets/Areal/global/sm2.png";
import img3 from "@/assets/Areal/global/sm3.png";
import img4 from "@/assets/Areal/global/sm4.jpg";
import img5 from "@/assets/Areal/global/sm5.jpg";
import img6 from "@/assets/Areal/global/sm6.png";
import img7 from "@/assets/Areal/global/sm7.png";
import img8 from "@/assets/Areal/global/sm8.png";
import img9 from "@/assets/Areal/global/sm9.png";
import img11 from "@/assets/Areal/global/sm11.png";

const images = [
    { src: img1, title: "사출 성형기", englishtitle: "Injection Molding Machine", description: "정밀한 플라스틱 부품 사출 성형기" },
    { src: img2, title: "자동 컨베이어 벨트", englishtitle: "Automated Conveyor Belt", description: "효율적인 자재 운반을 위한 컨베이어 시스템" },
    { src: img3, title: "조립 라인 시스템", englishtitle: "Assembly Line System", description: "대량 생산을 위한 완전 자동 조립 라인" },
    { src: img4, title: "품질 검사 장치", englishtitle: "Quality Inspection Unit", description: "결함 감지를 위한 AI 기반 고급 검사 장치" },
    { src: img5, title: "초음파 용접기", englishtitle: "Ultrasonic Welding Machine", description: "매끄러운 접합을 위한 고속 초음파 용접기" },
    { src: img6, title: "???", englishtitle: "Ultrasonic Welding Machine", description: "???" },
    { src: img7, title: "???", englishtitle: "Ultrasonic Welding Machine", description: "???" },
    { src: img8, title: "???", englishtitle: "Ultrasonic Welding Machine", description: "???" },
    { src: img9, title: "???", englishtitle: "Ultrasonic Welding Machine", description: "???" },
    { src: img11, title: "???", englishtitle: "Ultrasonic Welding Machine", description: "???" },
];

const GlobalEquip = () => {
    return <CommonEquip title="SM캐미칼 기계설비" images={images} />;
};

export default GlobalEquip;
