import React from 'react';
import './App.css';
import Carousel from './Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Carousel width={'500px'} height={'600px'}/>
      </header>
    </div>
  );
}

export default App;
