import React, { useState } from "react";
import CommonEquip from "../Common/CommonEquip.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import img1 from "@/assets/Areal/high/nh1.jpg";
import img2 from "@/assets/Areal/high/nh2.png";
import img3 from "@/assets/Areal/high/nh3.png";
import img7 from "@/assets/Areal/high/nh7.png";
import img8 from "@/assets/Areal/high/nh8.png";
import img9 from "@/assets/Areal/high/nh9.png";
import "swiper/css";
import "swiper/css/pagination";
import "../Common/CommonEquip.css";

const images = [
    { src: img1, title: "", englishtitle: "Product name to be updated", description: "update" },
    { src: img2, title: "", englishtitle: "Product name to be updated", description: "update" },
    { src: img3, title: "", englishtitle: "Product name to be updated", description: "update" },
    { src: img7, title: "", englishtitle: "Product name to be updated", description: "update" },
    { src: img8, title: "", englishtitle: "Product name to be updated", description: "update" },
    { src: img9, title: "", englishtitle: "Product name to be updated", description: "update" },
];

const HighEquip = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (img) => {
        setSelectedImage(img);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    if (!selectedImage) {
        return <CommonEquip title="새한하이테크 기계설비" images={images} />;
    }

    return (
        <>
            <div className="equip-slider-container">
                <div className="section-title">
                    <h2>Equipments of Hightech</h2>
                </div>
                <Swiper
                    modules={[Pagination, Mousewheel]}
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
                        <SwiperSlide key={index} className="equip-swiper-slide">
                            <div
                                className="equip-slide-image-wrapper"
                                onClick={() => openModal(img)} // 클릭 시 모달 열기
                            >
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="equip-slide-image"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* 모달 UI */}
            {selectedImage && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>×</button>
                        {/* <h2>{selectedImage.title}</h2> */}
                        {/* <p><i>{selectedImage.englishtitle}</i></p> */}
                        <img src={selectedImage.src} alt={selectedImage.title} className="modal-image" />
                        <p>{selectedImage.description}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default HighEquip;
