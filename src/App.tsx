import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss';
import LoginPage from './pages/login/LoginPage'
import MainPage from './pages/main/MainPage'
import ProductPage from './pages/product/ProductPage'
import SingUpPage from './pages/singUp/SingUpPage'

const App:FC =() =>{
  return (
    <div className="App">
      <Routes>
        <Route path='/linkup' element={ <MainPage/>}/>
        <Route path='/singUp' element={<SingUpPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
