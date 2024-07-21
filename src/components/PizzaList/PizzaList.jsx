import { useState } from 'react';
import scss from './PizzaList.module.scss';

const PizzaList = ({ title, price }) => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div className={scss.wrapper}>
      <img
        className={scss.img}
        src="https://i.ibb.co/1bMnfvd/4-syry.webp"
        alt="Pizza"
      />
      <div className={scss.title}>{title}</div>
      <div className={scss.selector}>
        <ul>
          <li className={scss.active}>тонке</li>
          <li>традиційне</li>
        </ul>
        <ul>
          <li>{price}см</li>
          <li>30 см</li>
          <li>40 см</li>
        </ul>
      </div>
      <button onClick={handleCount}>Counter {count}</button>
    </div>
  );
};

export default PizzaList;
