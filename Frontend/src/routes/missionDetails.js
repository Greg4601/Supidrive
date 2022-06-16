import React from "react"
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

import { Skeleton } from 'antd';

export default function MissionDetails() {
    const {missionId} = useParams()

    const [isLoading, setIsLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState([]);
    useEffect(() => {
    const getData = async () => {
        setIsLoading(true);
        const data = await axios.get(
            "http://localhost:5000/missions/" + missionId
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
            <h1 style={{ fontWeight: 900 }}>More info about mission id :</h1>
                <Skeleton />
            </div>
        )
    }

    return (
        <div>
            <h1 style={{ fontWeight: 900 }}>More info about mission id :</h1>
                <p><b>Id : </b>{item._id}</p>
                <p><b>Country : </b>{item.country}</p>
                <p><b>Start date : </b>{moment(item.start_date).format("DD/MM/YYYY")}</p>
                <p><b>End date : </b>{moment(item.end_date).format("DD/MM/YYYY")}</p>
                <p><b>Rover : </b>{item.rovers}</p>
        </div>
    );
}