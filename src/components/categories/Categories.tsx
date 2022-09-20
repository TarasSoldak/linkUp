import React, { FC, useEffect, useState } from 'react'
import './categories.scss'
import allCategories from '../../assets/images/allCategories.png'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { fetchCategories } from '../../store/reducers/categoriesSlice'

const Categories: FC = () => {
  const [active, setActive] = useState<number | null>(null)
  const dispatch = useAppDispatch()
  const { categories, isLoading, isError } = useAppSelector(state => state.categories)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  return (
    <>
      <h3 className='h3'>Categories</h3>
      <div className="categories">

        {!categories.length && isLoading && <div className='loading'>Loading...</div>}
        {isError && <div className='fetchError'>{isError}</div>}
        {categories && categories.map(category => {
          return <div className="categories-item" key={category.id} onClick={()=>setActive(category.id)}>
            <div className="categories-img">
              <img src={!category.imageURL ? allCategories : category.imageURL} alt="img" />
            </div>
            <p className={`category-name ${active === category.id && 'name-active'}`}>{category.name}</p>
          </div>
        })}
      </div>
    </>
  )
}

export default Categories