import { API_KEY, BASE_URL } from "../../Utils/Config"
import axios from 'axios';

export const getData = (url)=>{
    const fullUrl = `${BASE_URL}${url}?api_key=${API_KEY}`;
    return axios.get(fullUrl).then((response)=>{return response.data}).catch((error)=>console.log(`Error occured: ${error}`));
}