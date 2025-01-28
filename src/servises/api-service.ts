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




const newToken ={
    set(token:string){
        axios.defaults.headers.common.Authorization=`Bearer ${token}`
    },
    unset(){
       delete axios.defaults.headers.common.Authorization;
    }
}

export const Login=async(data:any)=>{
    try { 
        const responce=await axios.post('http://localhost:3003/api/auth/login', data)
        
        return responce.data;

    } catch (error) {
        console.log(error)
    }
}

export const findUserByEmail = async (data) => {
    try {
        const responce = await axios.get("http://localhost:3003/api/auth/user", data);
            
        return responce.data
        
    } catch (error) {console.log(error.message)
        
    }

}

export const loginAdmin=async(data:any)=>{
    try {    
   
        const response=await axios.post("http://localhost:3003/api/auth/login", {
    email: data.email,
    password: data.password
        });        
        
        console.log(response.data);
        const{ token, user}=response.data;
        if (token){
    newToken.set(token);
    console.log("Log In Admin", response.data);
    return {
        ...user,
        token:newToken
    }
   
}else{
    console.log("Invalid Authorization");
    return null
}
        
    } catch (error:any) {
        console.error("Login Error", error?.responce?.data||error.message);
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