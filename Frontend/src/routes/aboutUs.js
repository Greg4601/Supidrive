import logo from './../logo.png';

export default function AboutUs() {
    return (
        <div>
            <h1 style={{ fontWeight: 900 }}>About Us :</h1>
            <div className="logo">
                <img src={logo} />
            </div>
            <p>SupIdrive.com est un site de stockage de fichiers dans le cloud, créer par une coopérative de jeunes étudiants de Supinfo. C'est en début d'année 2022, que nait l'idée de créer une alternative aux sites classiques de stockage de données des grandes entreprises.</p>
            <p>Nous sommes partis d'un constat flagrant, sur le manque de transparence, sur le processus de stockage de données sensibles à caractères privées. Pour nous, l'objectif premier est de permettre à chacun, de pouvoir stocker en toute simplicité des données, sans avoir peur pour ses données privées, et ceci avec un service freemium, complétement gratuit sans publicité.</p>
            <p>Notre philosophie réside également, dans la confiance de nos utilisateurs, qui doivent respecter les conditions générales d'utilisations, afin de ne pas voir son compte bloqué ou supprimer.</p>
            <p>Ainsi, le service étant complétement dépourvus de tracker de publicité, de trackers de données, de services tierces, nous sommes dans l'obligation de limiter le stockage à 100 MO par utilisateur.</p>
            <p>Si vous soutenez ce projet, n'hésitez pas à faire un don à la société SupIdrive.</p>
        </div>
    );
}