import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import FullPizzaComponent from '../components/FullPizzaComponent/FullPizzaComponent';
import DocumentTitle from '../components/DocumentTitle';

axios.defaults.baseURL = import.meta.env.VITE_API_TEST;

const FullPizza: React.FC = () => {
  const { id } = useParams();
  // const navigate = useNavigate();
  const [pizzaItem, setPizzaItem] = useState<{
    imageUrl: string;
    title: string;
    ingredients: string;
  }>();

  useEffect(() => {
    const fecthPizzaById = async () => {
      try {
        const { data } = await axios.get(`/items/${id}`);
        setPizzaItem(data);
      } catch (error: unknown) {
        // alert('Помилка при отриманні піци');
        // navigate('/');
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    };

    fecthPizzaById();
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

  return (
    <>
      <DocumentTitle>Full pizza descriptions</DocumentTitle>
      <FullPizzaComponent item={pizzaItem} />;
    </>
  );
};

export default FullPizza;
