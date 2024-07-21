import clsx from 'clsx';
import { useState } from 'react';
import { categoryOptions } from '../../constants/categoryOptions';

import scss from './Categories.module.scss';

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCategory = (idx) => {
    setActiveIndex(idx);
  };

  return (
    <ul className={scss.list}>
      {categoryOptions.map((option, index) => (
        <li key={index}>
          <button
            onClick={() => handleCategory(index)}
            className={clsx(scss.btn, { [scss.active]: activeIndex === index })}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
