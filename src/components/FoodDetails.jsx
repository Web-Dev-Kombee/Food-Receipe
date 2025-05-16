import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  // const API_KEY = "4381447598fe4f9896a7c4db25b58b0c";
  const API_KEY = "9d3aae8478dc4e759582e06dcdf5bae7";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt={food.title} />
      </div>
      <div>
        <span>
          <strong>⌚{food.readyInMinutes}</strong>
        </span>
        <span>👨‍👩‍👦‍👦Serves: {food.servings}</span>
        <span>{food.vegetarian == true ? "🥕Vegetarian" : "🍖Non-Vegetarian"}</span>
        <span>{food.vegan ? "🐮 Vegan" : ""}</span>
      </div>
      <div>
        <span>$ {food.pricePerServing}/100</span>
      </div>

      <div>
        <h2>Instructions</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => (
            <li key={step.number}>{step.step}</li>
          ))
        )}
      </div>
    </div>
  );
}

FoodDetails.propTypes = {
  foodId: PropTypes.number.isRequired,
  food: PropTypes.object.isRequired,
};
