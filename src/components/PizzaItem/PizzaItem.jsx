import { useState } from 'react';
import clsx from 'clsx';
import { typeOptions } from '../../constants/typeOptions';

import scss from './PizzaItem.module.scss';

const PizzaItem = ({ imageUrl, title, price, sizes, types }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  // const typeNames = ['тонке', 'традиційне'];

  return (
    <div className={scss.wrapper}>
      <div className={scss.wrapperImg}>
        <img className={scss.img} src={imageUrl} alt={title} />
      </div>
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
        <div> {price} грн</div>
        <button>Додати</button>
      </div>
    </div>
  );
};

export default PizzaItem;
