import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header({}) {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrap">
          <a className="logo" href="index.html">
            Logo
          </a>
          <NavLink
            className="btn btn-style"
            activeClassName="selected"
            to="/add"
          >
            ➕ Add new snippet
          </NavLink>
         
        </div>
      </div>
    </header>
  );
}
