import React from 'react'
import congratulations from '../../assets/images/congratulations.png'
import Button from '../UI/button/Button'
import './completed.scss'

const Completed = ({setOpenCart}) => {
  return (
    <div className='completed'>
    <div className='completed-img'>
      <img src={congratulations} alt="congratulations" />
    </div>
    <h2 className='completed-title'>Congratulations!</h2>
    <p>Your order has successfully placed<br/> and started processing.</p>
    <div className="completed-total">
      <p>Total</p>
      <p>$3,346.00</p>
    </div>
    <div className="completed-mobile-button">
      <Button onClick={()=>setOpenCart(false)}>
        Go Home
      </Button>
    </div>
  </div>
  )
}

export default Completed