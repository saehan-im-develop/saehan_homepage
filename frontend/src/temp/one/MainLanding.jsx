import "./MainLanding.css";

const sections = [
  {
    title: "새한 플러스",
    desc: "첨단 소재와 화학 산업을 선도하는 새한 플러스입니다.",
    className: "mainlanding-section-web",
    bg: "/assets/temp/temp0..webp",  // ✅ 문자열 경로
  },
  {
    title: "새한 아이엠",
    desc: "스마트 기술 및 IT 솔루션을 제공하는 새한 아이엠입니다.",
    className: "mainlanding-section-design",
    bg: "/assets/temp/temp1..webp",
  },
  {
    title: "새한 하이테크",
    desc: "혁신적인 고기능성 소재와 친환경 솔루션의 새한 하이테크입니다.",
    className: "mainlanding-section-ai",
    bg: "/assets/temp/temp2..webp",
  },
  {
    title: "SM 케미칼",
    desc: "정밀화학과 친환경 화학소재의 미래를 여는 SM 케미칼입니다.",
    className: "mainlanding-section-biz",
    bg: "/assets/temp/temp3..webp",
  },
];

export default function MainLanding() {
  return (
    <div className="mainlanding-root">
      <aside className="mainlanding-aside">
        <div className="mainlanding-title">
          <div className="mainlanding-ko-title">새한 그룹</div>
          <div className="mainlanding-en-title">Opensource for Your Tomorrow</div>
        </div>
      </aside>
      <main className="mainlanding-main">
        {sections.map((section, idx) => (
          <section
            key={idx}
            className={`mainlanding-section ${section.className}`}
          >
            <div
              className="mainlanding-bgimg"
              style={{ backgroundImage: `url(${section.bg})` }}
            />
            <div className="mainlanding-section-content">
              <h2>{section.title}</h2>
              <p>{section.desc}</p>
            </div>
          </section>
        ))}
      </main>
      <div className="mainlanding-float">
        <button className="mainlanding-float-btn it-btn">IT 기술<br />브로슈어</button>
        <button className="mainlanding-float-btn design-btn">디자인<br />브로슈어</button>
      </div>
    </div>
  );
}
