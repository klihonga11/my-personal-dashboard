import { useEffect, useState } from 'react';
import type { JokeData } from '../types/jokedata';

function useFetch(url: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState<JokeData | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function getData() {
      try {
        const response = await fetch(url);

        if (!response.ok) throw new Error('Fetch failed');

        const json = await response.json();

        if (isMounted) setData(json);
      } catch (error) {
        if (error instanceof Error) {
          if (isMounted) setError(error.message);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    getData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return {
    loading,
    error,
    data,
  };
}

export default useFetch;
