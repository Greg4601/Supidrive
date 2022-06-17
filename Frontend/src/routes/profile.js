import ProfileList from "../data/profileList";

export default function Profile() {
    return (
        <div>
            <h1 style={{ fontWeight: 900 }}>Profil :</h1>
            <p>Cette page permet de lire les informations de mon Profil.</p>
            <ProfileList />
        </div>
    );
}