import { Link } from 'react-router-dom';
import { List } from '../shared/ui';
import * as classes from './Header.module.css';

export function Header() {
  return (
    <header>
      <nav>
        <List className={classes.mainNavigation}>
          <li>
            <Link to="/">Все котики</Link>
          </li>
          <li>
            <Link to="/favoriteCats">Любимые котики</Link>
          </li>
        </List>
      </nav>
    </header>
  );
}
