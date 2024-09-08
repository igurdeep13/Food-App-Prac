import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css"

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?apiKey=${apiKey}`);
      const data = await response.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div className={styles.recipeCard}>
      <div>
        <h1 className={styles.recipeTitle}>{food.title}</h1>
        <img src={food.image} alt="" />

        <span>⏱ {food.readyInMinutes} Minutes</span>
        <span>{food.vegetarian ? " 🥗 Vegetarian" : "🍗Non-Vegetarian"}</span>
        <span> 👨‍👧‍👦 Serves {food.servings}</span>
      </div>
      <div>
        <h2>Instructions</h2>
        <ol>
        {isLoading === true ? (
          <h3>Data is loading...</h3>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => <li>{step.step}</li>)
        )}
        </ol>
      </div>
    </div>
  );
}
