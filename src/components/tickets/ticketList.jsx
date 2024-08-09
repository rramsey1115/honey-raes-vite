import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketService";
import "./Tickets.css"
import { Ticket } from "./Ticket";
import { TicketFilter } from "./TicketFilter";

export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([]);
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
    const [filteredTickets, setFilteredTickets] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

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

    useEffect(() => {
        const foundTickets = allTickets.filter(ticket =>
            ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredTickets(foundTickets);
    }, [searchTerm, allTickets])

    return <>
        <div className="tickets-container">
            <h2>Tickets</h2>
            <TicketFilter setShowEmergencyOnly={setShowEmergencyOnly} setSearchTerm={setSearchTerm} />
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