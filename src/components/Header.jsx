import { Link } from "react-router-dom"



export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/editor">Editor</Link>
                    <Link to="/editor/1">Edit snippet 1</Link>
                    <Link to="/snippets">Snippets</Link>
                    <Link to="/snippet/1">Snippet 1</Link>
                    <Link to="/43uifsdkj">404</Link>
                </nav>
            </div>
        </header>
    )
}
