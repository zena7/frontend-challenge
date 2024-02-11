// import * as classes from './Layout.module.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from '../header/Header';
import { FavoriteCatsPage } from '../pages/favoriteCatsPage';
import { MainPage } from '../pages/mainPage';

export function Layout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/favoriteCats" element={<FavoriteCatsPage />} />
      </Routes>
    </>
  );
}
