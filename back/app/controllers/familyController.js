// Importation des modules
import jwt from "jsonwebtoken";

// Importation des models avec leurs relations
import * as models from "../../database/models/relationModels.js";

const familyController = {

    // READ : Récupération des données complétes de la table des profils des familles
    async getAll(req, res) {
        try {
            const families = await models.Family.findAll({
                include: [
                    models.User,
                    models.Housing,
                    models.LivingEnvironment,
                    models.OutdoorType,
                    models.ChildrenUnder15,
                    models.CatSelect,
                    models.DogSelect
                ]
            });

            res.send(families);
        } catch (error) {
            console.error(error);
            res.status(500).send({ error: "Erreur lors de la récupération des profils famille." });
        };
    },

    // CREATE : Création d'un nouveau profil famille
    async addNewProfil(req, res) {
        try {
            // Récupération du token de l'utilisateur (user)
            const token = req.body.token;
            // vérification qu'il y a un token d'authentification reçu
            if (!token) {
                console.log("pas de token.");
                res.status(500).json({ error: "Aucun token récupéré." });
            }
            // si Token reçu
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
                        // Création d'un profil famille lié à l'utilisateur trouvé
                        try {

                            let family = await models.Family.create(
                                {
                                    lastname: req.body.lastname,
                                    firstname: req.body.firstname,
                                    petExperience: req.body.petExperience,
                                    motivation: req.body.motivation,
                                    homeDescription: req.body.homeDescription,
                                    livingSpace: req.body.livingSpace,
                                    outdoorSpace: req.body.outdoorSpace,
                                    vehicle: req.body.vehicle,
                                    securedWindows: req.body.securedWindows,
                                    nac: req.body.nac,
                                    nacDetail: req.body.nacDetail,
                                    HousingId: req.body.HousingId,
                                    LivingEnvironmentId: req.body.LivingEnvironmentId,
                                    OutdoorTypeId: req.body.OutdoorTypeId,
                                    ChildrenUnder15Id: req.body.ChildrenUnder15Id,
                                    CatSelectId: req.body.CatSelectId,
                                    DogSelectId: req.body.DogSelectId,
                                    UserId: decodedToken.id
                                }, {
                                include: [
                                    models.Housing,
                                    models.LivingEnvironment,
                                    models.OutdoorType,
                                    models.ChildrenUnder15,
                                    models.CatSelect,
                                    models.DogSelect,
                                    models.User
                                ]
                            });

                            // renvoie une réponse en JSON au front indiquant que la création à était réussite.
                            res.json({ isCreated: true });

                        }
                        // si probleme lors de la création du profil famille
                        catch (error) {
                            // renvoie l'erreur en console (back)
                            console.error(error)
                            //renvoie une réponse en JSON vers le front pour indiquer que la création du profil à échoué.
                            res.status(500).json({ isCreated: false, error: "Erreur lors de la création du profil famille." });
                        };
                    };
                    // si pas d'utilisateur trouvé ou probleme sur le décodage du token
                } catch (error) {
                    // envoie l'erreur en console (back)
                    console.error(error);
                    // envoie un message d'erreur vers le front en JSON
                    res.status(500).json({ error: "erreur lors de récupération de l'identifiant." });
                };
            };
        }
        // gestion erreur global sur la création d'un nouveau profil
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "erreur lors de la création du profil." })
        };
    },

    // READ : Récupération des données d'un profil famille par l'id User.
    async getDataFamilyById(req, res) {
        const token = req.body.token;
        if (!token) {
            console.log("pas de token");
            res.status(500).json({ error: "Aucun token récupéré." });
        }
        else {
            try {
                // Décodage du token avec la clé secrète
                const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);

                let family = await models.Family.findAll({ where: { UserId: decodedToken.id } });

                if (!family) {
                    console.log("profil famille non trouvé.");
                    res.status(500).json({ error: "profil famille non trouvé." });
                }
                else {
                    res.json(family);
                }
            } catch (error) {
                // Gestion des erreurs lors du décodage du token
                console.error(error);
                res.status(500).json({ error: "probleme lors de récupération de l'identifiant." });
            }
        }
    },

    // UPDATE
    async updateFamilyProfil(req, res) {
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
                        res.status(500).json({ error: "Utilisateur non trouvé." });
                    }
                    // si utilisateur trouvé
                    else {
                        // Modification d'un profil association lié à l'utilisateur trouvé
                        // avec le where pour lier l'id
                        try {
                            await models.Family.update({
                                lastname: req.body.lastname,
                                firstname: req.body.firstname,
                                petExperience: req.body.petExperience,
                                motivation: req.body.motivation,
                                homeDescription: req.body.homeDescription,
                                livingSpace: req.body.livingSpace,
                                outdoorSpace: req.body.outdoorSpace,
                                vehicle: req.body.vehicle,
                                securedWindows: req.body.securedWindows,
                                nac: req.body.nac,
                                nacDetail: req.body.nacDetail,
                                HousingId: req.body.HousingId,
                                LivingEnvironmentId: req.body.LivingEnvironmentId,
                                OutdoorTypeId: req.body.OutdoorTypeId,
                                ChildrenUnder15Id: req.body.ChildrenUnder15Id,
                                CatSelectId: req.body.CatSelectId,
                                DogSelectId: req.body.DogSelectId,
                                UserId: decodedToken.id
                            },
                                {
                                    where: {
                                        UserId: decodedToken.id
                                    }
                                },
                                {

                                    include: [
                                        models.Housing,
                                        models.LivingEnvironment,
                                        models.OutdoorType,
                                        models.ChildrenUnder15,
                                        models.CatSelect,
                                        models.DogSelect,
                                        models.User]

                                });
                            res.json({ isUpdated: true });
                        }
                        catch (error) {
                            console.log(error)
                            res.status(500).json({ isUpdated: false, error: "erreur lors de la modification du profil." })
                        }
                    }
                } catch (err) {
                    // Gestion des erreurs lors du décodage du token
                    console.error(err);
                    res.json({ error: "probleme de décodage du token" });
                }
            }
        }
        catch (error) {
            console.log("erreur")
        }
    }
};

export default familyController;