import { useParams } from "react-router-dom";
import "./Customers.css";
import { useEffect, useState } from "react";
import { getCustomerByUserId } from "../../services/CustomerService";

export const CustomerDetails = () => {
    const {customerId} = useParams();
    const [customer, setCustomer] = useState({});

    useEffect(() => {
        getCustomerByUserId(customerId).then((res) => setCustomer(res[0]))
    }, [customerId])

    {console.log(customer)}
    return (
    <section className="customer">
        <div className="customer-header">
            {customer.user?.fullName}
        </div>
        <div>
            <span className="customer-info">Email: </span>
            {customer.user?.email}
        </div>
        <div>
            <span className="customer-info">Address: </span>
            {customer.address}
        </div>
        <div>
            <span className="customer-info">Phone Number: </span>
            {customer.phoneNumber}
        </div>
    </section>
    )
}