import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { UploadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { uploadFile } from '../api/getAPI'
// import UploadTest from './upload-test';
// import './upload-item.css'

export default function UploadItem() {
    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);
    // const path = props.path

    const changeHandler = e => {
        setSelectedFile(e.target.files[0]);
        console.log(e.target.files[0])
        setIsSelected(true);
        // handleSubmission()
    }

    const handleSubmission = async () => {
        const formData = new FormData();

        formData.append('input_file', selectedFile);
        await uploadFile(formData)
        window.location.reload()
    }

    return (
        // <input type="file" name='file' className='UploadFile' icon={<UploadOutlined />} />


        <div className='upload-item-style'>
            <label>Importer un fichier:
                <input type="file" name='upload-input' id="input_file" onChange={changeHandler} /></label>
            {
                isSelected ?
                    <button onClick={handleSubmission}>Submit</button> :
                    <p>Select a file</p>
            }
        </div>
    )
}