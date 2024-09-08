import EmptyCart from '../components/EmptyCart/EmptyCart';
import CartComponent from '../components/CartComponent/CartComponent';

const Cart = () => {
  const cart = true;
  return (
    <div>
      <>{cart ? <CartComponent /> : <EmptyCart />}</>
    </div>
  );
};

export default Cart;
