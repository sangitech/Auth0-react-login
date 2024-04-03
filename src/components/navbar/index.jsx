import React from "react";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const { isAuthenticated } = useSelector(state => state.auth)
    const { loginWithRedirect, logout } = useAuth0()
    return (
        <div> 
            {
                isAuthenticated
                    ?
                    <button className="btn-com" onClick={() => { logout({ logoutParams: { returnTo: process.env.REACT_APP_RETURN_TO } }) }}>
                        Logout
                    </button>
                    :
                    <button className="btn-com" onClick={() => { loginWithRedirect() }}>
                        Login
                    </button>
            }
        </div>
    )
}

export default Navbar;