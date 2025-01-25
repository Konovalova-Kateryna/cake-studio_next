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

                    const user=await findUserByEmail(credentials.email);
                    
                    if (!user){
                        throw new Error("User not found")
                    }
                    if(!user.password){
                        throw new Error("Invalid password")
                    }
                    return{
                        id:user.id,
                        email:user.email,
                        password:user.password
                    }
                }
        })
    ],
    session:{
        strategy:"jwt"
    },
    jwt:{
        secret:process.env.JWT_SECRET
    }
})