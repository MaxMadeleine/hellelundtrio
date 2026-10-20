/**
 * Speaking and research. The TEDx talk is the strongest single piece of proof
 * on the page, so it leads this section.
 */
export const tedTalk = {
  youtubeId: '8WVPl3zeqQc',
  title: 'Replacing Sleep Medication and Reducing Stress with Music',
  event: 'TEDxAalborg',
  year: '2023',
  description:
    'Min TEDx-talk om at bruge musik til at falde i søvn og til at reducere stress — fortalt gennem en patienthistorie fra psykiatrien og gennem resultaterne fra mit eget forskningsprojekt.',
} as const

/**
 * Findings from the MUSTAFI randomised controlled trial, published in Nordic
 * Journal of Psychiatry (2023). Numbers are from the published results.
 */
export const research = {
  heading: 'Forskningen bag',
  intro:
    'Min ph.d.-afhandling undersøgte, om musiklytning kan forbedre søvnkvaliteten hos mennesker med depressionsrelateret søvnbesvær. Studiet blev gennemført i Psykiatrien, Aalborg Universitetshospital.',
  figures: [
    { value: '112', label: 'patienter indgik i det randomiserede studie' },
    { value: '4 uger', label: 'med musiklytning gav bedre søvn- og livskvalitet' },
    { value: '18 min.', label: 'længere nattesøvn hos dem der lyttede til musik' },
    { value: '0', label: 'registrerede bivirkninger' },
  ],
  note: 'Offentliggjort i Nordic Journal of Psychiatry og formidlet i radio og tv.',
} as const

export const talkTopics = [
  {
    title: 'Musik i stedet for sovemedicin',
    body: 'Hvorfor musik virker på søvn, hvilken musik der virker, og hvordan den bruges i praksis. Forskningsresultater oversat til noget personale og patienter kan bruge i morgen.',
  },
  {
    title: 'Musikmedicin i psykiatrien',
    body: 'Musik som non-farmakologisk intervention ved uro, angst, tankemylder og stemmehøring — fra akut modtageafsnit til ambulant opfølgning.',
  },
  {
    title: 'Musik og sundhed',
    body: 'Musiklytning som mestringsstrategi og sundhedsfremme for et bredere publikum. Holdt på biblioteker, i auditorier og på konferencer i ind- og udland.',
  },
] as const
