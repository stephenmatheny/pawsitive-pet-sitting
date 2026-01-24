import Layout from './components/Layout'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import WhyUs from './components/WhyUs'
import About from './components/About'
import PeaceOfMind from './components/PeaceOfMind'
import Testimonials from './components/Testimonials'
import ServiceArea from './components/ServiceArea'
import CTA from './components/CTA'

function App() {
  return (
    <Layout>
      <Hero />
      <TrustStrip />
      <Services />
      <HowItWorks />
      <WhyUs />
      <About />
      <PeaceOfMind />
      <Testimonials />
      <ServiceArea />
      <CTA />
    </Layout>
  )
}

export default App
