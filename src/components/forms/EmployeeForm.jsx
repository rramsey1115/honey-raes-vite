/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Form.css";
import { getEmployeeByUserId, updateEmployee } from "../../services/EmployeeService";
import { useNavigate } from "react-router-dom";

export const EmployeeForm = ({ currentUser }) => {
    const [employee, setEmployee] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getEmployeeByUserId(currentUser.id).then((data) => {
            setEmployee(data[0])
        })
    }, [currentUser]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const editedEmployee = {
            id: employee.id,
            specialty: employee.specialty,
            rate: employee.rate,
            employeeId: employee.employeeId
        }

        updateEmployee(editedEmployee).then(() => {
            navigate(`/employees/${currentUser.id}`)
        })
    }


    return (
        <form className="profile">
            <h2>Update Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty-input">Specialty</label>
                    <input
                        value={employee?.specialty ? employee.specialty : ""}
                        onChange={(e) => {
                            const copy = { ...employee}
                            copy.specialty = e.target.value
                            setEmployee(copy)
                        }}
                        id="specialty-input"
                        type="text"
                        required
                        className="form-control"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourly-input">Hourly Rate</label>
                    <input
                        value={employee?.rate ? employee.rate : 0}
                        onChange={(e) => {
                            const copy = { ...employee }
                            copy.rate = e.target.value
                            setEmployee(copy)
                        }}
                        type="number"
                        required
                        className="form-control"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button className="btn form-btn btn-primary form-btn" onClick={handleSubmit}>Save</button>
                </div>
            </fieldset>
        </form>
    )
}