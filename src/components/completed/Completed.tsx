import React, {FC} from 'react'
import { useSelector } from 'react-redux'
import congratulations from '../../assets/images/congratulations.png'
import { useAppDispatch } from '../../hooks/hooks'
import { setOpenCart } from '../../store/reducers/openCartSlice'
import { cartTotalPriceSelector } from '../../store/selectors'
import Button from '../UI/button/Button'
import './completed.scss'



const Completed:FC = () => {
  const totalPrice = useSelector(cartTotalPriceSelector) as number;
  const dispatch=useAppDispatch()

  return (
    <div className='completed'>
    <div className='completed-img'>
      <img src={congratulations} alt="congratulations" />
    </div>
    <h2 className='completed-title'>Congratulations!</h2>
    <p>Your order has successfully placed<br/> and started processing.</p>
    <div className="completed-total">
      <p>Total</p>
      <p>${totalPrice}</p>
    </div>
    <div className="completed-mobile-button">
      <Button onClick={()=>dispatch(setOpenCart(false))}>
        Go Home
      </Button>
    </div>
  </div>
  )
}

export default Completed