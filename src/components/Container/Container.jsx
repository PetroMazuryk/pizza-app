import axios from 'axios';
import { useEffect, useState } from 'react';

import Categories from '../Categories/Categories';
import PizzaList from '../PizzaList/PizzaList';
import Skeleton from '../Skeleton/Skeleton';
import Header from '../Header/Header';

import scss from './Container.module.scss';

import SortPopup from '../SortPopap/SortPopap';

const BASE_URL = import.meta.env.VITE_API_TEST;
export const Container = () => {
  const [items, setItems] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    async function fetchAllPizzas() {
      const response = await axios.get(`${BASE_URL}/items`);
      setItems(response.data);
      setIsloading(false);
    }

    fetchAllPizzas();
  }, []);

  return (
    <div className={scss.container}>
      <Header />
      <div className={scss.wrapper}>
        <Categories />
        <SortPopup />
      </div>

      {isloading ? (
        [...new Array(6)].map((_, index) => <Skeleton key={index} />)
      ) : (
        <PizzaList items={items} />
      )}
    </div>
  );
};
