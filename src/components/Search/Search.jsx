import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterSearch } from '../../redux/slices/filterSlice';
import { selectFilter } from '../../redux/slices/selectors';

import sprite from '../../assets/sprite.svg';
import scss from './Search.module.scss';

const Search = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const inputValue = useSelector(selectFilter);

  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(changeFilterSearch(value));
  };

  const handleClearClick = () => {
    dispatch(changeFilterSearch(''));
  };

  return (
    <div className={scss.searchWrapper}>
      <svg className={scss.iconSearch} width="18" height="18">
        <use href={`${sprite}#icon-search`}></use>
      </svg>
      <input
        className={scss.searchInput}
        type="text"
        placeholder="Введіть назву піци"
        onChange={handleChange}
        value={inputValue}
        autoComplete="on"
        ref={inputRef}
        name="search"
      />
      {inputValue !== '' && (
        <svg
          onClick={handleClearClick}
          className={scss.iconClose}
          width="20"
          height="20
      "
        >
          <use href={`${sprite}#icon-close`}></use>
        </svg>
      )}
    </div>
  );
};

export default Search;
