import { useEffect, useState } from "react";
import "./Employee.css";
import { User } from "../users/User";
import { getStaffUsers } from "../../services/UserService";

export const EmployeeList = () => {
    const [allEmployees, setAllEmployees] = useState([]);

    useEffect(() => {
        getStaffUsers().then(res => setAllEmployees(res));
    }, [])

    return (
        <div className="customers">
        {allEmployees.map((employee) => {
            return(<User user={employee} key={employee.id} />)
        })}
        </div>
    )
}