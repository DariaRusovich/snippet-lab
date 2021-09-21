
import "./Snippet.css";

export default function Snippet({snippet}) {
console.log(snippet.title);
  return (
    <div className="snippet-item">
      <div className="snippet-item-head">
        <h2 className="snippet-title">{snippet.title}</h2>
        <h3 className="snippet-title">{snippet.category}</h3>
        <button className="btn btn-style">Edit snippet</button>
      </div>
      <div className="code">
        {snippet ? <pre className={snippet.category}>
         {snippet.code}
          </pre>  : 'Error!'}
      </div>
      <p className="notes">
        {snippet.notes}
      </p>
    </div>
  );
}
