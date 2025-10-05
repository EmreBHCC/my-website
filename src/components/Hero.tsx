import { Github, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scaleIn, staggerContainer } from "../utils/motion";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/EmreBHCC",
      hover: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/emre_bahceci",
      hover: "hover:text-pink-600 dark:hover:text-pink-400",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/emrebahceci/",
      hover: "hover:text-blue-700 dark:hover:text-blue-400",
    },
  ];

  return (
    <motion.section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16 transition-colors duration-300 dark:from-gray-900 dark:via-gray-950 dark:to-black"
      initial="hidden"
      animate="visible"
      variants={staggerContainer(0.18, 0.1)}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-blue-300/40 dark:bg-blue-500/20" />
        <div className="absolute right-1/4 top-1/3 h-80 w-80 rounded-full bg-indigo-300/30 dark:bg-indigo-500/10" />
        <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-purple-200/30 dark:bg-purple-500/10" />
      </motion.div>

      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div className="relative z-10 space-y-8 text-center lg:text-left" variants={fadeIn()}>
          <motion.div className="space-y-4" variants={fadeInUp(0.05)}>
            <motion.span
              className="inline-flex items-center space-x-3 rounded-full bg-white/70 px-5 py-2 text-sm font-medium text-blue-700 shadow-lg shadow-blue-100/80 backdrop-blur-sm dark:bg-slate-900/70 dark:text-blue-200 dark:shadow-blue-900/40"
              variants={scaleIn(0.1, 0.8)}
            >
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              <span>Bilgisayar mühendisliği öğrencisi</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </motion.span>

            <motion.h1
              className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white"
              variants={fadeInUp(0.15)}
            >
              Merhaba, ben{" "}
              <motion.span
                className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                variants={fadeInUp(0.25)}
              >
                Emre Bahçeci
              </motion.span>
            </motion.h1>
            <motion.p
              className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-300 lg:mx-0"
              variants={fadeInUp(0.3)}
            >
              Bilgisayar mühendisliği öğrencisi olarak yapay zeka, bilgisayarla görme ve mobil uygulama geliştirme alanlarında güçlü bir meraka sahibim. Gerçek dünya problemlerini işlevsel yazılım çözümlerine dönüştürmeyi ve üretken ekiplerle birlikte çalışmayı seviyorum.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 lg:justify-start"
            variants={staggerContainer(0.12, 0.35)}
          >
            <motion.button
              onClick={() => scrollToSection("projects")}
              className="rounded-lg bg-blue-600 px-8 py-3 font-medium text-white shadow-[0_0_26px_rgba(59,130,246,0.4)] transition-transform duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-[0_0_34px_rgba(59,130,246,0.55)] dark:bg-blue-500 dark:hover:bg-blue-400"
              type="button"
              variants={scaleIn(0.05)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Projelerimi İncele
            </motion.button>
            <motion.a
              href="/18.09.25IMG.pdf"
              download
              className="rounded-lg border border-blue-600 px-8 py-3 font-medium text-blue-600 shadow-[0_0_24px_rgba(59,130,246,0.28)] transition-transform duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-[0_0_32px_rgba(59,130,246,0.45)] dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-500/10"
              variants={scaleIn(0.15)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              CV İndir
            </motion.a>
          </motion.div>

          <motion.div
            className="flex justify-center gap-4 lg:justify-start"
            variants={staggerContainer(0.1, 0.55)}
          >
            {socialLinks.map(({ icon: Icon, href, hover }, index) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center rounded-xl bg-slate-100/80 p-3 text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-slate-800 dark:text-slate-300 ${hover}`}
                variants={scaleIn(0.05 * index)}
                whileHover={{ y: -4 }}
              >
                <Icon size={26} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
