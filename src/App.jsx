import { useEffect, useState } from "react";
import MyRecipesComponent from "./MyRecipesComponent";
import "./App.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;
// const BASE_URL = `https://api.edamam.com/search?q=avocado&app_id=${process.env.REACT_APP_MY_ID}&app_key=${process.env.REACT_APP_MY_KEY}`;

const BASE_MY_ID = process.env.REACT_APP_MY_ID;
const BASE_MY_KEY = process.env.REACT_APP_MY_KEY;

export default function App() {
  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);

  useEffect(async () => {
    const response = await fetch(
      BASE_URL
      // `https://api.edamam.com/search?q=avocado&app_id=${BASE_MY_ID}&app_key=${BASE_MY_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);

    setMyRecipes(data.hits);
  }, []);

  const myRecepeSearch = (e) => {
    e.preventDefault();
    setMySearch(e.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <video play muted loop>
          <source
            src="https://files.cdn.thinkific.com/file_uploads/397660/attachments/90d/92f/4be/food.mp4"
            type="video/mp4"
          />
        </video>

        <h1>Find a Recipe</h1>
      </div>
      <div className="container">
        <form>
          <input
            type="text"
            className="search"
            placeholder="Search..."
            value={mySearch}
            onChange={myRecepeSearch}
          />
        </form>
      </div>
      <div className="container">
        <button>
          <img
            src="https://img.icons8.com/fluency/48/00000/fry.png"
            alt="search"
          />
        </button>
      </div>

      {myRecipes.map((element, index) => {
        return (
          <MyRecipesComponent
            key={index}
            label={element.recipe.label}
            image={element.recipe.image}
            calories={element.recipe.calories}
            ingredients={element.recipe.ingredients}
          />
        );
      })}
    </div>
  );
}
