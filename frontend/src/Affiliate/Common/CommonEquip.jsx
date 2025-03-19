import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../Common/CommonEquip.css";
import CommonModal from "../Common/CommonModal.jsx"; // ✅ 공통 모달

const CommonEquip = ({ title, images }) => {
    const [selectedEquipment, setSelectedEquipment] = useState(null);

    return (
        <div className="equip-slider-container">
            <div className="section-title">
                <h2>{title}</h2>
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
                        onClick={() => setSelectedEquipment({ title, src: img })}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="equip-slide-image" style={{ backgroundImage: `url(${img})` }}></div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* ✅ 공통 모달 사용 */}
            {selectedEquipment && (
                <CommonModal
                    equipment={selectedEquipment}
                    onClose={() => setSelectedEquipment(null)}
                />
            )}
        </div>
    );
};

export default CommonEquip;
