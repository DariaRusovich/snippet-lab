//import { useState, useEffect } from "react";
import { createCat } from "../api/api";

import { useCategories } from "../hooks/useCategories";
import "./Categories.css";

export default function Categories() {
  const [cats, dispatchCats] = useCategories();
  console.log(cats);
  async function createNewCategory(e) {
    e.preventDefault();
    const newCat = {
      name: e.target.category.value,
    };
    const uncommonCat = cats.find((cat) => cat.name === newCat.name);
    console.log(uncommonCat);
    if (uncommonCat) {
      alert(`${uncommonCat.name} category already exist`);
      dispatchCats({ type: "INIT", payload: cats });
      e.target.reset();
    } else {
      const [savedCat, savedCatError] = await createCat(newCat);
      if (savedCat) {
        dispatchCats({ type: "ADD", payload: savedCat });
        e.target.reset();
      }
    }
    console.log(newCat);
  }

  return (
    <div className="categories-pannel">
      <div className="categories">
        <h2 className="categories-title">All categories</h2>
        {cats.length > 0 && (
          <ul className="categories-list">
            {cats.map((cat) => (
              <li key={cat.id}>{cat.name}</li>
            ))}
          </ul>
        )}
        <form className="add-form" onSubmit={createNewCategory}>
          <input className="form-category" type="text" name="category" />
          <button className="btn btn-style">➕ Category</button>
        </form>
      </div>
    </div>
  );
}
