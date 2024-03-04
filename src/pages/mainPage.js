import { useCallback, useEffect, useState } from 'react';
import { Loader } from '../shared/ui/Loader';
import { CatCard } from '../catCard/CatCard';
import { List } from '../shared/ui';
import { useFetch } from '../shared/use-fetch';

export function MainPage({ getPage, pageIs, getData, dataIs }) {
  const [page, setPage] = useState(0);
  const [cats, setCats] = useState([]);
  const { data = [], loading } = useFetch(
    `/images/search?limit=15&page=${pageIs > 0 && page === 0 ? pageIs : page}&order=ASC`,
  );

  useEffect(() => {
    if (dataIs.length > 0 && cats.length === 0) {
      setCats(dataIs);
      setPage(pageIs);
    } else if (data) {
      setCats((prev) => prev.concat(data));
      getData(cats);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handlerScroll = useCallback(
    (event) => {
      if (
        event.target.documentElement.scrollHeight -
          (event.target.documentElement.scrollTop + window.innerHeight) <
        60
      ) {
        setPage((prev) => prev + 1);
        getPage(page + 1);
      }
    },
    [page, getPage],
  );

  useEffect(() => {
    document.addEventListener('scroll', handlerScroll);
    return function () {
      document.removeEventListener('scroll', handlerScroll);
    };
  }, [handlerScroll]);

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
      <Loader loading={loading} page={page} />
    </main>
  );
}
