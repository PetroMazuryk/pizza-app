import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectPizzas,
  selectIsLoading,
  selectFilter,
  selectCategoryId,
  selectSortType,
  selectPage,
} from '../../redux/slices/selectors';
import {
  fetchPizzas,
  fetchPizzasByCategory,
} from '../../redux/slices/operations';

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
  const categoryId = useSelector(selectCategoryId);
  const sortType = useSelector(selectSortType);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchPizzas(filterSearch));
  // }, [dispatch, filterSearch]);

  useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const order = sortType.value.includes('-') ? 'order=desc' : 'order=asc';
    const sortBy = sortType.value.replace('-', '');

    dispatch(fetchPizzasByCategory({ category, order, sortBy }));
  }, [categoryId, dispatch, sortType]);

  useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const order = sortType.value.includes('-') ? 'order=desc' : 'order=asc';
    const sortBy = sortType.value.replace('-', '');

    dispatch(fetchPizzas({ category, order, sortBy, page }));
  }, [categoryId, sortType, page, dispatch]);

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
      {!filterSearch && <Pagination />}
    </div>
  );
};
