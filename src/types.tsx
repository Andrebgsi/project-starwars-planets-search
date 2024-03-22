export type PlanetsType = {
  name: string,
  rotation_period: number,
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

export type StarWarsProviderProps = {
  children: React.ReactNode;
};