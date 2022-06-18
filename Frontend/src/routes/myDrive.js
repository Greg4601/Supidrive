import MyDriveList from "../data/myDriveList";
import UploadItem from "../data/uploadItem";

export default function MyDrive() {
    return (
        <div>
            <h1 style={{ fontWeight: 900 }}>My Drive :</h1>
            <UploadItem />
            <MyDriveList />
        </div>
    );
}