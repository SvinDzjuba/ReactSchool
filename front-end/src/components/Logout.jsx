import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Logout() {
    const navigate = useNavigate();
    useEffect(() => {
        logoutSession();
    });
    const logoutSession = async () => {
        try {
            await axios.delete('http://localhost:5000/users/logout');
            navigate('/');
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <></>
    )
}