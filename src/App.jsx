import "./App.css";
import { useEffect, useState } from "react";

const MY_KEY = "a04733881564ce87dec2bbdcfb9fe4ca";
const MY_ID = "5bbd2eed";

export default function App() {
  useEffect(async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=avocado&app_id=${MY_ID}&app_key=${MY_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source
            src="https://files.cdn.thinkific.com/file_uploads/397660/attachments/90d/92f/4be/food.mp4"
            type="video/mp4"
          />
        </video>

        <h1>Find a Recipe</h1>
      </div>
      <div className="container">
        <form>
          <input type="text" className="search" />
        </form>
        <div className="container">
          <button>
            <img
              src="https://img.icons8.com/fluency/48/00000/fry.png"
              alt="search"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
