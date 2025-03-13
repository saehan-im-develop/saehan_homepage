import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../DicCssFile/News.module.scss";
import news1 from "../../assets/Areal/news/n1.png";
import news2 from "../../assets/Areal/news/n2.png";
import news3 from "../../assets/Areal/news/n3.png";

const newsData = [
  {
    date: "2024/12/17 TUE",
    title: "김원만 (유)새한플러스 회장, 광주 181호 아너 소사이어티 가입",
    text: "항상 좋은 일에 앞장서는 사랑의열매와 함께 아너 소사이어티 가입으로 따뜻한 마음을 전할 수 있는 기회를 갖게 돼 무척 뜻깊고 기쁘다",
    img: news1,
    link: "https://www.namdonews.com/news/articleView.html?idxno=802814"
  },
  {
    date: "2024/11/05 TUE",
    title: "전남도립대 미래자동차학과, 김원만 회장 초청 '명사 특강'개최",
    text: "김원만 회장은 열정과 도전 정신의 중요성을 강조하며, 직무에 대한 지속적인 학습과 현장 경험의 필요성도 함께 전했다.",
    img: news2,
    link:"https://www.geconomy.co.kr/mobile/article.html?no=290916"
  },
  {
    date: "2025/03/06 THU",
    title: "GIST 기술경영아카데미(GTMBA), 제 15기 입학식 사회 각 분야 리더 46명 입학",
    text: "14기 동문회장을 맡은 김원만 새한그룹 회장의 기탁식도 함께 진행",
    img: news3,
    link : "https://www.aipostkorea.com/news/articleView.html?idxno=6502"
  },
];

const NewsSlider = () => {
  return (
    <div className={styles.background}>
      <div className={styles.newsSliderContainer}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1.3} // 가운데 강조 효과
          centeredSlides={true}
          navigation
          pagination={{ clickable: true }}
          className={styles.newsSlider}
        >
          {newsData.map((news, index) => (
            <SwiperSlide key={index} className={styles.newsSlide}>
              <div className={styles.newsItem}>
                <div className={styles.newsDate}>{news.date}</div>
                <h3 className={styles.newsTitle}>{news.title}</h3>
                <p className={styles.newsText}>{news.text}</p>
                <div className={styles.newsImage}>
                  <a href={news.link || "#"} target="_blank" rel="noopener noreferrer">
                    <img src={news.img} alt={news.title} className={styles.newsImageItem} />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewsSlider;
