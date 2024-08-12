/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { EmployeeViews } from "./EmployeeViews"
import { CustomerViews } from "./CustomerViews"

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUserObject = JSON.parse(localHoneyUser);
    setCurrentUser(honeyUserObject);
  }, [])

  return (
    currentUser.isStaff === "true"
      ? (<EmployeeViews currentUser={currentUser} /> )
      : (<CustomerViews currentUser={currentUser}/>)
  )
}
