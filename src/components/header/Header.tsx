import React, { FC, useEffect, useState } from 'react'
import logo from '../../assets/images/logoHeader.png'
import menu from '../../assets/images/menu.png'
import user from '../../assets/images/user.png'
import Input from '../UI/input/Input'
import './header.scss'
import Button from '../UI/button/Button'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { setProductQuery } from '../../store/reducers/allProductsSlice'
import { setOpenCart } from '../../store/reducers/openCartSlice'
import { cartTotalSelector } from '../../store/selectors'
import { useSelector } from 'react-redux'
import { LOGIN, SINGUP } from '../../links/links'

interface IHeaderProps{
  setOpenCart:(bool:boolean)=>void
}

const Header: FC<IHeaderProps> = () => {
  const dispatch = useAppDispatch()
  const { isAuth } = useAppSelector(state => state.login)
  const [searchProduct, setSearchProduct] = useState('')

  const cartTotal =useSelector(cartTotalSelector) as number


    useEffect(() => {
      dispatch(setProductQuery(searchProduct))
    }, [dispatch, searchProduct])
    
  const trolleyHandler=()=>{
    if(isAuth){
      dispatch(setOpenCart(true))
    }
  }
  

  return (
    <header>
      <div className='logo-wrapper'>
        <img src={logo} alt='logo' />
      </div>
      <div className='input-wrapper'>
        <Input
          className='search-input'
          placeholder='Search...'
          type='text'
          value={searchProduct}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchProduct(e.target.value)}
        />
      </div>
      <div className='trolley-wrapper' onClick={trolleyHandler}>
        <div className='trolley-img'>
          <span>{cartTotal}</span>
        </div>
      </div>
      {!isAuth ?
        <div className='header-button-block'>
          <div className='header-button'>
            <Button>
              <Link to={LOGIN}>Log in</Link>
            </Button>
          </div>
          <div>
            <Button>
              <Link to={SINGUP}>Sing up</Link>
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