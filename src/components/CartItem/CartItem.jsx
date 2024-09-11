import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../../redux/slices/cartSlice';

import { typeOptions } from '../../constants/typeOptions';
import sprite from '../../assets/sprite.svg';

import scss from './CartItem.module.scss';

const CartItem = ({ item }) => {
  const { imageUrl, title, price, type, size, count, id } = item;
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };

  const onClickMinus = () => {
    if (count > 0) {
      dispatch(minusItem(id));
    }
    if (count === 1) {
      dispatch(removeItem(id));
    }
  };

  const onClickRemove = () => {
    dispatch(removeItem(id));
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
          <svg
            onClick={onClickMinus}
            className={scss.cartIcon}
            width="18"
            height="18"
          >
            <use href={`${sprite}#icon-circle-minus`} />
          </svg>
          <p className={scss.countText}>{count}</p>

          <svg
            onClick={onClickPlus}
            className={scss.cartIcon}
            width="18"
            height="18"
          >
            <use href={`${sprite}#icon-circle-plus`} />
          </svg>
        </div>

        <p className={scss.cartPriceText}>{price * count}</p>

        <svg
          onClick={onClickRemove}
          className={scss.deleteIcon}
          width="18"
          height="18"
        >
          <use href={`${sprite}#icon-cancel-circle`} />
        </svg>
      </div>
    </li>
  );
};

export default CartItem;
