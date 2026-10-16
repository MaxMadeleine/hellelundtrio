import { Section } from '../components/Section'
import { VideoEmbed } from '../components/VideoEmbed'
import { research, talkTopics, tedTalk } from '../content/talks'

export function Speaking() {
  return (
    <Section
      id="foredrag"
      eyebrow="Foredrag & forskning"
      title="Musik i stedet for sovemedicin"
      lead="Helle formidler sin forskning for både fagfolk og et bredt publikum — på hospitaler, biblioteker, i auditorier og fra TEDx-scenen."
    >
      <div className="mt-14">
        <VideoEmbed
          id={tedTalk.youtubeId}
          title={`${tedTalk.title} — ${tedTalk.event}`}
          size="feature"
        />
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h3 className="font-display text-(length:--text-h3) leading-snug">{tedTalk.title}</h3>
            <p className="mt-1 text-sm text-ink/55">
              {tedTalk.event}, {tedTalk.year}
            </p>
          </div>
        </div>
        <p className="mt-4 max-w-2xl leading-relaxed text-ink/70">{tedTalk.description}</p>
      </div>

      <div className="mt-20 border-t border-ink/15 pt-12">
        <h3 className="eyebrow text-gold-dim">{research.heading}</h3>
        <p className="mt-6 max-w-2xl leading-relaxed text-ink/75">{research.intro}</p>

        <dl className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {research.figures.map((figure) => (
            <div key={figure.label} className="border-t-2 border-gold pt-5">
              <dt className="font-display text-4xl leading-none font-medium lg:text-5xl">
                {figure.value}
              </dt>
              <dd className="mt-3 text-sm leading-snug text-ink/60">{figure.label}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-sm text-ink/50">{research.note}</p>
      </div>

      <div className="mt-20 border-t border-ink/15 pt-12">
        <h3 className="eyebrow text-gold-dim">Emner</h3>
        <div className="mt-8 grid gap-10 md:grid-cols-3">
          {talkTopics.map((topic) => (
            <article key={topic.title}>
              <h4 className="font-display text-(length:--text-h3) leading-snug text-balance">
                {topic.title}
              </h4>
              <p className="mt-4 leading-relaxed text-ink/70">{topic.body}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
