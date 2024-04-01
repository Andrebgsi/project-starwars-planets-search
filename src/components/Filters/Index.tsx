import { useContext } from 'react';
import { OptionsType, ComparisonOptionsType } from '../../types';
import useSearch from '../../hooks/useSearch';
import styles from './Filters.module.css';
import StarWarsContext from '../../context/StarWarsContext';

export default function Filter() {
  const { filters } = useContext(StarWarsContext);
  const { filterList, addFilter } = filters;
  const { search, handleSearch, resetSearch } = useSearch({
    columnFilter: 'population' as OptionsType,
    comparisonFilter: 'maior que' as ComparisonOptionsType,
    valueFilter: 0,
  });

  const columnFields = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ] as OptionsType[];
  const comparisonFields = ['maior que', 'menor que', 'igual a'];
  const filterColumns = filterList.map((filter) => filter.column);
  const filteredColumns = columnFields.filter((field) => !filterColumns.includes(field));

  const applyFilter = () => {
    addFilter({
      column: search.columnFilter,
      comparison: search.comparisonFilter,
      value: Number(search.valueFilter),
    });
    resetSearch();
  };

  return (
    <div>
      {/* Filtros e rodenação de números */}
      <div className={ styles.filters }>
        {/* Filtros Numerico */}
        <div className={ styles.filterNumber }>
          <select
            name="columnFilter"
            id="column-filter"
            data-testid="column-filter"
            value={ search.columnFilter }
            onChange={ handleSearch }
            className={ styles.columnFilter }
          >
            {filteredColumns.map((column) => (
              <option key={ column } value={ column }>
                {column}
              </option>
            ))}
          </select>
          <select
            name="comparisonFilter"
            id="comparison-filter"
            data-testid="comparison-filter"
            value={ search.comparisonFilter }
            onChange={ handleSearch }
            className={ styles.comparisonFilter }
          >
            {comparisonFields.map((comparison) => (
              <option key={ comparison } value={ comparison }>
                {comparison}
              </option>
            ))}
          </select>
          <input
            data-testid="value-filter"
            type="number"
            placeholder="Valor"
            name="valueFilter"
            value={ search.valueFilter }
            onChange={ handleSearch }
            className={ styles.valueFilter }
          />
          <button
            data-testid="button-filter"
            onClick={ applyFilter }
            className={ styles.buttonFilter }
          >
            Filtrar
          </button>
        </div>
        {/* Oredenação da lista */}
        <div className={ styles.orderFilterNumber }>
          <select data-testid="column-sort" className={ styles.columnSort }>
            <option value="name">name</option>
            <option value="rotation_period">rotation_period</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="climate">climate</option>
            <option value="gravity">gravity</option>
            <option value="terrain">terrain</option>
            <option value="surface_water">surface_water</option>
            <option value="population">population</option>
            <option value="created">created</option>
            <option value="edited">edited</option>
            <option value="url">url</option>
          </select>
          <form data-testid="order-sort" className={ styles.form }>
            <label htmlFor="01">Crescente</label>
            <input
              id="01"
              type="radio"
              name="r"
              value="1"
              className={ styles.radioForm }
            />
            <label htmlFor="02">Decercente</label>
            <input
              id="02"
              type="radio"
              name="r"
              value="2"
              className={ styles.radioForm }
            />
          </form>
          <button
            data-testid="button-sort"
            type="button"
            className={ styles.buttonSort }
          >
            Ordenar
          </button>
        </div>
      </div>

    </div>
  );
}
