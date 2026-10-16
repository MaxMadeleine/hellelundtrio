import type { ImageName } from '../images.generated'

/**
 * The four things Helle can be booked for. These are the page's primary
 * conversion paths, so each one answers the same three questions: what it is,
 * what you get, and who it is for.
 */
export type Service = {
  id: string
  eyebrow: string
  title: string
  summary: string
  /** Concrete formats a booker can ask for. */
  offerings: readonly string[]
  audience: string
  image: ImageName
  imageAlt: string
  /** Set when the service continues in a dedicated section further down. */
  anchor?: string
}

export const services: readonly Service[] = [
  {
    id: 'musikterapi',
    eyebrow: '01',
    title: 'Musikterapi & musikmedicin',
    summary:
      'Foredrag, kurser og rådgivning om musik som non-farmakologisk redskab — til søvn, uro, angst og stress. Bygget på egen klinisk praksis i psykiatrien og på egen forskning.',
    offerings: [
      'Foredrag for personale, ledelse og fagpersoner',
      'Kurser og undervisning i brug af musikmedicin',
      'Oplæg på biblioteker, i auditorier og på konferencer',
      'Faglig rådgivning til afdelinger og kommuner',
    ],
    audience: 'Hospitaler, kommuner, uddannelser, biblioteker og konferencer',
    image: 'helle-klaver',
    imageAlt: 'Helle Nystrup Lund ved flyglet, sort-hvidt portræt',
    anchor: '#foredrag',
  },
  {
    id: 'trio',
    eyebrow: '02',
    title: 'Helle Lund Trio',
    summary:
      'Moderne trio-jazz med et stærkt personligt udtryk og et strejf af nordisk tone. Jazzstandards, danske sange i nye arrangementer og egne kompositioner.',
    offerings: [
      'Koncert',
      'Reception og firmaarrangement',
      'Fest og dans',
      'Kirkekoncert',
      'Jam-session med gæsternes egne musikere',
    ],
    audience: 'Jazzklubber, kulturhuse, kirker, museer, virksomheder og private fester',
    image: 'trio-trappe',
    imageAlt: 'Helle Lund Trio fotograferet på en trappe i Aalborg',
    anchor: '#trio',
  },
  {
    id: 'workshop',
    eyebrow: '03',
    title: 'Underholdning & rytmeworkshop',
    summary:
      'Musik der inddrager publikum. Kombineret koncert og workshop, rytmeworkshop eller undervisning i sammenspil og improvisation — tilrettelagt efter gruppen.',
    offerings: [
      'Rytmeworkshop',
      'Kombineret koncert og workshop',
      'Undervisning: sammenspil og improvisation',
      'Undervisning: soloinstrument (klaver, bas, trommer)',
      'Fællessang og stemningsmusik',
    ],
    audience: 'Gymnasier, skoler, plejehjem, personalegrupper og kulturinstitutioner',
    image: 'trio-tegnede-instrumenter',
    imageAlt: 'Helle Lund Trio spiller på tegnede instrumenter i en gårdhave',
  },
  {
    id: 'musicstar',
    eyebrow: '04',
    title: 'The MusicStar',
    summary:
      'Appen til musikmedicin, som Helle er medopfinder af. Kuraterede spillelister udviklet af musikterapeuter og forskere til søvnstøtte, uro, angst og tankemylder.',
    offerings: [
      'Introduktion og oplæg om musikmedicin',
      'Implementering på afdelinger og i kommuner',
      'ERFA-møder for nøglepersoner',
      'Appen til privat brug',
    ],
    audience: 'Psykiatri, somatik, kommuner og private brugere',
    image: 'klaver-bagfra',
    imageAlt: 'Helle Nystrup Lund set bagfra ved klaveret i mørke',
    anchor: '#musicstar',
  },
] as const
