import Categories from '../Categories/Categories';
import PizzaList from '../PizzaList/PizzaList';
import pizzas from '../../../src/helpers/pizzas.json';
import scss from './Container.module.scss';
import SortPopup from '../SortPopap/SortPopap';

export const Container = () => {
  return (
    <div className={scss.container}>
      <div className={scss.wrapper}>
        <Categories />
        <SortPopup />
      </div>

      <PizzaList items={pizzas} />
    </div>
  );
};
