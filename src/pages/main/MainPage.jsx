import React, { useState } from 'react'
import AllProducts from '../../components/allProducts/AllProducts'
import Banner from '../../components/banner/Banner'
import Categories from '../../components/categories/Categories'
import Header from '../../components/header/Header'
import MyCart from '../../components/myCart/MyCart'
import './mainPage.scss'

const MainPage = () => {
  const [openCart, setOpenCart]=useState(false)
  const [splashScreen, setSplashScreen]=useState(true)
  return (
    <>
    <div className={splashScreen ?'main': null} onClick={()=>setSplashScreen(false)}></div>
      
    <div className="wrapper">
    <Header setOpenCart={setOpenCart}/>
    </div>
      <div className='line'></div>
      <div className="wrapper">
       <Banner />
        <Categories/>
        <AllProducts setOpenCart={setOpenCart}/>
        </div>
       {openCart && <MyCart setOpenCart={setOpenCart} />}
    
    </>
  )
}

export default MainPage