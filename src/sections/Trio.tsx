import { Picture } from '../components/Picture'
import { Section } from '../components/Section'
import { VideoEmbed } from '../components/VideoEmbed'
import { albums, bookingTypes, members, projects, trioIntro, videos } from '../content/trio'
import { contact } from '../content/site'

export function Trio() {
  return (
    <Section
      id="trio"
      theme="jazz"
      tone="ink"
      eyebrow="Bandet"
      title="Helle Lund Trio"
      lead="Sammen siden 2000. Moderne trio-jazz med et strejf af nordisk tone."
    >
      <figure className="mt-14">
        <Picture
          name="trio-klaver"
          alt="Helle Lund Trio omkring et opretstående klaver"
          sizes="(min-width: 1024px) 72rem, 100vw"
          className="aspect-16/9 w-full object-cover"
        />
        <figcaption className="mt-3 text-sm text-paper/45">Foto: Per Feder, NG21</figcaption>
      </figure>

      <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="space-y-6">
          {trioIntro.map((paragraph, i) => (
            <p
              key={paragraph.slice(0, 24)}
              className={
                i === 0
                  ? 'text-(length:--text-lead) leading-relaxed text-paper/85'
                  : 'leading-relaxed text-paper/65'
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        <ul className="space-y-8">
          {members.map((member) => (
            <li key={member.name} className="border-l-2 border-gold/60 pl-6">
              <h3 className="font-display text-(length:--text-h3) leading-snug text-paper">
                {member.name}
              </h3>
              <p className="eyebrow mt-1 text-gold-bright">{member.instrument}</p>
              <p className="mt-3 text-sm leading-relaxed text-paper/60">{member.bio}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-24 border-t border-paper/15 pt-12">
        <h3 className="eyebrow text-gold-bright">Book trioen til</h3>
        <div className="mt-8 grid gap-10 md:grid-cols-3">
          {bookingTypes.map((type) => (
            <article key={type.title}>
              <h4 className="font-display text-(length:--text-h3) leading-snug text-paper">
                {type.title}
              </h4>
              <p className="mt-4 text-sm leading-relaxed text-paper/65">{type.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-24 border-t border-paper/15 pt-12">
        <h3 className="eyebrow text-gold-bright">Udgivelser</h3>
        <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:gap-14">
          {albums.map((album) => (
            <article key={album.title} className="flex gap-6">
              <Picture
                name={album.image}
                alt={`Omslag: ${album.title}`}
                sizes="8rem"
                className="size-28 shrink-0 object-cover sm:size-32"
              />
              <div className="min-w-0">
                <h4 className="font-display text-(length:--text-h3) leading-snug text-paper">
                  {album.title}
                </h4>
                <p className="mt-1 text-sm text-gold-bright">{album.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">{album.description}</p>
                {album.link ? (
                  <a
                    href={album.link.href}
                    className="mt-4 inline-block border-b border-gold/60 pb-0.5 text-sm text-paper transition-colors hover:border-gold hover:text-gold-bright"
                  >
                    {album.link.label}
                  </a>
                ) : (
                  <a
                    href={contact.emailHref}
                    className="mt-4 inline-block border-b border-gold/60 pb-0.5 text-sm text-paper transition-colors hover:border-gold hover:text-gold-bright"
                  >
                    Bestil på {contact.email}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-24 border-t border-paper/15 pt-12">
        <h3 className="eyebrow text-gold-bright">Video</h3>
        <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <VideoEmbed
              key={video.id}
              id={video.id}
              title={`Helle Lund Trio — ${video.title} (${video.year})`}
              caption={`${video.title} · ${video.year}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-24 border-t border-paper/15 pt-12">
        <h3 className="eyebrow text-gold-bright">Projekter</h3>
        <ol className="mt-8 space-y-px bg-paper/10">
          {projects.map((project) => (
            <li
              key={project.period}
              className="grid gap-2 bg-ink py-7 md:grid-cols-[9rem_1fr] md:gap-8"
            >
              <p className="font-display text-xl text-gold/70">{project.period}</p>
              <div>
                <h4 className="font-display text-(length:--text-h3) leading-snug text-paper">
                  {project.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-paper/60">{project.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
