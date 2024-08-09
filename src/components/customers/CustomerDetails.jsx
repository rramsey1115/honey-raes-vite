import { useParams } from "react-router-dom";
import "./Customers.css";
import { useEffect, useState } from "react";
import { getUserById } from "../../services/UserService";

export const CustomerDetails = () => {
    const  {customerId}  = useParams();
    const [customer, setCustomer] = useState({});

    useEffect(() => {
        getUserById(customerId).then((res) => setCustomer(res[0]))
    }, [customerId])

    {console.log(customer)}
    return (
    <div className="customer-container">
        <div className="customer-header">
            {customer.fullName}
        </div>
        <div>

        </div>
    </div>
    )
}