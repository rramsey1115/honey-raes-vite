import { useNavigate } from "react-router-dom"

/* eslint-disable react/prop-types */
export const TicketFilter = ({ setSearchTerm, setShowEmergencyOnly, currentUser, setShowOpenOnly }) => {
    const navigate = useNavigate();

    return (<div className="filter-bar">
        {currentUser.isStaff === "true" ?
            <>
                <button
                    className="filter-btn btn-secondary"
                    onClick={() => { setShowEmergencyOnly(true) }}
                >Emergency
                </button>
                <button className="filter-btn btn-warning"
                    onClick={() => { setShowEmergencyOnly(false) }}>
                    Show All
                </button>
                <input
                    type="text"
                    placeholder="Search Tickets"
                    className="ticket-search"
                    onChange={(event) => { setSearchTerm(event.target.value) }}
                />
            </>
            : <>
                <button className="btn-info filter-btn" onClick={() => {navigate('/tickets/create')}}>Create Ticket</button>
                <button className="btn-primary filter-btn" onClick={() => {setShowOpenOnly(true)} }>Open Tickets</button>
                <button className="btn-secondary filter-btn" onClick={() => {setShowOpenOnly(false)} }>All My Tickets</button>
            </>}
    </div>)
}