import RoversList from "../data/roversList";

export default function Rovers() {
    return (
        <div>
            <h1 style={{ fontWeight: 900 }}>Rovers :</h1>
            <p>Cette page permet de répertorier une liste de tous les rovers.</p>
            <p>Vous permettre de trier les rovers par id, nom, date de lancement et de construction, constructeur du rover, ainsi que de voir l'image.</p>
            <RoversList />
        </div>
    );
}