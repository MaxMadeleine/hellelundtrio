import { useEffect, useState } from 'react'
import { contact, navigation, site } from '../content/site'

type Props = {
  currentSection?: string
}

export function Header({ currentSection }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // The mobile panel covers the page, so the body must not scroll behind it.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-ink/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg leading-none tracking-wide text-paper sm:text-xl"
        >
          {site.name}
        </a>

        <nav aria-label="Hovedmenu" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => {
            const active = currentSection !== undefined && item.href === `#${currentSection}`
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={active ? 'true' : undefined}
                className={`text-sm transition-colors hover:text-gold-bright ${
                  active ? 'text-gold-bright' : 'text-paper/70'
                }`}
              >
                {item.label}
              </a>
            )
          })}
          <a
            href={contact.phoneHref}
            className="bg-gold px-5 py-2.5 text-sm font-medium tracking-wide text-gold-on uppercase transition-colors hover:bg-gold-bright"
          >
            {contact.phoneDisplay}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobilmenu"
          className="relative z-50 -mr-2 p-2 text-paper lg:hidden"
        >
          <span className="sr-only">{open ? 'Luk menu' : 'Åbn menu'}</span>
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M3 7h18M3 17h18" />}
          </svg>
        </button>
      </div>

      <div
        id="mobilmenu"
        hidden={!open}
        className="border-t border-paper/10 bg-ink lg:hidden"
      >
        <nav aria-label="Mobilmenu" className="mx-auto max-w-6xl px-6 py-6 sm:px-8">
          <ul className="flex flex-col">
            {navigation.map((item) => {
              const active = currentSection !== undefined && item.href === `#${currentSection}`
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? 'true' : undefined}
                    className={`block border-b border-paper/10 py-4 font-display text-2xl transition-colors hover:text-gold-bright ${
                      active ? 'text-gold-bright' : 'text-paper'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
          <a
            href={contact.phoneHref}
            className="mt-6 flex w-full items-center justify-center bg-gold px-6 py-4 text-sm font-medium tracking-wide text-gold-on uppercase"
          >
            Ring {contact.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  )
}
