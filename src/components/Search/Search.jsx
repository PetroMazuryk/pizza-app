import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterSearch } from '../../redux/slices/filterSlice';
import { selectFilter } from '../../redux/slices/selectors';
import Joi from 'joi';

import sprite from '../../assets/sprite.svg';
import scss from './Search.module.scss';

const Search = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const inputValue = useSelector(selectFilter);
  const [error, setError] = useState('');

  const schema = Joi.string().min(3).max(20).messages({
    'string.empty': 'Поле не може бути порожнім',
    'string.min': 'Назва повинна містити щонайменше 3 символи',
    'string.max': 'Назва не може перевищувати 20 символів',
  });

  const handleChange = (event) => {
    const value = event.target.value;

    const { error } = schema.validate(value);

    if (error) {
      setError(error.message);
    } else {
      setError('');
    }

    dispatch(changeFilterSearch(value));
  };

  const handleClearClick = () => {
    dispatch(changeFilterSearch(''));
    setError('');
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
      {error && <p className={scss.errorText}>{error}</p>}
      {inputValue !== '' && (
        <svg
          onClick={handleClearClick}
          className={scss.iconClose}
          width="20"
          height="20"
        >
          <use href={`${sprite}#icon-close`}></use>
        </svg>
      )}
    </div>
  );
};

export default Search;
