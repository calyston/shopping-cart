import React from 'react'
import { useGlobalContext } from './context'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const CartItem = ({ id, title, price, img, quantity }) => {
  const { removeItem } = useGlobalContext();

  return (
    <article className="cart-item">
      <div className="item-details">
        <img src={img} alt={title} />
        <div>
          <h4>{title}</h4>
          <p className="item-price">£{price}</p>
          <button className="remove-button" onClick={() => removeItem(id)}>Remove</button>
        </div>
      </div>
      <div className="quantity-box">
        <button className="quantity-button" onClick={() => console.log('increase quantity')}><FaChevronUp /></button>
        <p className="quantity">{quantity}</p>
        <button className="quantity-button" onClick={() => console.log('decrease quantity')}><FaChevronDown /></button>
      </div>
    </article>
  )
}

export default CartItem;