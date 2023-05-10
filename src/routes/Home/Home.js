import Overwiew from "./Overview/Overview";
import HeroSection from "./hero/HeroSection";



import React from 'react'

const Home = () => {
  return (
    <div className="home ">
    <HeroSection/>
    <Overwiew/>
    </div>
  )
}

export default Home