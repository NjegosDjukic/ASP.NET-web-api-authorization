import axios from "axios";

export const getFact = async() => {
    return axios.get('https://catfact.ninja/fact');
}
export const addEmployee = async(payload) => {
    return axios.post('https://localhost:7196/api/Employee', payload);
}