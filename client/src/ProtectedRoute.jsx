import React from "react";
import { useAuth } from "./contexto/auth.context";
import { Navigate, Outlet } from "react-router-dom";


function ProtectedRoute(){
    const {loading, isAuthenticated} = useAuth();

    if (loading) return <h1>Loading...</h1>
    if (!loading && !isAuthenticated) return <Navigate to = '/login' replace />
    return <Outlet/>
        
}
export default ProtectedRoute
//Este archivo se encarga de verificar si el usuario esta autenticado o no.