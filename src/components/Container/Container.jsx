import Categories from '../Categories/Categories';
import PizzaList from '../PizzaList/PizzaList';
import scss from './Container.module.scss';

export const Container = () => {
  return (
    <div className={scss.container}>
      <Categories />
      <PizzaList />
    </div>
  );
};
