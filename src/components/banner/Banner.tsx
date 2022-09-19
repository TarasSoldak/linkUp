import React, {FC,useEffect } from 'react'
import './banner.scss'
import banner from '../../assets/images/banner.png'
import bannerTitle from '../../assets/images/bannerTitle.png'
import { useAppDispatch } from '../../hooks/hooks'
import { fetchPhotosBanner } from '../../store/reducers/photosBannerImgSlice'

const Banner:FC = () => {
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(fetchPhotosBanner())
  }, [dispatch])

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