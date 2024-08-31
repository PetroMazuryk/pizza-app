import { useSelector } from 'react-redux';
import { selectCategoryId } from '../../redux/slices/selectors';
import { categoryOptions } from '../../constants/categoryOptions';

import PizzaItem from '../PizzaItem/PizzaItem';
import scss from './PizzaList.module.scss';

const PizzaList = ({ items }) => {
  const categoryId = useSelector(selectCategoryId);
  return (
    <>
      <h2 className={scss.pizzaTitle}>{categoryOptions[categoryId]}</h2>
      <ul className={scss.wrapper}>
        {items.map((pizza) => (
          <li key={pizza.id}>
            <PizzaItem {...pizza} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default PizzaList;
