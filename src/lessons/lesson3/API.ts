import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '?apikey=ae1f7a05';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        const query = `${key}&s=${title}`
        return axiosInstance.get(query)
    },
    searchFilmsByType: (title: string, type: string) => {
        const query = `${key}&s=${title}&type=${type}`
        return axiosInstance.get(query)
    }
};


export default API;
