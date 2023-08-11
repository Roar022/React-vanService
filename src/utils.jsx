import { redirect, Navigate } from "react-router-dom"
import { Outlet } from "react-router-dom"
export async function requireAuth() {
    const isLoggedIn = false
    
    if (!isLoggedIn) {
        throw redirect("/login")
        // return <Navigate to="/login"/>
    }
    return <Outlet/>

}




