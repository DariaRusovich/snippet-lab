import './Header.css'


export default function Header({}) {
    return (
        <header className="header">
        <div className="container">
       <div className="header-wrap">
       <a className="logo" href="index.html">
            Logo
        </a>
        <button className="btn btn-style">➕ Add new snippet</button>
       </div>
        </div>
        </header>
    )
}