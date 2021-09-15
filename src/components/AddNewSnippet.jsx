import "./AddNewSnippet.css"


export default function AddNewSnippet(params) {
    return(
        <div className="container">
        <form className="add-form">
        <h2>Create a new snippet</h2>
       <h3>Title</h3>
        <input className="form-title" type="text" name="title" id="form-title" required/>
        <h3>Folder</h3>
        <select className="form-folder" name="folder" id="">
            <option value=""></option>
        </select>
        <h3>Language</h3>
        <select className="form-lang" name="lang" id="">
        <option value=""></option>
        </select>
        <h3>Code</h3>
        <textarea className="form-code" name="code" id="" cols="30" rows="10"></textarea>
        <h3>Notes</h3>
        <textarea className="form-notes" name="notes" id="" cols="30" rows="10"></textarea>
        <div className="form-btn-group">
            <button className="btn btn-style">Create</button>
            <button className="btn btn-style">Cancel</button>
        </div>
        </form>
        
        </div>
    )
}