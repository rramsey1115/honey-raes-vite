import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
const navigate = useNavigate;

export const Navbar = () => {
    return (
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
            {localStorage.getItem("honey_user") ? (
                <li className="navbar-item navbar-logout">
                    <NavLink
                        className="navbar-link"
                        to=""
                        onClick={() => {
                            localStorage.removeItem("honey_user")
                            navigate("/", { replace: true })
                        }}
                    >
                        Logout
                    </NavLink>
                </li>
            ) : (
                ""
            )}
        </ul>
    )
}