import React from "react";
import CommonEquip from "../Common/CommonEquip"; // ✅ 공통 컴포넌트 사용
import img1 from "@/assets/Areal/high/nh1.jpg";
import img2 from "@/assets/Areal/high/nh2.png";
import img3 from "@/assets/Areal/high/nh3.png";
import img4 from "@/assets/Areal/high/nh7.png";

const images = [
    { src: img1, title: "장비 1", englishtitle: "Machine 1", description: "설비 설명 1" },
    { src: img2, title: "장비 2", englishtitle: "Machine 2", description: "설비 설명 2" },
    { src: img3, title: "장비 3", englishtitle: "Machine 3", description: "설비 설명 3" },
    { src: img4, title: "장비 4", englishtitle: "Machine 4", description: "설비 설명 4" },
];

const HighEquip = () => {
    return (
        <CommonEquip title="Equipments of Hightech" images={images} />
    );
};

export default HighEquip;
