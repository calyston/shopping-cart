import React, { useState, useContext, useReducer, useEffect } from 'react'
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

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }