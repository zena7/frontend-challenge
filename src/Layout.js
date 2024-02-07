import { List } from './shared/ui';
import { useFetch } from './shared/use-fetch';

export function Layout() {
  const { data = [] } = useFetch('/images/search?limit=15');

  console.log('data---', data);

  return (
    <List>
      {data?.map((item) => {
        return (
          <li>
            <img key={item.id} src={item.url} alt="cat" />
          </li>
        );
      })}
    </List>
  );
}
