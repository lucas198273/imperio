import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // Ícone bonito, você pode trocar

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
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
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition duration-300"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={24} />
      </button>
    )
  );
};

export default ScrollToTopButton;
