export const getCustomerById = (id) => {
    return fetch(`http://localhost:8088/customers?id=${id}&_embed=user`).then((res) => res.json())
}