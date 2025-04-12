import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react"; // Sử dụng icon từ lucide-react

export default function ScrollToTopButton() {
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-50 rounded-full p-3 hover:bg-gray-300 hover:scale-110 transition duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#f1e0e5",
      }}
    >
      <ChevronUp size={24} className="text-white" />
    </button>
  );
}
