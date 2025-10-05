import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import { Brain, Code2, Database, Monitor, Smartphone, Wrench } from "lucide-react";
import { fadeIn, fadeInUp, scaleIn, staggerContainer, viewportOnce } from "../utils/motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programlama Dilleri",
      icon: Code2,
      skills: ["C/C++/C#", "Java", "Python", "JavaScript", "Dart", "SQL", "HTML/CSS", "mikroC"],
      color: "blue",
    },
    {
      title: "Framework & Teknolojiler",
      icon: Smartphone,
      skills: ["Flutter", "Bootstrap", "TensorFlow", "OpenCV", "PyTorch", "Firebase", "Unreal Engine (Temel)"],
      color: "indigo",
    },
    {
      title: "Yapay Zeka & ML",
      icon: Brain,
      skills: ["Computer Vision", "YOLO", "Neural Style Transfer", "CNN Architectures", "Object Detection", "Image Processing"],
      color: "purple",
    },
    {
      title: "Veritabanı & Backend",
      icon: Database,
      skills: ["Firebase Firestore", "SQL Database Design", "RESTful APIs", "Cloud Storage"],
      color: "green",
    },
    {
      title: "Geliştirme Araçları",
      icon: Monitor,
      skills: ["Git/GitHub", "VS Code", "Android Studio", "Proteus", "Roboflow"],
      color: "orange",
    },
    {
      title: "Özel Yetenekler",
      icon: Wrench,
      skills: ["OOP", "Takım Çalışması", "Problem Çözme", "Proje Yönetimi", "Mentorluk"],
      color: "teal",
    },
  ];

  const colorMap: Record<string, string> = {
    blue: "from-blue-500/90 to-blue-600/90",
    indigo: "from-indigo-500/90 to-indigo-600/90",
    purple: "from-purple-500/90 to-purple-600/90",
    green: "from-green-500/90 to-green-600/90",
    orange: "from-orange-500/90 to-orange-600/90",
    teal: "from-teal-500/90 to-teal-600/90",
  };

  const getColorClasses = (color: string) => colorMap[color] || colorMap.blue;

  return (
    <motion.section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/70 py-20 transition-colors duration-300 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeIn()}
    >
      <AnimatedBackground position="absolute" variant="section" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="mb-16 text-center" variants={fadeInUp(0.05)}>
          <motion.h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white" variants={fadeInUp(0.15)}>
            Teknik Yetenekler
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300"
            variants={fadeInUp(0.25)}
          >
            Farklı programlama dilleri, framework'ler ve teknolojilerde edinilmiş deneyimimi sürekli yeni projelerle
            güçlendiriyorum.
          </motion.p>
        </motion.div>

        <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" variants={staggerContainer(0.12, 0.2)}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="rounded-2xl border border-blue-100/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/60"
              variants={scaleIn(0.12 * index)}
              whileHover={{ translateY: -12 }}
            >
              <div className="mb-4 flex items-center space-x-3">
                <motion.div
                  className={`rounded-lg bg-gradient-to-r ${getColorClasses(category.color)} p-3 text-white shadow-sm`}
                  variants={scaleIn(0.05)}
                  whileHover={{ rotate: 8 }}
                >
                  <category.icon size={24} />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{category.title}</h3>
              </div>
              <motion.div className="space-y-2" variants={staggerContainer(0.08)}>
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="rounded-lg bg-slate-50/90 px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-blue-50/90 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:bg-slate-800"
                    variants={fadeInUp(0.03)}
                    whileHover={{ x: 6 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 rounded-2xl border border-blue-100/50 bg-white/80 p-8 shadow-sm backdrop-blur-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/60"
          variants={scaleIn(0.25)}
        >
          <motion.h3 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-gray-100" variants={fadeInUp(0.05)}>
            Dil Yetkinlikleri
          </motion.h3>
          <motion.div className="grid gap-8 md:grid-cols-2" variants={staggerContainer(0.12)}>
            <motion.div className="space-y-4" variants={fadeInUp(0.1)}>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Türkçe</h4>
              <div className="h-3 w-full rounded-full bg-slate-200/80 dark:bg-slate-800">
                <motion.div
                  className="h-3 rounded-full bg-gradient-to-r from-green-500 to-green-600"
                  style={{ width: "100%" }}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                />
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Ana dil</p>
            </motion.div>
            <motion.div className="space-y-4" variants={fadeInUp(0.15)}>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">İngilizce</h4>
              <div className="h-3 w-full rounded-full bg-slate-200/80 dark:bg-slate-800">
                <motion.div
                  className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                  style={{ width: "70%" }}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
                />
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">B1 Seviye (Okuma, Yazma, Dinleme)</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
