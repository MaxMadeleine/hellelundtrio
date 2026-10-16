import { useState } from 'react'

type Props = {
  id: string
  title: string
  caption?: string
  /** The TEDx talk gets a larger thumbnail than the concert grid. */
  size?: 'feature' | 'grid'
}

/**
 * Click-to-load facade. YouTube's player is heavy and sets cookies, so nothing
 * is requested from youtube.com until the visitor actually asks to watch.
 */
export function VideoEmbed({ id, title, caption, size = 'grid' }: Props) {
  const [playing, setPlaying] = useState(false)
  const thumbnail =
    size === 'feature'
      ? `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
      : `https://i.ytimg.com/vi/${id}/hqdefault.jpg`

  return (
    <figure className="group">
      <div className="relative aspect-video overflow-hidden bg-ink-soft">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 size-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 size-full cursor-pointer"
          >
            <span className="sr-only">Afspil: {title}</span>
            <img
              src={thumbnail}
              alt=""
              loading="lazy"
              decoding="async"
              className="size-full object-cover opacity-80 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 grid place-items-center bg-ink/25 transition-colors group-hover:bg-ink/10"
            >
              <span className="grid size-14 place-items-center rounded-full bg-gold/95 transition-transform duration-300 group-hover:scale-110 md:size-16">
                <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 size-6 text-ink">
                  <path d="M8 5.14v13.72a.5.5 0 0 0 .76.43l11.14-6.86a.5.5 0 0 0 0-.86L8.76 4.71A.5.5 0 0 0 8 5.14Z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm leading-snug text-current/60">{caption}</figcaption>
      )}
    </figure>
  )
}
