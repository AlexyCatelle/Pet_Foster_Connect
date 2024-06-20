// Importation des modules
import jwt from "jsonwebtoken";

// Importation des models avec leurs relations
import * as models from "../../database/models/relationModels.js";

const associationController = {
    // READ : Récuperation de l'ensemble des données des profils association avec les tables liées.
    async getAll(req, res) {
        try {
            const association = await models.Association.findAll({ include: [models.User, models.Pet] });
            res.send(association);
        } catch (error) {
            console.log(error.message);
            res.status(500).send({ error: "Probléme de récupération des profils associations." });
        }
    },

    // CREATE : Création d'un nouveau profil association.
    async addNewProfil(req, res) {
        console.log(req.body)
        try {
            const token = req.body.token;
            // vérification qu'il y a un token d'authentification reçu
            if (!token) {
                console.log("pas de token.");
                res.status(500).json({ error: "Aucun token récupéré." });
            }
            else {
                try {
                    // Décodage du token avec la clé secrète
                    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
                    // vérification qu'un compte user existe
                    let user = await models.User.findByPk(decodedToken.id);
                    if (!user) {
                        console.log("Utilisateur non trouvé.");
                        res.status(500).json({ error: "Utilisateur non trouvé." });
                    }
                    // si utilisateur trouvé
                    else {
                        // Création d'un profil association lié à l'utilisateur trouvé
                        try {
                            await models.Association.create({
                                description: req.body.description,
                                link: req.body.link,
                                socialReason: req.body.socialReason,
                                UserId: decodedToken.id
                            }, { include: [models.User] });
                            res.json({ isCreated: true });
                        }
                        catch (error) {
                            console.log(error)
                            res.status(500).json({ isCreated: false, error: "Erreur lors de la création du profil association." })
                        };
                    };
                } catch (error) {
                    // Gestion des erreurs lors du décodage du token
                    console.error(error);
                    res.status(500).json({ error: "Erreur lors de la récuparation de l'identifiant." });
                }
            }
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erreur lors de la création du profil association." })
        }
    },

    // READ : Récupération les données du profil d'un association grâce à son l'id user.
    async getDataAssociation(req, res) {
        // récupére le token reçu
        const token = req.body.token;
        if (!token) {
            console.log("pas de token");
            res.status(500).json({ error: "Aucun token récupéré." });
        }
        else {
            try {
                // Décodage du token avec la clé secrète
                const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);

                let association = await models.Association.findAll({ where: { UserId: decodedToken.id }, include: [models.Pet] });
                if (!association) {
                    console.log("Profil association non trouvé.");
                    res.json({ error: "Profil association non trouvé." });
                }
                else {
                    res.json(association);
                }
            } catch (error) {
                // Gestion des erreurs lors du décodage du token
                console.error(error);
                res.json({ error: "Probleme de décodage du token." });
            }
        }
    },

    // READ : Récupération de la liste des demandes d'une association.
    async getRequestsAssociation(req, res) {
        const token = req.body.token;
        // si pas de token reçu envoie un message d'erreur
        if (!token) {
            console.log("pas de token");
            res.status(500).json({ error: "Aucun token récupéré." });
        }
        // si reçois un token
        else {
            // décode le token JWT avec la clé secrète
            try {
                // Décodage du token avec la clé secrète
                const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
                // Récupération les données du profil association grace à l'id User récupéré par le token
                let association = await models.Association.findAll({ where: { UserId: decodedToken.id }, include: [models.Pet] });
                // si ne trouve pas de profil association lié à l'ID user
                if (!association) {
                    // renvoie messages d'erreurs
                    console.log("Profil association non trouvé.");
                    res.status(500).json({ error: "Profil association non trouvé." });
                }
                else {
                    // renvoie les informartions du profil association trouvé.
                    res.json(association[0]);
                }
            } catch (error) {
                // Gestion des erreurs lors du décodage du token
                console.error(error);
                res.status(500).json({ error: "Erreur lors de la récupérationb de l'identifiant." });
            };
        };
    },

    // UPDATE : modification du profil d'une association.
    async updateAssociationProfil(req, res) {
        try {
            const token = req.body.token;
            // vérification qu'il y a un token d'authentification reçu
            if (!token) {
                console.log("pas de token");
                res.status(500).json({ error: "Aucun token récupéré." });
            }
            else {
                try {
                    // Décodage du token avec la clé secrète
                    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
                    // vérification qu'un compte user existe
                    let user = await models.User.findByPk(decodedToken.id);
                    if (!user) {
                        console.log("Utilisateur non trouvé.");
                        res.json({ error: "Utilisateur non trouvé." });
                    }
                    // si utilisateur trouvé
                    else {
                        // Modification d'un profil association lié à l'utilisateur trouvé
                        // avec le where pour lier l'id
                        try {
                            await models.Association.update({
                                description: req.body.description,
                                link: req.body.link,
                                social_reason: req.body.socialReason,
                                UserId: decodedToken.id
                            },
                                {
                                    where: {
                                        UserId: decodedToken.id
                                    }
                                },
                                { include: [models.User] });
                            res.json({ isUpdated: true });
                        }
                        catch (error) {
                            console.error(error);
                            res.json({ isUpdated: false, error: "Erreur lors de la modification du profil." });
                        };
                    };
                } catch (error) {
                    // Gestion des erreurs lors du décodage du token
                    console.error(error);
                    res.status(500).json({ error: "Erreur lors de la récupération de l'identifiant." });
                };
            };
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erreur lors de la modofication du profil." });
        };
    },
};

export default associationController;