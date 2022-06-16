import React from "react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

import { Skeleton } from 'antd';

export default function UserDetails() {
    const { userId } = useParams()

    const [isLoading, setIsLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            const data = await axios.get(
                "http://localhost:5000/users/" + userId
            );
            setFetchedData(data.data);
            setIsLoading(false);
        };
        getData();
    }, []);

    var item = fetchedData;

    while (isLoading) {
        return (
            <div>
                <h1 style={{ fontWeight: 900 }}>More info about user id :</h1>
                <Skeleton />
            </div>
        )
    }

    return (
        <div>
            <h1 style={{ fontWeight: 900 }}>More info about user id :</h1>
            <p><b>Id : </b>{item._id}</p>
            <p><b>Email : </b>{item.email}</p>
            <p><b>Pseudo : </b>{item.pseudo}</p>
            <p><b>Password : </b>{item.password}</p>
            <p><b>Is Admin? : </b>{item.isAdmin ? "True" : "False"}</p>
        </div>
    );
}