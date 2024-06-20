// Importation des modules
import jwt from "jsonwebtoken";

// Importation des models avec leurs relations
import * as models from "../../database/models/relationModels.js";

const petController = {
    // READ : Recuperer la liste de tous les profils d'animaux avec les tables associées.
    async getAll(req, res) {
        try {
            const pets = await models.Pet.findAll({
                include: [models.Race,
                models.Species,
                models.OkDog,
                models.OkCat,
                models.OkChild,
                models.Association,
                models.PetStatus,
                models.Department,
                models.PetPicture]
            });
            res.send(pets);
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ error: "erreur de récupération des profils animaux." });
        }
    },

    // CREATE
    async addNewProfil(req, res) {
        try {
            // récupération du token
            const token = req.body.token
            // vérification qu'il y a un token d'authentification reçu
            if (!token) {
                console.log("aucun token récupéré.");
                res.status(500).json({ error: "aucun token récupéré." });
            }
            else {
                try {
                    // Décodage du token avec la clé secrète
                    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);

                    // vérification qu'un compte user existe
                    let association = await models.Association.findAll({ where: { UserId: decodedToken.id }, include: [models.User] });
                    if (!association) {
                        console.log("profil animal non trouvé.");
                        res.status(500).json({ error: "profil animal non trouvé." });
                    } // si utilisateur trouvé
                    else {
                        // Création d'un profil pet lié à l'utilisateur trouvé
                        try {
                            await models.Pet.create({
                                name: req.body.name,
                                birthdate: req.body.birthdate,
                                description: req.body.description,
                                okApartment: req.body.okApartment,
                                sterilized: req.body.sterilized,
                                // DepartmentId: req.body.DepartmentId,
                                zipcode: req.body.zipcode,
                                RaceId: req.body.RaceId,
                                SpeciesId: req.body.SpeciesId,
                                OkDogId: req.body.OkDogId,
                                OkCatId: req.body.OkCatId,
                                OkChildId: req.body.OkChildId,
                                AssociationId: req.body.AssociationId,
                                sex: req.body.sex,
                                PetStatusId: req.body.PetStatusId
                            }, {
                                include:
                                    [models.Race, models.Species, models.OkDog, models.OkCat, models.OkChild, models.Association, models.PetStatus]
                            });
                            res.json({ isCreated: true });
                        }
                        catch (error) {
                            console.log(error)
                            res.satus(500).json({ isCreated: false, error: "Erreur lors de la création du profil." })
                        };
                    };
                }
                catch (error) {
                    // Gestion des erreurs lors du décodage du token
                    console.error(error);
                    res.status(500).json({ error: "probleme de décodage du token." });
                };
            };
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "création de profil impossible." });
        };
    },

    // GET DATA
    async getDataPet(req, res) {
        const token = req.body.token;
        if (!token) {
            console.log("pas de token");
            res.status(500).json({ error: "aucun token récupéré." });
        }
        else {
            try {
                // Décodage du token avec la clé secrète
                const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
                // vérification qu'un compte user existe
                let association = await models.Association.findAll({ where: { UserId: decodedToken.id }, include: [models.User] });
                if (!association) {
                    console.log("pet non trouvé");
                    res.status(500).json({ error: "pet non trouvé" });
                } else {
                    let pet = await models.Pet.findAll({ include: [models.Race, models.Species, models.OkDog, models.OkCat, models.OkChild, models.Association, models.PetStatus, models.Department, models.PetPicture] });
                    if (!pet) {
                        console.log("profil pet non trouvé");
                        res.status(500).json({ error: "profil pet non trouvé" });
                    }
                    else {
                        res.json(pet);
                    }
                }
            } catch (error) {
                // Gestion des erreurs lors du décodage du token
                console.error(error);
                res.status(500).json({ error: "probleme de décodage du token" });
            }
        }
    },

    // UPDATE
    async updatePetProfil(req, res) {
        try {
            const token = req.body.token;
            // vérification qu'il y a un token d'authentification reçu
            if (!token) {
                console.log("pas de token");
                res.status(500).json({ error: "aucun token récupéré" });
            }
            else {
                try {
                    // Décodage du token avec la clé secrète
                    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
                    // vérification qu'un compte user existe
                    let association = await models.Association.findAll({ where: { UserId: decodedToken.id }, include: [models.User] });
                    if (!association) {
                        console.log("Utilisateur non trouvé");
                        res.status(500).json({ error: "Utilisateur non trouvé" });
                    }
                    else {
                        // récupération de l'id du pet
                        const petId = req.body.id;
                        // vérification que l'id du pet est bien passé dans la requête
                        if (!petId) {
                            console.log("ID de l'animal manquant");
                            res.status(500).json({ error: "Animal non trouvé." });
                        } else {
                            // si utilisateur trouvé ET pet id trouvé
                            // modification d'un profil pet
                            try {
                                await models.Pet.update({
                                    name: req.body.name,
                                    birthdate: req.body.birthdate,
                                    description: req.body.description,
                                    okApartment: req.body.okApartment,
                                    sterilized: req.body.sterilized,
                                    DepartmentId: req.body.DepartmentId,
                                    zipcode: req.body.zipcode,
                                    RaceId: req.body.RaceId,
                                    SpeciesId: req.body.SpeciesId,
                                    OkDogId: req.body.OkDogId,
                                    OkCatId: req.body.OkCatId,
                                    OkChildId: req.body.OkChildId,
                                    AssociationId: req.body.AssociationId,
                                    sex: req.body.sex,
                                    PetStatusId: req.body.PetStatusId
                                },
                                    {
                                        where: {
                                            id: petId,
                                        }
                                    },
                                    {
                                        include: [models.Race, models.Species, models.OkDog, models.OkCat, models.OkChild, models.Association, models.PetStatus]
                                    });
                            }
                            catch (error) {
                                console.log(error)
                                res.status(304).json({ isUpdated: false, error: "Erreur lors de la modification du profil." })
                            };
                        };
                    };
                } catch (error) {
                    // Gestion des erreurs lors du décodage du token
                    console.error(error);
                    res.status(500).json({ error: "probleme de décodage du token" });
                };
            };
        }
        catch (error) {
            console.log("erreur");
            res.status(500).json({ error: "erreur lors de la modification du profil." });
        };
    },
}

export default petController;