import { useEffect, useState } from 'react';
import { get } from './api';

export function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  // (() => {
  //   const cachedData = localStorage.getItem('catsLocal');
  //   return cachedData ? JSON.parse(cachedData) : null;
  // });
  const [error, setError] = useState(false);

  useEffect(() => {
    // if (!data) {
    get(url)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        console.log('result', result);
        setData(result);
        // localStorage.setItem('catsLocal', JSON.stringify(result));
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
