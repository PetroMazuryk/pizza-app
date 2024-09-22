import { useEffect, FC } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import {
  selectFilter,
  selectCategoryId,
  selectSortType,
  selectCurrentPage,
  selectError,
} from '../redux/slices/selectors';
import { fetchPizzas, fetchPizzasByCategory } from '../redux/slices/operations';

import HomeBar from '../components/HomeBar/HomeBar';
import PizzaList from '../components/PizzaList/PizzaList';

import Pagination from '../components/Pagination/Pagination';
import DocumentTitle from '../components/DocumentTitle';

const Home: FC = () => {
  const searchValue = useSelector(selectFilter);
  const categoryId = useSelector(selectCategoryId);
  const sortType = useSelector(selectSortType);
  const page = useSelector(selectCurrentPage);
  const error = useSelector(selectError);
  const dispatch = useAppDispatch();

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
      <DocumentTitle>Home page pizza</DocumentTitle>

      <HomeBar />

      <PizzaList />

      {!searchValue && !error && <Pagination />}
    </>
  );
};

export default Home;
