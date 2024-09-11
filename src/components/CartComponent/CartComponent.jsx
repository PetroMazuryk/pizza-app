import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { clearItems } from '../../redux/slices/cartSlice';
import {
  selectCartItems,
  selectTotalPrice,
  selectTotalCount,
} from '../../redux/slices/selectors';
import CartItem from '../CartItem/CartItem';

import sprite from '../../assets/sprite.svg';
import scss from './CartComponent.module.scss';

const CartComponent = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const totalCount = useSelector(selectTotalCount);

  const onClickClier = () => {
    dispatch(clearItems());
    console.log('clear');
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

        <button className={scss.trashBtn}>
          <svg className={scss.trashIcon} width="18" height="18">
            <use href={`${sprite}#icon-trash`} />
          </svg>

          <p className={scss.trashText}>очистити кошик</p>
        </button>
      </div>

      <ul>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>

      <div className={scss.totalInfoWrapper}>
        <p className={scss.totalInfoText}>
          Всього піц: <span>{totalCount} шт.</span>
        </p>

        <p className={scss.totalInfoText}>
          Сума замовлення: <span>{totalPrice} грн.</span>
        </p>
      </div>

      <div className={scss.wrapperBtn}>
        <NavLink className={scss.backBtn} to="/">
          <svg className={scss.backIcon} width="18" height="18">
            <use href={`${sprite}#icon-arrow-left`} />
          </svg>
          <p className={scss.backTextBtn}>Повернутися назад</p>
        </NavLink>

        <NavLink className={scss.payBtn}>
          <p className={scss.payText}>Оплатити замовлення</p>
        </NavLink>
      </div>
    </div>
  );
};

export default CartComponent;
