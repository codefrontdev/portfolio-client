import axios from "axios";

const request = axios.create({
    baseURL: 'https://api-portfolio-project-v-1-code-dream.onrender.com/'
});


export default request;