import "./Categories.css"


export default function Categories({ data }) {
  return (
    <div className="categories-pannel">
      <h2 className="categories-title"></h2>

      {data && data.length > 0 && 
      <ul className="categories-list">
         { data.map(item => <li key={item}>{item}</li>)}
      </ul>}
    </div>
  );
}
