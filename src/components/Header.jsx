import { Link } from 'react-router-dom'
import './Header.css'


export default function Header({}) {
    return (
        <header className="header">
        <div className="container">
       <div className="header-wrap">
       <a className="logo" href="index.html">
            Logo
        </a>
        <Link className="btn btn-style" to="/add">➕ Add new snippet</Link>
       </div>
        </div>
        </header>
    )
}