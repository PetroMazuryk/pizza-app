import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

const HomePage = lazy(() => import('./pages/Home'));
const CartPage = lazy(() => import('./pages/Cart'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
