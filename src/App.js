import './App.css';
import Bola from './componentes/Bola'
import { useState } from 'react';

function App() {

  let bolas = [];
  let filas = [];
  for (let i = 1; i <= 90; i++) {

    bolas.push(<Bola>{i}</Bola>);
    if (i % 10 === 0) {
      filas.push(<div className='fila'>{bolas}</div>);
      bolas = [];
    }
  }
  return (
    <div className="App">
      <div className='tablero'>
        {filas}
      </div>
      <div id="bolaGrande"></div>
    </div>

  );
}

export default App;
