import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { clearItems } from '../../redux/slices/cartSlice';
import {
  selectCartItems,
  selectTotalPrice,
  selectTotalCount,
} from '../../redux/slices/selectors';
import CartItem, { ICartItem } from '../CartItem/CartItem';

import sprite from '../../assets/sprite.svg';
import scss from './CartComponent.module.scss';

const CartComponent: FC = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const totalCount = useSelector(selectTotalCount);

  const onClickClier = () => {
    dispatch(clearItems());
  };

  return (
    <div className={scss.container}>
      <div className={scss.topBlockWrapper}>
        <div onClick={onClickClier} className={scss.topBlockTitle}>
          <svg className={scss.cartIcon} width="18" height="18">
            <use href={`${sprite}#icon-cart`} />
          </svg>
          <h2 className={scss.cartTitle}>Кошик</h2>
        </div>

        <button onClick={onClickClier} className={scss.trashBtn}>
          <svg className={scss.trashIcon} width="18" height="18">
            <use href={`${sprite}#icon-trash`} />
          </svg>

          <p className={scss.trashText}>очистити кошик</p>
        </button>
      </div>

      <ul>
        {items.map((item: ICartItem) => (
          <CartItem key={`${item.id}_${item.size}_${item.type}`} item={item} />
        ))}
      </ul>

      <div className={scss.totalInfoWrapper}>
        <p className={scss.totalInfoText}>
          Всього піц: <span className={scss.total}>{totalCount} </span>шт.
        </p>

        <p className={scss.totalInfoText}>
          Сума замовлення: <span className={scss.total}>{totalPrice}</span> грн.
        </p>
      </div>

      <div className={scss.wrapperBtn}>
        <NavLink className={scss.backBtn} to="/">
          <svg className={scss.backIcon} width="18" height="18">
            <use href={`${sprite}#icon-arrow-left`} />
          </svg>
          <p className={scss.backTextBtn}>Повернутися назад</p>
        </NavLink>

        <button className={scss.payBtn}>
          <p className={scss.payText}>Оплатити замовлення</p>
        </button>
      </div>
    </div>
  );
};

export default CartComponent;
