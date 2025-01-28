import type { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import {findUserByEmail} from "@/servises/api-service"
import {loginAdmin} from '@/servises/api-service'
import { API_URL } from "@/commons/constants";


export const authConfig:AuthOptions = {
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
        Credentials({
            credentials: {
                email: { label: "email", type: "email", required: true },
                password: { label: "password", type: "password", required: true }
            },
            async authorize(credentials) {
     
                console.log("Authorize called with", credentials);
                
                if (!credentials?.email || !credentials.password) return null;
                try {
                    const currentUser = await loginAdmin(credentials)
                    if (!currentUser || !currentUser.token) {
                        console.error("Failed to login:invalid credentials.");
                        return null
                    }
                    console.log("Logged in", currentUser);
                    return currentUser
                }
                catch (error) {
                    console.error("Error during authorize:", error.message);
                    return null
                }
              
            }
      
}),
    ],    
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET, // Секрет для підпису токенів
    },
    
}