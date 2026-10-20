import type { ImageName } from '../images.generated'

/** Bios are the ones the trio wrote for themselves on the old site. */
export const members = [
  {
    name: 'Helle Lund',
    instrument: 'Klaver',
    bio: 'Uddannet på Berklee College of Music i USA og som musikterapeut ved Aalborg Universitet. Arbejder som freelance jazzpianist og komponist. Modtog jazzprisen „Jambazzadør“ i 2010. Pianist i Swing Time Big Band.',
  },
  {
    name: 'Jesper Bang Pedersen',
    instrument: 'Kontrabas',
    bio: 'Uddannet fra Nordjysk Musikkonservatorium. Meget aktiv musiker på den nordjyske jazzscene, og en af de mest kendte og anvendte kontrabassister mellem Randers og Skagen.',
  },
  {
    name: 'Kaoru Obayashi',
    instrument: 'Trommer',
    bio: 'Uddannet fra Nordjysk Musikkonservatorium og fra Berklee College of Music i USA. Har sine rødder i Japan og er kendt for sin levende og sprudlende spillestil. Tildelt prisen „Jambazzadør“ i 2003.',
  },
] as const

export const trioIntro = [
  'Helle Lund Trio spiller moderne trio-jazz med et stærkt personligt udtryk og et strejf af nordisk tone. Trioen præsenterer en cocktail af swingende jazznumre: kendte og mindre kendte jazzstandards, danske folkeviser i nye arrangementer og egne kompositioner.',
  'Trioen har spillet sammen siden 2000 på jazzklubber, caféer, biblioteker, gymnasier, museer, restauranter, kirker, studenterhuse og plejehjem, og har turnéret i Norge, Skotland og Finland.',
] as const

/** The three booking types, with the trio's own description of each. */
export const bookingTypes = [
  {
    title: 'Koncert',
    body: 'Moderne trio-jazz med et stærkt personligt udtryk. Kendte og mindre kendte jazzstandards, danske folkeviser i nye arrangementer og egne kompositioner.',
  },
  {
    title: 'Reception',
    body: 'Musikken tilrettelægges efter arrangørernes ønske. Trioen kan bidrage med et kortere koncertindslag eller som stemningsskabende baggrundsmusik, og har stor erfaring med at spille afdæmpet, så der er mulighed for at tale sammen. Der kan spilles til fællessang.',
  },
  {
    title: 'Fest',
    body: 'God swingende jazz lige til at danse til, blandet med blød bossa nova, samba for de friske og sjælfulde jazzballader. Der kan også arrangeres jam-session, hvor musikere i selskabet inviteres til at spille med.',
  },
] as const

export type Album = {
  title: string
  subtitle: string
  description: string
  image: ImageName
  link?: { href: string; label: string }
}

export const albums: readonly Album[] = [
  {
    title: 'Danske Årstidssange',
    subtitle: 'feat. Hans Ulrik',
    description:
      'En række kendte danske årstidssange i nye jazzfortolkninger med solist Hans Ulrik på saxofon.',
    // TODO: the original sleeve 404'd on the old server. This is the trio's own
    // "feat. Hans Ulrik" artwork from the press assets and should be swapped for
    // the real cover once Helle or Gateway Music supplies it.
    image: 'cover-danske-aarstidssange',
    link: {
      href: 'http://www.gatewaymusicshop.dk/index.php?route=product/product&product_id=746',
      label: 'Køb hos Gateway Music',
    },
  },
  {
    title: 'Season of Change',
    subtitle: 'Helle Lund Trio',
    description:
      'Fortrinsvis mine egne jazzkompositioner samt enkelte jazzstandards.',
    image: 'cover-season-of-change',
  },
] as const

/**
 * The twelve clips from the old site. On the old page the caption under each
 * thumbnail linked to the wrong video; these are the links the images pointed
 * at, which are the correct ones.
 */
export const videos = [
  { id: 'QWkvPMzg97Y', title: 'Releaseparty, Danske Årstidssange', year: '2015' },
  { id: 'q12JRTXkIE4', title: 'feat. Hans Ulrik, Klaverstemmeren', year: '2014' },
  { id: 'gupLl6JZ_oo', title: 'Sulsted Kirke', year: '2014' },
  { id: '01rjkvf9wek', title: 'Loop, feat. Raymond McDonald & Ayi Solomon', year: '2011' },
  { id: 'kReEJ7HaOGo', title: 'The Big Toe, feat. Raymond McDonald & Ayi Solomon', year: '2011' },
  { id: 'IwdWHqRKDqs', title: 'The Steps of Sct. Pauls, feat. Raymond McDonald & Ayi Solomon', year: '2011' },
  { id: 'uv2SU9_e0aw', title: 'Jazz Tango, feat. Raymond McDonald & Ayi Solomon', year: '2011' },
  { id: 'XlyKXQeb1Iw', title: 'Jambazzadors Blues, feat. Raymond McDonald & Ayi Solomon', year: '2011' },
  { id: 'NWfr0FKOPA8', title: 'Jambazzadors Blues, Huset', year: '2011' },
  { id: 'k4EDAPFmPPw', title: 'Mads Dos, Huset', year: '2011' },
  { id: 'cCZwZ3O68SA', title: 'When Sonny Gets Blue, Huset', year: '2011' },
  { id: 'vRRbDhVe07Y', title: 'feat. Hans Ulrik', year: '2010' },
] as const

export const projects = [
  {
    period: '2014–2015',
    title: 'Danske Årstidssange',
    body: 'Projekt i samarbejde med Finn Møller, Klaverstemmeren, Aalborg. Workshops for gymnasieklasser på Center for Dansk Jazzhistorie og i Musikkens Hus, kirkekoncerter og i 2015 plejehjemsturné i Aalborg Kommune.',
  },
  {
    period: '2012–2013',
    title: 'Aalborg Jazz Connection',
    body: 'Helle Lund Trio sammen med Swing Time Big Band.',
  },
  {
    period: '2011–2012',
    title: 'Free jazz',
    body: 'Helle Lund Trio featuring Raymond MacDonald (saxofon) og Ayi Solomon (percussion).',
  },
] as const
