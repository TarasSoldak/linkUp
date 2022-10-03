import React, { FC, useEffect } from 'react'
import './banner.scss'
import banner from '../../assets/images/banner.png'
import bannerTitle from '../../assets/images/bannerTitle.png'
import { useAppDispatch } from '../../hooks/hooks'
import { fetchPhotosBanner } from '../../store/reducers/photosBannerImgSlice'
import Slider from "react-slick";



 const Banner:FC =()=> {
  const dispatch = useAppDispatch()
    useEffect(() => {
      dispatch(fetchPhotosBanner())
    }, [dispatch])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (


    <Slider {...settings} className='slider'>
      <div className='banner'>
        <img src={banner} alt='banner' className='banner-img' />
        <div className='banner-text-wrapper'>
          <h2>Premium Midseason Sale</h2>
          <img src={bannerTitle} alt='bannerText' />
        </div>
      </div>
      <div className='banner'>
        <img src={banner} alt='banner' className='banner-img' />
        <div className='banner-text-wrapper'>
          <h2>Premium Midseason Sale</h2>
          <img src={bannerTitle} alt='bannerText' />
        </div>
      </div>
      <div className='banner'>
        <img src={banner} alt='banner' className='banner-img' />
        <div className='banner-text-wrapper'>
          <h2>Premium Midseason Sale</h2>
          <img src={bannerTitle} alt='bannerText' />
        </div>
      </div>
      <div className='banner'>
        <img src={banner} alt='banner' className='banner-img' />
        <div className='banner-text-wrapper'>
          <h2>Premium Midseason Sale</h2>
          <img src={bannerTitle} alt='bannerText' />
        </div>
      </div>
    </Slider>

  );
}
export default Banner