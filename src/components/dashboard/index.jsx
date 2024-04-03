import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
    const { user } = useSelector(state => state.auth)
    console.log(user);
    return (
        <>
            <h1>Welcome!</h1>
            <div className="user-image">
                {user && <img src={user.picture} alt="user" />}
            </div>
            {user && <h4 className="pt-20 color-white">Hello {user.nickname}</h4>}
            <div className="pt-20 color-white">
                {user && <h4>Email:  <span className="user-email">{user.email}</span></h4>}
            </div>
        </>
    )
}

export default Dashboard;