import PropTypes from "prop-types";
import { FoodItem } from "./FoodItem";

export function FoodList({ foodData, setFoodId }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} setFoodId={setFoodId} />
      ))}
    </div>
  );
}

FoodList.propTypes = {
  foodData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  setFoodId: PropTypes.func.isRequired,
};
