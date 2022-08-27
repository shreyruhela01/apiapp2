import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.instantwebtools.net/v1/passenger?page=0&size=10',
    headers: {},
});