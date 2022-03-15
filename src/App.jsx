import { useEffect, useState } from "react";
import "./App.css";


const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function App() {
  useEffect(async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    console.log(data.hits);
  }, []);

  console.log(process.env);

  const myRecepeSearch = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

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
          <input
            type="text"
            className="search"
            placeholder="Search..."
            onChange={myRecepeSearch}
          />
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
