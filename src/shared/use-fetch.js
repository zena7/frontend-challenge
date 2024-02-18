import { useEffect, useState } from 'react';
import { get } from './api';

export function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    get(url)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        console.log('result from useEffect: ', result);
        setData(result);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
    // }
  }, [url]);

  return {
    loading,
    data,
    error,
  };
}
