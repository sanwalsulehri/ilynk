import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import IndustrySpecific from './components/IndustrySpecific'
import Simulation from './components/Simulation'
import TalkToUs from './components/TalktoUs'

const page = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <IndustrySpecific />
    <Simulation />
    <TalkToUs />
    </>
  )
}

export default page