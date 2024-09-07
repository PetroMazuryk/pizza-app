import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import FullPizzaComponent from '../components/FullPizzaComponent/FullPizzaComponent';

axios.defaults.baseURL = import.meta.env.VITE_API_TEST;

const FullPizza = () => {
  const { id } = useParams();
  const [pizzaItem, setPizzaItem] = useState();

  useEffect(() => {
    const FecthPizzaById = async () => {
      try {
        const { data } = await axios.get(`/items/${id}`);
        setPizzaItem(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    FecthPizzaById();
  }, [id]);

  if (!pizzaItem) {
    return <div>Sry we cant get information about this pizza, try again!</div>;
  }

  return <FullPizzaComponent item={pizzaItem} />;
};

export default FullPizza;
