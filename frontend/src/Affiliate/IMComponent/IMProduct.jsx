import React, { useEffect, useRef, useState } from "react";
import "../IMComponent/IMProduct.css";
import img1 from "@/assets/aff/ai9.png"; // 임시 이미지
import img2 from "@/assets/aff/a13.jpg"; // 웹 페에지 제작
import img3 from "@/assets/aff/a14.jpg"; // 헬스 케어 이미지
import img4 from "@/assets/aff/a15.jpg"; // 헬스 케어 이미지

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
    image: img1,
    link: "https://zelkovai.com",
    status: "ready",      // <-- 이미 오픈
  },
  {
    name: "웹 페이지 제작 서비스",
    engName: "Professional Web Development Service",
    description: (
      <>
        맞춤형 반응형 웹사이트, 기업·개인 포트폴리오, 쇼핑몰, 랜딩페이지 등<br />
        고객 니즈에 맞춘 다양한 웹 제작 서비스를 제공합니다.
      </>
    ),
    category: "IT 서비스 / 웹개발",
    image: img2,
    link: "",
    status: "upcoming",   // <-- 진행 예정
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
    image: img3,
    link: "",
    status: "upcoming",   // <-- 진행 예정
  },
  {
    name: "스마트 드론 사업",
    engName: "Smart Drone Business",
    description: (
      <>
        드론 기반 농업·산업 데이터 수집, 영상 촬영, 정밀 제어 솔루션 등<br />
        다양한 드론 응용 서비스와 하드웨어·소프트웨어를 제공합니다.
      </>
    ),
    category: "드론 / 영상 분석",
    image: img4,
    link: "",
    status: "upcoming",   // <-- 진행 예정
  },
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
