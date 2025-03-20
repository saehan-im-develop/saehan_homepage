import React, { useEffect } from "react";
import "./CommonModal.css"; // ✅ 공통 CSS 사용

const CommonModal = ({ equipment, onClose }) => {
    if (!equipment) return null; // ✅ equipment가 없으면 모달 표시 안 함

    const { title, englishtitle, src, description } = equipment;

    console.log("Modal Props:", { title, englishtitle, src, description }); // ✅ 모달에 전달된 데이터 확인

    // ✅ ESC 키 이벤트 핸들러 추가
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose(); // ESC 키를 누르면 모달 닫기
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>✖</button>

                {/* ✅ 제목 그룹화 */}
                <div className="modal-title-container">
                    <h2>{title}</h2> {/* 한글 제목 */}
                    <h3 className="modal-englishtitle">{englishtitle}</h3> {/* 영어 제목 (작게, 진회색) */}
                </div>

                {/* ✅ 클릭한 설비 이미지 표시 */}
                <div className="modal-image-container">
                    <img src={src} alt={title} className="modal-image" />
                </div>

                {/* ✅ 설명 추가 */}
                <p className="modal-description">{description}</p>
            </div>
        </div>
    );
};

export default CommonModal;