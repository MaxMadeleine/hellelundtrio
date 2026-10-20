/**
 * Named palettes used as `data-theme` on each section. The same names are
 * applied to <html> as you scroll, so the header, book button and CTAs follow
 * the section you are in.
 *
 * Colour values live in `src/index.css` next to the `[data-theme]` rules —
 * this file only maps section ids to those names.
 */
export const sectionTheme = {
  top: 'gold',
  om: 'olive',
  ydelser: 'olive',
  samarbejde: 'olive',
  foredrag: 'ted',
  trio: 'jazz',
  musicstar: 'star',
  presse: 'press',
  kontakt: 'gold',
} as const

export type SectionId = keyof typeof sectionTheme
export type ThemeName = (typeof sectionTheme)[SectionId]

export const sectionIds = Object.keys(sectionTheme) as SectionId[]
