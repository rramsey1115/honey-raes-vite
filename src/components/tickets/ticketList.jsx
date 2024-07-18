import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketService";
import "./Tickets.css"
import { Ticket } from "./Ticket";

export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([]);
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
    const [filteredTickets, setFilteredTickets] = useState([]);

    useEffect(() => {
        getAllTickets().then(res => setAllTickets(res));
    }, []);

    useEffect(() => {
        if (showEmergencyOnly) {
            const emergencyTickets = allTickets.filter(ticket => ticket.emergency === true);
            setFilteredTickets(emergencyTickets);
        } else {
            setFilteredTickets(allTickets);
        }
    }, [showEmergencyOnly, allTickets]);

    return <>
        <div className="tickets-container">
            <h2>Tickets</h2>
            <div>
                <button
                    className="filter-btn btn-secondary"
                    onClick={() => { setShowEmergencyOnly(true) }}
                >Emergency
                </button>
                <button className="filter-btn btn-warning"
                    onClick={() => { setShowEmergencyOnly(false) }}>
                    Show All
                </button>
            </div>
            <article className="tickets">
                {filteredTickets.map(ticketObj => {
                    return (
                        <Ticket key={ticketObj.id} ticket={ticketObj} />
                    )
                })}
            </article>
        </div>
    </>
}