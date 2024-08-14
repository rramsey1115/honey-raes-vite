/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketService";
import "./Tickets.css"
import { Ticket } from "./Ticket";
import { TicketFilter } from "./TicketFilter";

export const TicketList = ({ currentUser }) => {
    const [allTickets, setAllTickets] = useState([]);
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
    const [filteredTickets, setFilteredTickets] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [showOpenOnly, setShowOpenOnly] = useState(false);

    const getAndSetTickets = () => {
        getAllTickets().then(ticketsArray => {
            if (currentUser.isStaff === "true") {
                setAllTickets(ticketsArray);
            } else {
                const customerTickets = ticketsArray.filter((ticket) => ticket.userId === currentUser.id)
                setAllTickets(customerTickets);
            }
        });
    }

    useEffect(() => {
        getAndSetTickets();
    }, []);

    useEffect(() => {
        if (showEmergencyOnly && allTickets) {
            const emergencyTickets = allTickets.filter(ticket => ticket.emergency === true);
            setFilteredTickets(emergencyTickets);
        } else {
            setFilteredTickets(allTickets);
        }
    }, [showEmergencyOnly, allTickets]);

    useEffect(() => {
        if(allTickets){
        const foundTickets = allTickets.filter(ticket =>
            ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredTickets(foundTickets);
    }
    }, [searchTerm, allTickets])

    useEffect(() => {
        if (showOpenOnly && allTickets) {
            const openTickets = allTickets.filter(ticket => ticket.dateCompleted === "")
            setFilteredTickets(openTickets)
        } else {
            setFilteredTickets(allTickets)
        }
    }, [showOpenOnly, allTickets])

    return filteredTickets && currentUser.id ? <>
        <div className="tickets-container">
            <h2>Tickets</h2>
            <TicketFilter setShowEmergencyOnly={setShowEmergencyOnly} setSearchTerm={setSearchTerm} currentUser={currentUser} setShowOpenOnly={setShowOpenOnly} />
            <article className="tickets">
                {filteredTickets.map(ticketObj => {
                    return (
                        <Ticket key={ticketObj.id} ticket={ticketObj} currentUser={currentUser} getAndSetTickets={getAndSetTickets} />
                    )
                })}
            </article>
        </div>
    </>
    :
    "No current user or filtered tickets.. idk which one"
}