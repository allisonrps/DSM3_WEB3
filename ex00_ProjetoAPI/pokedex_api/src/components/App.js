import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header.js';
import Search from './search.js';
import Card from './card.js';
import Footer from './footer.js';
import Generations from './generations.js';
import CardFull from './cardFull.js';
import './style.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonName, setPokemonName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  function loadAPI(id) {
    if (!id) return Promise.resolve(null);
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return fetch(url)
      .then(response => response.json())
      .catch(err => console.log(err));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pokemon1 = await loadAPI(pokemonName);
    const pokemon2 = await loadAPI(pokemonName);
    const pokemon3 = await loadAPI(pokemonName);
    setPokemonList([pokemon1, pokemon2, pokemon3]);
  };

  useEffect(() => {
    async function loadRandomPokemons() {
      const randomPokemons = [];
      for (let i = 0; i < 5; i++) {
        const randomPokemonId = Math.floor(Math.random() * 898) + 1;
        const pokemon = await loadAPI(randomPokemonId);
        randomPokemons.push(pokemon);
      }
      setPokemonList(randomPokemons);
    }
    loadRandomPokemons();
  }, []);

  const openModal = (pokemon) => {
    setSelectedPokemon(pokemon);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPokemon(null);
  };

  return (
    <Router>
      <div className="container">


        {showModal && selectedPokemon && (
          <div className="modal" style={{ display: 'FLEX' }} tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  {/* Trocar o título do modal para o número e nome do Pokémon */}
                  <h5 className="modal-title">#{selectedPokemon.id} - {selectedPokemon.name}</h5>
                  <button type="button" className="btn-close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                  {/* Renderizar o CardFull com os dados do Pokémon */}
                  <CardFull pokemonId={selectedPokemon.id} />
                </div>
              </div>
            </div>
          </div>
        )}

        <Header />
        <Generations />
        <Search pokemonName={pokemonName} setPokemonName={setPokemonName} handleSubmit={handleSubmit} />

        <div className="cards-container">
          {pokemonList.map((pokemon, index) => (
            <Card key={index} pokemon={pokemon} style={{ width: '80%', margin: '10 10px' }} onClick={() => openModal(pokemon)} />
          ))}
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;


