import { useState } from 'react';
import StarWarsContext from './StarWarsContext';
import useFetch from '../hooks/useFetch';
import useFilter from '../hooks/useFilters';
import { StarWarsProviderProps } from '../types';
import { fetchApiStarWars } from '../services/api';

function StarWarsProvider({ children }: React.PropsWithChildren) {
  // const { data, loading, error } = useFetch(fetchApiStarWars);
  // const [listPlanets, setListPlanets] = useState<PlanetsType[]>([]);

  const planets = useFetch(fetchApiStarWars);
  const filters = useFilter();

  const contextValue = {
    planets,
    filters,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

export default StarWarsProvider;
