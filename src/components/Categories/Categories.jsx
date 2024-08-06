import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../../redux/slices/filterSlice';
import { selectCategoryId } from '../../redux/slices/selectors';
import { categoryOptions } from '../../constants/categoryOptions';

import scss from './Categories.module.scss';

const Categories = () => {
  const categoryId = useSelector(selectCategoryId);
  const dispatch = useDispatch();

  const handleCategory = (idx) => {
    dispatch(setCategoryId(idx));
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
