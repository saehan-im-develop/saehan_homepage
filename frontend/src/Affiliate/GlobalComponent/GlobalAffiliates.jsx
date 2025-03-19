import styles from "../Common/HoverEffect.module.scss"; //  SCSS 파일 import
import React from "react";
import img1 from "@/assets/Areal/global/sm1.jpg";
import img2 from "@/assets/Areal/global/sm2.jpg";
import img3 from "@/assets/Areal/global/sm3.JPG";
import img4 from "@/assets/Areal/global/sm4.jpg";

function HoverEffect() {
  return (
    <div className={styles.wrapper}>
      {/* ✅ 중앙 정렬된 제목 */}
      <div className={styles.introText}>
        <p>View of Global</p>
      </div>

      {/* ✅ 이미지 리스트 */}
      <div className={styles.container}>
      <div className={styles.box}>
          <img src={img4} alt="Image 4" />
        </div>
        <div className={styles.box}>
          <img src={img1} alt="Image 1" />
        </div>
        <div className={styles.box}>
          <img src={img2} alt="Image 2" />
        </div>
        <div className={styles.box}>
          <img src={img3} alt="Image 3" />
        </div>
      </div>
    </div>
  );
}

export default HoverEffect;
