import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { FavoriteCatsPage } from './pages/favoriteCatsPage';
import { MainPage } from './pages/mainPage';

export function App() {
  useEffect(() => {
    localStorage.clear();
    return localStorage.clear();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="favoriteCats" element={<FavoriteCatsPage />} />
      </Route>
    </Routes>
  );
}
