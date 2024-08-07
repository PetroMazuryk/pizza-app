import sprite from '../../assets/sprite.svg';
import scss from './Search.module.scss';

const Search = () => {
  return (
    <div className={scss.searchWrapper}>
      <svg className={scss.iconSearch} width="18" height="18">
        <use href={`${sprite}#icon-search`}></use>
      </svg>
      <input
        className={scss.searchInput}
        type="text"
        placeholder="Введіть назву піци"
        autoComplete="on"
        name="search"
      />
      <svg className={scss.iconClose} width="20" height="20">
        <use href={`${sprite}#icon-close`}></use>
      </svg>
    </div>
  );
};

export default Search;
