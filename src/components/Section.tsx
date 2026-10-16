import type { ReactNode } from 'react'

type Props = {
  id: string
  eyebrow?: string
  title?: string
  lead?: string
  children: ReactNode
  /** Dark sections invert the palette and sit between the paper-coloured ones. */
  tone?: 'paper' | 'ink'
  className?: string
}

export function Section({ id, eyebrow, title, lead, children, tone = 'paper', className = '' }: Props) {
  const dark = tone === 'ink'

  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-title` : undefined}
      className={`${dark ? 'bg-ink text-paper' : 'bg-paper text-ink'} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 md:py-28 lg:py-32">
        {(eyebrow || title || lead) && (
          <header className="max-w-3xl">
            {eyebrow && (
              <p className={`eyebrow ${dark ? 'text-gold-bright' : 'text-gold-dim'}`}>{eyebrow}</p>
            )}
            {title && (
              <h2
                id={`${id}-title`}
                className="rule-gold mt-4 font-display text-(length:--text-h2) leading-[1.05] font-medium text-balance"
              >
                {title}
              </h2>
            )}
            {lead && (
              <p
                className={`mt-8 max-w-2xl text-(length:--text-lead) leading-relaxed ${
                  dark ? 'text-paper/70' : 'text-ink/70'
                }`}
              >
                {lead}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
