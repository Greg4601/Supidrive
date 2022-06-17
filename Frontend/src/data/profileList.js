import React, { useEffect, useState } from 'react'
import moment, { relativeTimeRounding } from "moment";
import { getAllUsers, deleteUser, downloadFile } from '../api/getAPI'
import { SearchOutlined, DeleteFilled, EyeOutlined, EditFilled, DownloadOutlined } from '@ant-design/icons';
import { Table, Input, Button } from 'antd'
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";



export default function ProfileList() {
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);


    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            // setLoginStatus(true)
            const decoded = jwt_decode(token);
            setUsername(decoded.name)
            setEmail(decoded.email)
            if (decoded.isAdmin) {
                setIsAdmin(true)
            }
        }
        // navigate('/my-drive')
    }, [])
    return (
        <div>
            <p><b>Username: </b>{username}</p>
            <p><b>Email: </b>{email}</p>
            <p><b>Is Admin?: </b>{isAdmin ? "True" : "False"}</p>
        </div>
    )
}