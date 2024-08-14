import PizzaItem from '../PizzaItem/PizzaItem';
import scss from './PizzaList.module.scss';

const PizzaList = ({ items }) => {
  return (
    <ul className={scss.wrapper}>
      {items.map((pizza) => (
        <li key={pizza.id}>
          <PizzaItem {...pizza} />
        </li>
      ))}
    </ul>
  );
};

export default PizzaList;
