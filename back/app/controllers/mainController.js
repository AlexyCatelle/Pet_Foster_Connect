// Importation des modules
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
// Importation des models avec leurs relations
import * as models from "../../database/models/relationModels.js";

const mainController = {
    async home(req, res) {
        try {
            res.status(200).send("<h1>Accueil</h1>")

        } catch (error) {
            console.error(error);
            res.status(500).send("<h1>Erreur ! La page demandée n'a pas pu être trouvée</h1>");
        }
    },
    async signIn(req, res) {
        try {
            // Définition de la durée maximum du token (3 jours)
            const maxAge = 3 * 24 * 60 * 60 * 1000;
            // Création du token JWT
            const createToken = (id) => {
                // Signature du token avec l'ID de l'utilisateur et une clé secrète
                return jwt.sign({ id }, process.env.TOKEN_SECRET, {
                    expiresIn: maxAge,
                });
            };

            // Recherche de l'user par l'adresse mail.
            const user = await models.User.findOne({ where: { mail: req.body.email } });
            // si email incorrect renvoie une erreur
            if (!user) {
                console.log("email inconnu")
                res.status(500).json({ error: "le couple identifiant/mdp est incorrect." })
            }
            // si trouve un email dans la table alors compare le mot de passe avec bcrypt.
            else {
                const isMatch = await new Promise((resolve, reject) => {
                    bcrypt.compare(req.body.password, user.password, (error, result) => {
                        if (error) reject(error);
                        resolve(result);
                    });
                });
                // si les identifiants sont corrects
                if (isMatch) {
                    // crée le token JWT
                    const token = createToken(user.id);
                    // renvoie une reponse au format Json contenant le token créé et le pseudo de l'utilisateur.
                    res.json({ token: token, pseudo: user.pseudo })
                }
                // si le mot de passe est un inccorect renvoie une erreur
                else {
                    res.json({ error: "le couple identifiant/mot de passe est incorrect." })
                };
            };
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "le couple identifiant/mot de passe est incorrect." })
        };
    },
}

export default mainController;