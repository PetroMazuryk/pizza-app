import clsx from 'clsx';
import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, clearPage } from '../../redux/slices/filterSlice';
import { selectCategoryId } from '../../redux/slices/selectors';
import { categoryOptions } from '../../constants/categoryOptions';

import scss from './Categories.module.scss';

const Categories: FC = () => {
  const categoryId = useSelector(selectCategoryId);
  const dispatch = useDispatch();

  const handleCategory = (idx: number) => {
    dispatch(setCategoryId(idx));
    dispatch(clearPage());
  };

  return (
    <div>
      <ul className={scss.list}>
        {categoryOptions.map((option, idx) => (
          <li key={idx}>
            <button
              onClick={() => handleCategory(idx)}
              className={clsx(scss.btn, {
                [scss.active]: categoryId === idx,
              })}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      {/* <div className={scss.titleCategory}>{categoryOptions[activeIndex]}</div> */}
    </div>
  );
};

export default Categories;
