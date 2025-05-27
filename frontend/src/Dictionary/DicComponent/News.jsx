import React from "react";
import "../DicCssFile/News.css"; // 스타일 분리

const NewsData = [
  {
    title: "새한그룹, '우리동네 나눔히어로' 광주 1호 가입",
    description: "광주에서 최초로 ‘2025 우리동네 나눔히어로 나눔기업’ 캠페인에 참여",
    details: {
      img: "/assets/Areal/news/n6.webp",
      link: "https://view.asiae.co.kr/article/2025042413250482705",
      date: "2025년 04월 24일 (목)",
      text: "㈜새한그룹이 광주에서 처음으로 ‘2025 우리 동네 나눔 히어로 나눔 기업’ 캠페인에 참여했다. 해당 캠페인은 중소기업의 기부 참여를 독려하기 위한 광주 사랑의 열매의 프로그램이다. 새한그룹은 100만 원 이상을 기부하며 자립 준비 청년 지원, 고독사 예방 등에 성금을 전달했다. 김원만 회장은 기업 차원의 나눔 참여에 기쁨을 표하며 지속적인 지역 사회 기여를 약속했다. 광주 사랑의 열매는 첫 참여 기업에 감사하며, 나눔 문화 확산을 위한 홍보를 요청했다.",
    },
  },
  {
    title: "김원만 새한그룹 회장의 기탁식",
    description: "GIST 기술경영아카데미(GTMBA), 제 15기 입학식",
    details: {
      img: "/assets/Areal/news/n3.webp",
      link: "https://www.aipostkorea.com/news/articleView.html?idxno=6502",
      date: "2025년 03월 06일 (목)",
      text: "새한그룹 김원만 회장은 GIST 기술경영아카데미(GTMBA) 제15기 입학식에서 발전기금 1,000만 원을 기탁했다. 이 기금은 지역과의 상생 발전을 위해 사용될 예정이다. 김 회장은 인사말을 통해 GIST가 세계적 교육기관으로 도약하고 지역 경제발전에 기여하길 기대한다고 밝혔다. 새한그룹은 백색가전과 자동차부품 플라스틱 제조 전문기업으로 지역 산업 발전에 기여하고 있다.",
    },
  },
  {
    title: "아너 소사이어티 가입",
    description: "김원만 (유)새한플러스 회장, 광주 181호 아너 소사이어티 가입",
    details: {
      img: "/assets/Areal/news/n1.webp",
      link: "https://www.namdonews.com/news/articleView.html?idxno=802814",
      date: "2024년 12월 17일 (화)",
      text: "김원만 (유)새한플러스 회장이 사회복지공동모금회의 고액 기부자 모임인 ‘아너 소사이어티’에 가입하며 광주 지역 181번째 회원이 되었다. 전자부품 제조 기업을 운영하며 지역 사회 발전에 기여해온 그는, 이번 기부를 통해 나눔 문화를 확산하고 기업의 사회적 책임을 실천하겠다는 뜻을 밝혔다.",
    },
  },
  {
    title: "'산업체 명사 취업 특강' 개최",
    description: "전남도립대 미래자동차학과, 김원만 회장 초청 '명사 특강' 개최",
    details: {
      img: "/assets/Areal/news/n2.webp",
      link: "https://www.geconomy.co.kr/mobile/article.html?no=290916",
      date: "2024년 11월 05일 (화)",
      text: "전남도립대 미래자동차학과는 새한그룹 김원만 회장을 초청해 ‘산업체 명사 취업특강’을 개최했다. 김 회장은 ‘꿈을 향한 엔진을 켜라!’를 주제로 창업과 기업 경영 경험을 바탕으로 현실적인 조언을 전하며, 열정과 도전 정신의 중요성을 강조했다. 학생들은 이번 특강을 통해 취업과 창업에 대한 동기부여를 얻었으며, 학과 측은 앞으로도 다양한 지원 프로그램을 마련할 계획이다.",
    },
  },
];

const NewsPage = () => {
  return (
    <div>
      <div className="hero-section-news">
        <h1 className="hero-title-news">새한 보도자료</h1>
      </div>

      {NewsData.map((item, index) => (
        <div key={index} className="content-section-news">
          <div className="left-container-news">
            <div className="image-container-news">
              <a href={item.details.link} target="_blank" rel="noopener noreferrer">
                <img src={item.details.img} alt={item.title} className="news-image" />
              </a>
            </div>
          </div>

          <div className="info-container-news">
            <div className="text-container-news">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div className="content-container-news">
              <p>{item.details.text}</p>
              <p><strong>{item.details.date}</strong></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsPage;
