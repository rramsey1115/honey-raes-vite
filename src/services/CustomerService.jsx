export const getCustomerByUserId = (id) => {
    return fetch(`http://localhost:8088/customers?userId=${id}&_embed=user`).then((res) => res.json())
}