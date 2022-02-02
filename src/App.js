import React from 'react';
import { useGlobalContext } from './context';
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import logo from './shopping-cart.png';
import './App.css';

function App() {
  return (
    <main>
      <Navbar />
      <div className="page-container">
        <header>
          <img src={logo} alt="shopping-cart" />
        </header>
        <CartContainer />
      </div>
    </main>
  );
}

export default App;
