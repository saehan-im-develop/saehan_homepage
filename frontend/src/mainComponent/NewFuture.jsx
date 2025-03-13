import React, { useState } from "react";
import styles from "../mainCssFile/NewFuture.module.scss";
import img1 from "@/assets/Areal/highback.png";
import img2 from "@/assets/Areal/plusback.jpg";
import img3 from "@/assets/Areal/plus1.jpg";

const NewFuture = () => {
  const [hovered, setHovered] = useState(null);

  const data = [
    { img: img1, name: "Max Conversion", text: "비전 및 이념", link: "/vision" },
    { img: img2, name: "Jason Response", text: "CEO 인사말", link: "/ceo" },
    { img: img3, name: "Parsley Montana", text: "회사 연혁", link: "/history" },
    { img: img3, name: "plus", text: "네트워크", link: "/network" }
  ];

  const handleClick = (link) => {
    window.location.href = link; // ✅ 클릭 시 해당 링크로 이동
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>새한그룹</h1>
      <h2 className={styles.subtitle}>우리는 미래를 만들어갑니다.</h2>

      <div className={styles.imageWrapper}>
        {data.map((item, index) => (
          <figure
            key={index}
            className={`${styles.snip1368} ${hovered === index ? styles.hover : ""}`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleClick(item.link)} // ✅ 클릭 이벤트 추가
            style={{ cursor: "pointer" }} // ✅ 클릭 가능한 요소처럼 보이도록 설정
          >
            <img src={item.img} alt={item.name} />
            <figcaption>
              <div className={styles.textBox}>{item.text}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default NewFuture;
