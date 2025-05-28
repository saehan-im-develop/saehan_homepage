import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./mainComponent/ScrollToTop";
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
import Story from "./Dictionary/DicComponent/Story";
import MainLanding from "./temp/one/MainLanding";
import "./App.css";

// ⭐ Router 내부에서 useLocation 사용
function AppContent() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname.startsWith("/test");

  return (
    <>
      <ScrollToTop />
      {!hideHeaderFooter && <Header />}
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
            <Route path="/story" element={<Story />} />
            {/* <Route path="/test" element={<MainLanding />} /> */}
          </Routes>
        </main>
        {!hideHeaderFooter && <ScrollToTopButton />}
        {!hideHeaderFooter && <Footer />}
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
