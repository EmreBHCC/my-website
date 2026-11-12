import { LangProvider } from './i18n/LangProvider';
import { ThemeProvider } from './theme/ThemeProvider';
import { useLang } from './i18n/lang-context';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Recent } from './components/Recent';
import { Games } from './components/Games';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function Page() {
  const { t } = useLang();
  return (
    <div id="top">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:border focus:border-ink focus:bg-paper focus:px-4 focus:py-2"
      >
        {t.ui.skipToContent}
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Projects />
        <Recent />
        <Games />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <Page />
      </LangProvider>
    </ThemeProvider>
  );
}
