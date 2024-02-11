import { Button, List } from '../shared/ui';
import { useFetch } from '../shared/use-fetch';

export function MainPage() {
  const { data = [] } = useFetch('/images/search?limit=15');

  console.log('data---', data);

  return (
    <main>
      <List className="catsList">
        {data?.map((item) => {
          return (
            <li className="catItem">
              <div className="catContainer">
                <img
                  key={item.id}
                  src={item.url}
                  alt="cat"
                  className="catImg"
                />
              </div>
            </li>
          );
        })}
      </List>
      <Button className="buttonDownload">Загружаем еще котиков</Button>
    </main>
  );
}
