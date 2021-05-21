import axios from 'axios';

//Method used to store the server URL using the Axios library
const api = axios.create({
    baseURL: 'https://api-expenses.herokuapp.com/'
  
});

export default api;



