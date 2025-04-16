import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 모바일에서만 스크롤 부드럽게 (window.innerWidth 기준)
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      window.scrollTo({ top: 0, behavior: "smooth" }); // 부드럽게
    } else {
      window.scrollTo(0, 0); // 기존 방식 (웹 유지)
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
