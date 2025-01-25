"use client";

import React from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import {signIn, signOut, useSession} from "next-auth/react";


export const LoginAdminComponent=()=>{
const {data:session}=useSession;
if (session){
    return(
        <div>
            <p>Ви увійшли як {session.user.email}</p>
            <button onClick={()=>signOut()}>Вийти</button>
        </div>
    )
}
return (
    <div>
        <p>Ви не увійшли</p>
        <button onClick={()=>signIn()}>Увійти</button>
    </div>
)
    

}