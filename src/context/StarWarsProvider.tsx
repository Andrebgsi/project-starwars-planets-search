// 1.Tipagem
// 2.O provider funcional
// 3.Exportar
// 4.Adicionar na main

import React, { useEffect } from 'react';
import StarWarsContext from './StarWarsContext';

type StarWarsProviderProps = {
  children: React.ReactNode;
};

const apiStarWars = 'https://swapi.dev/api/planets';

function StarWarsProvider({ children }: StarWarsProviderProps) {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    fetch(apiStarWars)
      .then((result) => result.json())
      .then((response) => setData(response.results));
  }, []);

  const context = {
    data,
  };

  console.log(context);

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

export default StarWarsProvider;
