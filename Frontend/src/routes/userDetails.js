import React from "react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

import MyDriveList from "../data/myDriveList";


import { Skeleton } from 'antd';

export default function UserDetails() {
    const { userId } = useParams()

    return (
        <div>
            <h1 style={{ fontWeight: 900 }}>My Drive :</h1>
            {/* <UploadItem /> */}
            {/* <p>Cette page permet d'afficher une liste de tous ses fichiers.</p> */}
            {/* <p>Vous permettre de trier les rovers par id, nom, date de lancement et de construction, constructeur du rover, ainsi que de voir l'image.</p> */}
            <MyDriveList />
        </div>
    );
}