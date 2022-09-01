import React, { useState } from 'react'
import './myCart.scss'
import myCartBg from '../../assets/images/myCartBg.png'
import myCartBag from '../../assets/images/myCartBag.png'
import myCartEarring from '../../assets/images/myCartEarring.png'
import exit from '../../assets/images/exit.png'
import './myCart.scss'
import MyCartItem from '../myCartItem/MyCartItem'
import Button from '../UI/button/Button'
import Completed from '../completed/Completed'

const MyCart = ({ setOpenCart }) => {
  const [completed, setCompleted] = useState(false)
  return (
    <div className='my-cart'>
      <img src={myCartBg} alt="myCartBg" />
      <div className="my-cart-block">
        <div className="img-exit" onClick={() => setOpenCart(false)}>
          <img src={exit} alt="exit" />
        </div>
        {completed ?
          <Completed setOpenCart={setOpenCart}/>
          : <>
            <h2>My Cart</h2>
            <MyCartItem
              name='Wiley Saddle Bag - Fossil'
              price='$180.00'
              img={myCartBag}
              count={1}
            />
            <MyCartItem
              name='Jennifer Behr'
              price='$268.00'
              img={myCartEarring}
              count={1}
            />
            <MyCartItem
              name='Wiley Saddle Bag - Fossil'
              price='$180.00'
              img={myCartBag}
              count={1}
            />
            <div className="total-count">
              <div className="total-count-price">
                <p>$3,346.00</p>
                <p>Total Price</p>
              </div>
              <div className="total-count-button">
                <Button onClick={() => setCompleted(true)}>Checkout</Button>
              </div>
            </div>
          </>}
      </div>

    </div>
  )
}

export default MyCart