import { contact } from '../content/site'

type Props = {
  /** `solid` is the gold primary action, `outline` sits on dark photography. */
  variant?: 'solid' | 'outline'
  label?: string
  className?: string
}

/**
 * Booking happens by phone only, so the phone number is the primary action
 * everywhere on the page rather than a form.
 */
export function CallButton({ variant = 'solid', label, className = '' }: Props) {
  const base =
    'group inline-flex items-center gap-3 px-7 py-4 text-sm font-medium tracking-wide uppercase transition-colors duration-200'
  const styles =
    variant === 'solid'
      ? 'bg-gold text-ink hover:bg-gold-bright'
      : 'border border-paper/35 text-paper hover:border-gold hover:text-gold-bright'

  return (
    <a href={contact.phoneHref} className={`${base} ${styles} ${className}`}>
      <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4 shrink-0" fill="currentColor">
        <path d="M2.5 3.5A1.5 1.5 0 0 1 4 2h2.1a1.5 1.5 0 0 1 1.45 1.11l.62 2.3a1.5 1.5 0 0 1-.4 1.47l-1.1 1.1a11.5 11.5 0 0 0 4.35 4.35l1.1-1.1a1.5 1.5 0 0 1 1.47-.4l2.3.62A1.5 1.5 0 0 1 18 13.9V16a1.5 1.5 0 0 1-1.5 1.5h-.5C8.49 17.5 2.5 11.51 2.5 4v-.5Z" />
      </svg>
      <span>{label ?? `Ring ${contact.phoneDisplay}`}</span>
    </a>
  )
}
