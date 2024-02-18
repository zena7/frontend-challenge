import { useState, useEffect } from 'react';
import { CatCard } from '../catCard/CatCard';
import { Button, List } from '../shared/ui';
import { useFetch } from '../shared/use-fetch';

export function MainPage() {
  const [page, setPage] = useState(0);
  const [cats, setCats] = useState([]);
  const { data = [] } = useFetch(
    `/images/search?limit=15&page=${page}&order=ASC`,
  );

  useEffect(() => {
    if (data) {
      setCats((prev) => prev.concat(data));
      console.log('CATS', cats);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  console.log('Main page');

  function handleClick() {
    setPage((prev) => prev + 1);
    console.log('click and page - ', page);
  }

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
      <Button onClick={() => handleClick()} className="buttonDownload">
        Загружаем еще котиков
      </Button>
    </main>
  );
}
