import React from "react";
import CommonEquip from "../Common/CommonEquip.jsx";
import img1 from "@/assets/Areal/high/nh1.jpg";
import img3 from "@/assets/Areal/high/nh3.png";
import img7 from "@/assets/Areal/high/nh7.png";
import img8 from "@/assets/Areal/high/nh8.png";
import img9 from "@/assets/Areal/high/nh9.png";

const images = [img1, img3, img7, img8, img9];

const HighEquip = () => {
    return <CommonEquip title="Equipments of Hightech" images={images} />;
};

export default HighEquip;
