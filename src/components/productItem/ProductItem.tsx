import React,{FC} from 'react'
import plus from '../../assets/images/plus.png'
import basketBag from '../../assets/images/basketBag.png'

import { IProduct } from '../../store/reducers/allProductsSlice'
import './productItem.scss'



const ProductItem:FC<IProduct> = ({name,imageURL,soldCount,price}) => {
  return (
    <div className="products-item">
    <img src={!imageURL ? basketBag : imageURL} alt="womanBag" />
    <p className='product-title'>{name}</p>
    <p className='product-text'>{soldCount} Sold</p>
    <div className='product-price'>
      <p>{price}</p>
      <div className='plus'>
        <img src={plus} alt="plus" />
      </div>
    </div>
  </div>
  )
}

export default ProductItem