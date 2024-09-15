import { FC } from 'react';
import EmptyCart from '../components/EmptyCart/EmptyCart';
import CartComponent from '../components/CartComponent/CartComponent';
import { selectCartItems } from '../redux/slices/selectors';
import { useSelector } from 'react-redux';

const Cart: FC = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div>
      <>{cartItems.length > 0 ? <CartComponent /> : <EmptyCart />}</>
    </div>
  );
};

export default Cart;
