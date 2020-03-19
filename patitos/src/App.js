import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'

function App() {
  return (
    <div>
      <Navigation />
      <div className="container">
        <h1>Welcome to the Patitos Shop!</h1>
      </div>
    </div>
  );
}

export default App;
