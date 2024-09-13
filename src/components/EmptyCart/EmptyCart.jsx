import { NavLink } from 'react-router-dom';
import emptyImg from '../../assets/emptyBasket.png';

import scss from './EmptyCart.module.scss';

const EmptyCart = () => {
  return (
    <div className={scss.container}>
      <div className={scss.cartWrapper}>
        <h2 className={scss.cartTitle}>Ваша корзина пуста</h2>

        <p className={scss.cartText}>
          Ймовірно, що Ви досі не замовили піцу.
          <br />
          Для того, щоб замовити піцу, перейдіть на главну сторінку.
        </p>

        <img className={scss.cartImg} src={emptyImg} alt="Empty cart" />

        <NavLink className={scss.cartBtn} to="/">
          Повернутися назад
        </NavLink>
      </div>
    </div>
  );
};

export default EmptyCart;
