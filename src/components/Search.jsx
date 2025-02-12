import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
// const API_KEY = "4381447598fe4f9896a7c4db25b58b0c";
const API_KEY = "9d3aae8478dc4e759582e06dcdf5bae7";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  // Syntax of the useEffect hook
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }

    function demo() {
      console.log("Demo executed!");
    }
    demo();
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.inputContainer}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search here..."
      ></input>
    </div>
  );
}
