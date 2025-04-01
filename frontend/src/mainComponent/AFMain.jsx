import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ React Router 사용
import styles from "../mainCssFile/NewFuture.module.scss";
import img1 from "@/assets/Areal/panel.png";
import img2 from "@/assets/Areal/high/h55.jpg";
import img3 from "@/assets/Areal/SM1.jpg";
import img4 from "@/assets/Areal/plus2.jpg"

const AFMain = () => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate(); // ✅ React Router로 변경

  const data = [
    { img: img1, name: "Jason Response", text: "새한 아이엠", link: "/im" },
    { img: img2, name: "Max Conversion", text: "새한 하이테크", link: "/hightech" },
    { img: img4, name: "Parsley Montana", text: "새한 플러스", link: "/plus" },
    { img: img3, name: "plus", text: "SM 케미칼", link: "/global" }
  ];

  const handleClick = (link) => {
    navigate(link);
  };

  const spacedText = ["새", "한", "그", "룹"].join("\u00A0\u00A0"); // &nbsp; 2개와 동일

  return (
    <div className={styles.container}>


      <h1 className={styles.title} data-aos="fade">
        {spacedText}
      </h1>
      <h2 className={styles.subtitle} data-aos="fade">우리는 미래를 만들어갑니다.</h2>

      <div className={styles.imageWrapper}>
        {data.map((item, index) => (
          <figure
            key={index}
            className={`${styles.snip1368} ${hovered === index ? styles.hover : ""}`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleClick(item.link)} //  클릭 이벤트 추가
            style={{ cursor: "pointer" }} //  클릭 가능한 요소처럼 보이도록 설정
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

export default AFMain;
