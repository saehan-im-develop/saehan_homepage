import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./mainComponent/ScrollToTop"; // ✅ 정확한 경로명
import Header from "./mainComponent/Header";
import MainSection from "./mainComponent/MainSection";
import Footer from "./mainComponent/Footer";
import SaehanPlus from "./Affiliate/plusComponent/SaehanPlus";
import Hightech from "./Affiliate/HightechComponent/SaehanHightech";
import SaehanIM from "./Affiliate/IMComponent/SaehanIM";
import SaehanGlobal from "./Affiliate/GlobalComponent/SaehanGlobal";
import CEOMain from "./Introduce/CEO/CEOMain";
import HistoryContainer from "./Introduce/History/History";
import Network from "./Introduce/Network/Network";
import VisionMain from "./Vision/VisionComponent/VisionMain";
import BusinessSection from "./Buisness/BizPart/BusinessSection";
import TechMain from "./Buisness/TechPart/TechMain";
import SolutionsMain from "./Buisness/SolutionsPart/SolutionsMain";
import ScrollToTopButton from "./mainComponent/ScrollToTopButton";
import TechData from "./Dictionary/DicComponent/TechData";
import ResearchPage from "./Dictionary/DicComponent/ResearchPage";
import News from "./Dictionary/DicComponent/News";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ 페이지 전환 시 스크롤 상단 이동 */}
      <Header />
      <div className="app-container">
        <main>
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/plus" element={<SaehanPlus />} />
            <Route path="/hightech" element={<Hightech />} />
            <Route path="/im" element={<SaehanIM />} />
            <Route path="/global" element={<SaehanGlobal />} />
            <Route path="/ceo" element={<CEOMain />} />
            <Route path="/history" element={<HistoryContainer />} />
            <Route path="/network" element={<Network />} />
            <Route path="/vision" element={<VisionMain />} />
            {/* <Route path="/biz-area" element={<BusinessSection />} /> */}
            <Route path="/tech" element={<TechMain />} />
            <Route path="/solutions" element={<SolutionsMain />} />
            <Route path="/tech-data" element={<TechData />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
        <ScrollToTopButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;