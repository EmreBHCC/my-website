import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Yukarı dön"
          className="fixed bottom-6 right-6 z-40 rounded-full bg-blue-600 p-3 text-white shadow-lg transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus:ring-blue-400"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.25, ease: [0.33, 1, 0.68, 1] }}
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
