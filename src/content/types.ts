// İçerik sözleşmesi. İçerik dosyaları (tr.ts, en.ts, shared.ts) ve bileşenler bu tiplere uyar.
// Bileşenler metin içermez; görünen her metin buradan gelir.
//
// Yapı (2026-11-12, Emre'nin kararı): eski sitenin içeriği taban, 2026 "yapay zekâyla çalışma"
// işleri "2025 sonrası" bölümü olarak üstüne gelir.

export type Lang = 'tr' | 'en';

/** 2025 sonrası işlerin üç şeridi: AI ile teslim · Ürün/ML · Oyun tasarımı */
export type Track = 'ai' | 'product' | 'game';

/** Beceri seviyesi (yalnız 2025 sonrası satırlarda): elle bilirim · yöneterek yaptım · dokundum */
export type Level = 'hands' | 'directed' | 'touched';

export interface LinkItem {
  label: string;
  href: string;
}

/** Eski sitedeki proje kartı: açıklama + teknoloji + öne çıkanlar */
export interface ProjectItem {
  id: string;
  name: string;
  /** "Kas 2023 - Şub 2024" */
  period: string;
  description: string;
  technologies: string[];
  highlights: string[];
  link?: LinkItem;
}

export interface WorkItem {
  id: string;
  name: string;
  track: Track;
  /** Kısa durum: "Yayında, v1.0.0", "Yerelde çalışıyor, yayında değil" gibi */
  status: string;
  /** Tarih aralığı, mono yazılır: "Eki 2026" */
  period: string;
  problem: string;
  /** Emre'nin payı: 2-4 kısa madde */
  mine: string[];
  /** Yapay zekânın payı: 1-3 kısa madde */
  ai: string[];
  /** Kanıt satırları: rakam + neyin rakamı. Mono yazılır. */
  evidence: string[];
  /** Yalnız gerçekten public/yayında olan bağlantı; yoksa alan hiç yazılmaz */
  link?: LinkItem;
  /** true olan tek vaka vitrinde büyük gösterilir */
  featured?: boolean;
}

export interface GameItem {
  id: string;
  name: string;
  /** "Unity · v0.6 · yerelde" gibi tek satır */
  status: string;
  summary: string;
  decisions: {
    decision: string;
    quote?: string;
    /** EN içerikte: Türkçe özgün alıntı */
    quoteOriginal?: string;
    /** "17 Eki 2026" */
    date?: string;
  }[];
}

export interface SkillItem {
  name: string;
  level: Level;
  /** Tek satır kanıt */
  evidence: string;
}

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  location?: string;
  /** "Zorunlu staj", "Kısa dönem" gibi küçük etiket */
  tag?: string;
  description?: string;
  points: string[];
  link?: LinkItem;
}

export interface SiteContent {
  meta: { title: string; description: string };
  /** Anahtarlar bölüm kimlikleriyle aynı (sections.ts) */
  nav: {
    about: string;
    projects: string;
    recent: string;
    games: string;
    skills: string;
    experience: string;
    contact: string;
  };
  ui: {
    skipToContent: string;
    menu: string;
    close: string;
    switchLanguage: string;
    toLightTheme: string;
    toDarkTheme: string;
    problem: string;
    mine: string;
    ai: string;
    evidence: string;
    noPublicLink: string;
    decision: string;
    originalQuote: string;
    opensInNewTab: string;
    technologies: string;
    highlights: string;
    tracksLabel?: string;
  };
  tracks: Record<Track, { label: string; note: string }>;
  hero: {
    eyebrow: string;
    name: string;
    /** Ana cümle, satır satır (2-4 satır) */
    headline: string[];
    /** Dönen söz: before + [roles döner] + after. roles en az 2 öğe. */
    rotating: { before: string; roles: string[]; after: string };
    lede: string;
    cta: { github: string; cv: string; contact: string };
    /** 2025 sonrası bölümüne köprü: metin + bağlantı etiketi */
    bridge: { text: string; linkLabel: string };
  };
  about: {
    title: string;
    paragraphs: string[];
    /** Eğitim, konum, çalışma durumu gibi kısa olgular */
    facts: { label: string; value: string; detail?: string }[];
  };
  projects: {
    title: string;
    intro: string;
    items: ProjectItem[];
    moreOnGithub: string;
  };
  /** 2025 sonrası: tek bölüm, içinde "nasıl çalışıyorum" + seçilmiş işler */
  recent: {
    title: string;
    intro: string;
  };
  how: {
    title: string;
    intro: string;
    steps: { title: string; body: string; open?: boolean }[];
    proofs: { value: string; label: string; date: string }[];
    note: string;
  };
  work: {
    title: string;
    intro: string;
    items: WorkItem[];
  };
  games: {
    title: string;
    intro: string;
    disclaimer: string;
    items: GameItem[];
  };
  skills: {
    title: string;
    intro: string;
    /** Eski sitedeki kategori listeleri */
    categories: { title: string; items: string[] }[];
    /** 2025 sonrası: seviye + kanıt satırları */
    aiTitle: string;
    aiIntro: string;
    levels: Record<Level, { label: string; description: string }>;
    groups: { title: string; items: SkillItem[] }[];
    languages: { title: string; items: { name: string; note: string }[] };
  };
  experience: {
    title: string;
    intro: string;
    workTitle: string;
    items: ExperienceItem[];
    educationTitle: string;
    education: ExperienceItem[];
    communityTitle: string;
    community: ExperienceItem[];
  };
  contact: {
    title: string;
    body: string;
    emailLabel: string;
  };
  footer: {
    colophon: string;
    backToTop: string;
  };
}

/** Dile bağlı olmayan sabitler: shared.ts */
export interface SharedContent {
  email: string;
  githubUrl: string;
  linkedinUrl: string | null;
  instagramUrl: string | null;
  bbclubUrl: string;
  /** CV dosyası hazır değilse null; düğme o zaman gösterilmez */
  cvUrl: string | null;
}
