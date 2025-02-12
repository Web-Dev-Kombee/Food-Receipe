import PropTypes from "prop-types";
import styles from "./fooditem.module.css";
export function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img
        className={styles.itemImage}
        src={food.image}
        alt={food.title}
        target="_blank"
      />
      <div className={styles.itemContent}>
        <p className={styles.itemName}> {food.title}</p>
      </div>

      <div className={styles.itemButtonContainer}>
        <button
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id)
          }}
          className={styles.itemButton}
        >
          View Receipe
        </button>
      </div>
    </div>
  );
}

FoodItem.propTypes = {
  food: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  setFoodId: PropTypes.func.isRequired,
};
