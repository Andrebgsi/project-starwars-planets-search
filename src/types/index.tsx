// export type StarWarsContextType = {
//   data: PlanetsType[],
//   listPlanets: PlanetsType[],
//   setListPlanets: React.Dispatch<React.SetStateAction<PlanetsType[]>>,
// };

export type PlanetsType = {
  name: string,
  rotation_period: string,
  orbital_period: string,
  diameter: string,
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: string,
  population: string,
  films: string[],
  created: string,
  edited: string,
  url: string
};

export type StarWarsProviderProps = { children: React.ReactNode };
// export type ChangeEvent = React.ChangeEvent<HTMLSelectElement | HTMLInputElement>;
// export type SubmitEvent = React.FormEvent<HTMLFormElement>;

export type OptionsType = 'population' |
'orbital_period' |
'diameter' |
'rotation_period' |
'surface_water';

export type ComparisonOptionsType = 'maior que' |
'menor que' |
'igual a';

export type FilterOptionType = {
  column: OptionsType,
  comparison: ComparisonOptionsType,
  value: number;
};

export type StarWarsContextType = {
  planets: PlanetQueryType;
  filters: FilterType;
};

export type PlanetQueryType = {
  data: PlanetsType[];
  loading: boolean,
  error: string | null,
};

export type FilterType = {
  filterList: FilterOptionType[];
  addFilter: (filter: FilterOptionType) => void;
  removeFilter: (column: OptionsType) => void;
  removeAllFilters: () => void;
};
