import React from 'react';
import './styles/App.css';
import { Borde } from './components/Borde';
import { GAME_SIZE } from './settings/constants';

function App() {
  return (
    <div className="App">  
      <div
      style={{
        position: 'relative',
        width: GAME_SIZE,
        height: GAME_SIZE
      }}
      >
        <Borde />
      </div>
    
    </div>
  );
}

export default App;
