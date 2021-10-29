import { useState, useEffect } from "react";
import { createCat, getSnippets } from "../api/api";
import { useCategories } from "../hooks/useCategories";
import { useSnippets } from "../hooks/useSnippets";

import "./Categories.css";

export default function Categories() {
  const [cats, dispatchCats] = useCategories();
  const [snippets, dispatchSnippets] = useSnippets();
  const [snippetsCopy, setSnippetsCopy] = useState([]);
  const [filterSnippets, setfilterSnippets] = useState([])
  const catName = [...cats].map((cat) => cat.name)


  useEffect(() => {
    setSnippetsCopy(snippets)
  }, [snippets]);

  useEffect(() => {
    filterSnippetsList()
  }, [filterSnippets, snippets])


function filterSnippetsList() {
  if (filterSnippets) {
    console.log(filterSnippets);
    setSnippetsCopy([...snippets].filter(snippet => snippet.category === catName.name))
    console.log(...snippets);
  }
  else {
    setSnippetsCopy(snippets)
    
  }
}

  async function createNewCategory(e) {
    e.preventDefault();
    const newCat = {
      name: e.target.category.value,
    };
    const uncommonCat = cats.find((cat) => cat.name === newCat.name);
    if (uncommonCat) {
      alert(`${uncommonCat.name} category already exist`);
      dispatchCats({ type: "INIT", payload: cats });
      e.target.reset();
    } else {
      const [savedCat, savedCatError] = await createCat(newCat);
      if (!savedCatError) {
        dispatchCats({ type: "ADD", payload: savedCat });
        e.target.reset();
      }
    }
  }

  return (
    <div className="categories-pannel">
      <div className="categories">
        <h2 className="categories-title">All categories</h2>
        {cats.length > 0 && (
          <ul className="categories-list">
            {cats.map((cat) => (
              <li onClick={setfilterSnippets} key={cat.id}>{cat.name}</li>
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
