import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import { Briefcase, Calendar, ExternalLink, MapPin, Users } from "lucide-react";
import { fadeIn, fadeInUp, scaleIn, staggerContainer, viewportOnce } from "../utils/motion";

const Experience = () => {
  const experiences = [
    {
      title: "Öğrenci Personeli",
      company: "Bilecik Şeyh Edebali Üniversitesi - BT Departmanı",
      period: "Nisan 2025 - Haziran 2025",
      location: "Bilecik",
      type: "Kısa Dönem",
      description:
        "Kampüs genelinde kritik bilişim altyapısını desteklemek ve sürdürülebilir hale getirmek için teknik ekiple birlikte çalıştım.",
      achievements: [
        "Personel ve laboratuvar bilgisayarlarının grup halinde onarım ve bakım çalışmalarında yer aldım",
        "Sistem imajlama, formatlama ve işletim sistemi kurulumlarına dair sorunları teşhis edip çözdüm",
        "Gerekli ağ portlarını aktive ederek üniversitenin dahili sistemlerine entegrasyon sağladım",
        "Donanım değişimleri (RAM, SSD, güç kaynakları) ve çevre birimi kurulumları gerçekleştirdim",
        "Üniversite personeline teknik destek vererek sistem performansını iyileştirdim",
      ],
    },
    {
      title: "Stajyer",
      company: "4B Arıcılık Teknolojileri A.Ş.",
      period: "Temmuz 2025 - Ağustos 2025",
      location: "Bilecik",
      type: "Zorunlu Staj",
      description: "Birinci zorunlu staj programında endüstriyel deneyim kazandım.",
      achievements: [
        "Gerçek iş ortamında teknik becerilerimi geliştirdim",
        "Takım çalışması ve proje yönetimi deneyimi edindim",
        "Endüstriyel standartlar ve iş süreçlerini yakından gözlemledim",
      ],
    },
  ];

  const activities = [
    {
      title: "BBCLUB - Kurucu Üye",
      period: "Mayıs 2025 - Devam Ediyor",
      location: "Bilecik",
      description:
        "Bilgisayar mühendisliği öğrencilerini akran öğrenimi yoluyla güçlendirmeye odaklanan öğrenci liderliğindeki bir girişimin kurucu üyesiyim.",
      achievements: [
        "Öğrenciler arasında sürekli öğrenmeyi destekleyen sürdürülebilir bir mentorluk yapısı tasarladım",
        "Haftalık oturumlar, kodlama atölyeleri ve iş birliğine dayalı projeler organize ettim",
        "50'den fazla üyenin teknik ve akademik gelişimine katkı sağladım",
        "Büyüme odaklı ve kapsayıcı bir topluluk kültürü oluşturulmasına liderlik ettim",
      ],
      link: "https://bbclub.space",
    },
  ];

  return (
    <motion.section
      id="experience"
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
            Deneyim & Aktiviteler
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300"
            variants={fadeInUp(0.25)}
          >
            İş deneyimlerim ve topluluk çalışmalarındaki rollerim.
          </motion.p>
        </motion.div>

        <motion.div className="space-y-8" variants={staggerContainer(0.16, 0.2)}>
          <motion.div variants={fadeInUp(0.2)}>
            <motion.h3 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-gray-900 dark:text-gray-100" variants={fadeInUp(0.1)}>
              <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
              <span>İş Deneyimi</span>
            </motion.h3>
            <motion.div className="space-y-6" variants={staggerContainer(0.14)}>
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  className="rounded-2xl border border-blue-100/60 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/60"
                  variants={scaleIn(0.14 * index)}
                  whileHover={{ translateY: -12 }}
                >
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">{exp.title}</h4>
                      <p className="text-lg font-medium text-blue-600 dark:text-blue-400">{exp.company}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <span className="rounded-full bg-blue-100/80 px-2 py-1 text-xs text-blue-800 dark:bg-blue-500/15 dark:text-blue-200">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="mb-4 text-slate-700 dark:text-slate-300">{exp.description}</p>
                  <motion.ul className="space-y-2" variants={staggerContainer(0.06)}>
                    {exp.achievements.map((achievement) => (
                      <motion.li key={achievement} className="flex items-start gap-2" variants={fadeInUp(0.04)}>
                        <div className="mt-2 h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                        <span className="text-slate-600 dark:text-slate-300">{achievement}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp(0.3)}>
            <motion.h3 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-gray-900 dark:text-gray-100" variants={fadeInUp(0.1)}>
              <Users className="text-purple-600 dark:text-purple-400" size={24} />
              <span>Topluluk & Liderlik</span>
            </motion.h3>
            <motion.div className="space-y-6" variants={staggerContainer(0.14)}>
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.title}
                  className="rounded-2xl border border-purple-100/60 bg-gradient-to-r from-purple-50/80 to-indigo-50/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-purple-900/40 dark:from-purple-900/60 dark:to-indigo-900/60"
                  variants={scaleIn(0.14 * index)}
                  whileHover={{ translateY: -12 }}
                >
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">{activity.title}</h4>
                      <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{activity.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{activity.location}</span>
                        </div>
                      </div>
                    </div>
                    {activity.link && (
                      <motion.a
                        href={activity.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 transition-colors duration-300 hover:text-purple-700 dark:text-purple-300 dark:hover:text-purple-200"
                        variants={scaleIn(0.05)}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                  </div>
                  <p className="mb-4 text-slate-700 dark:text-slate-300">{activity.description}</p>
                  <motion.ul className="space-y-2" variants={staggerContainer(0.06)}>
                    {activity.achievements.map((achievement) => (
                      <motion.li key={achievement} className="flex items-start gap-2" variants={fadeInUp(0.04)}>
                        <div className="mt-2 h-2 w-2 rounded-full bg-purple-600 dark:bg-purple-400" />
                        <span className="text-slate-600 dark:text-slate-300">{achievement}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;


