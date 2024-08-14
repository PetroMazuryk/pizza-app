import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectPizzas,
  selectIsLoading,
  selectFilter,
} from '../../redux/slices/selectors';
import { fetchPizzas } from '../../redux/slices/operations';

import Categories from '../Categories/Categories';
import PizzaList from '../PizzaList/PizzaList';
import Skeleton from '../Skeleton/Skeleton';
import Header from '../Header/Header';
import SortPopup from '../SortPopap/SortPopap';
import Pagination from '../Pagination/Pagination';

import scss from './Container.module.scss';

export const Container = () => {
  const items = useSelector(selectPizzas);
  const isloading = useSelector(selectIsLoading);
  const filterSearch = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas(filterSearch));
  }, [dispatch, filterSearch]);

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
      <Pagination />
    </div>
  );
};
