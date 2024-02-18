import { useEffect, useState } from 'react';
import { CatCard } from '../catCard/CatCard';
import { List } from '../shared/ui';
import { useFetch } from '../shared/use-fetch';

export function MainPage() {
  const [page, setPage] = useState(0);
  const [cats, setCats] = useState([]);
  const { data = [], loading } = useFetch(
    `/images/search?limit=15&page=${page}&order=ASC`,
  );

  useEffect(() => {
    if (data) {
      setCats((prev) => prev.concat(data));
      console.log('CATS', cats);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  function handlerScroll(event) {
    if (
      event.target.documentElement.scrollHeight -
        (event.target.documentElement.scrollTop + window.innerHeight) <
      60
    ) {
      console.log('scroll');
      setPage((prev) => prev + 1);
    }
  }

  useEffect(() => {
    if (loading) {
      <p>Загружаем еще котиков</p>;
      console.log('loading');
    }
    document.addEventListener('scroll', handlerScroll);
    return function () {
      document.removeEventListener('scroll', handlerScroll);
    };
  }, [loading]);

  return (
    <main>
      <List className="catsList">
        {cats?.map((item) => {
          return (
            <li className="catItem" key={item.id}>
              <CatCard url={item.url} />
            </li>
          );
        })}
      </List>
      {loading && <p className="downloadMore">...загружаем еще котиков...</p>}
    </main>
  );
}
