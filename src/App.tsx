import React from 'react'
import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'
import DateTicker from '@/sections/DateTicker'
import About from '@/sections/About'
import AboutRun from '@/sections/AboutRun'
import Event from '@/sections/Event'
import Quote from '@/sections/Quote'
import Speakers from '@/sections/Speakers'
import Cta from '@/sections/Cta'
import Faq from '@/sections/Faq'
import Footer from '@/sections/Footer'

function App() {
  return (
    <div className="font-serif antialiased bg-[#000000] text-white">
      <Navbar />
      <Hero />
      <DateTicker />
      <About />
      <AboutRun />
      {/*<Event />*/}
      {/*<Quote />*/}
      <Speakers />
      <Cta />
      <Faq />
      <Footer />
    </div>
  )
}

export default App
