import ParallaxSentence from "./Intro/ParallaxSentence";
import Approach from "./OurApproach/Approach";
import Overwiew from "./Overview/Overview";
import React from 'react'
import Banner from "../../components/Banner/Banner";
import video1 from '../../assets/video-20.webm';
import video2 from '../../assets/video-24.webm';
import video3 from '../../assets/video-25.webm';
import video4 from '../../assets/video-15.webm';
import video5 from '../../assets/video-40.webm';
import video6 from '../../assets/video-50.webm';

// import image1 from '../../assets/carousel/HR-1.webp';
// import image2 from '../../assets/carousel/Data-3.webp';
// import image3 from '../../assets/carousel/change.webp';


// import OurClients from "./OurClients/OurClients";

import Approachmobile from "./OurApproach/Approach_mobile";




const Home = () => {
  const slides =
  
//  for images 
  // [
  //   {
  //     image: image1,
  //     caption: 'Slide 1',
  //     description: 'Description for Slide 1',
  //   },
  //   {
  //     image: image2,
  //     caption: 'Slide 2',
  //     description: 'Description for Slide 2',
  //   },
  //   {
  //     image: image3,
  //     caption: 'Slide 3',
  //     description: 'Description for Slide 3',
  //   },
  // ];



  // for video
  [
    {
      video: video2,
      caption: 'Purpose Driven Solutions and Products.',
      description: 'We employ technology to address livelihood, wealth, and agricultural challenges ',
      des: "nurturing a better future for generations to come",
    },
    {
      video: video1,
      caption: 'Human Capital',
      title: '  A vital factor in the success of any business.',
      description: 'We help you with the right methods and strategies for an efficient, productive and engaged workforce.',
    },
    {
      video: video4,
      caption: 'Fighting challenges facing food and agriculture has the potential to save an estimated $2.3 trillion',
      description: ' $250 billions of those yearly savings could come from AI and data analytics alone',
      des: "We help you create that solution",
    },
    {
      video: video3,
      caption: ' Data and Digitization accelerates  innovation in',
      title: ' Financial Institutions ',
      description: 'We empower Growth, Mitigate Risk, and maximize savings',
      des: "through the strategic utilization of Data, AI and Digitization.",
    },
    {
      video: video5,
      caption: '  Predict. Invest. Prosper.',
      description: 'Unlocking stock insights for wealth creation.',
    },
    {
      video: video6,
      caption: 'Leading the Way in Legal, Compliance and Innovation',
      description: 'Leveraging cutting-edge technologies, our solutions eliminate tedious and labor-intensive tasks, allowing your team to focus on more strategic and value-added activities.',
    },
  ];

  return (
    <div className="home ">

   <Banner slides={slides} />
    <Approach/>
    <Approachmobile/>
    <ParallaxSentence/>
    <Overwiew/>

    </div>
  )
}

export default Home   
