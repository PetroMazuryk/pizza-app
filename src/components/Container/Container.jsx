import axios from 'axios';
import { useEffect, useState } from 'react';
import Categories from '../Categories/Categories';
import PizzaList from '../PizzaList/PizzaList';

import scss from './Container.module.scss';

import SortPopup from '../SortPopap/SortPopap';

const BASE_URL = import.meta.env.VITE_API_URL;
export const Container = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchAllPizzas() {
      const response = await axios.get(`${BASE_URL}/items`);
      setItems(response.data);
    }

    fetchAllPizzas();
  }, []);

  return (
    <div className={scss.container}>
      <div className={scss.wrapper}>
        <Categories />
        <SortPopup />
      </div>

      <PizzaList items={items} />
    </div>
  );
};
