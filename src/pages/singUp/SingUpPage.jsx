import React from 'react'
import singUpImg from '../../assets/images/singUpImg.png'
import exit from '../../assets/images/exit.png'
import Button from '../../components/UI/button/Button'
import Input from '../../components/UI/input/Input'
import './singUp.scss'
import { useNavigate } from 'react-router-dom'

const SingUpPage = () => {
  const navigate = useNavigate()
  const buttonHandler = (e) => {
    e.preventDefault()
    navigate('/login')
  }
  return (
    <div className='sing-up'>
      <div className="sing-up-img">
        <img src={singUpImg} alt="singUpImg" />
      </div>
      <div className="sing-up-form">
        <div className='form-block'>
          <h2>Sing Up</h2>
          <p>Just a few quick steps to create your account</p>
          <form>
            <div className="form-block-item">
              <Input placeholder='First Name' type='text' />
              <Input placeholder='Last Name' type='text' />
            </div>
            <Input placeholder='Email addres' type='email' />
            <Input placeholder='Password' type='passward' />
            <Input placeholder='Confirm password' type='passward' />
            <Button onClick={buttonHandler} type='submit'>Next</Button>

          </form>
          <div className="back">
            <p>Back to <span onClick={() => navigate('/login')}>login</span></p>
          </div>
        </div>
        <span className='exit' onClick={() => navigate('/')}>
          <img src={exit} alt="exit" />
        </span>
      </div>
    </div>
  )
}

export default SingUpPage