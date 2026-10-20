/**
 * Biography and credentials.
 *
 * Every claim here is taken from Helle's own published material: the old
 * hellelundtrio.dk, themusicstar.dk, Dansk Musikterapeutforenings register,
 * ORCID and the AAU research portal. Nothing is invented — if a fact is not in
 * `archive/` or one of those sources, it is not on the page.
 */
export const bio = [
  'Jeg er musikterapeut og ph.d. Jeg arbejder med musik som en konkret, virksom del af behandling og trivsel — i psykiatrien, i forskningen og på scenen.',
  'Jeg er uddannet musikterapeut fra Aalborg Universitet og certificeret kognitiv terapeut, og i 2021 modtog jeg ph.d.-graden fra Det Sundhedsvidenskabelige Fakultet ved Aalborg Universitet med en afhandling om musik til bedre søvn hos mennesker med depression. Siden 2004 har jeg været ansat i Psykiatrien, Aalborg Universitetshospital.',
  'Jeg er samtidig uddannet på Berklee College of Music i USA og arbejder som jazzpianist og komponist. Jeg leder Helle Lund Trio, er pianist i Swing Time Big Band og modtog i 2010 jazzprisen „Jambazzadør“.',
  'Jeg er medopfinder af appen The MusicStar og medstifter af MusicStar ApS, som udvikler musikmedicin til både private og fagfolk.',
] as const

export const credentials = [
  { label: 'Ph.d. i musik og søvn', detail: 'Det Sundhedsvidenskabelige Fakultet, Aalborg Universitet, 2021' },
  { label: 'Musikterapeut, cand.mag.', detail: 'Aalborg Universitet' },
  { label: 'Certificeret kognitiv terapeut', detail: '' },
  { label: 'Berklee College of Music', detail: 'USA' },
  { label: 'Musikterapeut i Psykiatrien', detail: 'Aalborg Universitetshospital, siden 2004' },
  { label: 'Jambazzadør', detail: 'Jazzprisen, 2010' },
] as const

/** Named on her own pages as collaborators, employers, venues or funders. */
export const affiliations = [
  'Aalborg Universitetshospital, Psykiatrien',
  'Aalborg Universitet',
  'Berklee College of Music',
  'MusicStar ApS',
  'KUNSTEN, Aalborg',
  'Musikkens Hus',
  'Center for Dansk Jazzhistorie',
  'Swing Time Big Band',
] as const

export const funders = [
  'Det Obelske Familiefond',
  'Familien Hede Nielsens Fond',
  'Aase & Ejnar Danielsens Fond',
  'Nordeafonden',
  'Jazzdanmark',
  'MUSAM',
  'Kulturpuljen i Aalborg Kommune',
] as const
