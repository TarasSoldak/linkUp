import React, {FC, useState } from 'react'
import './myCart.scss'
import myCartBg from '../../assets/images/myCartBg.png'
import exit from '../../assets/images/exit.png'
import './myCart.scss'
import MyCartItem from '../myCartItem/MyCartItem'
import Button from '../UI/button/Button'
import Completed from '../completed/Completed'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { clear, decrement, increment } from '../../store/reducers/cartSlice'
import { useSelector } from 'react-redux'
import { cartTotalPriceSelector } from '../../store/selectors'
import { setOpenCart } from '../../store/reducers/openCartSlice'



const MyCart:FC = () => {
  const [completed, setCompleted] = useState(false)
  const cart = useAppSelector(state => state.cart)
  const dispatch = useAppDispatch()
  const totalPrice = useSelector(cartTotalPriceSelector) as number;

  const handlerIncremet=(id:number)=>{
  dispatch(increment(id))
  }
  const handlerDecrement=(id:number)=>{
  dispatch(decrement(id))
  }
  const handlerClear=(id:number)=>{
  dispatch(clear(id))
  }
  const handlerCheckout=()=>{
    if(cart.length){
      setCompleted(true)
    }

  }

  return (
    <div className='my-cart'>
      <img src={myCartBg} alt="myCartBg" />
      <div className="my-cart-block">
        <div className="img-exit" onClick={() => dispatch(setOpenCart(false))}>
          <img src={exit} alt="exit" />
        </div>
        {completed ?
          <Completed/>
          : <>
            <h2>My Cart</h2>
            {cart.map(cartItem => {
              return <MyCartItem 
              key={cartItem.id} 
              {...cartItem}
              handlerDecrement={handlerDecrement}
              handlerIncremet={handlerIncremet}
              handlerClear={handlerClear}
              />
            })
            }
           
            <div className="total-count">
              <div className="total-count-price">
                <p>${totalPrice}</p>
                <p>Total Price</p>
              </div>
              <div className="total-count-button">
                <Button onClick={handlerCheckout}>Checkout</Button>
              </div>
            </div>
          </>}
      </div>

    </div>
  )
}

export default MyCart