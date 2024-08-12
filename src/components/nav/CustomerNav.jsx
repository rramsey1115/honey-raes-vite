import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

export const CustomerNav = () => {
    const navigate = useNavigate();
    return (
        <ul className="navbar">
            <li className="navbar-item">
                <NavLink className="navbar-link" to="/tickets">Tickets</NavLink>
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