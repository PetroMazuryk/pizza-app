import { Link } from 'react-router-dom';
import scss from './FullPizzaComponent.module.scss';

interface IPizzaItem {
  imageUrl: string;
  title: string;
  ingredients: string;
}

interface IFullPizzaComponentProps {
  item: IPizzaItem;
}

const FullPizzaComponent: React.FC<IFullPizzaComponentProps> = ({ item }) => {
  const { imageUrl, title, ingredients } = item;

  return (
    <div className={scss.pizzaWrapper}>
      <div className={scss.container}>
        <img className={scss.img} src={imageUrl} alt="pizza name" width={450} />

        <div className={scss.pizzaInfo}>
          <h2 className={scss.title}>{title}</h2>
          <p className={scss.text}>{ingredients}</p>
        </div>
      </div>

      <Link className={scss.backLink} to="/">
        На головну
      </Link>
    </div>
  );
};

export default FullPizzaComponent;
