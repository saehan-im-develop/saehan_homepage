import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../DicCssFile/CSR.module.scss"; //  SCSS 모듈 적용
import img1 from "@/assets/t1.png"

gsap.registerPlugin(ScrollTrigger);

const ScrollEffect = () => {
  const figureRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const figure = figureRef.current;
    const content = contentRef.current;

    gsap.to(figure, {
      scale: 1,
      scrollTrigger: {
        trigger: figure,
        start: "top center",
        end: "bottom center",
        scrub: true
      }
    });

    gsap.fromTo(
      content.querySelectorAll(`.${styles.subheading}, .${styles.paragraph}`),
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: content,
          start: "top 80%",
          end: "bottom 50%",
          scrub: true
        }
      }
    );
  }, []);

  return (
    <div className={styles.scrollContainer}>
      <section className={styles.introSection}>
        <h1 className={styles.introHeading}>Scroll Animation</h1>
      </section>

      <section className={styles.contentSection}>
        <div ref={figureRef} className={styles.figure}>
          <img
            src= {img1}
            alt="Random"
          />
        </div>

        <div ref={contentRef} className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.heading}>Amazing Scroll Effects</h2>
            <p className={styles.subheading}>GSAP + ScrollTrigger</p>
          </div>
          <p className={styles.paragraph}>
            This is an example of a smooth scroll effect with GSAP and ScrollTrigger.
            As you scroll, the content fades in, and the image scales dynamically.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ScrollEffect;
