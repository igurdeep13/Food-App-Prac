import styles from "./foodItem.module.css";

export default function FoodItem({ food }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImg} src={food.image} />
      <div className={styles.itemContentContainer}>
        <p className={styles.itemContent}> {food.title}</p>
      </div>
      <div className={styles.itemButtonContainer}>
        <button>View Recipe</button>
      </div>
    </div>
  );
}
