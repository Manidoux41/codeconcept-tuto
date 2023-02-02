import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink to="/" className={({isActive})  => isActive ? "activeLink" : undefined}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/add-techno" className={({isActive})  => isActive ? "activeLink" : undefined}>Add Techno</NavLink>
        </li>
        <li>
          <NavLink to="/all-technos" className={({isActive}) => isActive ? "active-link" : undefined}>All Technos</NavLink>
        </li>
      </ul>
    </div>
  );
}
