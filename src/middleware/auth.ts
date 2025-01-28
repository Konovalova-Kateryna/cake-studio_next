import { NextApiRequest, NextApiResponse } from "next";
import {getToken} from "next-auth/jwt";

const secret=process.env.JWT_TOKEN;

export const authMiddleware=async(req:NextApiRequest, res:NextApiResponse, next:()=>void)=>{
    const token=await getToken({req, secret});

    if(!token){
        res.status(401).json({message:"Unaythorized"});
        return;
    }
    req.user=token;
    next();
}