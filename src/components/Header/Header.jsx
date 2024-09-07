import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo-pizza.png';
import Search from '../Search/Search';

import sprite from '../../assets/sprite.svg';
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
        <Search />
        <NavLink className={scss.linkCartWarpper} to="/cart">
          <p className={scss.cartText}> 525 грн.</p>
          <div className={scss.cartDelimiter}></div>
          <svg className={scss.cartIcon} width="18" height="18">
            <use href={`${sprite}#icon-cart`} />
          </svg>

          <p className={scss.cartText}> 22</p>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
