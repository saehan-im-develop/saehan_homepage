import { useEffect, useState } from "react";
import "../mainCssFile/ScrollToTopButton.css"

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "50px",
        right: "30px",
        width: "50px",
        height: "50px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "bold",
        display: isVisible ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        transition: "all 0.3s ease-in-out",
      }}
      className="scroll-to-top"
    >
      UP
    </button>
  );
};

export default ScrollToTopButton;
