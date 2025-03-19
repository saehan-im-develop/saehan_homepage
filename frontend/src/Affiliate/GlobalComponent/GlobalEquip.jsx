import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import img1 from "@/assets/Areal/global/sm1.png";
import img2 from "@/assets/Areal/global/sm2.png";
import img3 from "@/assets/Areal/global/sm3.png";
import img4 from "@/assets/Areal/global/sm4.jpg";
import img5 from "@/assets/Areal/global/sm5.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "../CommonCSS/CommonModal.css";
import CommonModal from "../CommonCSS/CommonModal.jsx";

const images = [
    { src: img1, title: "Equipment 1", description: "High-speed mixer for chemical blending." },
    { src: img4, title: "Equipment 2", description: "Advanced filtration system for impurity removal." },
    { src: img2, title: "Equipment 3", description: "Precision cutting machine for metal fabrication." },
    { src: img3, title: "Equipment 4", description: "Automated conveyor system for efficient logistics." },
    { src: img5, title: "Equipment 5", description: "Industrial-grade packaging system." }
];

const GlobalEquip = () => {
    const [selectedEquipment, setSelectedEquipment] = useState(null);

    return (
        <div className="equip-slider-container">
            <div className="section-title">
                <h2>Equipments of SM CHEMICAL</h2>
            </div>
            <Swiper
                modules={[Pagination]}
                slidesPerView="auto"
                initialSlide={2}
                speed={1000}
                spaceBetween={32}
                loop={true}
                centeredSlides={true}
                roundLengths={true}
                mousewheel={true}
                grabCursor={true}
                pagination={{ clickable: true }}
                className="equip-swiper-container"
            >
                {images.map((img, index) => (
                    <SwiperSlide
                        key={index}
                        className="equip-swiper-slide"
                        onClick={() => {
                            console.log("Clicked Equipment:", img); // ✅ 클릭한 이미지 데이터 확인
                            setSelectedEquipment(img);
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        <div
                            className="equip-slide-image"
                            style={{ backgroundImage: `url(${img.src})` }}
                        ></div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* ✅ 모달창 렌더링 (선택된 이미지가 있을 때만) */}
            {selectedEquipment && (
                <CommonModal
                    equipment={selectedEquipment} // ✅ equipment 객체 하나만 전달
                    onClose={() => setSelectedEquipment(null)}
                />
            )}
        </div>
    );
};

export default GlobalEquip;
