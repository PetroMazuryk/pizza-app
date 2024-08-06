import { useState, useEffect, useRef } from 'react';

import { sortOptions } from '../../constants/sortOptions';
import sprite from '../../assets/sprite.svg';
import scss from './SortPopap.module.scss';

const SortPopup = () => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selected, setSelected] = useState(0);
  const [isRotated, setIsRotated] = useState(false);
  const popupRef = useRef();

  const sortName = sortOptions[selected].name;

  const onClickListItem = (index) => {
    setSelected(index);
    setVisiblePopup(false);
    setIsRotated(false);
  };

  const handleOutsideClick = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
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
        <span onClick={togglePopup}>{sortName}</span>
      </div>
      {visiblePopup && (
        <div className={scss.sortPopap}>
          <ul>
            {sortOptions.map((option, index) => (
              <li
                key={index}
                onClick={() => onClickListItem(index)}
                className={selected === index ? scss.active : ''}
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
