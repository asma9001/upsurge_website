import React from 'react'
import AgentFilter from '../components/AgentFilter'
import Navbar from '../components/Navbar'
import BlogSection from '../components/BlogSection'
import AreasWeCover from '../components/AreasWeCover'
import Footer from '../components/Footer'

const Agents = () => {
  return (
    <div>
      <Navbar />
      <AgentFilter/>
      <BlogSection/>
      <AreasWeCover/>
        <Footer/>
    </div>
  )
}

export default Agents
