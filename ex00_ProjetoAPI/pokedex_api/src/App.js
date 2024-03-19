import React, { useEffect, useState } from 'react';
import './style.css';

function App() {
  const {pokemon, setPokemon} = useState();

function loadAPI(){
  let url = 'https://www.pokeapi.co/api/v2/pokemon/giratina'
  fetch(url)
  .then(response => response.json())
  .then(json => {
    console.log(json)
    setPokemon(json)
  })
  .catch(err => console.log(err));
}

  useEffect (() => {

    loadAPI();

  }, []);

  return (

    <div class="container">
      <header>
        <strong>POKÉMON API</strong>
      </header>
    </div>
  );
}

export default App;
