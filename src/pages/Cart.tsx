import { FC } from 'react';
import EmptyCart from '../components/EmptyCart/EmptyCart';
import CartComponent from '../components/CartComponent/CartComponent';
import { selectCartItems } from '../redux/slices/selectors';
import { useSelector } from 'react-redux';
import DocumentTitle from '../components/DocumentTitle';

const Cart: FC = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div>
      <DocumentTitle>Card for ordered pizza</DocumentTitle>
      {cartItems.length > 0 ? <CartComponent /> : <EmptyCart />}
    </div>
  );
};

export default Cart;
