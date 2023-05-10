import React from 'react'
import Carousel from '../../../components/Carousel/Carousel'
import  {countries}  from '../../../data'
import './Overview.css'

const Overview = () => {
  return (
    <div className='Container'>
    <div className='topContent'>
        <h2>Our Solutions</h2>
        <h3>"A Concise Overview of Our Services" </h3>
        <Carousel images={countries} />
       
    </div>

    </div>
  )
}

export default Overview