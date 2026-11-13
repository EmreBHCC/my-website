import { useLang } from '../i18n/lang-context';
import { shared } from '../content';
import { Section } from './Section';
import { Reveal } from './Reveal';
import { ArrowUpRightIcon } from './Icons';

const bare = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

export function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const ext = (href: string, text: string) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-comic inline-flex max-w-full items-center gap-1.5 text-[0.95rem] [overflow-wrap:anywhere]"
    >
      {text}
      <ArrowUpRightIcon className="shrink-0 self-center" />
      <span className="sr-only">{t.ui.opensInNewTab}</span>
    </a>
  );
  return (
    <Section id="contact" index={7} label={t.nav.contact} title={c.title}>
      <Reveal>
        <p className="max-w-[62ch] text-muted">{c.body}</p>
        <p className="mono-tab mt-8 text-sm text-muted">{c.emailLabel}</p>
        <p className="mt-1 font-serif text-[clamp(1.5rem,0.9rem+3.2vw,2.9rem)] leading-tight [overflow-wrap:anywhere]">
          <a href={`mailto:${shared.email}`} className="ulink">
            {shared.email}
          </a>
        </p>
        <ul className="mt-8 flex flex-wrap gap-3">
          <li>{ext(shared.githubUrl, bare(shared.githubUrl))}</li>
          {shared.linkedinUrl && <li>{ext(shared.linkedinUrl, bare(shared.linkedinUrl))}</li>}
          {shared.instagramUrl && <li>{ext(shared.instagramUrl, bare(shared.instagramUrl))}</li>}
          {shared.cvUrl && <li>{ext(shared.cvUrl, t.hero.cta.cv)}</li>}
        </ul>
      </Reveal>
    </Section>
  );
}
