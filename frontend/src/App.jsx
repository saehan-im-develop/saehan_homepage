import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./mainComponent/Header"
import MainSection from "./mainComponent/MainSection";
import Footer from "./mainComponent/Footer";
import SaehanPlus from "./Affiliate/plusComponent/SaehanPlus"
import Hightech from "./Affiliate/HightechComponent/SaehanHightech"
import SaehanIM from "./Affiliate/IMComponent/SaehanIM";
import SaehanGlobal from "./Affiliate/GlobalComponent/SaehanGlobal";
import "./App.css";

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/plus" element={<SaehanPlus />} />
        <Route path="/hightech" element={<Hightech />} />
        <Route path="/im" element={<SaehanIM />} />
        <Route path="/global" element={<SaehanGlobal/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
