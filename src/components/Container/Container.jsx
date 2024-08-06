import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPizzas, selectIsLoading } from '../../redux/slices/selectors';
import { fetchPizzas } from '../../redux/slices/operations';
import Categories from '../Categories/Categories';
import PizzaList from '../PizzaList/PizzaList';
import Skeleton from '../Skeleton/Skeleton';
import Header from '../Header/Header';

import scss from './Container.module.scss';

import SortPopup from '../SortPopap/SortPopap';

export const Container = () => {
  const items = useSelector(selectPizzas);
  const isloading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  return (
    <div className={scss.container}>
      <Header />
      <div className={scss.wrapper}>
        <Categories />
        <SortPopup />
      </div>

      {isloading ? (
        [...new Array(6)].map((_, index) => <Skeleton key={index} />)
      ) : (
        <PizzaList items={items} />
      )}
    </div>
  );
};
