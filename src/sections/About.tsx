import { Section } from '../components/Section'
import { bio, credentials } from '../content/about'

export function About() {
  return (
    <Section
      id="om"
      theme="olive"
      eyebrow="Om mig"
      title="Musik som behandling — og som håndværk"
    >
      <div className="mt-14 grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
        <div className="space-y-6">
          {bio.map((paragraph, i) => (
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
          <h3 className="eyebrow text-gold-dim">Baggrund</h3>
          <dl className="mt-6 space-y-5">
            {credentials.map((item) => (
              <div key={item.label}>
                <dt className="font-display text-(length:--text-h3) leading-snug">{item.label}</dt>
                {item.detail && <dd className="mt-1 text-sm text-ink/60">{item.detail}</dd>}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
