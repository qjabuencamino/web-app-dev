import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_API_URL;

export const userLogin = (payload) => {
    return axios.post(`${base_url}/login`, payload);
}

export const userRegistraion = (payload) => {
    return axios.post(`${base_url}/register`, payload);
};

export const userLogout = () => {
    return axios.get(`${base_url}/logout`);
};