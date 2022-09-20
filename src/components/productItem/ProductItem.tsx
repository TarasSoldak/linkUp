import React, { FC } from 'react'
import plus from '../../assets/images/plus.png'
import success from '../../assets/images/success.png'
import basketBag from '../../assets/images/basketBag.png'

import { IProduct } from '../../store/reducers/allProductsSlice'
import './productItem.scss'
import { useAppSelector } from '../../hooks/hooks'

interface IProductProps {
  item: IProduct
  setProductDetails: (id: number) => void
  handlerAddToCart: (item: IProduct) => void
}


const ProductItem: FC<IProductProps> = ({ item, setProductDetails, handlerAddToCart }) => {
  const cart = useAppSelector(state => state.cart)
  return (
    <div className="products-item" >
      <img src={!item.imageURL ? basketBag : item.imageURL} alt="womanBag" onClick={() => setProductDetails(item.id)} />
      <p className='product-title'>{item.name}</p>
      <p className='product-text'>{item.soldCount} Sold</p>
      <div className='product-price'>
        <p>${item.price}</p>
        {cart.find(cartItem => cartItem.id === item.id)
          ? <div className='plus'><img src={success} alt="success" /></div>
          : <div className='plus' onClick={() => handlerAddToCart(item)}>
            <img src={plus} alt="plus" />
          </div>
        }
      </div>
    </div>
  )
}

export default ProductItem