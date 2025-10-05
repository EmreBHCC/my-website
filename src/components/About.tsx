import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import { fadeIn, fadeInUp, scaleIn, staggerContainer, viewportOnce } from "../utils/motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/60 to-indigo-50/40 py-20 transition-colors duration-300 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeIn()}
    >
      <AnimatedBackground position="absolute" variant="section" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="mb-16 text-center" variants={fadeInUp(0.05)}>
          <motion.h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white" variants={fadeInUp(0.15)}>
            Hakkımda
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300"
            variants={fadeInUp(0.25)}
          >
            Çözüm odaklı yapım ve sürekli öğrenme tutkumla, bilgisayar mühendisliği alanında derinleşmek için her günü
            fırsata dönüştürüyorum.
          </motion.p>
        </motion.div>

        <motion.div className="grid items-center gap-12 lg:grid-cols-2" variants={staggerContainer(0.12, 0.2)}>
          <motion.div className="space-y-6" variants={fadeInUp(0.2)}>
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              Yapay zeka, bilgisayarla görme ve mobil uygulama geliştirme konularına ilgi duyan bir bilgisayar
              mühendisliği öğrencisiyim. Gerçek dünya problemlerini işlevsel ve estetik yazılımlara dönüştürmekten,
              ekiplerle birlikte üretmekten ve bilgi paylaşımını merkeze alan topluluklar oluşturmaktan keyif alıyorum.
            </p>
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              Sürekli gelişim odağıyla yalnızca etkileyici değil, aynı zamanda sürdürülebilir çözümler üretmeyi
              amaçlıyorum. Yeni teknolojileri keşfetmek, öğrendiklerimi projelere aktarmak ve bu süreçte çevremdekilere
              ilham vermek için çalışıyorum.
            </p>
          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer(0.14, 0.25)}>
            <motion.div
              className="rounded-2xl border border-blue-100/60 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/60"
              variants={scaleIn(0.15)}
              whileHover={{ translateY: -12 }}
            >
              <div className="mb-4 flex items-center space-x-3">
                <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Eğitim</h3>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-gray-900 dark:text-gray-100">Bilecik Şeyh Edebali Üniversitesi</p>
                <p className="text-slate-600 dark:text-slate-300">Bilgisayar Mühendisliği</p>
                <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                  <Calendar size={16} />
                  <span>2021 - Devam Ediyor</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-blue-100/60 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/60"
              variants={scaleIn(0.2)}
              whileHover={{ translateY: -12 }}
            >
              <div className="mb-4 flex items-center space-x-3">
                <MapPin className="text-blue-600 dark:text-blue-400" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Konum</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300">Kayseri, Türkiye</p>
            </motion.div>

            <motion.div
              className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white shadow-lg shadow-blue-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/60 dark:from-blue-500 dark:to-indigo-500"
              variants={scaleIn(0.25)}
              whileHover={{ translateY: -12 }}
            >
              <h3 className="mb-2 text-xl font-semibold">Çalışma Durumu</h3>
              <p className="text-blue-100/90 dark:text-blue-50">
                Aktif olarak yazılım geliştirme, yapay zeka/makine öğrenmesi ve mobil uygulama alanlarında iş fırsatları
                arıyorum.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
