import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo-pizza.png';
import scss from './Header.module.scss';
const Header = () => {
  return (
    <header className={scss.header}>
      <div className={scss.container}>
        <div className={scss.logoWrapper}>
          <Link to="/">
            <img className={scss.logoImg} src={logo} alt="Pizza logo" />
          </Link>

          <NavLink to="/">
            <div className={scss.logoInfo}>
              <h2 className={scss.logoName}>
                <p style={{ color: 'green' }}>Pizza </p>
                <p style={{ color: '#fff' }}> & </p>
                <p style={{ color: 'orangered' }}>Great</p>
              </h2>
              <p className={scss.logoText}>смачна доставка піци </p>
            </div>
          </NavLink>
        </div>

        <NavLink className={scss.linCart} to="/cart">
          <p className={scss.carttext}>total Price грн.</p>

          <p className={scss.cartText}>total Count</p>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
