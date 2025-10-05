import React, { useEffect, useState } from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
      return;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gray-50 text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100">
      <AnimatedBackground />
      <div className="relative z-20">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
