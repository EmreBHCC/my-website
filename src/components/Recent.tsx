import { useLang } from '../i18n/lang-context';
import { Section } from './Section';
import { Reveal } from './Reveal';
import { HowBody } from './How';
import { WorkBody } from './Work';

/** 2025 sonrası: yapay zekâyla çalışma düzeni + o düzenle çıkan işler, tek bölüm. */
export function Recent() {
  const { t } = useLang();
  const r = t.recent;
  return (
    <Section id="recent" index={4} label={t.nav.recent} title={r.title}>
      <Reveal>
        <p className="max-w-[62ch] font-serif text-xl leading-snug text-ink md:text-2xl">{r.intro}</p>
      </Reveal>
      <div className="mt-12">
        <HowBody />
      </div>
      <WorkBody />
    </Section>
  );
}
