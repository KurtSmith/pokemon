import React from 'react'
import { useEffect, useState } from 'react'
import { TopLevel, Pokemon, Result } from './types/PokeTypes'

function Todos() {
  const [poke, setPoke] = useState<Result[]>([]);
  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'dac7bd3723msh893ed925430f76bp10e447jsnb8ee6595c0fb',
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
      }
    };
    (async function () {
      try {
        const response = await fetch(url, options);
        const result:Pokemon = await response.json();
        setPoke(result.results);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    })()
  },
    []
  );

  return (  
    <div>
    {poke.map( (p:Result) =>
      {
        return <div>{p.name}</div>
      }
    )}
  </div>
  );

}

export default Todos