import React from 'react';
import {useSelector} from "react-redux";
import {Navigate} from "react-router";
import {selectRefreshToken} from "../../features/auth/userSlice";


const RequireAuth = (props) => {
    const refreshToken = useSelector(selectRefreshToken);
    if (refreshToken === null){
        return <Navigate to='/login'/>;
    }
    return <div>{props.children}</div>
};

export default RequireAuth;