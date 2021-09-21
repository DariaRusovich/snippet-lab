import "./AddNewSnippet.css";
import Editor from "@monaco-editor/react";
import { useState, useEffect } from "react";
import { getCats, createSnippet } from "../api/api";
import { useHistory, useParams } from "react-router";
import { useCategories } from "../hooks/useCategories";

export default function AddNewSnippet() {
  const {id} = useParams()
  const history = useHistory();
  const [editingSnippet, seteditingSnippet] = useState(null);
  useEffect(() => {
  console.log('edit mode');
  }, [])
  const [snippetLang, setSnippetLang] = useState("javascript");
  const [cats] = useCategories();
  const [snippetCode, setSnippetCode] = useState("");

  
  async function createNewSnippet(e) {
    e.preventDefault();
    const newSnippet = {
      lang: e.target.lang.value,
      title: e.target.title.value,
      category: e.target.category.value,
      createdAt: Date.now(),
      updatedAt: null,
      code: snippetCode,
      notes: e.target.notes.value,
    };
    console.log(newSnippet);
    const [savedSnippet, savedSnippetError] = await createSnippet(newSnippet);
    if (!savedSnippetError) {
      alert("OK!");
      e.target.reset();
      setSnippetCode("// some code here...");
      history.push("/");
    }
  }
  function handleEditorChange(value, event) {
    setSnippetCode(value);
  }
  function cancelCreatingSnippet(e) {
    e.target.reset();
    setSnippetCode("// some code here...");
    history.push("/");
  }
  return (
    <div className="container">
      <form className="add-form" onSubmit={createNewSnippet} onReset={cancelCreatingSnippet}>
        <h2>Create a new snippet</h2>
        <h3>Title</h3>
        <input className="form-title" type="text" name="title" id="form-title" required />
        <h3>Category</h3>
        <select className="form-category" name="category" required>
          {cats.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <h3>Language</h3>
        <select
          className="form-lang"
          name="lang"
          required
          value={snippetLang}
          onChange={(e) => setSnippetLang(e.target.value)}
        >
          <option>abap</option>
          <option>aes</option>
          <option>apex</option>
          <option>azcli</option>
          <option>bat</option>
          <option>bicep</option>
          <option>c</option>
          <option>cameligo</option>
          <option>clojure</option>
          <option>coffeescript</option>
          <option>cpp</option>
          <option>csharp</option>
          <option>csp</option>
          <option>css</option>
          <option>dart</option>
          <option>dockerfile</option>
          <option>ecl</option>
          <option>elixir</option>
          <option>fsharp</option>
          <option>go</option>
          <option>graphql</option>
          <option>handlebars</option>
          <option>hcl</option>
          <option>html</option>
          <option>ini</option>
          <option>java</option>
          <option>javascript</option>
          <option>json</option>
          <option>julia</option>
          <option>kotlin</option>
          <option>less</option>
          <option>lexon</option>
          <option>liquid</option>
          <option>lua</option>
          <option>m3</option>
          <option>markdown</option>
          <option>mips</option>
          <option>msdax</option>
          <option>mysql</option>
          <option>objective-c</option>
          <option>pascal</option>
          <option>pascaligo</option>
          <option>perl</option>
          <option>pgsql</option>
          <option>php</option>
          <option>plaintext</option>
          <option>postiats</option>
          <option>powerquery</option>
          <option>powershell</option>
          <option>pug</option>
          <option>python</option>
          <option>qsharp</option>
          <option>r</option>
          <option>razor</option>
          <option>redis</option>
          <option>redshift</option>
          <option>restructuredtext</option>
          <option>ruby</option>
          <option>rust</option>
          <option>sb</option>
          <option>scala</option>
          <option>scheme</option>
          <option>scss</option>
          <option>shell</option>
          <option>sol</option>
          <option>sparql</option>
          <option>sql</option>
          <option>st</option>
          <option>swift</option>
          <option>systemverilog</option>
          <option>tcl</option>
          <option>twig</option>
          <option>typescript</option>
          <option>vb</option>
          <option>verilog</option>
          <option>xml</option>
          <option>yaml</option>
        </select>
        <h3>Code</h3>
        <Editor
          height="30vh"
          language={snippetLang}
          defaultValue="// some code here..."
          onChange={handleEditorChange}
        />
        <h3>Notes</h3>
        <textarea className="form-notes" name="notes" id="" cols="30" rows="10"></textarea>
        <div className="form-btn-group">
          <button className="btn btn-style" type="submit">
            Create
          </button>
          <button className="btn btn-style" type="reset">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
