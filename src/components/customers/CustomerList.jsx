import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../services/UserService";
import "./Customers.css";
import { User } from "../users/User";

export const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getNonStaffUsers().then(res => setCustomers(res));
    }, []);

    return (<div className="customers">
        {customers.map((customer) => {
            return (
               <User user={customer} key={customer.id}/>
            )
        })}
    </div>)
}