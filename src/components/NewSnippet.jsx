import EditSnippet from './EditSnippet';
import './NewSnippet.css'

export default function NewSnippet({}) {
  return (
    <>
      <div className="new-snippet-item">
        <div className="new-snippet-item-head">
          <h2 className="new-snippet-title">New Snippet Title</h2>
          <EditSnippet></EditSnippet>
        </div>
        <div className="code"></div>
        <h2 className="notes"></h2>
      </div>
    </>
  );
}
