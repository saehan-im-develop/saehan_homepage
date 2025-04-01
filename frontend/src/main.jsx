import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css";

const Root = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    setTimeout(() => AOS.refresh(), 500); // 재감지
  }, []);

  return <App />;
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
