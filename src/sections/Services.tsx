import { CallButton } from '../components/CallButton'
import { Picture } from '../components/Picture'
import { Section } from '../components/Section'
import { contact } from '../content/site'
import { services } from '../content/services'

export function Services() {
  return (
    <Section
      id="ydelser"
      tone="ink"
      eyebrow="Book Helle"
      title="Fire ting du kan booke"
      lead="Musikterapeut, jazzpianist og formidler i én person. Vælg det du har brug for — aftalerne laves individuelt over telefonen."
    >
      <div className="mt-16 space-y-px bg-paper/10">
        {services.map((service) => (
          <article
            key={service.id}
            className="group grid gap-8 bg-ink py-10 md:grid-cols-[auto_1fr_minmax(0,18rem)] md:items-start md:gap-10 md:py-12"
          >
            <p className="font-display text-3xl leading-none text-gold/50 md:text-4xl">
              {service.eyebrow}
            </p>

            <div className="max-w-2xl">
              <h3 className="font-display text-(length:--text-h2) leading-tight font-medium text-paper">
                {service.anchor ? (
                  <a
                    href={service.anchor}
                    className="transition-colors hover:text-gold-bright"
                  >
                    {service.title}
                  </a>
                ) : (
                  service.title
                )}
              </h3>

              <p className="mt-5 leading-relaxed text-paper/70">{service.summary}</p>

              {/* A pill per line looked accidental, so these read as a list with
                  gold rules instead. */}
              <ul className="mt-7 grid gap-y-2 sm:grid-cols-2 sm:gap-x-8">
                {service.offerings.map((offering) => (
                  <li
                    key={offering}
                    className="flex gap-3 border-t border-paper/10 pt-2 text-sm text-paper/70"
                  >
                    <span aria-hidden="true" className="mt-2 size-1 shrink-0 bg-gold" />
                    {offering}
                  </li>
                ))}
              </ul>

              <p className="mt-7 text-sm text-paper/45">
                <span className="text-gold-bright">Til: </span>
                {service.audience}
              </p>
            </div>

            <div className="overflow-hidden md:sticky md:top-28">
              <Picture
                name={service.image}
                alt={service.imageAlt}
                sizes="(min-width: 768px) 18rem, 100vw"
                className="aspect-4/3 w-full object-cover grayscale transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
              />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-start gap-6 border-t border-paper/15 pt-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-paper/70">
          Ring, sms eller mail og hør nærmere. Der laves gode individuelle aftaler.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <CallButton />
          <a
            href={contact.emailHref}
            className="px-2 py-4 text-sm tracking-wide text-paper/70 uppercase transition-colors hover:text-gold-bright"
          >
            {contact.email}
          </a>
        </div>
      </div>
    </Section>
  )
}
