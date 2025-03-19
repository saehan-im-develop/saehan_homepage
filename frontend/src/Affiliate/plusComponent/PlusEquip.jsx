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

const images = [img1, img2, img3, img4, img6, img7, img8, img9, img10, img11, img12, img13, img14];

const PlusEquip = () => {
    return <CommonEquip title="Equipments of Plus" images={images} />;
};

export default PlusEquip;
