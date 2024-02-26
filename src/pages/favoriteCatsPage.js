import { useSelector } from 'react-redux';
import { List } from '../shared/ui/List';
import { CatCard } from '../catCard/CatCard';

export function FavoriteCatsPage() {
  const favCats = useSelector((state) => state.likes.likes);

  return (
    <List className="catsList">
      {Object.values(favCats).length === 0 && <p>No favorite cats =(</p>}
      {Object.values(favCats)?.map((item) => {
        return (
          <li key={item}>
            <CatCard url={item} />
          </li>
        );
      })}
    </List>
  );
}
