import React from 'react'
import '../../../css/Cart.css'
// import cart from '../../img/cart.png'
import cart1 from '../../../img/cart.webp'
import { useNavigate } from 'react-router-dom' 

export default function Cart() {
    const navigate = useNavigate()

    function drinks(){
        const drinksRoute = '/drinks'
        navigate(drinksRoute)
    }
  return (
    <div className='cart'>
      <div className="cart-content">
        <div className="cart-image">
            <img src={cart1} alt="" />
        </div>
        <h5>Your cart is empty!</h5>
        <p>Browse our categories and discover beverages suited to your taste.</p>
        <button onClick={drinks}>Start Shopping</button>
      </div>
    </div>
  )
}
