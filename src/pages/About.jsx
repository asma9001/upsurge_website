import React from 'react'
import OurJourney from '../components/OurJourney'
import Navbar from '../components/Navbar'
import OurValues from '../components/OurValues'
import Achievements from '../components/Achievements'
import UpsurgeSteps from '../components/UpsurgeSteps'
import TeamSection from '../components/UpsurgeTeam'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
        <Navbar />
        <OurJourney starColor="#4C4C4C" />
        <OurValues/>
        <Achievements/>
        <UpsurgeSteps/>
        <TeamSection/>
        <Footer/>

      
    </div>
  )
}

export default About
