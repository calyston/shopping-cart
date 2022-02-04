import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext()
  if (cart.length === 0) {
    return (
      <article className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </article>
    )
  }
  return (
    <article className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </article>
      <footer>
        <hr />
        <article className="cart-total">
          <h4>Total:</h4>
          <span>£{total}</span>
        </article>
        <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
      </footer>
    </article>
  )
}

export default CartContainer;