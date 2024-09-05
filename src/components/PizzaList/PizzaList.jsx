import { useSelector } from 'react-redux';
import {
  selectCategoryId,
  selectPizzas,
  selectAllItems,
  selectIsLoading,
  selectFilter,
} from '../../redux/slices/selectors';
import { categoryOptions } from '../../constants/categoryOptions';

import Skeleton from '../Skeleton/Skeleton';
import PizzaItem from '../PizzaItem/PizzaItem';
import scss from './PizzaList.module.scss';

const PizzaList = () => {
  const categoryId = useSelector(selectCategoryId);
  const items = useSelector(selectPizzas);
  const allItems = useSelector(selectAllItems);
  const isLoading = useSelector(selectIsLoading);
  const searchValue = useSelector(selectFilter);

  const normalizeValue = searchValue.toLowerCase();
  const filteredItems = allItems.filter((item) =>
    item.title.toLowerCase().includes(normalizeValue)
  );

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const isFilter = searchValue === '' ? items : filteredItems;

  const pizzas = isFilter.map((item) => (
    <PizzaItem item={item} key={item.id} />
  ));

  return (
    <>
      <h2 className={scss.pizzaTitle}>{categoryOptions[categoryId]}</h2>
      <ul className={scss.wrapper}>{isLoading ? skeletons : pizzas}</ul>
    </>
  );
};

export default PizzaList;
