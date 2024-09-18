import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import ShardLayout from './components/ShardLayout/ShardLayout';

const HomePage = lazy(() => import('./pages/Home'));
const CartPage = lazy(() => import('./pages/Cart'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));
const FullPizzaPage = lazy(() => import('./pages/FullPizza'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ShardLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="item/:id" element={<FullPizzaPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
export default App;
