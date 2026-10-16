import { images, type ImageName } from '../images.generated'

type Props = {
  name: ImageName
  alt: string
  /** Matches the `sizes` attribute; set it per layout so the browser picks well. */
  sizes: string
  className?: string
  /** Only the hero should be eager — everything else stays lazy. */
  priority?: boolean
}

const srcset = (name: ImageName, widths: readonly number[], ext: string) =>
  widths.map((w) => `/img/${name}-${w}.${ext} ${w}w`).join(', ')

/**
 * Serves AVIF, then WebP, then JPEG. Width and height come from the generated
 * manifest so the browser reserves space and the page does not shift.
 */
export function Picture({ name, alt, sizes, className, priority = false }: Props) {
  const asset = images[name]
  const largest = asset.widths[asset.widths.length - 1] ?? 1
  const height = Math.round(largest / asset.aspectRatio)

  return (
    <picture>
      <source type="image/avif" srcSet={srcset(name, asset.widths, 'avif')} sizes={sizes} />
      <source type="image/webp" srcSet={srcset(name, asset.widths, 'webp')} sizes={sizes} />
      <img
        src={`/img/${name}-${largest}.jpg`}
        srcSet={srcset(name, asset.widths, 'jpg')}
        sizes={sizes}
        alt={alt}
        width={largest}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        className={className}
      />
    </picture>
  )
}
