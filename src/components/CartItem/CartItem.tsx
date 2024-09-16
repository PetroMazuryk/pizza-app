import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { plusItem, minusItem, removeItem } from '../../redux/slices/cartSlice';

import { typeOptions } from '../../constants/typeOptions';
import sprite from '../../assets/sprite.svg';

import scss from './CartItem.module.scss';

export interface ICartItem {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  type: number;
  size: number;
  count: number;
}

interface ICartItemProps {
  item: ICartItem;
}

const CartItem: FC<ICartItemProps> = ({ item }) => {
  const { imageUrl, title, price, type, size, count, id } = item;
  const dispatch = useDispatch();

  const onClickPlus = () => {
    if (count < 8) {
      dispatch(plusItem({ id, type, size }));
    }
  };

  const onClickMinus = () => {
    // if (count === 1) {
    //   dispatch(removeItem({ id, type, size }));
    // }
    dispatch(minusItem({ id, type, size }));
  };

  const onClickRemove = () => {
    dispatch(removeItem({ id, type, size }));
  };

  return (
    <li className={scss.cartItemWrapper}>
      <div className={scss.cartWrapper}>
        <img className={scss.cartItemImg} src={imageUrl} alt="Image pizza" />

        <div className={scss.cartItemDesc}>
          <h3 className={scss.cartItemTitle}>{title}</h3>
          <p className={scss.cartItemText}>
            {' '}
            {typeOptions[type]} тісто, {size} см.
          </p>
        </div>
      </div>

      <div className={scss.priceWrapper}>
        <div className={scss.countWrapper}>
          <button
            disabled={count === 1}
            onClick={onClickMinus}
            className={scss.cartMinusBtn}
          >
            <svg className={scss.cartIconMinus} width="18" height="18">
              <use href={`${sprite}#icon-circle-minus`} />
            </svg>
          </button>

          <p className={scss.countText}>{count}</p>
          <button onClick={onClickPlus} className={scss.cartPlusBtn}>
            <svg className={scss.cartIconPlus} width="18" height="18">
              <use href={`${sprite}#icon-circle-plus`} />
            </svg>
          </button>
        </div>

        <p className={scss.cartPriceText}>{price * count} грн.</p>
        <button>
          <svg
            onClick={onClickRemove}
            className={scss.deleteIcon}
            width="18"
            height="18"
          >
            <use href={`${sprite}#icon-cancel-circle`} />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default CartItem;
