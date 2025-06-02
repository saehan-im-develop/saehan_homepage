import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./CommonProductModal.css";

function CommonProductModal({ open, imageUrl, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.classList.add("product-modal-open");
    } else {
      document.body.classList.remove("product-modal-open");
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("product-modal-open");
    };
  }, [open, onClose]);

  function handleBackdropClick(e) {
    if (modalRef.current && e.target === modalRef.current) {
      onClose();
    }
  }

  if (!open) return null;
  return ReactDOM.createPortal(
    <div className="product-modal-backdrop" ref={modalRef} onClick={handleBackdropClick}>
      <div className="product-modal-content">
        <button className="product-modal-close-btn" onClick={onClose} aria-label="닫기">×</button>
        <img src={imageUrl} alt="제품 이미지 확대" className="product-modal-image" />
      </div>
    </div>,
    document.body
  );
}

export default CommonProductModal; 