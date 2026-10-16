/**
 * Identity, contact details and navigation.
 *
 * `siteUrl` is used for canonical links, Open Graph and the sitemap. Change it
 * here when the final domain is decided and everything else follows.
 */
export const site = {
  url: 'https://hellenystruplund.dk',
  name: 'Helle Nystrup Lund',
  role: 'Musikterapeut, ph.d. · Jazzpianist · Foredragsholder',
  shortDescription:
    'Musikterapeut og ph.d. fra Aalborg. Foredrag og kurser om musik, søvn og sundhed, koncerter med Helle Lund Trio samt rytmeworkshops.',
  locality: 'Aalborg',
  region: 'Nordjylland',
  country: 'Danmark',
} as const

export const contact = {
  phone: '+45 41 57 01 25',
  phoneDisplay: '41 57 01 25',
  phoneHref: 'tel:+4541570125',
  email: 'hnl@rn.dk',
  emailHref: 'mailto:hnl@rn.dk',
  facebook: 'https://www.facebook.com/helle.nystruplund',
} as const

export const navigation = [
  { href: '#om', label: 'Om Helle' },
  { href: '#ydelser', label: 'Book Helle' },
  { href: '#foredrag', label: 'Foredrag' },
  { href: '#trio', label: 'Trioen' },
  { href: '#musicstar', label: 'MusicStar' },
  { href: '#presse', label: 'Presse' },
  { href: '#kontakt', label: 'Kontakt' },
] as const
