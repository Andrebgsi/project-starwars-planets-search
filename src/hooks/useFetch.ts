// Adaptação da monitoria de filtros em hook
import { useState, useEffect } from 'react';
import { PlanetsType } from '../types';

function useFetch(fetchFunction: () => Promise<PlanetsType[]>) {
  const [data, setData] = useState<PlanetsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchFunction();
        setData(response);
        setLoading(false);
      } catch (e: any) {
        setError(e.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { data, loading, error };
}

export default useFetch;
