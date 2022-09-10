import React from 'react'
import logo from '../../assets/images/logoHeader.png'
import menu from '../../assets/images/menu.png'
import user from '../../assets/images/user.png'
import Input from '../UI/input/Input'
import './header.scss'
import Button from '../UI/button/Button'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/hooks'

const Header = ({ setOpenCart }) => {
  const {isAuth}=useAppSelector(state=>state.login)
  const navigate = useNavigate()
  return (
    <header>
      <div className='logo-wrapper'>
        <img src={logo} alt='logo' />
      </div>
      <div className='input-wrapper'>
        <Input className='search-input' placeholder='Search...' type='text' />
      </div>
      <div className='trolley-wrapper' onClick={()=>setOpenCart(true)}>
        <div className='trolley-img'>
          <span>3</span>
        </div>
      </div>
      {!isAuth ?
        <div className='header-button-block'>
          <div className='header-button'>
            <Button onClick={() => navigate('/login')}>
              Log in
            </Button>
          </div>
          <div>
            <Button onClick={() => navigate('/singUp')}>
              Sing up
            </Button>
          </div>
        </div>
        :
        <div className='auth'>
          <img src={menu} alt="menu" />
          <img src={user} alt="user" />
        </div>}
    </header>
  )
}

export default Header