import React from "react";
import "../DicCssFile/ResearchPage.css"; // 스타일 분리

// 인증서 데이터 배열
const DocuData = [
  { details: { img: "/assets/Areal/devDocu/globalDoc.webp", date: "2024/12/17 TUE" } },
  { details: { img: "/assets/Areal/devDocu/highdev.webp", date: "2024/11/05 TUE" } },
  { details: { img: "/assets/Areal/devDocu/highDoc.webp", date: "2025/03/06 THU" } },
  { details: { img: "/assets/Areal/devDocu/plusdev.webp", date: "2025/03/06 THU" } },
  { details: { img: "/assets/Areal/devDocu/plusDoc.webp", date: "2025/03/06 THU" } },
];

const RootData = [
  { details: { img: "/assets/Areal/devDocu/plusroot.webp", date: "2025/04/10 MON" } },
  { details: { img: "/assets/Areal/devDocu/globalroot.webp", date: "2025/04/15 FRI" } },
  { details: { img: "/assets/Areal/devDocu/highroot.webp", date: "2025/04/20 WED" } },
];

const QMData = [
  { details: { img: "/assets/Areal/devDocu/plusKS.webp", date: "2025/05/01 WED" } },
  { details: { img: "/assets/Areal/devDocu/globalKS.webp", date: "2025/05/10 SAT" } },
  { details: { img: "/assets/Areal/devDocu/highKS.webp", date: "2025/05/15 TUE" } },
];

const ResearchPage = () => {
  const devCertifications = [DocuData[1], DocuData[3]];
  const expertCertifications = [DocuData[0], DocuData[2], DocuData[4]];
  const rootCertifications = [...RootData];
  const qmCertifications = [...QMData];

  return (
    <div>
      <div className="hero-section-docu">
        <h1 className="hero-title-docu">인증 문서</h1> 
      </div>

      {/* 연구개발 인증서 */}
      <h2 className="section-title-re">연구개발 인증서</h2>
      <div className="content-section-certify">
        {devCertifications.map((item, index) => (
          <div key={index} className="certify-card">
            <img src={item.details.img} alt={`dev-cert-${index}`} className="certify-image" />
          </div>
        ))}
      </div>

      {/* 전문기업 확인서 */}
      <h2 className="section-title-re">전문기업 확인서</h2>
      <div className="content-section-certify expert">
        {expertCertifications.map((item, index) => (
          <div key={index} className="certify-card">
            <img src={item.details.img} alt={`expert-cert-${index}`} className="certify-image" />
          </div>
        ))}
      </div>

      {/* 뿌리기업 확인서 */}
      <h2 className="section-title-re">뿌리기업 확인서</h2>
      <div className="content-section-certify root">
        {rootCertifications.map((item, index) => (
          <div key={index} className="certify-card">
            <img src={item.details.img} alt={`root-cert-${index}`} className="certify-image" />
          </div>
        ))}
      </div>

      {/* QM 최초인증서 */}
      <h2 className="section-title-re">QM 최초인증서</h2>
      <div className="content-section-certify qm">
        {qmCertifications.map((item, index) => (
          <div key={index} className="certify-card">
            <img src={item.details.img} alt={`qm-cert-${index}`} className="certify-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPage;
