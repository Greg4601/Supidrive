import UsersList from "../data/usersList";

export default function AllInformation() {
    return (
        <div>
            <h1 style={{ fontWeight: 900 }}>All Information :</h1>
            <p>Cette page permet de répertorier une liste de toutes les informations.</p>
            {/* <p>Vous permettre de trier les utilisateurs par id, email, pseudo, ainsi que de savoir s'il est administrateur ou pas.</p> */}
            {/* <UsersList /> */}
        </div>
    );
}