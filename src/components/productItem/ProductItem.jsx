import React from 'react'
import plus from '../../assets/images/plus.png'
import './productItem.scss'

const ProductItem = ({urlImg}) => {
  return (
    <div className="products-item">
    <img src={urlImg} alt="womanBag" />
    <p className='product-title'>Wiley Saddle Bag - Fossil</p>
    <p className='product-text'>234 Sold</p>
    <div className='product-price'>
      <p>$180.00</p>
      <div className='plus'>
        <img src={plus} alt="plus" />
      </div>
    </div>
  </div>
  )
}

export default ProductItem