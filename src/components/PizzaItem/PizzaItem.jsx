import scss from './PizzaItem.module.scss';

const PizzaItem = ({ imageUrl, title, price, sizes, types }) => {
  const typenames = ['тонке', 'традиційне'];
  return (
    <div className={scss.wrapper}>
      <div className={scss.wrapperImg}>
        <img className={scss.img} src={imageUrl} alt={title} />
      </div>
      <div className={scss.title}>{title}</div>
      <div className={scss.selector}>
        <ul className={scss.listTypes}>
          {types.map((typeId, index) => (
            <li className={scss.itemSizes} key={index}>
              {typenames[typeId]}
            </li>
          ))}
        </ul>
        <ul className={scss.listSizes}>
          {sizes.map((size, index) => (
            <li className={scss.itemSizes} key={index}>
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className={scss.wrapperPrice}>
        <div> {price} грн.</div>
        <button>Додати</button>
      </div>
    </div>
  );
};

export default PizzaItem;
