/* eslint-disable react/prop-types */
import { useState } from "react"
import "./Form.css"
import { addNewTicket } from "../../services/ticketService"
import { useNavigate } from "react-router-dom"

export const CreateTicket = ({ currentUser }) => {
    const [ticket, setTicket] = useState({
        "description": "",
        "emergency": false
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const copy = { ...ticket }
        e.target.name === "emergency"
            ? copy[e.target.name] = e.target.checked
            : copy[e.target.name] = e.target.value
        setTicket(copy)
    }

    const handleSave = (event) => {
        event.preventDefault();

        const ticketObj = {
            description: ticket.description,
            emergency: ticket.emergency,
            userId: currentUser.id,
            dateCompleted: ""
        }

        ticketObj.description
            ? addNewTicket(ticketObj).then(() => { navigate("/tickets") })
            : window.alert("Please fill in a description!")
    }

    return (
        <form>
            <h2>
                New Service Ticket
            </h2>
            <fieldset className="form-group">
                <legend htmlFor="create-input">Description</legend>
                <input
                    id="create-input"
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Brief description of problem"
                    onChange={handleChange}
                    required
                />
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="emergency-checkbox">
                        Emergency:
                        <input id="emergency-checkbox" type="checkbox" name="emergency" onChange={handleChange} />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-info" onClick={handleSave}>Submit Ticket</button>
                </div>
            </fieldset>
        </form>
    )
}