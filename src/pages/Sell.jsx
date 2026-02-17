import React from 'react'
import Navbar from '../components/Navbar'
import HomeEstimate from '../components/HomeEstimate'
import LocalExpert from '../components/LocalExpert'
import MarketAnalysis from '../components/MarketAnalysis'
import ReadyToMove from '../components/ReadyToMove'
import Footer from '../components/Footer'

const Sell = () => {
    return (
        <div>
            <Navbar />
            <HomeEstimate/>
            <LocalExpert/>
            {/* <MarketAnalysis/> */}
            <ReadyToMove />
              <Footer/>
        </div>

    )
}

export default Sell
