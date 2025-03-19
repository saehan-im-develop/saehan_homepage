import React from "react";
import "./CommonModal.css"; // ✅ 공통 CSS 사용

const CommonModal = ({ equipment, onClose }) => {
    if (!equipment) return null; // ✅ equipment가 없으면 모달 표시 안 함

    const { title, src, description } = equipment; // ✅ equipment 객체에서 정보 추출

    console.log("Modal Props:", { title, src, description }); // ✅ 모달에 전달된 데이터 확인

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>✖</button>
                <h2>{title}</h2>
                
                {/* ✅ 클릭한 설비 이미지 표시 */}
                <div className="modal-image-container">
                    <img src={src} alt={title} className="modal-image" />
                </div>
                
                <p>{description}</p>
            </div>
        </div>
    );
};

export default CommonModal;
