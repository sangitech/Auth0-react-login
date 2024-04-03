import React from "react";
import { Navigate } from "react-router-dom";

const ProdectedRoute = ({ children, auth }) => {
    const { isAuthenticated, isLoading } = auth

    if (isLoading) return <div style={{ color: "#ffffff" }}>Loading...</div>
    if (isAuthenticated) return children
    return (
        <Navigate to="/" />
    )
}

export default ProdectedRoute;