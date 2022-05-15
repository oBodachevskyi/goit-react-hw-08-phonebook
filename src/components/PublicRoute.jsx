import { useSelector } from "react-redux";

import { Navigate, Outlet } from "react-router-dom";



export default function PublicRoutes () {
    const isLoggedIn = useSelector(state => state.auth.token)
    return  isLoggedIn ===null ? <Outlet /> : <Navigate to="/" />
}

