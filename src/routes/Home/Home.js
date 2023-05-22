import ParallaxSentence from "./Intro/ParallaxSentence";
import Approach from "./OurApproach/Approach";
import Overwiew from "./Overview/Overview";
import HeroSection from "./hero/HeroSection";
import React from 'react'



const Home = () => {
  return (
    <div className="home ">
    <HeroSection/>
    <ParallaxSentence/>
    <Overwiew/>
    <Approach/>
    </div>
  )
}

export default Home   
