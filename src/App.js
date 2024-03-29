import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { FavoriteCatsPage } from './pages/favoriteCatsPage';
import { MainPage } from './pages/mainPage';
import { set } from './redux/slices/isTouchSlice';

export function App() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);

  const getData = (dataFromApi) => setData(dataFromApi);
  const getPage = (pageCats) => setPage(pageCats);
  const dispatch = useDispatch();
  dispatch(
    set(
      navigator.maxTouchPoints > 0 ||
        window.navigator.userAgent.toLocaleLowerCase().includes('mobi'),
    ),
  );

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
