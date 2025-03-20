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
    { src: img1, title: "", englishtitle: "Product name to be updated", description: "update" },
    { src: img2, title: "", englishtitle: "Product name to be updated", description: "update" },
    { src: img3, title: "", englishtitle: "Product name to be updated", description: "update" },
    { src: img4, title: "", englishtitle: "Product name to be updated", description: "update" },
    { src: img5, title: "", englishtitle: "Product name to be updated", description: "update" },
    { src: img6, title: "", englishtitle: "Product name to be updated", description: "update" },
    { src: img7, title: "", englishtitle: "Product name to be updated", description: "update" },
    { src: img8, title: "", englishtitle: "Product name to be updated", description: "update" },
    { src: img9, title: "", englishtitle: "Product name to be updated", description: "update" },
    { src: img11, title: "", englishtitle: "Product name to be updated", description: "update" },

];

const GlobalEquip = () => {
    return <CommonEquip title="SM캐미칼 기계설비" images={images} />;
};

export default GlobalEquip;
