import styles from "../CommonCSS/HoverEffect.module.scss"; //  SCSS 파일 import
import React from "react";
import img1 from "@/assets/Areal/high/h11.jpg";
import img2 from "@/assets/Areal/high/h22.jpg";
import img3 from "@/assets/Areal/high/h33.JPG";
import img4 from "@/assets/Areal/high/h44.JPG";


function HoverEffect() {
  return (
    <div className={styles.wrapper}>
      {/* ✅ 중앙 정렬된 제목 */}
      <div className={styles.introText}>
        <p>View of HighTech</p>
      </div>

      {/* ✅ 이미지 리스트 */}
      <div className={styles.container}>
        <div className={styles.box}>
          <img src={img4} alt="Image 1" />
        </div>
        <div className={styles.box}>
          <img src={img2} alt="Image 2" />
        </div>
        <div className={styles.box}>
          <img src={img3} alt="Image 3" />
        </div>
        <div className={styles.box}>
          <img src={img1} alt="Image 4" />
        </div>
      </div>
    </div>
  );
}

export default HoverEffect;
