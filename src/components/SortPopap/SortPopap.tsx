import { useState, useEffect, useRef, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSortType } from '../../redux/slices/filterSlice';
import { selectSortType } from '../../redux/slices/selectors';
import { sortOptions, ISortOptions } from '../../constants/sortOptions';

import sprite from '../../assets/sprite.svg';
import scss from './SortPopap.module.scss';

const SortPopup: FC = () => {
  const dispatch = useDispatch();
  const sort = useSelector(selectSortType);
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const onClickListItem = (value: ISortOptions) => {
    dispatch(setSortType(value));
    setVisiblePopup(false);
    setIsRotated(false);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
      setVisiblePopup(false);
      setIsRotated(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const togglePopup = () => {
    setVisiblePopup(!visiblePopup);
    setIsRotated(!isRotated);
  };

  return (
    <div className={scss.sort} ref={popupRef}>
      <div className={scss.sortLabel}>
        <svg
          className={`${scss.svg} ${isRotated ? scss.rotated : ''}`}
          width="16"
          height="16"
        >
          <use href={`${sprite}#icon-circle-up`}></use>
        </svg>

        <b>Сортування за:</b>
        <span onClick={togglePopup}>{sort.name}</span>
      </div>
      {visiblePopup && (
        <div className={scss.sortPopap}>
          <ul>
            {sortOptions.map((option, index) => (
              <li
                key={index}
                onClick={() => onClickListItem(option)}
                className={sort.name === option.name ? scss.active : ''}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortPopup;
