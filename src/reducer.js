const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }
  if (action.type === 'REMOVE') {
    return { ...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload) }
  }
  if (action.type === 'INCREASE') {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, quantity: cartItem.quantity + 1 }
      }
      return cartItem
    })
    return { ...state, cart: tempCart }
  }
  if (action.type === 'DECREASE') {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, quantity: cartItem.quantity - 1 }
      }
      return cartItem
    }).filter((cartItem) => cartItem.quantity !== 0)
    return { ...state, cart: tempCart }
  }
  if (action.type === 'GET_TOTAL') {
    const { total, quantity } = state.cart.reduce((cartTotal, cartItem) => {
      const { price, quantity } = cartItem;
      const itemTotal = price * quantity;
      cartTotal.total += itemTotal;
      cartTotal.quantity += quantity;
      return cartTotal
    }, {
      total: 0,
      quantity: 0,
    })
    return { ...state, total, quantity }
  }
  return state;
}

export default reducer;