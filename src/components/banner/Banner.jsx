import React from 'react'
import './banner.scss'
import banner from '../../assets/images/banner.png'
import bannerTitle from '../../assets/images/bannerTitle.png'

const Banner = () => {
  return (
    <>
    <div className='banner'>
      <img src={banner} alt='banner' className='banner-img' />
      <div className='banner-text-wrapper'>
        <h2>Premium Midseason Sale</h2>
        <img src={bannerTitle} alt='bannerText' />
      </div>
    </div>
    <div className='banner-circle'>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
      </div>
    </>
  )
}

export default Banner