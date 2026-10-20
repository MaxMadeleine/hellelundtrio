import { Section } from '../components/Section'
import { musicstar } from '../content/musicstar'

export function MusicStar() {
  return (
    <Section
      id="musicstar"
      theme="star"
      eyebrow="Appen"
      title={musicstar.heading}
      lead={musicstar.tagline}
    >
      <div className="mt-14 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <div className="space-y-6">
          {musicstar.body.map((paragraph, i) => (
            <p
              key={paragraph.slice(0, 24)}
              className={
                i === 0
                  ? 'text-(length:--text-lead) leading-relaxed text-ink/85'
                  : 'leading-relaxed text-ink/70'
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="border-t border-ink/15 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
          <h3 className="eyebrow text-gold-dim">Læs mere</h3>
          <ul className="mt-6 space-y-4">
            {musicstar.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group inline-flex items-baseline gap-2 font-display text-(length:--text-h3) leading-snug transition-colors hover:text-gold-dim"
                >
                  {link.label}
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="size-3.5 shrink-0 text-gold transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path d="M4.5 10a.75.75 0 0 1 .75-.75h7.44L9.72 6.28a.75.75 0 1 1 1.06-1.06l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06l2.97-2.97H5.25A.75.75 0 0 1 4.5 10Z" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-relaxed text-ink/55">
            Appen drives af MusicStar ApS og har sit eget site. Her på siden kan du booke mig til
            oplæg, implementering og undervisning i brugen af den.
          </p>
        </div>
      </div>
    </Section>
  )
}
