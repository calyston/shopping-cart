import React, { useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
const AppContext = React.createContext()

const initialState = {
  cart: cartItems,
  total: 0,
  quantity: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }

  const increaseQuantity = (id) => {
    dispatch({ type: 'INCREASE', payload: id })
  }

  const decreaseQuantity = (id) => {
    dispatch({ type: 'DECREASE', payload: id })
  }

  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' })
  }, [state.cart])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseQuantity,
        decreaseQuantity
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }