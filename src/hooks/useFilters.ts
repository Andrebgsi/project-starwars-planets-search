// Adaptação da monitoria de filtros em hook
import { useState } from 'react';
import { FilterOptionType, FilterType, OptionsType } from '../types';

function useFilter(): FilterType {
  const [filterList, setFilterList] = useState<FilterOptionType[]>([]);

  const addFilter = (newFilter: FilterOptionType) => {
    setFilterList([...filterList, newFilter]);
  };

  const removeFilter = (column: OptionsType) => {
    setFilterList(filterList.filter((prevState) => prevState.column !== column));
  };

  const removeAllFilters = () => setFilterList([]);

  return {
    filterList,
    addFilter,
    removeFilter,
    removeAllFilters,
  };
}

export default useFilter;
