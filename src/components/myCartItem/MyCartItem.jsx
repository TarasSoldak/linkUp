import React from 'react'
import './myCartItem.scss'
import exit from '../../assets/images/exit.png'
import plus from '../../assets/images/plus.png'
import minus from '../../assets/images/minus.png'

const MyCartItem = ({ img, name, price,count }) => {
  return (
    <div className="my-cart-item-block">
      <div className="my-cart-item">
        <div className="item-img">
          <img src={img} alt="myCartBag" />
        </div>
        <div className="item-img-text">
          <h5>{name}</h5>
          <p>{price}</p>
        </div>
      </div>
      <div className="my-cart-exit">
          <img src={exit} alt="exit" />
        </div>
      <div className="plus-minus">
       
        <div className="plus-minus-block">
          <div className='plus-minus-img'>
            <img src={minus} alt="minus" />
          </div>
          <div className="my-cart-count">
            <p>{count}</p>
          </div>
          <div className='plus-minus-img'>
            <img src={plus} alt="plus" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default MyCartItem