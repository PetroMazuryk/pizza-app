import PizzaItem from '../PizzaItem/PizzaItem';
import scss from './PizzaList.module.scss';

const PizzaList = ({ items }) => {
  return (
    <ul className={scss.wrapper}>
      {items.map(({ id, imageUrl, title, price, sizes, types }) => (
        <li key={id}>
          <PizzaItem
            imageUrl={imageUrl}
            title={title}
            price={price}
            sizes={sizes}
            types={types}
          />
        </li>
      ))}
    </ul>
  );
};

export default PizzaList;
