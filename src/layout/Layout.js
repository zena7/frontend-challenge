import { Button, List } from '../shared/ui';
import { useFetch } from '../shared/use-fetch';
import * as classes from './Layout.module.css';

export function Layout() {
  const { data = [] } = useFetch('/images/search?limit=15');

  console.log('data---', data);

  return (
    <>
      <header>
        <nav>
          <List className={classes.mainNavigation}>
            <li>
              <a href="№">Все котики</a>
            </li>
            <li>
              <a href="#">Любимые котики</a>
            </li>
          </List>
        </nav>
      </header>
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
    </>
  );
}
