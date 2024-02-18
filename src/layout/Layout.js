// import * as classes from './Layout.module.css';

import { Outlet } from 'react-router-dom';
import { Header } from '../header/Header';

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
