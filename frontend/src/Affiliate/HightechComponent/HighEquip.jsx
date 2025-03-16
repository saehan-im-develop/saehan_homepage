import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import img1 from "@/assets/Areal/high/nh1.jpg";
import img2 from "@/assets/Areal/high/nh2.png";
import img3 from "@/assets/Areal/high/nh3.png";
import img4 from "@/assets/Areal/high/nh4.jpg";
import img5 from "@/assets/Areal/high/nh5.jpg";
import img6 from "@/assets/Areal/high/nh6.jpg";
import img7 from "@/assets/Areal/high/nh7.png";
import img8 from "@/assets/Areal/high/nh8.png";
import img9 from "@/assets/Areal/high/nh9.png";
import "swiper/css";
import "swiper/css/pagination";
import "../CommonCSS/CommonEquip.css";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

// const SlideContent = ({ index }) => (
//     <div className="equip-slide-content">
//         <h4>Lorem Ipsum</h4>
//         <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore molestias itaque
//             reiciendis et excepturi odit eligendi cum eaque ad culpa.
//         </p>
//         <footer>
//             <div>{index}/02</div>
//             <a href="#">READ MORE</a>
//         </footer>
//     </div>
// );

const HighEquip = () => {
    return (
        <div className="equip-slider-container">
            <div className="section-title">
                <h2>Equipment of Hightech</h2>
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
                        <div className="equip-slide-image" style={{ backgroundImage: `url(${img})` }}></div>
                    </SwiperSlide>
                ))}
                {/* 텍스트 슬라이더 따로 나중에 적용 가능할듯 */}
                {/* <SwiperSlide className="equip-swiper-slide">
                    <SlideContent index="01" />
                </SwiperSlide>
                <SwiperSlide className="equip-swiper-slide">
                    <SlideContent index="02" />
                </SwiperSlide> */}
            </Swiper>
        </div>
    );
};

export default HighEquip;
