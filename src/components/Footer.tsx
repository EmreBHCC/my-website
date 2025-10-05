import { motion } from "framer-motion";
import { Code2, Heart } from "lucide-react";
import { fadeIn, fadeInUp, staggerContainer, viewportOnce } from "../utils/motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { label: "Hakkımda", href: "#about" },
    { label: "Yetenekler", href: "#skills" },
    { label: "Projeler", href: "#projects" },
    { label: "İletişim", href: "#contact" },
  ];

  return (
    <motion.footer
      className="relative overflow-hidden bg-gray-900 py-12 text-white transition-colors duration-300 dark:bg-black dark:text-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeIn()}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="grid gap-8 md:grid-cols-3" variants={staggerContainer(0.12)}>
          <motion.div className="space-y-4" variants={fadeInUp(0.05)}>
            <h3 className="text-xl font-bold">Emre Bahçeci</h3>
            <p className="text-gray-400 dark:text-gray-400">
              Bilgisayar mühendisliği öğrencisi ve yazılım geliştiricisi. AI, bilgisayarlı görü ve mobil uygulama
              geliştirme alanlarında kendini geliştiriyor.
            </p>
          </motion.div>

          <motion.div className="space-y-4" variants={fadeInUp(0.1)}>
            <h4 className="text-lg font-semibold">Hızlı Linkler</h4>
            <motion.div className="space-y-2" variants={staggerContainer(0.08)}>
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 transition-colors duration-300 hover:text-white"
                  variants={fadeInUp(0.05 * index)}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="space-y-4" variants={fadeInUp(0.15)}>
            <h4 className="text-lg font-semibold">İletişim</h4>
            <div className="space-y-2 text-gray-400 dark:text-gray-400">
              <p>emrebahceci38@gmail.com</p>
              <p>+90 536 327 93 51</p>
              <p>Kayseri, Türkiye</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="mt-12 border-t border-gray-800 pt-8" variants={fadeInUp(0.2)}>
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="flex items-center space-x-2 text-gray-400 dark:text-gray-400">
              <span>© {currentYear} Emre Bahçeci. Tüm hakları saklıdır.</span>
            </p>
            <motion.p className="flex items-center space-x-2 text-gray-400 dark:text-gray-400" variants={fadeInUp(0.25)}>
              <span>Severek yapıldı</span>
              <Heart size={16} className="text-red-500" />
              <span>ve</span>
              <Code2 size={16} className="text-blue-400" />
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
