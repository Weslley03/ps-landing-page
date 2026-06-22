import { Header } from '../components/landing/Header'
import { Hero } from '../components/landing/Hero'
import { HowItWorks } from '../components/landing/HowItWorks'
import { Features } from '../components/landing/Features'
import { MultiGroup } from '../components/landing/MultiGroup'
import { Pricing } from '../components/landing/Pricing'
import { Footer } from '../components/landing/Footer'

/** Página principal: composição das seções da landing. */
export function Landing() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <MultiGroup />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
