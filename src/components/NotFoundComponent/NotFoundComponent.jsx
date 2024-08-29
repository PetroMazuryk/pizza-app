import { NavLink } from 'react-router-dom';
import notFoundImg from '../../assets/notFound.png';
import scss from './NotFoundComponent.module.scss';

const NotFoundComponent = () => {
  return (
    <div className={scss.errorWrapper}>
      <img
        className={scss.errorImg}
        src={notFoundImg}
        alt="error bad request"
      />
      <h2 className={scss.errorTitle}>Нічого не було знайдено</h2>

      <NavLink className={scss.backLink} to="/">
        На головну
      </NavLink>
    </div>
  );
};

export default NotFoundComponent;
