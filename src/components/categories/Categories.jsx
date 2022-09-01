import React from 'react'
import './categories.scss'
import allCategories from '../../assets/images/allCategories.png'
import accessories from '../../assets/images/accessories.png'
import gifts from '../../assets/images/gifts.png'
import food from '../../assets/images/food.png'
import diet from '../../assets/images/diet.png'
import beauty from '../../assets/images/beauty.png'
import clothes from '../../assets/images/clothes.png'
import gaming from '../../assets/images/gaming.png'
import coffee from '../../assets/images/coffee.png'

const Categories = () => {
  return (
    <>
      <h3 className='h3'>Categories</h3>
      <div className="categories">
        <div className="categories-item">
          <div className="categories-img">
            <img src={allCategories} alt="all" />
          </div>
          <p className='all'>All categories</p>
        </div>
        <div className="categories-item">
          <div className="categories-img">
            <img src={accessories} alt="accessories" />
          </div>
          <p>Accessories</p>
        </div>
        <div className="categories-item">
          <div className="categories-img">
            <img src={gifts} alt="gifts" />
          </div>
          <p>Gifts</p>
        </div>
        <div className="categories-item">
          <div className="categories-img">
            <img src={food} alt="food" />
          </div>
          <p>Food</p>
        </div>
        <div className="categories-item">
          <div className="categories-img">
            <img src={diet} alt="diet" />
          </div>
          <p>Diet</p>

        </div>
        <div className="categories-item">
          <div className="categories-img">
            <img src={beauty} alt="beauty" />
          </div>
          <p>Beauty</p>
        </div>
        <div className="categories-item">
          <div className="categories-img">
            <img src={clothes} alt="clothes" />
          </div>
          <p>Clothes</p>

        </div>
        <div className="categories-item">
          <div className="categories-img">
            <img src={gaming} alt="gaming" />
          </div>
          <p>Gaming</p>
        </div>
        <div className="categories-item">
          <div className="categories-img">
            <img src={coffee} alt="coffee" />
          </div>
          <p>Coffee</p>
        </div>
      </div>
    </>
  )
}

export default Categories