import React, { FC, useState } from 'react'
import AllProducts from '../../components/allProducts/AllProducts'
import Banner from '../../components/banner/Banner'
import Categories from '../../components/categories/Categories'
import Header from '../../components/header/Header'
import MyCart from '../../components/myCart/MyCart'
import { useAppSelector } from '../../hooks/hooks'
import { setOpenCart } from '../../store/reducers/openCartSlice'
import './mainPage.scss'

const MainPage:FC = () => {
  const [splashScreen, setSplashScreen]=useState<boolean>(true)
  const openCart= useAppSelector(state=>state.cartOpen.openCart)
  




  return (
    <>
    <div className={splashScreen ?'main': ''} onClick={()=>setSplashScreen(false)}></div>
      
    <div className="wrapper">
    <Header setOpenCart={setOpenCart}/>
    </div>
      <div className='line'></div>
      <div className="wrapper">
       <Banner />
        <Categories/>
        <AllProducts/>
        </div>
       {openCart && <MyCart/>}
    
    </>
  )
}

export default MainPage