import React from 'react'
import './allProducts.scss'
import basketBag from '../../assets/images/basketBag.png'
import bag from '../../assets/images/bag.png'
import manBag from '../../assets/images/manBag.png'
import decoration from '../../assets/images/decoration.png'
import earring from '../../assets/images/earring.png'
import womanBag from '../../assets/images/womanBag.png'
import miniBag from '../../assets/images/miniBag.png'
import multiBag from '../../assets/images/multiBag.png'
import hoop from '../../assets/images/hoop.png'
import mobileTrolley from '../../assets/images/mobileTrolley.png'
import mobileHome from '../../assets/images/mobileHome.png'
import Button from '../UI/button/Button'
import { useNavigate } from 'react-router-dom'
import ProductItem from '../productItem/ProductItem'

const AllProducts = ({ setOpenCart }) => {
  const navigate = useNavigate()
  return (
    <>
      <h3 className='h3'>All products</h3>
      <div className="products" onClick={() => navigate('/product')}>
        <ProductItem urlImg={basketBag} />
        <ProductItem urlImg={bag} />
        <ProductItem urlImg={manBag} />
        <ProductItem urlImg={decoration} />
        <ProductItem urlImg={earring} />
        <ProductItem urlImg={womanBag} />
        <ProductItem urlImg={miniBag} />
        <ProductItem urlImg={multiBag} />
        <ProductItem urlImg={hoop} />
        <ProductItem urlImg={basketBag} />
      </div>
      <div className="product-button">
        <Button>
          View more products
        </Button>
      </div>
      <div className="product-button-mobile">
        <Button>
          <img src={mobileHome} alt="home" onClick={() => navigate('/singUp')} />
          <img src={mobileTrolley} alt="trolley" onClick={() => setOpenCart(true)} />
        </Button>
      </div>
    </>
  )
}

export default AllProducts