import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { fadeInUp, scaleIn, staggerContainer } from "../utils/motion";

type Theme = "light" | "dark";

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

const navItems = [
  { label: "Anasayfa", id: "hero" },
  { label: "Hakkımda", id: "about" },
  { label: "Yetenekler", id: "skills" },
  { label: "Projeler", id: "projects" },
  { label: "Deneyim", id: "experience" },
  { label: "İletişim", id: "contact" },
];

const headerVariants = {
  hidden: { y: -32, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      ease: [0.25, 0.75, 0.5, 1],
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const Header = ({ theme, onToggleTheme }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-lg backdrop-blur-sm dark:bg-gray-900/95"
          : "bg-transparent"
      }`}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.button
          className="text-xl font-bold transition-all duration-300 hover:text-blue-600 hover:drop-shadow-sm dark:hover:text-blue-400"
          onClick={() => scrollToSection("hero")}
          type="button"
          variants={scaleIn(0.05)}
          whileHover={{ y: -2 }}
        >
          Emre Bahçeci
        </motion.button>

        <motion.nav
          className="hidden items-center space-x-8 md:flex"
          variants={staggerContainer(0.08, 0.2)}
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-700 transition-colors duration-300 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
              type="button"
              variants={fadeInUp(0.05 * index)}
              whileHover={{ y: -2 }}
            >
              {item.label}
            </motion.button>
          ))}
        </motion.nav>

        <div className="flex items-center gap-4">
          <motion.button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full border border-gray-200 p-2 transition-all duration-300 hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-200 dark:hover:border-blue-400 dark:hover:text-blue-400"
            aria-label="Tema değiştir"
            variants={scaleIn(0.15)}
            whileHover={{ rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
          <motion.button
            className="text-gray-700 transition-colors duration-300 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            aria-label="Menüyü aç/kapat"
            variants={scaleIn(0.2)}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute left-0 right-0 top-16 border-t border-gray-100 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900 md:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <motion.nav className="space-y-2 px-4 py-4" variants={staggerContainer(0.08)}>
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full rounded-lg px-4 py-2 text-left text-gray-700 transition-colors duration-300 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-blue-400"
                  type="button"
                  variants={fadeInUp(0.04 * index)}
                  whileHover={{ x: 6 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
