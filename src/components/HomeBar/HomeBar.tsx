import { FC } from 'react';
import Categories from '../Categories/Categories';
import SortPopup from '../SortPopap/SortPopap';

import scss from './HomeBar.module.scss';

const HomeBar: FC = () => {
  return (
    <div className={scss.wrapper}>
      <Categories />
      <SortPopup />
    </div>
  );
};

export default HomeBar;
