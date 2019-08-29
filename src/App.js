import React from 'react';
import constants from './constants';
import './App.css';

function App() {
  const zekrText = constants.azkar[Math.floor(Math.random()*constants.azkar.length)];
  const zekrBG = constants.azkarBG[Math.floor(Math.random()*constants.azkarBG.length)];;
  return (
    <div 
      className="App"
      style={{
        background: `url(${zekrBG}) center center fixed no-repeat`,
        backgroundSize: 'cover',
      }}  
    >
      <div className="appOverlay">
        <h1>{zekrText}</h1>
      </div>
    </div>
  );
}

export default App;
