import React from 'react'
import { useNavigate } from 'react-router-dom'
import loginImg from '../../assets/images/loginImg.png'
import Button from '../../components/UI/button/Button'
import Input from '../../components/UI/input/Input'
import exit from '../../assets/images/exit.png'

import './login.scss'

const LoginPage = ({setAuth}) => {
  const navigate = useNavigate()
  const login = (e) => {
    e.preventDefault()
    navigate('/linkup')
    setAuth(true)
  }
  return (
    <div className='login'>
      <div className="login-img">
        <img src={loginImg} alt="loginImg" />
      </div>
      <div className="login-form">
        <div className="login-form-block">
          <h2>Welcome</h2>
          <p>Enter information below for login</p>
          <form>
            <Input placeholder='Email' type='email' />
            <Input placeholder='Password' type='passward' />
            <Button onClick={login}>
              Login
            </Button>
          </form>
          <div className="back" onClick={() => navigate('/singUp')}>
            <p>New user?<span >Sing up</span></p>
          </div>
        </div>
        <span className='exit' onClick={() => navigate('/linkup')}>
          <img src={exit} alt="exit" />
        </span>
      </div>
    </div>
  )
}

export default LoginPage