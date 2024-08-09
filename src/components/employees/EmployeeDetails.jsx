import { useParams } from "react-router-dom";
import "./Employee.css";
import { useEffect, useState } from "react";
import { getEmployeeByUserId } from "../../services/EmployeeService";

export const EmployeeDetails = () => {
    const { employeeId } = useParams();
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        getEmployeeByUserId(employeeId).then(res => setEmployee(res[0]))
    }, [employeeId]);

    console.log(employee);

    return(
        <section className="employee">
            <div className="employee-header">
                {employee.user?.fullName}
            </div>
            <div>
                <span className="employee-info">Email: </span>
                {employee.user?.email}
            </div>
            <div>
                <span className="employee-info">Specialty: </span>
                {employee.specialty}
            </div>
            <div>
                <span className="employee-info">Rate: </span>
                ${employee.rate}/hr
            </div>
        </section>
    )
}