import { useState, useEffect } from "react";
import { getCats } from "../api/api";
import "./Categories.css";


export default function Categories() {
  const [cats, setCats] = useState([])
  useEffect(() => {
    (async function () {
      const [catsData, catsDataError] = await getCats()
      if (!catsDataError) {
        setCats(catsData)
      }
    })()
  }, [])
  return (
    <div className="categories-pannel">
      <div className="categories">
        <h2 className="categories-title">All categories</h2>
        {cats.length > 0 && (
          <ul className="categories-list">
            {cats.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        <button className="btn btn-add">➕ Category</button>
      </div>
    </div>
  );
}
