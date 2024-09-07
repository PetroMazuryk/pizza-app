import scss from './FullPizzaComponent.module.scss';

const FullPizzaComponent = ({ item }) => {
  const { imageUrl, title, ingredients } = item;

  return (
    <div className={scss.container}>
      <img className={scss.img} src={imageUrl} alt="pizza name" width={450} />

      <div className={scss.pizzaInfo}>
        <h2 className={scss.title}>{title}</h2>
        <p className={scss.text}>{ingredients}</p>
      </div>
    </div>
  );
};

export default FullPizzaComponent;
