# hellenystruplund.dk

One-page portfolio site for **Helle Nystrup Lund** — musikterapeut og ph.d., jazzpianist og
foredragsholder i Aalborg.

The site replaces the 2018 Adobe Muse page at [hellelundtrio.dk](https://hellelundtrio.dk/) and
widens the scope from the trio alone to everything Helle can be booked for.

## Stack

| | |
| --- | --- |
| Framework | React 19 + TypeScript |
| Build | Vite 7 |
| Styling | Tailwind CSS v4 |
| Package manager | pnpm |
| Hosting | Vercel (static) |

There is no CMS and no backend. Content lives in typed modules under `src/content/`, so copy can be
changed without touching layout.

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:5173
```

Other scripts:

```bash
pnpm build      # typecheck + production build into dist/
pnpm preview    # serve the production build locally
pnpm lint       # eslint
pnpm typecheck  # tsc only
pnpm images     # regenerate everything under public/img and public/presse
```

## How it is put together

```
archive/hellelundtrio.dk/   Capture of the old site: Danish copy, notes, original photos
scripts/build-images.ts     Derives every shipped image from that archive
src/content/                All text and data, one module per area
src/components/             Reusable pieces (Picture, Section, VideoEmbed, Header, Footer, CallButton)
src/sections/               One module per section of the page
public/img/                 Generated responsive AVIF/WebP/JPEG — do not edit by hand
public/presse/              Generated press downloads — do not edit by hand
```

### Editing content

Everything a non-developer would want to change is in `src/content/`:

| File | Contains |
| --- | --- |
| `site.ts` | Name, role line, phone, email, domain, navigation |
| `about.ts` | Biography, credentials, affiliations, funders |
| `services.ts` | The four things that can be booked |
| `talks.ts` | TEDx talk, research figures, speaking topics |
| `trio.ts` | Members, booking types, albums, videos, projects |
| `musicstar.ts` | The MusicStar section |
| `press.ts` | Press photos and their credits |

`site.ts` holds `url`, which drives the canonical link, Open Graph tags and the sitemap. Update it
there when the final domain is settled, and also in `index.html`, `public/robots.txt` and
`public/sitemap.xml`.

### Images

`pnpm images` reads the originals in `archive/` and writes:

- `public/img/` — responsive AVIF, WebP and JPEG at several widths, plus `public/og.jpg`
- `public/presse/` — press downloads capped at 3000 px wide
- `src/images.generated.ts` — a manifest the `Picture` component uses for `srcset` and intrinsic size

The output is committed so a deploy never depends on sharp being installable. Re-run the script
after adding or replacing a source photo.

Full-resolution originals (up to 14 MB) stay in `archive/` and are not served.

## Deploying to Vercel

The repo is already configured — `vercel.json` sets the framework, build command and cache headers.

1. Import the repository in Vercel.
2. Confirm the build command is `pnpm build` and the output directory is `dist`.
3. Add the domain and point DNS at Vercel.
4. Redirect the old `hellelundtrio.dk` domain to the new one so existing links and search results
   keep working.

No environment variables are needed.

## Decisions worth knowing

**Booking is by phone and mail only.** There is no contact form anywhere, by request. The phone
number is the primary call to action in the header, hero, services section and contact section.

**Nothing third-party loads up front.** Fonts are self-hosted from `public/fonts/` rather than
Google Fonts, which keeps visitor IPs out of a third party's logs — worth having right on a site
belonging to a clinician. YouTube is only contacted when a visitor clicks play; until then the
embeds are static thumbnails from `i.ytimg.com`.

**The therapy section covers talks, courses and consulting — not clinical treatment.** Advertising
one-to-one patient therapy raises consent and GDPR questions that are Helle's call, not a
developer's, so the page deliberately stops short of it.

**The MusicStar keeps its own site.** The section here explains Helle's role and links out to
[themusicstar.dk](https://www.themusicstar.dk/); it does not try to reproduce the app's own pages or
sell subscriptions.

**Institutions are named in text, not logos.** There are no usage rights on file for the marks of
Aalborg Universitetshospital, KUNSTEN and the rest.

## Still needed from Helle

Nothing on the page is invented — where material was missing the section was left out rather than
filled with placeholder copy. These are the known gaps:

- [ ] **Danske Årstidssange cover.** The real sleeve 404'd on the old server. The site currently
      shows the trio's own "feat. Hans Ulrik" artwork from the press assets. Needs the actual cover
      from Helle or Gateway Music. See `src/content/trio.ts`.
- [ ] **Testimonials.** The strongest quotes available belong to MusicStar's own marketing, so no
      testimonial section was built. If Helle can supply approved quotes from organisers or course
      participants, there is a natural place for them after the services section.
- [ ] **Rytmeworkshop detail.** The workshop formats are described from what the old site said.
      Typical duration, group size and price range would make the section far more bookable.
- [ ] **Current concert dates.** The old site only linked to Facebook and there is no calendar.
      A dated list would be a good addition to the trio section.
- [ ] **A recent photograph.** The press photos date from around 2014.
- [ ] **Final domain**, so canonical URLs and the sitemap can be pointed at it.

## Credits

Press photography: **Per Feder, NG21** — must be credited wherever the four trio photos are used.
The credit is attached to the photo data in `src/content/press.ts` so a photo cannot be rendered
without it.
