import { useEffect, useState } from "react";
import "./Employee.css";
import { User } from "../users/User";
import { getStaffUsers } from "../../services/UserService";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
    const [allEmployees, setAllEmployees] = useState([]);

    useEffect(() => {
        getStaffUsers().then(res => setAllEmployees(res));
    }, [])

    
    return (
        <div className="employees">
        {allEmployees.map((employee) => {
            console.log(employee)
            return(
            <Link key={employee.id} to={`/employees/${employee.id}`}>
                <User user={employee} />
            </Link>
            )
        })}
        </div>
    )
}