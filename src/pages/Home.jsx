import React from 'react'
import Header from '../components/Header'
import Location from '../components/Location'
import Properties from '../components/Properties'
import FeaturedSection from '../components/FeaturedSection'
import TestimonialCard from '../components/TestimonialCard'
import OurJourney from '../components/OurJourney'
import MeetOurAgents from '../components/MeetOurAgents'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Header />
      <Location />
      <Properties />
      <FeaturedSection />
      <TestimonialCard />
      <OurJourney />
      <MeetOurAgents />
      <Footer/>
    </div>
  )
}

export default Home
