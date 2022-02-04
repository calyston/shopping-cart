import React from 'react';
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import './App.css';

function App() {
  return (
    <main>
      <Navbar />
      <div className="page-container">
        <CartContainer />
      </div>
    </main>
  );
}

export default App;
