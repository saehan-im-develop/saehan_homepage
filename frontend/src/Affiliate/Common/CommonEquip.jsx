import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../Common/CommonEquip.css";
import Carousel from "../Common/Carousel.jsx"; // ✅ Carousel 모달 추가

const CommonEquip = ({ title, equipments = [] }) => {
    const [showCarousel, setShowCarousel] = useState(false);
    const [selectedEquipment, setSelectedEquipment] = useState(null);


    return (
        <div className="equip-slider-container">
            <div className="section-title">
                <h2>{title}</h2>
            </div>
    
            {equipments.length === 0 ? (
                <p style={{ textAlign: "center", fontSize: "18px", color: "gray" }}>장비 정보가 없습니다.</p>
            ) : (
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
                    {equipments.map((equip, index) => (
                        <SwiperSlide
                            key={index}
                            className="equip-swiper-slide"
                            onClick={() => { 
                                setSelectedEquipment(equip);
                                setShowCarousel(true);
                            }}
                            style={{ cursor: "pointer" }}
                        >
                            <div className="equip-slide-image" style={{ backgroundImage: `url(${equip.mainImage})` }}></div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
    
            {showCarousel && selectedEquipment && (
                <Carousel
                    images={selectedEquipment.relatedImages}
                    onClose={() => setShowCarousel(false)}
                />
            )}
        </div>
    );
};

export default CommonEquip;
