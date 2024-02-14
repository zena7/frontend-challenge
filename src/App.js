import { Route, Routes } from 'react-router-dom';
import { FavoriteCatsPage } from './pages/favoriteCatsPage';
import { MainPage } from './pages/mainPage';
import { Layout } from './layout/Layout';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="favoriteCats" element={<FavoriteCatsPage />} />
      </Route>
    </Routes>
  );
}
