import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { useSectionTheme } from './hooks/useSectionTheme'
import { About } from './sections/About'
import { Affiliations } from './sections/Affiliations'
import { Contact } from './sections/Contact'
import { Hero } from './sections/Hero'
import { MusicStar } from './sections/MusicStar'
import { Press } from './sections/Press'
import { Services } from './sections/Services'
import { Speaking } from './sections/Speaking'
import { Trio } from './sections/Trio'

export default function App() {
  const { current } = useSectionTheme()

  return (
    <>
      <a
        href="#om"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-gold focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-gold-on"
      >
        Spring til indhold
      </a>
      <Header currentSection={current} />
      <main>
        <Hero />
        <About />
        <Services />
        <Affiliations />
        <Speaking />
        <Trio />
        <MusicStar />
        <Press />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
