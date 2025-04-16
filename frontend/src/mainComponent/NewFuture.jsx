import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styles from "../mainCssFile/NewFuture.module.scss";
import img1 from "@/assets/Areal/vision.jpg";
import img2 from "@/assets/Areal/CEOPhoto.png";
import img3 from "@/assets/Areal/tree.jpg";
import img4 from "@/assets/Areal/network.png";

const NewFuture = () => {
  const [hovered, setHovered] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    { img: img2, name: "Jason Response", text: "CEO 인사말", link: "/ceo" },
    { img: img1, name: "Max Conversion", text: "비전 및 가치관", link: "/vision" },
    { img: img3, name: "Parsley Montana", text: "회사 연혁", link: "/history" },
    { img: img4, name: "plus", text: "네트워크", link: "/network" }
  ];

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title} data-aos={!isMobile ? "fade-up" : undefined}>
        함께하는 성장, 미래를 향한 도전
      </h1>
      <h2 className={styles.subtitle} data-aos={!isMobile ? "fade-up" : undefined}>
        새한그룹을 소개합니다.
      </h2>

      <div className={styles.imageWrapper}>
        {data.map((item, index) => (
          <figure
            key={index}
            className={`${styles.snip1368} ${!isMobile && hovered === index ? styles.hover : ""}`}
            onMouseEnter={!isMobile ? () => setHovered(index) : undefined}
            onMouseLeave={!isMobile ? () => setHovered(null) : undefined}
            onClick={() => handleClick(item.link)}
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

export default NewFuture;
