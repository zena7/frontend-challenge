import { useSelector } from 'react-redux';
import { CatCard } from '../catCard/CatCard';
import { List } from '../shared/ui/List';

export function FavoriteCatsPage() {
  const favCats = useSelector((state) => state.likes.likes);

  return (
    <main>
      {Object.values(favCats).length === 0 && (
        <p className="noCats">No favorite cats</p>
      )}
      <List className="catsList">
        {Object.values(favCats)?.map((item) => {
          return (
            <li key={item} className="catItem">
              <CatCard url={item} />
            </li>
          );
        })}
      </List>
    </main>
  );
}
