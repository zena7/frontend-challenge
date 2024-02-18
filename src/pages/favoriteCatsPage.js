import { useLayoutEffect, useState } from 'react';
import { List } from '../shared/ui/List';
import { CatCard } from '../catCard/CatCard';

export function FavoriteCatsPage() {
  const [favCats, setFavCats] = useState([]);

  useLayoutEffect(() => {
    const array = Object.keys(localStorage);
    setFavCats((prev) => prev.concat(array));
  }, []);
  // не знаю, что добавить в зависимости, чтобы при клике на кнопку лайк  в реальном времени удалялся этот котик
  console.log('FAVORITE', favCats);

  return (
    <List className="catsList">
      {favCats.length === 0 && <p>No favorite cats =(</p>}
      {favCats?.map((item) => {
        return (
          <li key={item}>
            <CatCard url={item} />
          </li>
        );
      })}
    </List>
  );
}
