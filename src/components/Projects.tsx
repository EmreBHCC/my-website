import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import { Calendar, ExternalLink, Target } from "lucide-react";
import { fadeIn, fadeInUp, scaleIn, staggerContainer, viewportOnce } from "../utils/motion";

const Projects = () => {
  const projects = [
    {
      title: "VisionaryMockUP",
      period: "Kasım 2023 - Şubat 2024",
      description:
        "YOLO kullanarak canlı video akışında t-shirt tespit eden ve önceden tasarlanmış grafikleri otomatik olarak üzerine yerleştiren gerçek zamanlı bilgisayarla görme sistemi.",
      technologies: ["YOLO", "OpenCV", "Python", "Roboflow", "Computer Vision"],
      highlights: [
        "Roboflow ile özel t-shirt veri seti toplama ve etiketleme",
        "YOLOv8 modeli ile gerçek zamanlı nesne tespiti",
        "OpenCV ile geometrik dönüşüm ve perspektif düzeltme",
        "Dinamik grafik bindirme altyapısı geliştirme",
      ],
    },
    {
      title: "Image Style Transfer",
      period: "Nisan 2024 - Temmuz 2024",
      description:
        "Neural style transfer tekniği ile referans görsellerin artistik stilini statik galeri görsellerine veya canlı kamera görüntülerine aktaran AI tabanlı görüntü işleme uygulaması.",
      technologies: ["PyTorch", "CNN", "VGG Architecture", "OpenCV", "PIL", "NumPy", "Matplotlib"],
      highlights: [
        "Önceden eğitilmiş VGG tabanlı CNN mimarisi kullanımı",
        "Canlı kamera desteği ve statik görsel işleme",
        "Çoklu stil girişi ve ölçeklenebilir çözünürlük desteği",
        "PyTorch ile model tanımlama ve optimizasyon",
      ],
    },
    {
      title: "DersAI",
      period: "Şubat 2025 - Haziran 2025",
      description:
        "Öğrencilerin ders materyallerini dijitalleştirerek öğrenme verimliliğini artırmayı hedefleyen akıllı mobil uygulama. OCR ve yapay zeka kullanarak metin çıkarımı ve düzenleme yapıyor.",
      technologies: ["Flutter", "Dart", "Firebase", "OCR", "AI API", "Firestore"],
      highlights: [
        "Çapraz platform Flutter geliştirme",
        "Firebase Authentication ve Firestore entegrasyonu",
        "OCR ile metin çıkarımı ve yapay zeka destekli düzenleme",
        "Ses girişi ile not alma özelliği",
        "Akıllı içerik sınıflandırma sistemi",
      ],
    },
  ];

  return (
    <motion.section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/70 to-indigo-50/40 py-20 transition-colors duration-300 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeIn()}
    >
      <AnimatedBackground position="absolute" variant="section" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="mb-16 text-center" variants={fadeInUp(0.05)}>
          <motion.h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white" variants={fadeInUp(0.15)}>
            Projeler
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300"
            variants={fadeInUp(0.25)}
          >
            AI ve mobil uygulama geliştirme alanlarında hayata geçirdiğim öne çıkan projeler.
          </motion.p>
        </motion.div>

        <motion.div className="space-y-8" variants={staggerContainer(0.16, 0.2)}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group rounded-2xl border border-indigo-100/60 bg-white/80 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/60"
              variants={scaleIn(0.14 * index)}
              whileHover={{ translateY: -12 }}
            >
              <motion.div className="grid gap-8 lg:grid-cols-3" variants={staggerContainer(0.12)}>
                <motion.div className="space-y-4 lg:col-span-2" variants={fadeInUp(0.1)}>
                  <div className="flex flex-wrap items-center gap-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{project.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <Calendar size={16} />
                      <span>{project.period}</span>
                    </div>
                  </div>

                  <p className="text-slate-700 leading-relaxed dark:text-slate-300">{project.description}</p>

                  <motion.div className="space-y-3" variants={staggerContainer(0.08)}>
                    <motion.h4 className="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-100" variants={fadeInUp(0.1)}>
                      <Target size={18} />
                      <span>Temel Özellikler</span>
                    </motion.h4>
                    <motion.ul className="space-y-2" variants={staggerContainer(0.06)}>
                      {project.highlights.map((highlight) => (
                        <motion.li key={highlight} className="flex items-start gap-2" variants={fadeInUp(0.04)}>
                          <div className="mt-2 h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                          <span className="text-slate-600 dark:text-slate-300">{highlight}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </motion.div>

                <motion.div className="space-y-4" variants={fadeInUp(0.12)}>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Kullanılan Teknolojiler</h4>
                  <motion.div className="flex flex-wrap gap-2" variants={staggerContainer(0.06)}>
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className="rounded-full bg-blue-100/80 px-3 py-1 text-sm font-medium text-blue-800 transition-all duration-300 group-hover:bg-blue-600/10 dark:bg-blue-500/15 dark:text-blue-200"
                        variants={fadeInUp(0.02)}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mt-12 text-center" variants={fadeInUp(0.4)}>
          <motion.a
            href="https://github.com/EmreBHCC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-white shadow-lg shadow-gray-900/30 transition-transform duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-gray-900/50 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
          >
            <ExternalLink size={20} />
            <span>GitHub'da Daha Fazla Proje</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
