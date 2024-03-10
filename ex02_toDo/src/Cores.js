import React, { useState, useEffect } from 'react';
import './Cadastro.css';

function Cores() {
    const [backgroundColor, setBackgroundColor] = useState('');

    const handleColorChange = (event) => {
      setBackgroundColor(event.target.value);
    };

    return (
        <div style={{ backgroundColor: backgroundColor }}>
          <label>
            <input type="radio" value="red"checked={backgroundColor === 'red'}
            onChange={handleColorChange}/> VERMELHO </label>
          <label>
            <input type="radio" value="green"checked={backgroundColor === 'green'}
            onChange={handleColorChange}/> VERDE </label>
          <label>
            <input type="radio" value="blue"checked={backgroundColor === 'blue'}
            onChange={handleColorChange}/> AZUL </label>
        </div>
    );
}

export default Cores;