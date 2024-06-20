// importation des modules
import jwt from "jsonwebtoken";
// Importation des models avec leurs relations
import * as models from "../../database/models/relationModels.js";

const requestController = {
    // READ : Recuperer la liste de toutes les demandes avec les tables associées.
    async getAll(req, res) {
        try {

            const requests = await models.Request.findAll({ include: [models.Pet, models.Family] });
            res.send(requests);
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: "erreur lors de la récupération des demandes." });
        }
    },
    // READ : Récupérer la liste des demandes en fonction de l'ID user stocké dans le token
    async getRequestListByFamilyId(req, res) {
        const token = req.body.token;
        if (!token) {
            console.log("pas de token");
            res.status(500).json({ error: "aucun token récupéré." });
        }
        else {
            try {
                // Décodage du token avec la clé secrète
                const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
                // Récupération de l'ID du profil famille a partir de l'Id de L'user décrypté
                let family = await models.Family.findAll({ where: { UserId: decodedToken.id } });

                // Gestion d'erreur si aucun profil famille associé à l'id de l'user.
                if (!family) {
                    // envoie un message d'erreur dans la console (back)
                    console.log("profil famille non trouvé");
                    // envoie un message d'erreur comme réponse au front
                    res.status(500).json({ error: "profil famille non trouvé" });
                };
                // Récupération de toutes les requetes du profil famille
                let requestList = await models.Request.findAll({ where: { FamilyId: family[0].id }, include: [models.RequestStatus, models.Pet] });
                // Si probleme sur récupération des demandes d'une famille
                if (!requestList) {
                    // envoie un message d'erreur dans la console (back)
                    console.log("erreur de récupération de la liste des demandes de la famille.");
                    // envoie un message d'erreur comme réponse au front
                    res.status(500).json({ error: "erreur lors de la récupération des demandes." });
                }
                // Sinon envoie la liste des requetes du profil famille
                else {
                    res.json(requestList);
                };

            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: "probleme de récupération de l'identifiant utilisateur" });
            };

        };
    },
    // READ : Récupération de l'ensemble des demandes d'une association par son ID user et ses fiches animaux.
    async getRequestsListByAssociationId(req, res) {
        const token = req.body.token;
        if (!token) {
            console.log("pas de token");
            res.status(500).json({ error: "aucun token récupéré." });
        }
        else {
            try {
                // Décodage du token avec la clé secrète
                const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
                // Récupération de l'ID de l'association a partir de l'Id de L'user décrypté
                let association = await models.Association.findAll({ where: { UserId: decodedToken.id } });

                // Gestion d'erreur si aucun profil famille associé à l'id de l'user.
                if (!association) {
                    // envoie un message d'erreur dans la console (back)
                    console.log("profil association non trouvé");
                    // envoie un message d'erreur comme réponse au front
                    res.status(500).json({ error: "profil association non trouvé" });
                };

                // Récupération de toutes les requetes de l'association
                // en passant par la table Pet grace a l'id Association du profil pet,
                // récupération des données des familles
                let requestList = await models.Request.findAll({ include: [{ model: models.Pet, where: { AssociationId: association[0].id } }, models.Family, models.RequestStatus] });
                // Si probleme sur récupération des demandes d'une association
                if (!requestList) {
                    // envoie un message d'erreur dans la console (back)
                    console.log("erreur de récupération des demandes liées au profil association.");
                    // envoie un message d'erreur comme réponse au front
                    res.status(500).json({ error: "erreur de récupération des demandes liées au profil association." });
                }
                // Sinon envoie la liste des requetes de l'association
                else {
                    res.json(requestList);
                }
            } catch (error) {
                // Gestion des erreurs lors du décodage du token
                console.error(error);
                res.status(500).json({ error: "probleme de décodage du token" });
            }
        }
    },

    async newRequest(req, res) {
        console.log("console du req body création requete")
        console.log(req.body)
        const token = req.body.token;
        if (!token) {
            console.log("pas de token");
        }
        else {

            try {
                // Décodage du token avec la clé secrète
                const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
                // Récupération de l'ID du profil famille a partir de l'Id de L'user décrypté
                let family = await models.Family.findAll({ where: { UserId: decodedToken.id } });
                // Si probleme sur récupération des demandes d'une famille
                if (!family) {
                    // envoie un message d'erreur dans la console (back)
                    console.log("profil famille non trouvé");
                    // envoie un message d'erreur comme réponse au front
                    res.json({ error: "profil famille non trouvé" });
                }
                // Sinon envoie la liste des requetes du profil famille
                else {
                    try {
                        await models.Request.create({
                            RequestStatusId: '1', // par défaut la demande est en attente.
                            PetId: req.body.PetId,
                            FamilyId: family[0].id
                        }, { include: [models.RequestStatus, models.Pet, models.Family] })
                        // renvoie une réponse en JSON au front indiquant que la création à était réussite
                        res.json({ isCreated: true });
                    }
                    catch (error) {
                        // renvoie l'erreur en console (back)
                        console.log(error)
                        //renvoie une réponse en JSON vers le front pour indiquer que la création du profil à échoué.
                        res.status(500).json({ isCreated: false, error: "erreur lors de la création de la demande." })
                    }
                }

            }
            catch (error) {
                // Gestion des erreurs lors du décodage du token
                console.error(error);
                res.json({ error: "probleme de récupération de l'idenfiant." });
            }

        }
    }
};

export default requestController;