import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import ShopSlides from './components/Carousel';

function App() {
  return (
    <div>
      <Navigation />

      <div className="container">
        <h1 style={{textAlign:'center', margin: 15}}>Welcome to the Patitos Shop!</h1>
      </div>

    <div>
      <ShopSlides />
      
    </div>
    </div>
  );
}

export default App;
