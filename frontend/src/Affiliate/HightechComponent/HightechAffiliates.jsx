import styles from "../CommonCSS/HoverEffect.module.scss"; // ✅ SCSS 파일 import
import React, { useState } from "react";
import "../CommonCSS/CommonAffiliates.css";
import img1 from "../../assets/aff/ai4.png";
import img2 from "../../assets/aff/ai2.png";
import img3 from "../../assets/aff/ai3.png";

function HoverEffect() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img src={img1} alt="Image 1" />
        {/* <span>Image 1</span> */}
      </div>
      <div className={styles.box}>
        <img src={img2} alt="Image 2" />
        {/* <span>Image 2</span> */}
      </div>
      <div className={styles.box}>
        <img src={img3} alt="Image 3" />
        {/* <span>Image 3</span> */}
      </div>
    </div>
  );
}

export default HoverEffect;
