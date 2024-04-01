import { useContext, useState } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import HeadTable from './HeadTable';
import BodyTable from './BodyTable';
import styles from './Table.module.css';
import Filter from '../Filters/Index';
import { PlanetsType } from '../../types';

export default function Table() {
  const { planets, filters } = useContext(StarWarsContext);
  const [search, setSearch] = useState('');

  const { data } = planets;
  const { filterList } = filters;

  const searchPlanets = data.filter((planet:any) => {
    return planet.name.includes(search);
  });

  // Ajuda do GPT-3
  const filterPlanets = searchPlanets.filter((planet: any) => {
    return filterList.every((filter: any) => {
      const planetValue = Number.parseFloat(planet[filter.column]);
      const filterValue = filter.value;
      const comparisonFunctions: { [key: string]: (a: number, b: number) => boolean } = {
        'igual a': (a, b) => a === b,
        'maior que': (a, b) => a > b,
        'menor que': (a, b) => a < b,
      };

      if (!(filter.comparison in comparisonFunctions)) return false; // Alterado para false
      if (Number.isNaN(planetValue)) return false; // Alterado para false

      return comparisonFunctions[filter.comparison](planetValue, filterValue);
    });
  });

  return (
    <div className="boxTable">
      <div className={ styles.boxFilter }>
        <label htmlFor="name-filter">
          <input
            type="text"
            value={ search }
            onChange={ ({ target }) => setSearch(target.value) }
            data-testid="name-filter"
            className={ styles.nameFilter }
          />
        </label>
        <Filter />
      </div>
      <table>
        <HeadTable />
        {filterPlanets.map((planet: PlanetsType) => (
          <BodyTable
            key={ planet.name }
            planet={ planet }
          />))}
      </table>
    </div>
  );
}
