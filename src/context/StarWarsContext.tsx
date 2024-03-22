import { createContext } from 'react';
import { PlanetsType } from '../types';

type StarWarsContextType = {
  data: PlanetsType[];
};
const StarWarsContext = createContext(
  {} as StarWarsContextType,
);

export default StarWarsContext;
