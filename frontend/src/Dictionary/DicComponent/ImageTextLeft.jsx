import React from "react";
import "../DicCssFile/ImageTextBox.css";

const ImageTextLeft = ({ image, title, number, date, description }) => {
    return (
      <div className="image-text-container image-text-left"> {/* 🟦 개별 클래스 부여 */}
        <div className="text-box overlay overlay-tech2"> {/* 🟦 고유 클래스 적용 */}
          <h3>{title}</h3>
          <p><strong>등록번호:</strong> {number}</p>
          <p><strong>등록일:</strong> {date}</p>
          <h4>📌 특허 개요:</h4>
          <ul>
            {description.map((desc, i) => (
              <li key={i}>✅ {desc}</li>
            ))}
          </ul>
        </div>
        <div className="image-wrapper" id="res-img-left">
          <img src={image} alt="기술 이미지" className="image" />
        </div>
      </div>
    );
  };
  
  export default ImageTextLeft;
