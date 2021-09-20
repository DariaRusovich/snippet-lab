import './SearchField.css'


export default function SearchField({}){
    return (
        <form className="search-form">
        <input type="text" name="text" required />
        <button className="btn btn-style btn-search"> Search snippet</button>
        </form>

    )

}