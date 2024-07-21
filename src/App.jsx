import Categories from './components/Categories/Categories';
import PizzaList from './components/PizzaList/PizzaList';

const App = () => {
  return (
    <>
      <Categories />
      <PizzaList title="Чотири сири" price={100} />
    </>
  );
};
export default App;
