import { useState } from 'react';
import { Button, List } from '../shared/ui';
import { useFetch } from '../shared/use-fetch';

export function MainPage() {
  const [page, setPage] = useState(0);
  const { data = [] } = useFetch(
    `/images/search?limit=15&page=${page}&order=ASC`,
  );

  console.log('data---', 'page', page, data, localStorage.getItem('catsLocal'));

  function handleClick() {
    console.log('click and page - ', page);

    setPage((prev) => prev + 1);
  }

  return (
    <main>
      <List className="catsList">
        {/* {(JSON.parse(localStorage.getItem('catsLocal')) ??  */}
        {data?.map((item) => {
          return (
            <li className="catItem" key={item.id}>
              <div className="catContainer">
                <img
                  // key={item.id}
                  src={item.url}
                  alt="cat"
                  className="catImg"
                />
              </div>
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
