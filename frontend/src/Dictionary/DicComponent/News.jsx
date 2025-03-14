import React from "react";
import "../DicCssFile/News.css"; // 스타일 분리
import news1 from "@/assets/Areal/news/n1.png";
import news2 from "@/assets/Areal/news/n2.png";
import news3 from "@/assets/Areal/news/n3.png";

const NewsData = [
  {
    title: "아너 소사이어티 가입",
    description: "김원만 (유)새한플러스 회장, 광주 181호 아너 소사이어티 가입",
    details: {
      img: news1,
      link: "https://www.namdonews.com/news/articleView.html?idxno=802814",
      date: "2024/12/17 TUE",
      text: "김원만 신규 아너는 '우리 지역의 소외된 이웃들을 위한 나눔활동에 관심을 갖고 있었는데, 항상 좋은 일에 앞장서는 사랑의열매와 함께 아너 소사이어티 가입으로 따뜻한 마음을 전할 수 있는 기회를 갖게 돼 무척 뜻깊고 기쁘다'며 '작은 나눔이 큰 변화를 만들 수 있다는 믿음으로 지속적인 나눔을 실천해 나갈 예정이다'고 전했다."
    },
  },
  {
    title: "'명사 특강'개최",
    description: "전남도립대 미래자동차학과, 김원만 회장 초청 '명사 특강'개최",
    details: {
      img: news2,
      link: "https://www.geconomy.co.kr/mobile/article.html?no=290916",
      date: "2024/11/05 TUE",
      text: "김원만 회장은 열정과 도전 정신의 중요성을 강조하며, 직무에 대한 지속적인 학습과 현장 경험의 필요성도 함께 전했다.",
    },
  },
  {
    title: "김원만 새한그룹 회장의 기탁식",
    description: "GIST 기술경영아카데미(GTMBA), 제 15기 입학식 사회 각 분야 리더 46명 입학",
    details: {
      img: news3,
      link: "https://www.aipostkorea.com/news/articleView.html?idxno=6502",
      date: "2025/03/06 THU",
      text: "14기 동문회장을 맡은 김원만 새한그룹 회장의 기탁식도 함께 진행",
    },
  },
];

const NewsPage = () => {
  return (
    <div>
      {/* 🟦 고정 배경 섹션 */}
      <div className="hero-section">
        <h1 className="hero-title">새한 보도자료</h1>
      </div>

      {/* 🟦 설명 섹션 반복 */}
      {NewsData.map((item, index) => (
        <div key={index} className="content-section">
          {/* 🔹 왼쪽 (제목 + 이미지) */}
          <div className="left-container">
            <div className="text-container">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>

            {/* 🔹 이미지 */}
            <div className="image-container">
              <a href={item.details.link} target="_blank" rel="noopener noreferrer">
                <img src={item.details.img} alt={item.title} className="news-image"/>
              </a>
            </div>
          </div>

          {/* 🔹 오른쪽 (설명) */}
          <div className="info-container">
            <p><strong>{item.details.date}</strong></p>
            <p>{item.details.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default NewsPage;

