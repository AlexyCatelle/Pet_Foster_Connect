// Importation des modules 
import express from "express";
import session from "express-session";
import * as dotenv from "dotenv";
import cors from "cors";

// Importation du router de l'application
import router from "./app/router.js";

// Chargement des variables d'environnement depuis un fichier .env
dotenv.config();

// Définition un PORT (3000 en défaut)
const port = process.env.PORT || 3000;

// Création d'une instance de l'application Express
const app = express();

// Définition de la langue du contenu des réponses en français
app.use((req, res, next) => {
    res.set('Content-Language', 'fr');
    next();
});

// Gestion des requêtes CORS ((Cross-Origin Resource Sharing))
app.use(cors({}));

// Transformation d'une chaîne de caractère transmise en objet (avoir accès à req.body)
app.use(express.urlencoded({ extended: true }));

// Configuration du middleware de session
app.use(session({
    saveUninitialized: true, // Sauvegarde la session même si elle n'a pas été modifiée
    resave: true, // Sauvegarde la session à chaque requête, même si elle n'a pas été modifiée
    secret: process.env.SECRET_POUR_EXPRESS_SESSION // Utilise une clé secrète pour signer les sessions
}));

// Middleware pour analyser les requêtes avec un corps JSON
app.use(express.json());

// Utilisation du routeur importé pour gérer les différentes routes de l'application
app.use(router);

// Middleware pour servir des fichiers statiques à partir du répertoire 'public'
app.use(express.static('./public'));

// on place le serveur en mode écoute pour entendre les requêtes arriver
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
});