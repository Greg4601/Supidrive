import logo from './../logo.png';

export default function Home() {
    return (
        <div>
            <h1 style={{ fontWeight: 900 }}>Home :</h1>
            <div className="logo">
                <img src={logo} />
            </div>
            <p>Bienvenue dans votre espace de stockage Supidrive !</p>
            <p>Ici, vous pouvez stocker vos fichiers, vos documents, vos films et musiques en toute simplicité et en quelques clics. Commencer par lire les conditions d’utilisations, et le mode d’emploi utilisateur pour vous familiariser avec les fonctionnalités. Ensuite, rendez-vous sur l'onglet My Drive, pour stocker votre premier fichier.</p>
            <p>En cas de problèmes rencontrés, n'hésitez pas à contacter l'administrateur ou l'équipe Support.</p>
        </div>
    );
}