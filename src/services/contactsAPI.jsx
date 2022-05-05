import axios from 'axios';

axios.defaults.baseURL = 'https://626c34eb5267c14d566e7bb3.mockapi.io';

 async function fetchContacts() {
    const { data } = await axios.get(`/contacts`);    
    return data;
}

export default fetchContacts;

