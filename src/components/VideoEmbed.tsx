import { useEffect, useRef, useState } from 'react'

type Props = {
  id: string
  title: string
  caption?: string
  /** The TEDx talk gets a larger thumbnail than the concert grid. */
  size?: 'feature' | 'grid'
  /** Load and play when the embed scrolls into view. Muted so browsers allow it. */
  autoplay?: boolean
  /** Start position in seconds. */
  start?: number
  /** Captions stay in the player menu, but do not start on. */
  captions?: 'auto' | 'off'
}

function playerSrc(
  id: string,
  options: { autoplay: boolean; muted: boolean; start: number; captions: 'auto' | 'off' },
) {
  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
  })
  if (options.autoplay) params.set('autoplay', '1')
  if (options.muted) {
    params.set('mute', '1')
    params.set('enablejsapi', '1')
  }
  if (options.captions === 'off') {
    // 0 = do not force captions on. YouTube still auto-enables them on muted
    // autoplay, so the player API turns the track off after load.
    params.set('cc_load_policy', '0')
    params.set('enablejsapi', '1')
    params.set('origin', window.location.origin)
  }
  if (options.start > 0) params.set('start', String(options.start))
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`
}

function command(iframe: HTMLIFrameElement | null, func: string, args: unknown[] = []) {
  iframe?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func, args }), '*')
}

/**
 * Click-to-load facade. YouTube's player is heavy and sets cookies, so nothing
 * is requested from youtube.com until the visitor actually asks to watch —
 * unless `autoplay` is set, in which case the player loads when the embed
 * enters the viewport.
 */
export function VideoEmbed({
  id,
  title,
  caption,
  size = 'grid',
  autoplay = false,
  start = 0,
  captions = 'auto',
}: Props) {
  const [src, setSrc] = useState<string | null>(null)
  const [muted, setMuted] = useState(false)
  const hostRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const thumbnail =
    size === 'feature'
      ? `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
      : `https://i.ytimg.com/vi/${id}/hqdefault.jpg`

  const play = (withMute: boolean) => {
    setMuted(withMute)
    setSrc(playerSrc(id, { autoplay: true, muted: withMute, start, captions }))
  }

  useEffect(() => {
    if (!autoplay || src) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const node = hostRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setMuted(true)
          setSrc(playerSrc(id, { autoplay: true, muted: true, start, captions }))
          observer.disconnect()
        }
      },
      { threshold: 0.45 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [autoplay, src, id, start, captions])

  useEffect(() => {
    if (captions !== 'off' || !src) return
    const iframe = iframeRef.current
    if (!iframe) return

    let cancelled = false
    const timers: number[] = []
    const disable = () => {
      if (cancelled) return
      // Empty track turns captions off without unloading the module, so the
      // viewer can still switch them on from the player.
      command(iframe, 'setOption', ['captions', 'track', {}])
    }

    const onMessage = (event: MessageEvent) => {
      if (typeof event.data !== 'string') return
      if (event.data.includes('onReady') || event.data.includes('onStateChange')) {
        disable()
      }
    }
    window.addEventListener('message', onMessage)

    const onLoad = () => {
      iframe.contentWindow?.postMessage(JSON.stringify({ event: 'listening' }), '*')
      for (const ms of [250, 800, 1800]) {
        timers.push(window.setTimeout(disable, ms))
      }
    }
    iframe.addEventListener('load', onLoad)

    return () => {
      cancelled = true
      window.removeEventListener('message', onMessage)
      iframe.removeEventListener('load', onLoad)
      timers.forEach((timer) => window.clearTimeout(timer))
    }
  }, [captions, src])

  const unmute = () => {
    command(iframeRef.current, 'unMute')
    command(iframeRef.current, 'setVolume', [100])
    command(iframeRef.current, 'playVideo')
    setMuted(false)
  }

  return (
    <figure className="group">
      <div ref={hostRef} className="relative aspect-video overflow-hidden bg-ink-soft">
        {src ? (
          <>
            <iframe
              ref={iframeRef}
              src={src}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 size-full"
            />
            {muted && (
              <button
                type="button"
                onClick={unmute}
                className="absolute right-4 bottom-4 z-10 bg-gold px-4 py-2.5 text-sm font-medium tracking-wide text-gold-on uppercase"
              >
                Slå lyden til
              </button>
            )}
          </>
        ) : (
          <button
            type="button"
            onClick={() => play(false)}
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
                <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 size-6 text-gold-on">
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
