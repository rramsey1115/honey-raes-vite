import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    return( 
        <ul className="navbar">
            <li className="navbar-item">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="navbar-item">
                <NavLink to="/tickets">Tickets</NavLink>
            </li>
            <li className="navbar-item">
                <NavLink to="/employees">Employees</NavLink>
            </li>
            <li className="navbar-item">
                <NavLink to="/customers">Customers</NavLink>
            </li>
        </ul>
    )
}