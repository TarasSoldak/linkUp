import React, { FC, useEffect, useState } from 'react'
import './categories.scss'
import allCategories from '../../assets/images/allCategories.png'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { fetchCategories } from '../../store/reducers/categoriesSlice'
import fetchProductsByCategories from '../../store/reducers/productsByCategoriesSlice'

const Categories: FC = () => {
  const [active, setActive] = useState<number | null>(null)
  const dispatch = useAppDispatch()
  const { categories, isLoading, isError } = useAppSelector(state => state.categories)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])
const setProductsByCategories=(id:number)=>{
  dispatch(fetchProductsByCategories(id))
  setActive(id)
}
  return (
    <>
      <h3 className='h3'>Categories</h3>
      <div className="categories">

        {!categories.length && isLoading && <div className='loading'>Loading...</div>}
        {isError && <div className='fetchError'>{isError}</div>}
        <div className="categories-block">
        {categories && categories.map(category => {
          return <div className="categories-item" key={category.id} onClick={()=>setProductsByCategories(category.id)}>
            <div className="categories-img">
              <img src={!category.imageURL ? allCategories : category.imageURL} alt="img" />
            </div>
            <p className={`category-name ${active === category.id && 'name-active'}`}>{category.name}</p>
          </div>
        })}
        </div>
      </div>
    </>
  )
}

export default Categories