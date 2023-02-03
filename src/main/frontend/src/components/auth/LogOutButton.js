import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logoutTest, selectRefreshToken} from "../../features/auth/userSlice";
import {Button} from "react-bootstrap";
import {useLogoutMutation} from "../../features/auth/authApi";

const LogOutButton = () => {
    const dispatch = useDispatch()
    const [logout, {isLoading}] = useLogoutMutation();
    const refreshToken = useSelector(selectRefreshToken)
    const handleLogout =async () => {
        await logout(refreshToken);
        dispatch(logoutTest())
    }

    return (
        <Button className='bg-body btn-outline-dark text-dark'  onClick={handleLogout}>LogOut</Button>
    )
};

export default LogOutButton;