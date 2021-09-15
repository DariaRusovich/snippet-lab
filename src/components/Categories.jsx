import "./Categories.css";

export default function Categories({ data }) {
  return (
    <div className="categories-pannel">
      <div className="categories">
        <h2 className="categories-title">All categories</h2>
        {data && data.length > 0 && (
          <ul className="categories-list">
            {data.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        <button className="btn btn-add">➕ Snippet</button>
      </div>
    </div>
  );
}
