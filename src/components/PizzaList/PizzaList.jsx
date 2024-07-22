import PizzaItem from '../PizzaItem/PizzaItem';
import scss from './PizzaList.module.scss';

const PizzaList = ({ items }) => (
  <ul className={scss.wrapper}>
    {items.map(({ id, imageUrl, title, price }) => (
      <PizzaItem key={id} imageUrl={imageUrl} title={title} price={price} />
    ))}
  </ul>
);

export default PizzaList;
