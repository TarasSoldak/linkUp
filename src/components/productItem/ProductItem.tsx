import React,{FC} from 'react'
import plus from '../../assets/images/plus.png'
import basketBag from '../../assets/images/basketBag.png'

import { IProduct } from '../../store/reducers/allProductsSlice'
import './productItem.scss'

interface IProductProps{
  item:IProduct
  setProductDetails:(id:number)=>void
}



const ProductItem:FC<IProductProps> = ({item,setProductDetails}) => {
  return (
    <div className="products-item" onClick={()=>setProductDetails(item.id)}>
    <img src={!item.imageURL ? basketBag : item.imageURL} alt="womanBag" />
    <p className='product-title'>{item.name}</p>
    <p className='product-text'>{item.soldCount} Sold</p>
    <div className='product-price'>
      <p>{item.price}</p>
      <div className='plus'>
        <img src={plus} alt="plus" />
      </div>
    </div>
  </div>
  )
}

export default ProductItem