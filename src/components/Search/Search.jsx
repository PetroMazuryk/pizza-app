import { useCallback, useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterSearch } from '../../redux/slices/filterSlice';
import { selectFilter } from '../../redux/slices/selectors';
import Joi from 'joi';
import debounce from 'lodash.debounce';

import sprite from '../../assets/sprite.svg';
import scss from './Search.module.scss';

const Search = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const inputValue = useSelector(selectFilter);
  const [localValue, setLocalValue] = useState(inputValue);
  const [error, setError] = useState('');

  const schema = Joi.string().min(3).max(26).messages({
    'string.empty': 'Поле не може бути порожнім',
    'string.min': 'Назва повинна містити щонайменше 3 символи',
    'string.max': 'Назва не може перевищувати 26 символів',
  });

  const updateSearchValue = useCallback(
    debounce((str) => {
      const { error } = schema.validate(str);

      if (error) {
        setError(error.message);
      } else {
        setError('');
        dispatch(changeFilterSearch(str));
        console.log('searc');
      }
    }, 300),
    []
  );

  const onChangeInput = (event) => {
    const newValue = event.target.value;
    setLocalValue(newValue);
    updateSearchValue(newValue);
  };

  const handleClearClick = () => {
    setLocalValue('');
    dispatch(changeFilterSearch(''));
    setError('');
    inputRef.current.focus();
  };

  useEffect(() => {
    setLocalValue(inputValue);
  }, [inputValue]);

  return (
    <div className={scss.searchWrapper}>
      <svg className={scss.iconSearch} width="18" height="18">
        <use href={`${sprite}#icon-search`} />
      </svg>
      <input
        className={scss.searchInput}
        type="text"
        placeholder="Введіть назву піци"
        onChange={onChangeInput}
        value={localValue}
        autoComplete="on"
        ref={inputRef}
        name="search"
      />
      {error && <p className={scss.errorText}>{error}</p>}
      {localValue !== '' && (
        <svg
          onClick={handleClearClick}
          className={scss.iconClose}
          width="20"
          height="20"
        >
          <use href={`${sprite}#icon-close`} />
        </svg>
      )}
    </div>
  );
};

export default Search;
