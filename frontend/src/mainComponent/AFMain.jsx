import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../mainCssFile/NewFuture.module.scss";
import img1 from "@/assets/Areal/panel.png";
import img2 from "@/assets/Areal/hh11.png";
import img3 from "@/assets/Areal/SM1.jpg";
import img4 from "@/assets/Areal/plus2.jpg";

const AFMain = () => {
  const [hovered, setHovered] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // ✅ 모바일 여부 감지
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    { img: img1, name: "Jason Response", text: "새한 아이엠", link: "/im" },
    { img: img2, name: "Max Conversion", text: "새한 하이테크", link: "/hightech" },
    { img: img4, name: "Parsley Montana", text: "새한 플러스", link: "/plus" },
    { img: img3, name: "plus", text: "SM 케미칼", link: "/global" }
  ];

  const handleClick = (link) => {
    navigate(link);
  };

  const spacedText = ["새", "한", "그", "룹"].join("\u00A0\u00A0");

  return (
    <div className={styles.container}>
      <h1
        className={styles.title}
        data-aos={!isMobile ? "fade-up" : undefined}
      >
        {spacedText}
      </h1>
      <h2
        className={styles.subtitle}
        data-aos={!isMobile ? "fade-up" : undefined}
        data-aos-delay={!isMobile ? "100" : undefined}
      >
        우리는 미래를 만들어갑니다.
      </h2>

      <div className={styles.imageWrapper}>
        {data.map((item, index) => (
          <figure
            key={index}
            className={`${styles.snip1368} ${!isMobile && hovered === index ? styles.hover : ""}`}
            onClick={() => handleClick(item.link)}
            onMouseEnter={!isMobile ? () => setHovered(index) : undefined}
            onMouseLeave={!isMobile ? () => setHovered(null) : undefined}
            style={{ cursor: "pointer" }}
          >
            <img src={item.img} alt={item.name} loading="lazy" />
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
