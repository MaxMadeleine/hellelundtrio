import { CallButton } from '../components/CallButton'
import { Picture } from '../components/Picture'
import { contact, site } from '../content/site'

export function Contact() {
  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="relative isolate bg-ink">
      <Picture
        name="klaver-bagfra"
        alt=""
        sizes="100vw"
        className="absolute inset-0 size-full object-cover object-center opacity-40"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ink via-ink/75 to-ink" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32">
        <p className="eyebrow text-gold-bright">Kontakt</p>
        <h2
          id="kontakt-title"
          className="mt-4 max-w-2xl font-display text-(length:--text-h2) leading-[1.05] font-medium text-paper text-balance"
        >
          Ring, sms eller mail og hør nærmere
        </h2>
        <p className="mt-6 max-w-xl text-(length:--text-lead) leading-relaxed text-paper/70">
          Der laves gode individuelle aftaler. Fortæl om arrangementet, så finder vi det format der
          passer.
        </p>

        <dl className="mt-14 grid gap-10 border-t border-paper/15 pt-10 sm:grid-cols-3">
          <div>
            <dt className="eyebrow text-paper/45">Telefon</dt>
            <dd className="mt-3">
              <a
                href={contact.phoneHref}
                className="font-display text-2xl text-paper transition-colors hover:text-gold-bright sm:text-3xl"
              >
                {contact.phoneDisplay}
              </a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow text-paper/45">Mail</dt>
            <dd className="mt-3">
              <a
                href={contact.emailHref}
                className="font-display text-2xl text-paper transition-colors hover:text-gold-bright sm:text-3xl"
              >
                {contact.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow text-paper/45">Base</dt>
            <dd className="mt-3 font-display text-2xl text-paper sm:text-3xl">
              {site.locality}
            </dd>
          </div>
        </dl>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <CallButton />
          <a
            href={contact.facebook}
            className="px-2 py-4 text-sm tracking-wide text-paper/60 uppercase transition-colors hover:text-gold-bright"
          >
            Koncerter på Facebook
          </a>
        </div>
      </div>
    </section>
  )
}
