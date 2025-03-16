import React from "react";
import "../DicCssFile/ResearchPage.css"; // 스타일 분리
import docu1 from "@/assets/Areal/devDocu/globalDoc.png";
import docu2 from "@/assets/Areal/devDocu/highdev.png";
import docu3 from "@/assets/Areal/devDocu/highDoc.png";
import docu4 from "@/assets/Areal/devDocu/plusdev.png";
import docu5 from "@/assets/Areal/devDocu/plusDoc.png";

const DocuData = [
  {
    details: {
      img: docu1,
      date: "2024/12/17 TUE",
      
    },
  },
  {
    details: {
      img: docu2,
      date: "2024/11/05 TUE",
    },
  },
  {
    details: {
      img: docu3,
      date: "2025/03/06 THU",
    },
  },  {
    details: {
      img: docu4,
      date: "2025/03/06 THU",
    },
  },  {
    details: {
      img: docu5,
      date: "2025/03/06 THU",
    },
  },
];

const ResearchPage = () => {
  const devCertifications = [DocuData[1], DocuData[3]];
  const expertCertifications = [DocuData[0], DocuData[2], DocuData[4]];

  return (
    <div>
      <div className="hero-section-docu">
        <h1 className="hero-title-docu">증명 자료</h1>
      </div>

      {/* 연구개발 인증서 파트 */}
      <h2 className="section-title">연구개발 인증서</h2>
      {devCertifications.map((item, index) => (
        <div key={index} className="content-section-certify">
          <img src={item.details.img} alt={`dev-cert-${index}`} className="certify-image"/>
        </div>
      ))}

     

      {/* 전문기업 확인서 파트 */}
      <h2 className="section-title">전문기업 확인서</h2>
      {expertCertifications.map((item, index) => (
        <div key={index} className="content-section-certify">
          <img src={item.details.img} alt={`expert-cert-${index}`} className="certify-image"/>
        </div>
      ))}
    </div>
  );
};

export default ResearchPage;


