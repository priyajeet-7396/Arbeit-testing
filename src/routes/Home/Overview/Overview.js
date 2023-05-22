import React from 'react'
import Carousel from '../../../components/Carousel/Carousel'
import  {countries}  from '../../../data'
import './Overview.css'

const Overview = () => {
  return (
    <div className='Container'>
    <div className='topContent'>
        <Carousel images={countries} />
       
    </div>

    </div>
  )
}

export default Overview