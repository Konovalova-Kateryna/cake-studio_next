import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
    providers:[
        Providers.Credentials({
            name:"Credentials",
            credentials:{
                username:{label:"Username", type:"text"},
                password:{label:"Password", type:"password"},
            },

            async authorize(credentials){
                const user={id:1, name:"Test User"}
                if(user){
                    return user

                }
                else{return null
            }

            }
            })
        
    ],
    session:{
        strategy:"jwt", //використовуємо JWT токен

    },
    jwt:{
        secret:process.env.JWT_TOKEN,
    }
})