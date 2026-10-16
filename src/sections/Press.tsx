import { Picture } from '../components/Picture'
import { Section } from '../components/Section'
import { pressPhotos } from '../content/press'
import { contact } from '../content/site'

export function Press() {
  return (
    <Section
      id="presse"
      eyebrow="Presse"
      title="Billeder til omtale"
      lead="Klik på et billede for at hente det i høj opløsning. Angiv fotograf hvor det er nævnt."
    >
      {/* Five photos in a three-column grid leaves a hole, so the first one is
          given double width and the rows fill out evenly. */}
      <ul className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {pressPhotos.map((photo, i) => (
          <li key={photo.file} className={i === 0 ? 'lg:col-span-2' : undefined}>
            <a href={photo.file} download className="group block">
              <Picture
                name={photo.image}
                alt={photo.alt}
                sizes={
                  i === 0
                    ? '(min-width: 1024px) 46rem, (min-width: 640px) 45vw, 100vw'
                    : '(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 100vw'
                }
                className="aspect-4/3 w-full object-cover transition duration-500 group-hover:opacity-85"
              />
              <span className="mt-3 flex items-center justify-between gap-4 text-sm">
                <span className="text-ink/60">
                  {photo.credit ? `Foto: ${photo.credit}` : 'Pressefoto'}
                </span>
                <span className="inline-flex items-center gap-1.5 text-gold-dim transition-colors group-hover:text-ink">
                  Hent
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-3.5">
                    <path d="M10 2.5a.75.75 0 0 1 .75.75v8.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0L5.72 10.03a.75.75 0 1 1 1.06-1.06l2.47 2.47V3.25A.75.75 0 0 1 10 2.5ZM3.5 15.25a.75.75 0 0 1 .75.75v.5h11.5v-.5a.75.75 0 0 1 1.5 0v.75A1.25 1.25 0 0 1 16 18H4a1.25 1.25 0 0 1-1.25-1.25V16a.75.75 0 0 1 .75-.75Z" />
                  </svg>
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-12 max-w-2xl text-sm leading-relaxed text-ink/55">
        Filerne her er op til 3000 px brede. Har du brug for det fulde originalformat til tryk, så
        skriv til{' '}
        <a href={contact.emailHref} className="border-b border-gold/60 pb-0.5 hover:text-ink">
          {contact.email}
        </a>
        .
      </p>
    </Section>
  )
}
