import React, { FC } from 'react'
import Header from '../../components/header/Header'
import './product.scss'
import product from '../../assets/images/product.png'
import informationImg from '../../assets/images/informationImg.png'
import infoManBag from '../../assets/images/infoManBag.png'
import infoMiniBag from '../../assets/images/infoMiniBag.png'
import mobileArrow from '../../assets/images/mobileArrow.png'
import mobileInformation from '../../assets/images/mobileInformation.png'
import arrowBottom from '../../assets/images/arrowBottom.png'
import Button from '../../components/UI/button/Button'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { setOpenCart } from '../../store/reducers/openCartSlice'
import MyCart from '../../components/myCart/MyCart'
import { addToCart } from '../../store/reducers/cartSlice'

const ProductPage: FC = () => {
  const { isError, isLoading, productDetails } = useAppSelector(state => state.product)
  const openCart = useAppSelector(state => state.cartOpen.openCart)
  const dispatch = useAppDispatch()
  const cart = useAppSelector(state => state.cart)


  return (
    <>
      <div className='wrapper product-header'>
        <Header setOpenCart={setOpenCart} />
      </div>
      <div className='line'></div>
      {isLoading && <div className='loading'>Loading...</div>}
      {isError && <div className='fetchError'>{isError}</div>}
      <div className='wrapper'>
        <div className="product">
          <p>
            <Link to='/linkup'>
              <span>&#8592;</span>
              back
            </Link>
          </p>
          <div className="product-block">
            <div className='product-block-img'>
              <img src={!productDetails.imageURL ? product : productDetails.imageURL} alt="product" />
            </div>

            <div className="product-block-text">
              <h2>{productDetails.name}</h2>
              <p>{productDetails.soldCount} Sold</p>
              <p>{productDetails.description}</p>
              <div className='line'></div>
              <div className="product-block-price">
                <p> ${productDetails.price}</p>
                {cart.find(cartItem => cartItem.id === productDetails.id)

                  ? <Button disabled={true}>
                    Added to Cart
                  </Button>
                  : <Button onClick={() => dispatch(addToCart(productDetails))}>
                    Add to Cart
                  </Button>
                }
              </div>
            </div>

            <div className='mobile-product-text'>
              <Link to='/linkup'>
                <span>
                  <img src={mobileArrow} alt="arrow" />
                </span>
              </Link>
              <div className="mobile-product-price">
                <p>{productDetails.price} qar</p>
                <p>{productDetails.name}</p>
                <p>{productDetails.soldCount} Sold</p>

              </div>
              <div className="mobile-product-description">
                <h5>Description</h5>
                <p>Finish every look on a note of Parisian chic with the
                  Lou Camera crossbody bag from Saint Laurent,
                  presented here in cream beige. Made in Italy from
                  chevron matelassé leather, the design is adorned
                  with golden hardware, including the iconic YSL
                  monogram logo on the front.</p>
              </div>

            </div>

          </div>
          <div className='line'></div>
          <div className="product-information">
            <h3>Extra information</h3>
            <div className="information-img">
              <img src={informationImg} alt="informationImg" />
            </div>
            <div className="mobile-information-img">
              <img src={mobileInformation} alt="informationImg" />
            </div>
            <h4>Take a look at a new style!</h4>
            <p className='info-text'>No matter where you're heading,
              the Uptown wallet on chain from Saint
              Laurent will lend Parisian glamour to your looks.
              The slimline design comes in moss green leather embossed with a croc-effect, and its envelope silhouette is completed with a gold-toned iteration of the brand's
              iconic YSL monogram plaque.</p>
            <p className='info-text'>Suited for day-to-night styles, the Uptown clutch from Saint Laurent will lend any look a touch of Parisian glamour.</p>
            <p className='info-text'>It's crafted in Italy from black l
              eather and works an envelope silhouette with the monogram
              logo in glossy golden hardware. Carry yours in-hand or swing it from the adjustable shoulder strap.</p>
            <div className="info-img">
              <div className="info-img-one">
                <img src={infoManBag} alt="infoManBag" />
              </div>
              <div className="info-img-two">
                <img src={infoMiniBag} alt="infoMiniBag" />
              </div>

            </div>
            <div className="info-text-wrapper">
              <p className='info-text'>No matter where you're heading,
                the Uptown wallet on chain from Saint
                Laurent will lend Parisian glamour to your looks.
                The slimline design comes in moss green leather embossed with a croc-effect, and its envelope silhouette is completed with a gold-toned iteration of the brand's
                iconic YSL monogram plaque.</p>
              <p className='info-text'>Suited for day-to-night styles, the Uptown clutch from Saint Laurent will lend any look a touch of Parisian glamour.</p>
              <p className='info-text'>It's crafted in Italy from black l
                eather and works an envelope silhouette with the monogram
                logo in glossy golden hardware. Carry yours in-hand or swing it from the adjustable shoulder strap.</p>
              <div className='line'></div>
            </div>
          </div>
          <div className="mobile-button-block">
            <div>
              <img src={arrowBottom} alt="arrowBottom" />
            </div>
            <div className="mobile-button-item">
              <Button>
                Add to Cart
              </Button>
            </div>

          </div>
        </div>
      </div>
      {openCart && <MyCart />}

    </>
  )
}

export default ProductPage