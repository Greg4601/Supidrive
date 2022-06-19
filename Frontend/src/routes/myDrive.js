import MyDriveList from "../data/myDriveList";
import UploadItem from "../data/uploadItem";
import { UserContext } from '../contexts/AuthContext';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, Outlet } from 'react-router-dom';



export default function MyDrive() {

    const navigate = useNavigate()

    const { isLogged, setIsLogged, isAdmin, setIsAdmin, isImpressionate, setIsImpressionate } = useContext(UserContext)

    useEffect(() => {
        if (localStorage.getItem('adminToken')) {
            setIsAdmin(true)
        }
    }, [setIsAdmin])

    const handleBackToAdmin = () => {
        const token = localStorage.getItem('adminToken')
        localStorage.setItem('token', token)
        localStorage.removeItem('adminToken')
        navigate('/users')
        window.location.reload(false);
    }

    return (
        <div>
            <h1 style={{ fontWeight: 900 }}>My Drive :</h1>
            <UploadItem />
            <MyDriveList />
            {(isAdmin) && (
                <Link to='/users' onClick={() => handleBackToAdmin()}>Back to Admin View</Link>
            )
            }
        </div>
    );
}