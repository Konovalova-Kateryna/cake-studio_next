import { API_URL } from "@/commons/constants";
import axios from 'axios';
import {getToken} from "next-auth/jwt";

axios.defaults.baseURL = API_URL.BASE;

export const getDeserts = async () => {
    try {
        const responce = await axios.get('/deserts');
        return responce.data
    } catch (error: any) {
        console.log(error.message)
    }
}

export const createDesert = async (data: any) => {
try {
    const responce = await axios.post(API_URL.ADMIN, data);
    return responce.data
}    catch (error: any) {
        console.log(error.message)
        throw error;
    }   
}


const newToken=await getToken({secret:process.env.JWT_SECRET});
if (newToken){
    console.log("Token", newToken)
}else{
    console.log("Invalid Authorize")
}

const token ={
    set(token:string){
        axios.defaults.headers.common.Authorization=`Bearer ${token}`
    },
    unset(){
       delete axios.defaults.headers.common.Authorization;
    }
}

export const loginAdmin=async(data:any)=>{
    try {
        const response=await axios.post("/auth/login", data);

        const newToken=response.data.newToken;
        if (newToken){
    token.set(newToken);
    console.log("Log In Admin", response);
    return response.data
   
}else{
    console.log("Invalid Authorization");
    return null
}
        
    } catch (error:any) {
        console.log("Login Error", error?.responce?.data||error.message);
        throw new Error("Помилка логіну: перевірте дані або сервер")
        
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