import React from "react";
import CommonEquip from "../Common/CommonEquip.jsx";
import img1 from "@/assets/Areal/global/sm1.png";
import img2 from "@/assets/Areal/global/sm2.png";
import img3 from "@/assets/Areal/global/sm3.png";
import img4 from "@/assets/Areal/global/sm4.jpg";
import img5 from "@/assets/Areal/global/sm5.jpg";

const images = [img1, img4, img2, img3, img5];

const GlobalEquip = () => {
    return <CommonEquip title="Equipments of SM CHEMICAL" images={images} />;
};

export default GlobalEquip;
