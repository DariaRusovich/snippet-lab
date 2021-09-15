import EditSnippet from "./EditSnippet";
import "./Snippet.css";

export default function Snippet({}) {
  return (
    <div className="snippet-item">
      <div className="snippet-item-head">
        <h2 className="snippet-title">New Snippet Title</h2>
        <EditSnippet></EditSnippet>
      </div>
      <div className="code"></div>
      <h2 className="notes"></h2>
    </div>
  );
}
