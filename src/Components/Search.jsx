import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";

export default function Search() {
  // Capturing the State Controlled Variable.
  const [query, setQuery] = useState("pizza");

  // It takes callback function and dependency list.
  useEffect(() => {
    async function fetchFood() {
      const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
      const res = await fetch(`${URL}?query=${query}&apiKey=${apiKey}`);
      const data = await res.json();
      console.log(data);
    }
    fetchFood();
  }, [query]);

  return (
    <div>
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        type="text"
        value={query}
      />
    </div>
  );
}
