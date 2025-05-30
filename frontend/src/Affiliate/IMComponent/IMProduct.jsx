import { useEffect, useRef, useState } from "react";
import "../IMComponent/IMProduct.css";
// 임시 이미지
// 웹 페에지 제작
// 헬스 케어 이미지
// 헬스 케어 이미지

const products = [
  {
    name: "AI 기반 자동 문서 생성 플랫폼 (ZelKovai)",
    engName: "AI-Based Automatic Document Generation Platform (ZelKovai)",
    description: (
      <>
        ZelKovai는 LLM 기반 문서 자동화 솔루션입니다.<br />
        누구나 전문적인 문서를 쉽고 빠르게 생성하고, AI의 도움으로 문서 품질을 최적화할 수 있습니다.
      </>
    ),
    category: "문서 자동화 / AI 업무 지원",
    image: "/assets/aff/ai9.webp",
    link: "https://zelkovai.com",
    status: "ready",
  },
  {
    name: "홈 / 웹 페이지 제작 서비스",
    engName: "Professional Web Development Service",
    description: (
      <>
        맞춤형 반응형 웹사이트, 기업·개인 포트폴리오, 쇼핑몰, 랜딩페이지 등<br />
        고객 니즈에 맞춘 다양한 웹 제작 서비스를 제공합니다.
      </>
    ),
    category: "IT 서비스 / 웹개발",
    image: "/assets/aff/a13.webp",
    link: "",
    status: "upcoming",
  },
  {
    name: "헬스케어 IT 솔루션",
    engName: "Healthcare IT Solutions",
    description: (
      <>
        AI 기반 건강 데이터 분석, 모바일 헬스케어 앱, 진료·예약 관리 등<br />
        스마트 헬스케어 서비스로 건강한 삶을 지원합니다.
      </>
    ),
    category: "헬스케어 / 데이터 분석",
    image: "/assets/aff/a14.webp",
    link: "",
    status: "upcoming",
  },
  {
    name: "금융 교육용 AI 플랫폼",
    engName: "Educational AI Platform",
    description: (
      <>
        인공지능을 활용한 맞춤형 학습, 지능형 문제 추천,<br />
        학습 데이터 분석 등 다양한 교육 지원 서비스와<br />
        소프트웨어를 제공합니다.
      </>
    ),
    category: "교육 / 학습 지원",
    image: "/assets/aff/a15.webp", // 실제 교육용 AI 이미지 경로로 교체q
    link: "",
    status: "upcoming",
  }

];


function IMProduct() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  return (
    <div ref={ref} className={`im-product ${isVisible ? "im-fade-in" : ""}`}>
      <h2 className="im-product-title">새한아이엠 주요 개발</h2>
      <div className="im-product-list">
        {products.map((product, idx) => (
          <div key={idx} className="im-product-card">
            {/* 상태 뱃지 */}
            {product.status === "upcoming" && (
              <span className="im-badge-upcoming">진행 예정</span>
            )}
            {/* 이미지 */}
            <div className="im-card-image-wrap">
              <img src={product.image} alt={product.name} className="im-product-image" />
            </div>
            {/* 제목+영문명 */}
            <div className="im-card-title-wrap">
              <h3 className="im-product-name">{product.name}</h3>
              <div className="im-product-eng-name">{product.engName}</div>
            </div>
            {/* 설명 */}
            <div className="im-card-desc-wrap">
              <table className="im-info-table">
                <tbody>
                  <tr>
                    <td>{product.description}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* 카테고리+버튼 */}
            <div className="im-card-bottom-wrap">
              <div className="im-product-category">
                <strong>카테고리:</strong> {product.category}
              </div>
              {product.status === "ready" ? (
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="im-cta-button"
                  tabIndex={0}
                  aria-label={`${product.name} 더 알아보기`}
                >
                  더 알아보기
                  <span className="cta-arrow" aria-hidden="true">
                    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M5 12h14"></path>
                      <path d="M13 6l6 6-6 6"></path>
                    </svg>
                  </span>
                </a>
              ) : (
                <button className="im-cta-button im-cta-disabled" disabled tabIndex={-1}>
                  준비 중입니다
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IMProduct;
