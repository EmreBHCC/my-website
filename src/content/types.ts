// İçerik sözleşmesi. İçerik dosyaları (tr.ts, en.ts, shared.ts) ve bileşenler bu tiplere uyar.
// Bileşenler metin içermez; görünen her metin buradan gelir.

export type Lang = 'tr' | 'en';

/** Üç şerit: AI ile teslim (ağırlık merkezi) · Ürün/ML · Oyun tasarımı */
export type Track = 'ai' | 'product' | 'game';

/** Beceri seviyesi: elle bilirim · yöneterek yaptım · dokundum */
export type Level = 'hands' | 'directed' | 'touched';

export interface LinkItem {
  label: string;
  href: string;
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
    /** Kararın düz anlatımı */
    decision: string;
    /** Emre'nin prompt alıntısı, o dildeki hali (EN'de çeviri) */
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
  points: string[];
}

export interface SiteContent {
  meta: { title: string; description: string };
  nav: {
    how: string;
    work: string;
    games: string;
    skills: string;
    experience: string;
    contact: string;
  };
  ui: {
    skipToContent: string;
    menu: string;
    close: string;
    /** Dil düğmesinin erişilebilir adı */
    switchLanguage: string;
    toLightTheme: string;
    toDarkTheme: string;
    problem: string;
    mine: string;
    ai: string;
    evidence: string;
    /** Bağlantısı olmayan vakada gösterilen kısa not */
    noPublicLink: string;
    decision: string;
    originalQuote: string;
    opensInNewTab: string;
  };
  tracks: Record<Track, { label: string; note: string }>;
  hero: {
    /** Ad üstü küçük satır: konum, durum */
    eyebrow: string;
    name: string;
    /** Ana cümle, satır satır (2-4 satır) */
    headline: string[];
    lede: string;
    cta: { github: string; cv: string; contact: string };
  };
  how: {
    title: string;
    intro: string;
    /** Tam dört adım */
    steps: { title: string; body: string }[];
    /** Kanıt rakamları: value mono büyük, label altında, date tarihi */
    proofs: { value: string; label: string; date: string }[];
    /** "Yönettim, testle doğruladım" açıklığı */
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
    /** "Kod yapay zekânın, kararlar benim" */
    disclaimer: string;
    items: GameItem[];
  };
  skills: {
    title: string;
    intro: string;
    levels: Record<Level, { label: string; description: string }>;
    groups: { title: string; items: SkillItem[] }[];
    /** Konuşma dilleri satırı (İngilizce dürüst) */
    languages: { title: string; items: { name: string; note: string }[] };
  };
  experience: {
    title: string;
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
    /** Sitenin nasıl yapıldığına dair tek dürüst satır */
    colophon: string;
    backToTop: string;
  };
}

/** Dile bağlı olmayan sabitler: shared.ts */
export interface SharedContent {
  email: string;
  githubUrl: string;
  linkedinUrl: string | null;
  /** CV dosyası hazır değilse null; düğme o zaman gösterilmez */
  cvUrl: string | null;
}
