import Axios from 'axios';

const Api = Axios.create({
    baseURL: 'https://api.github.com/'
});

export default Api;