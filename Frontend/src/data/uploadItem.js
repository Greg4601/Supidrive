import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { uploadFile } from '../api/getAPI'

export default function UploadItem() {
    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);

    const changeHandler = e => {
        setSelectedFile(e.target.files[0]);
        console.log(e.target.files[0])
        setIsSelected(true);
    }

    const handleSubmission = async () => {
        const formData = new FormData();

        formData.append('input_file', selectedFile);

        await uploadFile(formData)
        window.location.reload()
    }

    return (
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