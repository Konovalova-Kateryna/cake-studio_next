import { API_URL } from "@/commons/constants";
import axios from 'axios';

axios.defaults.baseURL = API_URL.BASE;

export const getDeserts = async () => {
    try {
        const responce = await axios.get('/deserts');
        return responce.data
    } catch (error: any) {
        console.log(error.message)
    }
}

// export class APIservice{
//     baseURL: string;
//     token: string;

//     constructor(baseURL: string) {
//         this.baseURL = baseURL;
//         this.token=""
//     }

//     setToken = (token: string) => {
        
//     }
// }