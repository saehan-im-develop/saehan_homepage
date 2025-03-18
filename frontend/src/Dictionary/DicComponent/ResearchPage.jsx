import React from "react";
import "../DicCssFile/ResearchPage.css"; // 스타일 분리

// 인증서 이미지 경로
import docu1 from "@/assets/Areal/devDocu/globalDoc.png";
import docu2 from "@/assets/Areal/devDocu/highdev.png";
import docu3 from "@/assets/Areal/devDocu/highDoc.png";
import docu4 from "@/assets/Areal/devDocu/plusdev.png";
import docu5 from "@/assets/Areal/devDocu/plusDoc.png";

import root1 from "@/assets/Areal/devDocu/plusroot.png";
import root2 from "@/assets/Areal/devDocu/globalroot.png";
import root3 from "@/assets/Areal/devDocu/highroot.png";

import qm1 from "@/assets/Areal/devDocu/plusKS.png";
import qm2 from "@/assets/Areal/devDocu/globalKS.png";
import qm3 from "@/assets/Areal/devDocu/highKS.png";

// 인증서 데이터 배열
const DocuData = [
  { details: { img: docu1, date: "2024/12/17 TUE" } },
  { details: { img: docu2, date: "2024/11/05 TUE" } },
  { details: { img: docu3, date: "2025/03/06 THU" } },
  { details: { img: docu4, date: "2025/03/06 THU" } },
  { details: { img: docu5, date: "2025/03/06 THU" } },
];

const RootData = [
  { details: { img: root1, date: "2025/04/10 MON" } },
  { details: { img: root2, date: "2025/04/15 FRI" } },
  { details: { img: root3, date: "2025/04/20 WED" } },
];

const QMData = [
  { details: { img: qm1, date: "2025/05/01 WED" } },
  { details: { img: qm2, date: "2025/05/10 SAT" } },
  { details: { img: qm3, date: "2025/05/15 TUE" } },
];

const ResearchPage = () => {
  const devCertifications = [DocuData[1], DocuData[3]];
  const expertCertifications = [DocuData[0], DocuData[2], DocuData[4]];
  const rootCertifications = [RootData[0], RootData[1], RootData[2]];
  const qmCertifications = [QMData[0], QMData[1], QMData[2]];

  return (
    <div>
      <div className="hero-section-docu">
        <h1 className="hero-title-docu">인증 문서</h1>
      </div>

      {/* 연구개발 인증서 */}
      <h2 className="section-title">연구개발 인증서</h2>
      <div className="content-section-certify">
        {devCertifications.map((item, index) => (
          <div key={index} className="certify-card">
            <img src={item.details.img} alt={`dev-cert-${index}`} className="certify-image" />
          </div>
        ))}
      </div>

      {/* 전문기업 확인서 */}
      <h2 className="section-title">전문기업 확인서</h2>
      <div className="content-section-certify expert">
        {expertCertifications.map((item, index) => (
          <div key={index} className="certify-card">
            <img src={item.details.img} alt={`expert-cert-${index}`} className="certify-image" />
          </div>
        ))}
      </div>

      {/* 뿌리기업 확인서 */}
      <h2 className="section-title">뿌리기업 확인서</h2>
      <div className="content-section-certify root">
        {rootCertifications.map((item, index) => (
          <div key={index} className="certify-card">
            <img src={item.details.img} alt={`root-cert-${index}`} className="certify-image" />
          </div>
        ))}
      </div>

      {/* QM 최초인증서 */}
      <h2 className="section-title">QM 최초인증서</h2>
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
