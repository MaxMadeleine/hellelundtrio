import { useEffect, useState } from 'react'
import { sectionIds, sectionTheme, type SectionId, type ThemeName } from '../content/themes'

/**
 * Picks the last section whose top has passed the sticky header, then mirrors
 * that section's `data-theme` onto <html> so chrome outside the section
 * (navbar, skip-link, focus ring) follows along.
 */
export function useSectionTheme() {
  const [current, setCurrent] = useState<SectionId>('top')

  useEffect(() => {
    const apply = () => {
      const headerOffset = 96
      let next: SectionId = 'top'

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top - headerOffset <= 0) next = id
      }

      setCurrent(next)
      document.documentElement.dataset.theme = sectionTheme[next]
    }

    apply()
    window.addEventListener('scroll', apply, { passive: true })
    window.addEventListener('resize', apply)
    return () => {
      window.removeEventListener('scroll', apply)
      window.removeEventListener('resize', apply)
    }
  }, [])

  return { current, theme: sectionTheme[current] as ThemeName }
}
