import { useEffect, useState } from "react";
import styles from "./search.module.css"

const URL = "https://api.spoonacular.com/recipes/complexSearch";

export default function Search({ foodData, setFoodData}) {
  // Capturing the State Controlled Variable.
  const [query, setQuery] = useState("pizza");

  // It takes callback function and dependency list.
  useEffect(() => {
    async function fetchFood() {
      const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
      const res = await fetch(`${URL}?query=${query}&apiKey=${apiKey}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results)
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchBar}>
      <input className={styles.inputBar}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        type="text"
        value={query}
      />
    </div>
  );
}
