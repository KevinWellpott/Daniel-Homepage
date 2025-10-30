'use client'

import Header from './components/Header'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Maps from './components/Maps'
import BubbleBackground from './components/BubbleBackground'
import Team from './components/Team'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <BubbleBackground />
      <Header />
      <Team />
      <Services />
      <Testimonials />
      <Maps />
      <Footer />
    </>
  )
}


