import React from "react";
import "../Common/CommonEquip.css";
import CommonPopupViewer from "../Common/CommonPopupViewer"; // ✅ 새 창 열기용

const CommonEquip = ({ title, images }) => {
    return (
        <div className="equip-wrapper">
            <div className="equip-slider-container">
                <div className="section-title-equip">
                    <h2>{title}</h2>
                    <div className="underline"></div>
                </div>
                <div className="equip-grid">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="equip-card"
                            onClick={() => CommonPopupViewer.open(img)}
                        >
                            <img src={img.src} alt={img.title} className="equip-image" />
                            <div className="equip-card-title">{img.title}</div>
                            <div className="equip-card-desc">{img.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CommonEquip;
