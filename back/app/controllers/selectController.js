// Importation des models avec leurs relations
import * as models from "../../database/models/relationModels.js";

const selectsController = {
    // READ : Récupération de toutes les données des tables de selecteurs.
    async getAll(req, res) {
        try {
            const outdoorType = await models.OutdoorType.findAll();
            const housingType = await models.Housing.findAll();
            const livingEnvironment = await models.LivingEnvironment.findAll();
            const catSelect = await models.CatSelect.findAll();
            const dogSelect = await models.DogSelect.findAll();
            const childrenUnder15 = await models.ChildrenUnder15.findAll();
            const okCat = await models.OkCat.findAll();
            const okDog = await models.OkDog.findAll();
            const okChild = await models.OkChild.findAll();
            const species = await models.Species.findAll();
            const race = await models.Race.findAll();
            const petStatus = await models.PetStatus.findAll();
            const department = await models.Department.findAll();
            const requestStatus = await models.RequestStatus.findAll();

            res.send({
                livingEnvironment: livingEnvironment,
                housingType: housingType,
                outdoorType: outdoorType,
                catSelect: catSelect,
                dogSelect: dogSelect,
                ChildrenUnder15: childrenUnder15,
                okCat: okCat,
                okDog: okDog,
                okChild: okChild,
                species: species,
                race: race,
                petStatus: petStatus,
                department: department,
                requestStatus: requestStatus,
            })
        }
        catch (error) {
            console.error(error);
            res.status(500).json("erreur lors de la récupération des données des selecteurs.")
        };
    },
};

export default selectsController;