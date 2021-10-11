import axios from 'axios';
import { BASE_URL } from './apiConstants';

axios.defaults.baseURL = BASE_URL;

async function postUserRegisterData(userData) {
    const { data } = await axios.post('/users/signup', userData);
    return data; 
}

async function postUserLoginData(userData) {
    const { data } = await axios.post('/users/logun', userData)
    return data;
}

async function deleteUserLoginData() {
    const { data } = await axios.post('/users/logout');
    return data; 
}

async function fetchCurrentUser() {
    const { data } = await axios.get('/users/current');
    return data; 
}

const authAPI = {
    postUserRegisterData,
    postUserLoginData,
    deleteUserLoginData,
    fetchCurrentUser
};

export default authAPI;