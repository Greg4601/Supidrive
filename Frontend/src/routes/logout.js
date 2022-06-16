import { useNavigate } from "react-router-dom";

export default function Logout() {
    let navigate = useNavigate();

    const goHomePage = () => {
        localStorage.clear()
        navigate("/");
        window.location.reload()
    };

    return (
        <div>
            <h1 style={{ fontWeight: 900 }}>Logout :</h1>
            <p>Cette page permet a l'utilisateur de se déconnecter du site web.</p>
            <button onClick={goHomePage}>Logout</button>
        </div>
    );
}