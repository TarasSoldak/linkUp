import React, { FC, useEffect } from 'react'
import './allProducts.scss'
import mobileTrolley from '../../assets/images/mobileTrolley.png'
import mobileHome from '../../assets/images/mobileHome.png'
import Button from '../UI/button/Button'
import { Link } from 'react-router-dom'
import ProductItem from '../productItem/ProductItem'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { fetchAllProducts } from '../../store/reducers/allProductsSlice'

interface ProductsProps{
  setOpenCart:(bool:boolean)=>void
}

const AllProducts:FC<ProductsProps> = ({ setOpenCart }) => {
  const dispatch = useAppDispatch()
  const {isLoading,isError,items } = useAppSelector(state => state.allProducts)

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  return (
    <>
      <h3 className='h3'>All products</h3>
      <div className="products">
      {isLoading && <div className='loading'>Loading...</div>}
        {isError && <div className='fetchError'>{isError}</div>}
        { items.map(item=>{
          return <ProductItem key={item.id} {...item}/>
        })}
  
      </div>
      <div className="product-button">
        <Button>
          View more products
        </Button>
      </div>
      <div className="product-button-mobile">
        <Button>
          <Link to='/singUp'><img src={mobileHome} alt="home"/></Link>
          <img src={mobileTrolley} alt="trolley" onClick={() => setOpenCart(true)} />
        </Button>
      </div>
    </>
  )
}

export default AllProducts