import axios from 'axios';

const instance = axios.create({
  backendURL: 'http://localhost:5000',
})

export default instance
