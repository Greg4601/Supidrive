import React, { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";

export default function ProfileList() {
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);


    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            const decoded = jwt_decode(token);
            setUsername(decoded.name)
            setEmail(decoded.email)
            if (decoded.isAdmin) {
                setIsAdmin(true)
            }
        }
    }, [])
    return (
        <div>
            <p><b>Username: </b>{username}</p>
            <p><b>Email: </b>{email}</p>
            <p><b>Is Admin?: </b>{isAdmin ? "True" : "False"}</p>
        </div>
    )
}