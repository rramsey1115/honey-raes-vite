/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/EmployeeService";
import { assignTicket, updateTicket } from "../../services/ticketService";

export const Ticket = ({ ticket, currentUser, getAndSetTickets }) => {
    const [employees, setEmployees] = useState([]);
    const [assignedEmployee, setAssignedEmployee] = useState({});

    useEffect(() => {
        getAllEmployees().then(res => setEmployees(res));
    }, [])

    useEffect(() => {
        const foundEmployee = employees.find(employee => employee.id === ticket.employeeTickets[0]?.employeeId);
        setAssignedEmployee(foundEmployee);
    }, [employees, ticket])

    const handleClaim = () => {
        const currentEmployee = employees.find(emp => emp.userId === currentUser.id)
        const newEmployeeTicket = {
            employeeId: currentEmployee.id,
            serviceTicketId: ticket.id
        }
        assignTicket(newEmployeeTicket).then(() => { getAndSetTickets() })
    }

    const handleClose = () => {
        const closedTicket = {
            id: ticket.id,
            userId: ticket.userId,
            description: ticket.description,
            emergency: ticket.emergency,
            dateCompleted: new Date()
        }
        updateTicket(closedTicket).then(() => { getAndSetTickets() })
    }

    return (<section className="ticket" key={ticket.id}>
        <header className="ticket-info">{ticket.id}</header>
        <div>{ticket.description}</div>
        <footer>
            <div>
                <div className="ticket-info">Assignee</div>
                <div>{assignedEmployee ? assignedEmployee.user?.fullName : "none"}</div>
            </div>
            <div>
                <div className="ticket-info">Emergency</div>
                <div>{ticket.emergency ? "yes" : "no"}</div>
            </div>
            <div className="button-container">
                {currentUser.isStaff && !assignedEmployee
                    ? <button className="btn btn-secondary" onClick={handleClaim}>Claim</button>
                    : ""
                }
                {assignedEmployee?.userId === currentUser.id && ticket.dateCompleted === ""
                    ? <button className="btn btn-warning" onClick={handleClose}>Close</button>
                    : ""}

            </div>
        </footer>
    </section>)
}