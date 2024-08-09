/* eslint-disable react/prop-types */
import "./Users.css"

export const User = ({user}) => {

    return (
        <div key={user.id} className="user">
            <div>
                <div className="user-info">Name</div>
                <div>{user.fullName}</div>
            </div>
            <div>
                <div className="user-info">Email</div>
                <div>{user.email}</div>
            </div>
        </div>
    )
}