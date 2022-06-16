import React from "react"
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

import { Skeleton } from 'antd';

export default function RoverDetails() {
    const {roverId} = useParams()

    const [isLoading, setIsLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState([]);
    useEffect(() => {
    const getData = async () => {
        setIsLoading(true);
        const data = await axios.get(
            "http://localhost:5000/rovers/" + roverId
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
            <h1 style={{ fontWeight: 900 }}>More info about rover id :</h1>
                <Skeleton />
            </div>
        )
    }

    return (
        <div>
            <h1 style={{ fontWeight: 900 }}>More info about rover id :</h1>
                <img className="roverImage" src={item.image} />
                <p> </p>
                <p><b>Id : </b>{item._id}</p>
                <p><b>Name : </b>{item.name}</p>
                <p><b>Launch date : </b>{moment(item.launch_date).format("DD/MM/YYYY")}</p>
                <p><b>Construction date : </b>{moment(item.construction_date).format("DD/MM/YYYY")}</p>
                <p><b>Rover Constructor : </b>{item.rover_constructor}</p>
        </div>
    );
}