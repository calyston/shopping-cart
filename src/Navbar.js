import React from 'react'
import { useGlobalContext } from './context'
import logo from './shopping-cart.png';
import { FaShoppingCart } from 'react-icons/fa';


const Navbar = () => {
  const { quantity } = useGlobalContext()
  return (
    <nav>
      <div className="nav-container">
        <img id="logo" src={logo} alt="" />
        <div className="cart-container">
          <p id="counter-circle">{quantity}</p>
          <button className="cart-button"><FaShoppingCart /></button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;