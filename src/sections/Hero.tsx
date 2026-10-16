import { CallButton } from '../components/CallButton'
import { Picture } from '../components/Picture'
import { site } from '../content/site'

const roles = ['Musikterapeut, ph.d.', 'Jazzpianist', 'Foredragsholder']

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-ink">
      <Picture
        name="helle-klaver"
        alt="Helle Nystrup Lund ved flyglet"
        sizes="100vw"
        priority
        className="absolute inset-0 size-full object-cover object-[72%_center] opacity-70 sm:object-[65%_center] lg:object-center"
      />
      {/* Two gradients: one for text legibility on the left, one to seat the fold. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/25 lg:to-transparent"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pt-32 pb-16 sm:px-8 md:pb-24">
        <div className="max-w-3xl">
          <p className="eyebrow reveal text-gold-bright">
            {site.locality} · {site.region}
          </p>

          <h1 className="reveal mt-6 font-display text-(length:--text-display) leading-[0.92] font-medium text-paper text-balance [animation-delay:80ms]">
            Helle Nystrup&nbsp;Lund
          </h1>

          {/* Stacked on phones, inline from `sm` up — wrapping the inline row
              left a separator orphaned at the start of the second line. */}
          <ul className="reveal mt-7 flex flex-col gap-2 text-paper/75 sm:flex-row sm:items-center [animation-delay:160ms]">
            {roles.map((role, i) => (
              <li key={role} className="text-base sm:text-lg">
                {i > 0 && (
                  <span aria-hidden="true" className="mx-4 hidden text-gold sm:inline">
                    ·
                  </span>
                )}
                {role}
              </li>
            ))}
          </ul>

          <p className="reveal mt-8 max-w-xl text-(length:--text-lead) leading-relaxed text-paper/65 [animation-delay:240ms]">
            Musik der virker — i behandling, i auditoriet og på scenen. Book foredrag, koncert
            eller workshop.
          </p>

          <div className="reveal mt-10 flex flex-col gap-4 sm:flex-row sm:items-center [animation-delay:320ms]">
            <CallButton />
            <a
              href="#ydelser"
              className="inline-flex items-center gap-2 px-2 py-4 text-sm tracking-wide text-paper/70 uppercase transition-colors hover:text-gold-bright"
            >
              Se hvad du kan booke
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-4">
                <path d="M10 3.5a.75.75 0 0 1 .75.75v9.19l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V4.25A.75.75 0 0 1 10 3.5Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
