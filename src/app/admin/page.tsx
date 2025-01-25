"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Admin() {
const router = useRouter();

    useEffect(() => {
        router.push('/admin/add-desert')
    }, [router])


    return (
        <div>
            <h1>Admin Page</h1>
            <p>Login!</p>
        </div>)
        }