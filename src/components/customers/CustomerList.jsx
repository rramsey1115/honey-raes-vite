import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../services/UserService";
import "./Customers.css";
import { User } from "../users/User";
import { Link } from "react-router-dom";

export const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getNonStaffUsers().then(res => setCustomers(res));
    }, []);

    return (<div className="customers">
        {customers.map((customer) => {
            return (
                <Link key={customer.id} to={`/customers/${customer.id}`}>
                    <User user={customer} key={customer.id} />
                </Link>
            )
        })}
    </div>)
}