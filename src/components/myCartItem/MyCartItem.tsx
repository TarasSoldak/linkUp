import React, { FC } from 'react'
import './myCartItem.scss'
import myCartBag from '../../assets/images/myCartBag.png'
import exit from '../../assets/images/exit.png'
import plus from '../../assets/images/plus.png'
import minus from '../../assets/images/minus.png'




interface IMyCartItemProps {
  imageURL: string
  name: string
  price: number
  quantity: number
  id: number
  handlerDecrement: (id: number) => void
  handlerIncremet: (id: number) => void
  handlerClear: (id: number) => void
}

const MyCartItem: FC<IMyCartItemProps> = (
  { id, imageURL, name, price, quantity = 0, handlerDecrement, handlerIncremet, handlerClear }
) => {
  return (
    <div className="my-cart-item-block">
      <div className="my-cart-item">
        <div className="item-img">
          <img src={!imageURL ? myCartBag : imageURL} alt="myCartBag" />
        </div>
        <div className="item-img-text">
          <h5>{name}</h5>
          <p>${price}</p>
        </div>
      </div>
      <div className="my-cart-exit" onClick={() => handlerClear(id)}>
        <img src={exit} alt="exit" />
      </div>
      <div className="plus-minus">
        <div className="plus-minus-block">
          <button className='plus-minus-img' disabled={quantity===1} onClick={() => handlerDecrement(id)}>
              <img src={minus} alt="minus"  />
          </button>
          <div className="my-cart-count">
            <p>{quantity}</p>
          </div>
          <button className='plus-minus-img'  onClick={() => handlerIncremet(id)}>
            <img src={plus} alt="plus" />
          </button>
        </div>

      </div>
    </div>
  )
}

export default MyCartItem