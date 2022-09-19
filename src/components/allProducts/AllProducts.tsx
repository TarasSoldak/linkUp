import React, { FC, useEffect } from 'react'
import './allProducts.scss'
import mobileTrolley from '../../assets/images/mobileTrolley.png'
import mobileHome from '../../assets/images/mobileHome.png'
import Button from '../UI/button/Button'
import { Link, useNavigate } from 'react-router-dom'
import ProductItem from '../productItem/ProductItem'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { fetchAllProducts, IProduct } from '../../store/reducers/allProductsSlice'
import { fetchProductDetails } from '../../store/reducers/productDetailsSlice'
import { addToCart } from '../../store/reducers/cartSlice'
import { setOpenCart } from '../../store/reducers/openCartSlice'



const AllProducts: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { isLoading, isError, items, productQuery } = useAppSelector(state => state.allProducts)
  const { isAuth } = useAppSelector(state => state.login)

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  const setProductDetails = (id: number) => {
    dispatch(fetchProductDetails(id))
    navigate(`/product/${id}`)
  }
  const handlerAddToCart = (item: IProduct) => {
    if(isAuth){
    dispatch(addToCart(item))
    }

  }

  return (
    <>
      <h3 className='h3'>All products</h3>
      <div className="products">
        {isLoading && <div className='loading'>Loading...</div>}
        {isError && <div className='fetchError'>{isError}</div>}
        {items.filter(item => item.name.toLowerCase().includes(productQuery.toLowerCase()))
          .map(item => {
            return <ProductItem
              key={item.id} item={item}
              setProductDetails={setProductDetails}
              handlerAddToCart={handlerAddToCart} />
          })}

      </div>
      <div className="product-button">
        <Button>
          View more products
        </Button>
      </div>
      <div className="product-button-mobile">
        <Button>
          <Link to='/singUp'><img src={mobileHome} alt="home" /></Link>
          <img src={mobileTrolley} alt="trolley" onClick={() => dispatch(setOpenCart(true))} />
        </Button>
      </div>
    </>
  )
}

export default AllProducts