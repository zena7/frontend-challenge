import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { FavoriteCatsPage } from './pages/favoriteCatsPage';
import { MainPage } from './pages/mainPage';

export function App() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   localStorage.clear();
  //   return localStorage.clear();
  // }, []);
  const getData = (dataFromApi) => setData(dataFromApi);
  const getPage = (pageCats) => setPage(pageCats);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <MainPage
              getPage={getPage}
              pageIs={page}
              getData={getData}
              dataIs={data}
            />
          }
        />
        <Route path="favoriteCats" element={<FavoriteCatsPage />} />
      </Route>
    </Routes>
  );
}
