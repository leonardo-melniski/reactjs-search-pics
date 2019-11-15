import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers :{ Authorization: 'Client-ID 6c0fb68802e4ab2b27f110f3c96b1e5eb8f0381ce00e450cf0a2a7f005f7bbd5'},
    // params:{ query: term }
})