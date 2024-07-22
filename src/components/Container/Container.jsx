import Categories from '../Categories/Categories';
import PizzaList from '../PizzaList/PizzaList';
import pizzas from '../../../src/helpers/pizzas.json';
import scss from './Container.module.scss';

export const Container = () => {
  return (
    <div className={scss.container}>
      <Categories />

      <PizzaList items={pizzas} />
    </div>
  );
};
