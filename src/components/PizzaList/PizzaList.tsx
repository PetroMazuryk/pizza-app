import { FC } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCategoryId,
  selectPizzas,
  selectAllItems,
  selectIsLoading,
  selectFilter,
  selectError,
} from '../../redux/slices/selectors';
import { categoryOptions } from '../../constants/categoryOptions';
import Notification from '../Notification/Notification';

import Skeleton from '../Skeleton/Skeleton';
import PizzaItem, { IPizza } from '../PizzaItem/PizzaItem';
import notFound from '../../assets/notFound.webp';
import scss from './PizzaList.module.scss';

const PizzaList: FC = () => {
  const categoryId = useSelector(selectCategoryId);
  const items = useSelector(selectPizzas);
  const allItems = useSelector(selectAllItems);
  const isLoading = useSelector(selectIsLoading);
  const searchValue = useSelector(selectFilter);
  const error = useSelector(selectError);

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
      {error ? (
        <div>
          <Notification
            message="Вибачте, відбулася помилка !"
            text=" Не вдалося отримати піци. Повторіть спробу пізніше !"
            error={error}
          ></Notification>
        </div>
      ) : (
        <>
          <h2 className={scss.pizzaTitle}>{categoryOptions[categoryId]}</h2>
          <ul className={scss.wrapper}>{isLoading ? skeletons : pizzas}</ul>
          {filteredItems.length === 0 && (
            <img className={scss.notFound} src={notFound} alt="not found" />
          )}
        </>
      )}
    </>
  );
};

export default PizzaList;
