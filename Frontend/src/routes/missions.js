import MissionsList from "../data/missionsList";

export default function Missions() {
    return (
        <div>
            <h1 style={{ fontWeight: 900 }}>Missions :</h1>
            <p>Cette page permet de répertorier une liste de toutes les missions.</p>
            <p>Vous permettre de trier les missions par id, pays, date de debut et de fin, ainsi que du rover utilisé.</p>
            <MissionsList />
        </div>
    );
}