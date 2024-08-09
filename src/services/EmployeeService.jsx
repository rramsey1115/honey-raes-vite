export const getAllEmployees = () => {
    return fetch(`http://localhost:8088/employees?_embed=user`).then(res => res.json())
}

export const getEmployeeByUserId = (userId) => {
    return fetch(`http://localhost:8088/employees?userId=${userId}&_embed=user`).then(res => res.json())
}