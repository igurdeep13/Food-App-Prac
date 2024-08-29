import { useState } from "react";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import NavBar from "./Components/NavBar";
import "./App.css"

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <NavBar />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData} />
    </div>
  );
}

export default App;
