import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilter,
  selectCategoryId,
  selectSortType,
  selectPage,
  selectError,
} from '../redux/slices/selectors';
import { fetchPizzas, fetchPizzasByCategory } from '../redux/slices/operations';

import HomeBar from '../components/HomeBar/HomeBar';
import PizzaList from '../components/PizzaList/PizzaList';

import Pagination from '../components/Pagination/Pagination';

const Home = () => {
  const searchValue = useSelector(selectFilter);
  const categoryId = useSelector(selectCategoryId);
  const sortType = useSelector(selectSortType);
  const page = useSelector(selectPage);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

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
    <>
      <HomeBar />

      <PizzaList />

      {!searchValue && !error && <Pagination />}
    </>
  );
};

export default Home;
