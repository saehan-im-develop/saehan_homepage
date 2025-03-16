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
      text: "김원만 (유)새한플러스 회장이 사회복지공동모금회의 고액 기부자 모임인 ‘아너 소사이어티’에 가입하며 광주 지역 181번째 회원이 되었다. 전자부품 제조 기업을 운영하며 지역 사회 발전에 기여해온 그는, 이번 기부를 통해 나눔 문화를 확산하고 기업의 사회적 책임을 실천하겠다는 뜻을 밝혔다."
    },
  },
  {
    title: "'산업체 명사 취업 특강' 개최",
    description: "전남도립대 미래자동차학과, 김원만 회장 초청 '명사 특강'개최",
    details: {
      img: news2,
      link: "https://www.geconomy.co.kr/mobile/article.html?no=290916",
      date: "2024/11/05 TUE",
      text: "전남도립대 미래자동차학과는 새한그룹 김원만 회장을 초청해 ‘산업체 명사 취업특강’을 개최했다. 김 회장은 ‘꿈을 향한 엔진을 켜라!’를 주제로 창업과 기업 경영 경험을 바탕으로 현실적인 조언을 전하며, 열정과 도전 정신의 중요성을 강조했다. 학생들은 이번 특강을 통해 취업과 창업에 대한 동기부여를 얻었으며, 학과 측은 앞으로도 다양한 지원 프로그램을 마련할 계획이다. 한편, 미래자동차학과 졸업생들은 SK하이닉스, 광주글로벌모터스 등 주요 기업에 취업하며 우수한 성과를 보이고 있다.",
    },
  },
  {
    title: "김원만 새한그룹 회장의 기탁식",
    description: "GIST 기술경영아카데미(GTMBA), 제 15기 입학식",
    details: {
      img: news3,
      link: "https://www.aipostkorea.com/news/articleView.html?idxno=6502",
      date: "2025/03/06 THU",
      text: "새한그룹 김원만 회장은 GIST 기술경영아카데미(GTMBA) 제15기 입학식에서 발전기금 1,000만 원을 기탁했다. 이 기금은 지역과의 상생 발전을 위해 사용될 예정이다. 김 회장은 인사말을 통해 GIST가 세계적 교육기관으로 도약하고 지역 경제발전에 기여하길 기대한다고 밝혔다. 새한그룹은 백색가전과 자동차부품 플라스틱 제조 전문기업으로 지역 산업 발전에 기여하고 있다.",
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

