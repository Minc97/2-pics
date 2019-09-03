import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 499406342780e204e427eeae72766ce0626729109a2643627701c65d4e3916d3'
    }
});