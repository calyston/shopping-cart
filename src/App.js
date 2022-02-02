import React, { useState } from 'react';
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
          <h2>Your Bag</h2>
        </header>
      </div>
    </main>
  );
}

export default App;
