import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { typeOptions } from '../../constants/typeOptions';
import pizzaDefault from '../../assets/pizza-default.jpg';
import sprite from '../../assets/sprite.svg';

import scss from './PizzaItem.module.scss';

const PizzaItem = ({ item }) => {
  const { imageUrl, title, types, sizes, price, ingredients, id } = item;

  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  );
  // const [count, setCount] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const addedCount = cartItem ? cartItem.count : 0;
  const handleImageError = (event) => {
    event.target.src = pizzaDefault;
  };

  // const handleCountIncrement = () => setCount((prev) => prev + 1);

  const handleAddItem = () => {
    // handleCountIncrement();
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: types[activeType],
      size: sizes[activeSize],
    };
    dispatch(addItem(item));
  };

  return (
    <li className={scss.wrapper}>
      <NavLink className={scss.wrapperImg} to={`item/${id}`}>
        <img
          className={scss.img}
          src={imageUrl || pizzaDefault}
          alt={title}
          onError={handleImageError}
          loading="lazy"
        />
      </NavLink>
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
          <button className={scss.addBtn} onClick={handleAddItem}>
            <svg className={scss.svgBtn} width="12" height="12">
              <use href={`${sprite}#icon-plus`}></use>
            </svg>
            Додати
            {addedCount > 0 && <i>{addedCount}</i>}
            {/* <i>{count > 0 ? count : ' '}</i> */}
          </button>
        </div>
      </div>
      <p className={scss.ingredients}>{ingredients}</p>
    </li>
  );
};

export default PizzaItem;
