import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectPizzas,
  selectIsLoading,
  selectFilter,
  selectCategoryId,
  selectSortType,
  selectPage,
} from '../redux/slices/selectors';
import { fetchPizzas, fetchPizzasByCategory } from '../redux/slices/operations';

import HomeBar from '../components/HomeBar/HomeBar';
import PizzaList from '../components/PizzaList/PizzaList';
import Skeleton from '../components/Skeleton/Skeleton';

import Pagination from '../components/Pagination/Pagination';

const Home = () => {
  const items = useSelector(selectPizzas);
  const isloading = useSelector(selectIsLoading);
  const filterSearch = useSelector(selectFilter);
  const categoryId = useSelector(selectCategoryId);
  const sortType = useSelector(selectSortType);
  const page = useSelector(selectPage);
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
    const search = filterSearch ? `search=${filterSearch}` : '';

    dispatch(fetchPizzas({ category, order, sortBy, page, search }));
  }, [categoryId, sortType, page, filterSearch, dispatch]);

  return (
    <>
      <HomeBar />
      {isloading ? (
        [...new Array(6)].map((_, index) => <Skeleton key={index} />)
      ) : (
        <PizzaList items={items} />
      )}
      {!filterSearch && <Pagination />}
    </>
  );
};

export default Home;
