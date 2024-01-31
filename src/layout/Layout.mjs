import * as classes from './Layout.module.css';

export function Layout() {
  return (
    <>
      <header className={classes.header}>
        <ul>
          <li>Все котики</li>
          <li>Любимые котики</li>
        </ul>
      </header>
      {/* <main></main>
      <footer></footer> */}
    </>
  );
}
