import { useEffect, useState } from "react";



const API_KEY = "1a9cd7d86fdc4a72b0d138a72082281b"
const URL = "https://api.spoonacular.com/recipes/complexSearch";

export default function Search() {
  // Capturing the State Controlled Variable
  const [query, setQuery] = useState("pizza");

  // it takes callback function and dependency list
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(
        `${URL}?query=${query}&apiKey=${API_KEY}`
      );
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
