import pizza from '../../assets/pizza-default.jpg';
import sprite from '../../assets/sprite.svg';

import scss from './CartItem.module.scss';

const CartItem = () => {
  return (
    <li className={scss.cartItemWrapper}>
      <div className={scss.cartWrapper}>
        <img className={scss.cartItemImg} src={pizza} alt="Image pizza" />

        <div className={scss.cartItemDesc}>
          <h3 className={scss.cartItemTitle}>title</h3>
          <p className={scss.cartItemText}>тісто, size см.</p>
        </div>
      </div>

      <div className={scss.priceWrapper}>
        <div className={scss.countWrapper}>
          {/* <MinusIcon
            size={32}
            color={count > 1 ? '#FE5F1E' : '#D7D7D7'}
            onClick={() => handleDecrementCount(id)}
          /> */}
          <svg className={scss.cartIcon} width="18" height="18">
            <use href={`${sprite}#icon-circle-minus`} />
          </svg>
          <p className={scss.countText}>count</p>
          {/* <PlusIcon
            size={32}
            color="#FE5F1E"
            onClick={() => handleIncrement(id)}
          /> */}
          <svg className={scss.cartIcon} width="18" height="18">
            <use href={`${sprite}#icon-circle-plus`} />
          </svg>
        </div>

        <p className={scss.cartPriceText}>price * coun</p>

        {/* <DeleteIcon
          size={32}
          color="#D7D7D7"
          onClick={() => dispatch(deleteCartItem(id))}
        /> */}
        <svg className={scss.deleteIcon} width="18" height="18">
          <use href={`${sprite}#icon-cancel-circle`} />
        </svg>
      </div>
    </li>
  );
};

export default CartItem;
