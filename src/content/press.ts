import type { ImageName } from '../images.generated'

/**
 * Press photos offered for download. Files are capped at 3000 px wide by
 * `pnpm images`; the untouched originals live in `archive/` and can be sent on
 * request.
 *
 * The Per Feder / NG21 credit is part of the data, not the layout, so a photo
 * can never be rendered without it.
 */
export type PressPhoto = {
  image: ImageName
  file: string
  alt: string
  credit?: string
}

export const pressPhotos: readonly PressPhoto[] = [
  {
    image: 'trio-trappe',
    file: '/presse/helle-lund-trio-trappe.jpg',
    alt: 'Helle Lund Trio på en trappe omgivet af forbipasserende',
    credit: 'Per Feder, NG21',
  },
  {
    image: 'trio-klaver',
    file: '/presse/helle-lund-trio-klaver.jpg',
    alt: 'Helle Lund Trio omkring et opretstående klaver i en foyer',
    credit: 'Per Feder, NG21',
  },
  {
    image: 'trio-vindue',
    file: '/presse/helle-lund-trio-vindue.jpg',
    alt: 'Helle Lund Trio set gennem et vindue i samtale',
    credit: 'Per Feder, NG21',
  },
  {
    image: 'trio-tegnede-instrumenter',
    file: '/presse/helle-lund-trio-tegnede-instrumenter.jpg',
    alt: 'Helle Lund Trio spiller på tegnede instrumenter foran en facade',
    credit: 'Per Feder, NG21',
  },
  {
    image: 'helle-klaver',
    file: '/presse/helle-nystrup-lund-klaver.jpg',
    alt: 'Helle Nystrup Lund ved flyglet, sort-hvidt portræt',
  },
] as const
