/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/Welcome"
import { CustomerNav } from "../components/nav/CustomerNav"
import { TicketList } from "../components/tickets/ticketList"
import { CreateTicket } from "../components/forms/CreateTicket"

export const CustomerViews = ({currentUser}) => {
    return(
        <Routes>
            <Route path="/" element={
                <>
                    <CustomerNav />
                    <Outlet />
                </>
            }>
                <Route index element={<Welcome />}/>
                <Route path="/tickets">
                    <Route index element={<TicketList currentUser={currentUser}/>}/>
                    <Route path="create" element={<CreateTicket currentUser={currentUser}/>}/>
                </Route>
            </Route>
        </Routes>
    )
}