import { affiliations, funders } from '../content/about'

/**
 * A quiet credibility strip between the dark sections. Text rather than logos,
 * since there are no usage rights for the institutions' marks.
 */
export function Affiliations() {
  return (
    <section aria-labelledby="samarbejde-title" className="border-y border-ink/10 bg-paper-dim">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <h2 id="samarbejde-title" className="eyebrow text-gold-dim">
          Samarbejder og ansættelser
        </h2>
        <ul className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
          {affiliations.map((item) => (
            <li key={item} className="font-display text-lg text-ink/75 sm:text-xl">
              {item}
            </li>
          ))}
        </ul>

        <h2 className="eyebrow mt-12 text-gold-dim">Projekter og forskning støttet af</h2>
        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          {funders.map((item) => (
            <li key={item} className="text-sm text-ink/55">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
