// src/mainComponent/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // ✅ "instant" → "auto" 또는 "smooth"
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
