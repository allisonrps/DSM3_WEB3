import React from 'react';
import { Link } from 'react-router-dom';

function Generations() {
  const generations = [
    { name: 'Kanto', path: '/kanto' },
    { name: 'Johto', path: '/johto' },
    { name: 'Hoenn', path: '/hoenn' },
    { name: 'Sinnoh', path: '/sinnoh' },
    { name: 'Unova', path: '/unova' },
    { name: 'Kalos', path: '/kalos' },
    { name: 'Alola', path: '/alola' },
    { name: 'Galar', path: '/galar' },
    { name: 'Hisui', path: '/hisui' },
    { name: 'Paldea', path: '/paldea' }
  ];

  return (
    <div className="generations red-bar">
      {generations.map((generation, index) => (
        <React.Fragment key={generation.name}>
          <Link to={generation.path} className="generation-link">
            {generation.name}
          </Link>
          {index !== generations.length - 1 && <span className="link-separator"> | </span>} {/* Adiciona um separador entre os links, exceto para o último */}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Generations;

