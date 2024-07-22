import scss from './PizzaItem.module.scss';

const PizzaItem = ({ imageUrl, title, price }) => (
  <li>
    <img className={scss.img} src={imageUrl} alt={title} />
    <div className={scss.title}>{title}</div>
    <div className={scss.selector}>
      <ul>
        <li className={scss.active}>тонке</li>
        <li>традиційне</li>
      </ul>
      <ul>
        <li>{price} см</li>
        <li>30 см</li>
        <li>40 см</li>
      </ul>
    </div>
    <button>Counter</button>
  </li>
);

export default PizzaItem;
