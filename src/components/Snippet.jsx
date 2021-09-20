import EditSnippet from "./EditSnippet";
import Editor from "@monaco-editor/react";
import "./Snippet.css";

export default function Snippet({snippet}) {

  return (
    <div className="snippet-item">
      <div className="snippet-item-head">
        <h2 className="snippet-title">{snippet.title}</h2>
        <h3 className="snippet-title">{snippet.category}</h3>
        <EditSnippet></EditSnippet>
      </div>
      <div className="code">
        {snippet ? <Editor
          height="30vh"
          defaultLanguage={snippet.lang}
          defaultValue={snippet.code}
          theme="vs-dark"
        /> : 'Error!'}
      </div>
      <p className="notes">
        {snippet.notes}
      </p>
    </div>
  );
}
