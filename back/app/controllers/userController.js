// Importation des modules
import validator from "validator";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

// Importation des models avec leurs relations
import * as models from "../../database/models/relationModels.js";

const userController = {
    // READ :  récupération de la liste de tous les users avec les tables associées.
    async getAll(req, res) {
        try {
            const users = await models.User.findAll({ include: [models.Role, models.UserPicture] });
            res.send(users);
        } catch (error) {
            console.log(error.message);
            res.send('error');
        }
    },

    // CREATE : ajout d'un nouvel user
    async addNewuser(req, res) {
        try {
            // Vérification de la robustesse du mdp
            const options = { minLength: 12, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 };

            // Vérification de la solidité du mot de passe
            if (!validator.isStrongPassword(req.body.password, options)) {
                res.status(500).json({ error: 'Le mot de passe doit comporter au moins 12 caractères et au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial' });
            };

            // Hashage du mot de passe
            bcrypt.hash(req.body.password, 10, async (error, hash) => {
                if (error) {
                    res.status.json({ error: "Echec encryptage du mot de passe." });
                }
                // Création du nouvel user
                try {
                    const newUser = await models.User.create({
                        pseudo: req.body.pseudo,
                        mail: req.body.email,
                        password: hash,
                        streetNumber: req.body.streetNumber,
                        streetName: req.body.streetName,
                        city: req.body.city,
                        zipcode: req.body.zipcode,
                        phone: req.body.phone,
                        RoleId: req.body.RoleId,
                        acceptCondition: req.body.acceptCondition,
                        notARobot: req.body.notARobot,
                        birthdate: req.body.birthdate
                    }, { include: [models.Role] });
                    // Renvoie une réponse au format json
                    res.json({ isCreate: true });
                    console.log(newUser);
                } catch (error) {
                    console.log("error Utilisateur");
                    console.error(error)
                    res.json({ isCreate: false });
                };
            }
            );
        } catch (error) {
            console.log("Problème d'ajout d'user");
            res.status(500).json({ isCreated: false, error: "erreur lors de la création du compte." });
        };
    },

    // Récupération des données de l'user par son ID
    async getDataUserById(req, res) {
        // décodage du token pour récuper l'id de l'user
        const token = req.body.token;
        if (!token) {
            console.log("pas de token");
            res.status(500).json({ error: "aucun token récupéré." });
        }
        else {
            try {
                // Décodage du token avec la clé secrète
                const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
                let user = await models.User.findByPk(decodedToken.id);
                if (!user) {
                    console.log("Utilisateur non trouvé.");
                    res.status(500).json({ error: "Utilisateur non trouvé." });
                }
                else {
                    res.json(user);
                };
            } catch (error) {
                // Gestion des erreurs lors du décodage du token
                console.error(error);
                res.json({ error: "probleme de décodage du token" });
            };
        };
    },

    // DELETE : suppression des données de l'user.
    async deleteDataUser(req, res) {
        const token = req.body.token;
        if (!token) {
            console.log("pas de token");
            res.status(500).json({ error: "aucun token récupéré." });
        }
        else {
            try {
                // Décodage du token avec la clé secrète
                const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
                let user = await models.User.findByPk(decodedToken.id);
                if (!user) {
                    console.log("Utilisateur non trouvé");
                    res.json({ error: "Utilisateur non trouvé" });
                }
                else {
                    //Suppression des données de l'user dans la table User.
                    await user.destroy();
                    // Vérification si un profil famille existe lié l'id User.
                    let profilFamily = await models.Family.findAll({ where: { UserId: decodedToken.id } });

                    // Si oui : suppression du profil famille lié.
                    if (profilFamily) {
                        await profilFamily.destroy();
                    }
                    // Si non : vérificatiion si un profil association existe lié à l'id User.
                    else {
                        let profilAssociation = await models.Association.findAll({ where: { UserId: decodedToken.id } });
                        // Suppression du profil association lié à l'id user.
                        if (profilAssociation) {
                            await profilAssociation.destroy();
                        };
                    };
                    res.json({ isDeleted: "true" });
                }
            } catch (error) {
                // Gestion des erreurs lors du décodage du token
                console.error(error);
                res.status(500).json({ error: "probleme de décodage du token" });
            }
        }
    },
    // UPDATE : modification des données de la table user.
    async updateUserProfilById(req, res) {
        try {
            const token = req.body.token;
            // vérification qu'il y a un token d'authentification reçu
            if (!token) {
                console.log("pas de token");
            }
            else {
                try {
                    // Décodage du token avec la clé secrète
                    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
                    // vérification qu'un compte user existe
                    let user = await models.User.findByPk(decodedToken.id);
                    if (!user) {
                        console.log("Utilisateur non trouvé");
                        res.json({ error: "Utilisateur non trouvé" });
                    }
                    // si utilisateur trouvé
                    else {
                        // Modification d'un profil association lié à l'utilisateur trouvé
                        // avec le where pour lier l'id
                        try {
                            await models.User.update({
                                pseudo: req.body.pseudo,
                                mail: req.body.mail,
                                password: req.body.password,
                                streetNumber: req.body.streetNumber,
                                streetName: req.body.streetName,
                                city: req.body.city,
                                zipcode: req.body.zipcode,
                                phone: req.body.phone,
                                birthdate: req.body.birthdate,
                                RoleId: req.body.RoleId,
                                RequestId: req.body.RequestId,
                            },
                                {
                                    where: {
                                        id: user.id,
                                    }
                                },
                                { include: [models.Role, models.UserPicture, models.Request] });
                            res.json({ isUpdated: true });
                        }
                        catch (error) {
                            console.log(error)
                            res.json({ isUpdated: false })
                        }
                    }
                } catch (error) {
                    // Gestion des erreurs lors du décodage du token
                    console.error(error);
                    res.status(500).json({ error: "probleme de décodage du token" });
                }
            }
        }
        catch (error) {
            console.log("erreur");
            res.status(500).json({ error: "erreur lors de la modification du profil utilisateur." });
        };
    },

}


export default userController;