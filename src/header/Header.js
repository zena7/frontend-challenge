import { NavLink } from 'react-router-dom';
import { List } from '../shared/ui';
import * as classes from './Header.module.css';

export function Header() {
  return (
    <header className={classes.header}>
      <nav>
        <List className={classes.mainNavigation}>
          <li className={classes.listItem}>
            <NavLink to="/" className={classes.headerLink}>
              Все котики
            </NavLink>
          </li>
          <li className={classes.listItem}>
            <NavLink to="/favoriteCats" className={classes.headerLink}>
              Любимые котики
            </NavLink>
          </li>
        </List>
      </nav>
    </header>
  );
}
