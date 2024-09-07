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
    return (
      <div
        style={{
          fontSize: 34,
          fontWeight: 800,
          textShadow: '4px 4px 5px #808080, 2px 2px 1px #ff0000',
          marginTop: 100,
          textAlign: 'center',
        }}
      >
        На жаль, ми не можемо отримати інформацію про цю піцу, спробуйте ще раз!
      </div>
    );
  }

  return <FullPizzaComponent item={pizzaItem} />;
};

export default FullPizza;
