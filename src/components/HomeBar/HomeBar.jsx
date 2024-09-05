import Categories from '../Categories/Categories';
import SortPopup from '../SortPopap/SortPopap';

import scss from './HomeBar.module.scss';

const HomeBar = () => {
  return (
    <div className={scss.wrapper}>
      <Categories />
      <SortPopup />
    </div>
  );
};

export default HomeBar;
