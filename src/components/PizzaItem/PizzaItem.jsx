import { useState } from 'react';
import clsx from 'clsx';
import { typeOptions } from '../../constants/typeOptions';
import pizzaDefault from '../../assets/pizza-default.jpg';

import scss from './PizzaItem.module.scss';

const PizzaItem = ({ item }) => {
  const { imageUrl, title, types, sizes, price, ingredients } = item;
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const handleImageError = (event) => {
    event.target.src = pizzaDefault;
  };

  return (
    <li className={scss.wrapper}>
      <div className={scss.wrapperImg}>
        <img
          className={scss.img}
          src={imageUrl || pizzaDefault}
          alt={title}
          onError={handleImageError}
          loading="lazy"
        />
      </div>
      <div className={scss.contentBox}>
        <div className={scss.title}>{title}</div>
        <div className={scss.selector}>
          <ul className={scss.listTypes}>
            {types.map((typeId) => (
              <li
                key={typeId}
                onClick={() => setActiveType(typeId)}
                className={clsx(scss.itemTypes, {
                  [scss.active]: activeType === typeId,
                })}
              >
                {typeOptions[typeId]}
              </li>
            ))}
          </ul>
          <ul className={scss.listSizes}>
            {sizes.map((size, index) => (
              <li
                key={index}
                onClick={() => setActiveSize(index)}
                className={clsx(scss.itemSizes, {
                  [scss.active]: activeSize === index,
                })}
              >
                {size} см
              </li>
            ))}
          </ul>
        </div>
        <div className={scss.wrapperPrice}>
          <div className={scss.priceText}> {price} грн</div>
          <button className={scss.addBtn}>Додати</button>
        </div>
      </div>
      <p className={scss.ingredients}>{ingredients}</p>
    </li>
  );
};

export default PizzaItem;
