import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import LoginPage from './pages/login/LoginPage';
import MainPage from './pages/main/MainPage';
import ProductPage from './pages/product/ProductPage';
import SingUpPage from './pages/singUp/SingUpPage';

function App() {
  const [auth, setAuth]=useState(false)
  return (
    <div className="App">
      <Routes>
        <Route index element={ <MainPage auth={auth}/>}/>
        <Route path='/singUp' element={<SingUpPage/>}/>
        <Route path='/login' element={<LoginPage setAuth={setAuth}/>}/>
        <Route path='/product' element={<ProductPage auth={true}/>}/>
      </Routes>
    </div>
  );
}

export default App;
