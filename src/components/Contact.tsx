import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { fadeIn, fadeInUp, scaleIn, staggerContainer, viewportOnce } from "../utils/motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "E-posta",
      value: "emrebahceci38@gmail.com",
      href: "mailto:emrebahceci38@gmail.com",
    },
    {
      icon: Phone,
      label: "Telefon",
      value: "+90 536 327 93 51",
      href: "tel:+905363279351",
    },
    {
      icon: MapPin,
      label: "Konum",
      value: "Kayseri, Türkiye",
      href: "https://maps.google.com/?q=Kayseri,Turkey",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/EmreBHCC",
      hover: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/emre_bahceci",
      hover: "hover:text-pink-600 dark:hover:text-pink-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/emrebahceci/",
      hover: "hover:text-blue-700 dark:hover:text-blue-400",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 transition-colors duration-300 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeIn()}
    >
      <AnimatedBackground position="absolute" variant="section" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div className="mb-16 text-center" variants={fadeInUp(0.05)}>
          <motion.h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white" variants={fadeInUp(0.15)}>
            İletişim
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300"
            variants={fadeInUp(0.25)}
          >
            Benimle iletişime geçmek veya projelerim hakkında konuşmak için aşağıdaki kanalları kullanabilirsiniz.
          </motion.p>
        </motion.div>

        <motion.div className="grid gap-10 lg:grid-cols-2" variants={staggerContainer(0.18, 0.2)}>
          <motion.div
            className="rounded-2xl border border-blue-100/60 bg-white/80 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/60"
            variants={scaleIn(0.18)}
            whileHover={{ translateY: -12 }}
          >
            <motion.h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100" variants={fadeInUp(0.1)}>
              İletişim Bilgileri
            </motion.h3>
            <motion.div className="space-y-6" variants={staggerContainer(0.12)}>
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  className="group flex items-center space-x-4 rounded-lg p-4 transition-all duration-300 hover:bg-blue-50/60 dark:hover:bg-slate-800"
                  variants={fadeInUp(0.08 * index)}
                  whileHover={{ x: 6 }}
                >
                  <motion.div
                    className="rounded-lg bg-blue-100/70 p-3 transition-colors duration-300 group-hover:bg-blue-200/80 dark:bg-blue-500/10 dark:group-hover:bg-blue-500/20"
                    variants={scaleIn(0.05)}
                  >
                    <contact.icon className="text-blue-600 dark:text-blue-400" size={24} />
                  </motion.div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{contact.label}</p>
                    <p className="text-lg text-gray-900 dark:text-gray-100">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-blue-100/60 bg-white/80 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/60"
            variants={scaleIn(0.22)}
            whileHover={{ translateY: -12 }}
          >
            <motion.h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100" variants={fadeInUp(0.1)}>
              Sosyal Medya
            </motion.h3>
            <motion.p className="mb-6 text-slate-600 dark:text-slate-300" variants={fadeInUp(0.18)}>
              Güncel projelerimi ve topluluk çalışmalarımı sosyal medya hesaplarımdan takip edebilirsiniz.
            </motion.p>
            <motion.div className="flex flex-wrap gap-4" variants={staggerContainer(0.1)}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 rounded-xl bg-slate-100/80 px-5 py-3 text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-slate-800 dark:text-slate-300 ${social.hover}`}
                  variants={scaleIn(0.1 * index)}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={22} />
                  <span className="font-medium">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
