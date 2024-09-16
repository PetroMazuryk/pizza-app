import { SyntheticEvent } from 'react';
import { useState, useCallback, useMemo, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import { selectCartItems } from '../../redux/slices/selectors';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { typeOptions } from '../../constants/typeOptions';
import pizzaDefault from '../../assets/pizza-default.jpg';
import sprite from '../../assets/sprite.svg';

import scss from './PizzaItem.module.scss';

export interface IPizza {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  types: number[];
  sizes: number[];
  ingredients?: string;
}

interface PizzaItemProps {
  item: IPizza;
}

const PizzaItem: FC<PizzaItemProps> = ({ item }) => {
  const { imageUrl, title, types, sizes, price, ingredients, id } = item;

  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const cartItem = cartItems.find(
    (item) =>
      item.id === id &&
      item.type === types[activeType] &&
      item.size === sizes[activeSize]
  );

  const addedCount = cartItem ? cartItem.count : 0;

  const handleImageError = useCallback(
    (event: SyntheticEvent<HTMLImageElement, Event>) => {
      event.currentTarget.src = pizzaDefault;
    },
    []
  );

  const fullPrice = useMemo(() => {
    let basePrice = price;

    if (types[activeType] === 1) {
      basePrice += 30;
    }

    if (sizes[activeSize] === 30) {
      return Math.round(basePrice * 1.3);
    } else if (sizes[activeSize] === 40) {
      return Math.round(basePrice * 1.6);
    }
    return basePrice;
  }, [activeType, activeSize, price, types, sizes]);

  const handleAddItem = useCallback(() => {
    const item = {
      id,
      title,
      imageUrl,
      price: fullPrice,
      type: types[activeType],
      size: sizes[activeSize],
      count: 1,
    };
    dispatch(addItem(item));
  }, [
    id,
    title,
    imageUrl,
    fullPrice,
    types,
    activeType,
    sizes,
    activeSize,
    dispatch,
  ]);

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
          <div className={scss.priceText}> {fullPrice} грн</div>
          <button className={scss.addBtn} onClick={handleAddItem}>
            <svg className={scss.svgBtn} width="12" height="12">
              <use href={`${sprite}#icon-plus`}></use>
            </svg>
            Додати
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
      <p className={scss.ingredients}>{ingredients}</p>
    </li>
  );
};

export default PizzaItem;
