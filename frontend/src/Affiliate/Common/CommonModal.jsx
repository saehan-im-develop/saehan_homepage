import React, { useEffect } from "react";
import "./CommonModal.css"; // ✅ 공통 CSS 사용

const CommonModal = ({ equipment, onClose }) => {
    if (!equipment) return null; // ✅ equipment가 없으면 모달 표시 안 함

    const { title, src, description } = equipment;

    console.log("Modal Props:", { title, src, description }); // ✅ 모달에 전달된 데이터 확인

    // ✅ ESC 키 이벤트 핸들러
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose(); // ESC 키를 누르면 모달 닫기
            }
        };

        document.addEventListener("keydown", handleKeyDown); // 키보드 이벤트 추가
        return () => document.removeEventListener("keydown", handleKeyDown); // 클린업
    }, [onClose]);

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
