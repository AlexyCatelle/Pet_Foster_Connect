import sequelize from "./database.js";

// import du fichier de relations des tables
import * as models from "./models/relationModels.js"

try {
    // Suppression des tables
    await sequelize.drop();

    // Création des tables
    await sequelize.sync();

    // SEEDING START

    // seeding Role
    await models.Role.create({ label: 'Admin' });
    await models.Role.create({ label: 'Association' });
    await models.Role.create({ label: 'Famille d\'accueil' });

    // seeding Cats
    await models.CatSelect.create({ label: '0' });
    await models.CatSelect.create({ label: '1' });
    await models.CatSelect.create({ label: '2' });
    await models.CatSelect.create({ label: '3' });
    await models.CatSelect.create({ label: '4' });
    await models.CatSelect.create({ label: '5' });
    await models.CatSelect.create({ label: '6' });
    await models.CatSelect.create({ label: '7' });
    await models.CatSelect.create({ label: '8' });
    await models.CatSelect.create({ label: '9 ou plus' });

    // seeding Dogs
    await models.DogSelect.create({ label: '0' });
    await models.DogSelect.create({ label: '1' });
    await models.DogSelect.create({ label: '2' });
    await models.DogSelect.create({ label: '3' });
    await models.DogSelect.create({ label: '4' });
    await models.DogSelect.create({ label: '5' });
    await models.DogSelect.create({ label: '6' });
    await models.DogSelect.create({ label: '7' });
    await models.DogSelect.create({ label: '8' });
    await models.DogSelect.create({ label: '9 ou plus' });

    // seeding ChildrenUnder15
    await models.ChildrenUnder15.create({ label: '0' });
    await models.ChildrenUnder15.create({ label: '1' });
    await models.ChildrenUnder15.create({ label: '2' });
    await models.ChildrenUnder15.create({ label: '3' });
    await models.ChildrenUnder15.create({ label: '4' });
    await models.ChildrenUnder15.create({ label: '5' });
    await models.ChildrenUnder15.create({ label: '6' });
    await models.ChildrenUnder15.create({ label: '7' });
    await models.ChildrenUnder15.create({ label: '8' });
    await models.ChildrenUnder15.create({ label: '9 ou plus' });

    // seeding Housing
    await models.Housing.create({ label: 'Maison' });
    await models.Housing.create({ label: 'Appartement' });
    await models.Housing.create({ label: 'Autre' });

    // seeding LivingEnvironment
    await models.LivingEnvironment.create({ label: 'Ville' });
    await models.LivingEnvironment.create({ label: 'Montagne' });
    await models.LivingEnvironment.create({ label: 'Campagne' });
    await models.LivingEnvironment.create({ label: 'Bord de mer' });
    await models.LivingEnvironment.create({ label: 'Autre' });

    // seeding OutdoorType
    await models.OutdoorType.create({ label: 'Jardin clôturé' });
    await models.OutdoorType.create({ label: 'Jardin  non clôturé' });
    await models.OutdoorType.create({ label: 'Balcon sécurisé' });
    await models.OutdoorType.create({ label: 'Balcon non sécurisé' });
    await models.OutdoorType.create({ label: 'Cour' });
    await models.OutdoorType.create({ label: 'Autre' });
    await models.OutdoorType.create({ label: 'Aucun' });

    // seeding OkCat
    await models.OkCat.create({ label: 'Oui' });
    await models.OkCat.create({ label: 'Non' });
    await models.OkCat.create({ label: 'Ne sait pas' });

    // seeding OkDog
    await models.OkDog.create({ label: 'Oui' });
    await models.OkDog.create({ label: 'Non' });
    await models.OkDog.create({ label: 'Ne sait pas' });

    // seeding OkChild
    await models.OkChild.create({ label: 'Oui' });
    await models.OkChild.create({ label: 'Non' });
    await models.OkChild.create({ label: 'Ne sait pas' });

    // seeding  PetStatus
    await models.PetStatus.create({ label: 'En recherche' });
    await models.PetStatus.create({ label: 'Accueil en cours' });
    await models.PetStatus.create({ label: 'Archivée' });

    // seeding  RequestStatus
    await models.RequestStatus.create({ label: 'En attente' });
    await models.RequestStatus.create({ label: 'Acceptée' });
    await models.RequestStatus.create({ label: 'Refusée' });
    await models.RequestStatus.create({ label: 'Archivée' });

    // seeding Race
    await models.Race.create({ label: 'Dalmatien' });
    await models.Race.create({ label: 'Européen' });
    await models.Race.create({ label: 'Croisé' });
    await models.Race.create({ label: 'Inconnue' });
    await models.Race.create({ label: 'Chihuahua' });
    await models.Race.create({ label: 'Setter irlandais' });
    await models.Race.create({ label: 'Main Coon' });

    // seeding Species
    await models.Species.create({ label: 'Chien' });
    await models.Species.create({ label: 'Chat' });
    await models.Species.create({ label: 'Lapin' });
    await models.Species.create({ label: 'Hamster' });
    await models.Species.create({ label: 'NAC' });

    // seeding Department
    await models.Department.create({ name: 'Ain', code: '01' });
    await models.Department.create({ name: 'Aisne', code: '02' });
    await models.Department.create({ name: 'Allier', code: '03' });
    await models.Department.create({ name: 'Alpes-de-Haute-Provence', code: '04' });
    await models.Department.create({ name: 'Hautes-Alpes', code: '05' });
    await models.Department.create({ name: 'Alpes-Maritimes', code: '06' });
    await models.Department.create({ name: 'Ardèche', code: '07' });
    await models.Department.create({ name: 'Ardennes', code: '08' });
    await models.Department.create({ name: 'Ariège', code: '09' });
    await models.Department.create({ name: 'Aube', code: '10' });
    await models.Department.create({ name: 'Aude', code: '11' });
    await models.Department.create({ name: 'Aveyron', code: '12' });
    await models.Department.create({ name: 'Bouches-du-Rhône', code: '13' });
    await models.Department.create({ name: 'Calvados', code: '14' });
    await models.Department.create({ name: 'Cantal', code: '15' });
    await models.Department.create({ name: 'Charente', code: '16' });
    await models.Department.create({ name: 'Charente-Maritime', code: '17' });
    await models.Department.create({ name: 'Cher', code: '18' });
    await models.Department.create({ name: 'Corrèze', code: '19' });
    await models.Department.create({ name: 'Côte-d\'Or', code: '21' });
    await models.Department.create({ name: 'Côtes-d\'Armor', code: '22' });
    await models.Department.create({ name: 'Creuse', code: '23' });
    await models.Department.create({ name: 'Dordogne', code: '24' });
    await models.Department.create({ name: 'Doubs', code: '25' });
    await models.Department.create({ name: 'Drôme', code: '26' });
    await models.Department.create({ name: 'Eure', code: '27' });
    await models.Department.create({ name: 'Eure-et-Loir', code: '28' });
    await models.Department.create({ name: 'Finistère', code: '29' });
    await models.Department.create({ name: 'Corse-du-Sud', code: '2A' });
    await models.Department.create({ name: 'Haute-Corse', code: '2B' });
    await models.Department.create({ name: 'Gard', code: '30' });
    await models.Department.create({ name: 'Haute-Garonne', code: '31' });
    await models.Department.create({ name: 'Gers', code: '32' });
    await models.Department.create({ name: 'Gironde', code: '33' });
    await models.Department.create({ name: 'Hérault', code: '34' });
    await models.Department.create({ name: 'Ille-et-Vilaine', code: '35' });
    await models.Department.create({ name: 'Indre', code: '36' });
    await models.Department.create({ name: 'Indre-et-Loire', code: '37' });
    await models.Department.create({ name: 'Isère', code: '38' });
    await models.Department.create({ name: 'Jura', code: '39' });
    await models.Department.create({ name: 'Landes', code: '40' });
    await models.Department.create({ name: 'Loir-et-Cher', code: '41' });
    await models.Department.create({ name: 'Loire', code: '42' });
    await models.Department.create({ name: 'Haute-Loire', code: '43' });
    await models.Department.create({ name: 'Loire-Atlantique', code: '44' });
    await models.Department.create({ name: 'Loiret', code: '45' });
    await models.Department.create({ name: 'Lot', code: '46' });
    await models.Department.create({ name: 'Lot-et-Garonne', code: '47' });
    await models.Department.create({ name: 'Lozère', code: '48' });
    await models.Department.create({ name: 'Maine-et-Loire', code: '49' });
    await models.Department.create({ name: 'Manche', code: '50' });
    await models.Department.create({ name: 'Marne', code: '51' });
    await models.Department.create({ name: 'Haute-Marne', code: '52' });
    await models.Department.create({ name: 'Mayenne', code: '53' });
    await models.Department.create({ name: 'Meurthe-et-Moselle', code: '54' });
    await models.Department.create({ name: 'Meuse', code: '55' });
    await models.Department.create({ name: 'Morbihan', code: '56' });
    await models.Department.create({ name: 'Moselle', code: '57' });
    await models.Department.create({ name: 'Nièvre', code: '58' });
    await models.Department.create({ name: 'Nord', code: '59' });
    await models.Department.create({ name: 'Oise', code: '60' });
    await models.Department.create({ name: 'Orne', code: '61' });
    await models.Department.create({ name: 'Pas-de-Calais', code: '62' });
    await models.Department.create({ name: 'Puy-de-Dôme', code: '63' });
    await models.Department.create({ name: 'Pyrénées-Atlantiques', code: '64' });
    await models.Department.create({ name: 'Hautes-Pyrénées', code: '65' });
    await models.Department.create({ name: 'Pyrénées-Orientales', code: '66' });
    await models.Department.create({ name: 'Bas-Rhin', code: '67' });
    await models.Department.create({ name: 'Haut-Rhin', code: '68' });
    await models.Department.create({ name: 'Rhône', code: '69' });
    await models.Department.create({ name: 'Haute-Saône', code: '70' });
    await models.Department.create({ name: 'Saône-et-Loire', code: '71' });
    await models.Department.create({ name: 'Sarthe', code: '72' });
    await models.Department.create({ name: 'Savoie', code: '73' });
    await models.Department.create({ name: 'Haute-Savoie', code: '74' });
    await models.Department.create({ name: 'Paris', code: '75' });
    await models.Department.create({ name: 'Seine-Maritime', code: '76' });
    await models.Department.create({ name: 'Seine-et-Marne', code: '77' });
    await models.Department.create({ name: 'Yvelines', code: '78' });
    await models.Department.create({ name: 'Deux-Sèvres', code: '79' });
    await models.Department.create({ name: 'Somme', code: '80' });
    await models.Department.create({ name: 'Tarn', code: '81' });
    await models.Department.create({ name: 'Tarn-et-Garonne', code: '82' });
    await models.Department.create({ name: 'Var', code: '83' });
    await models.Department.create({ name: 'Vaucluse', code: '84' });
    await models.Department.create({ name: 'Vendée', code: '85' });
    await models.Department.create({ name: 'Vienne', code: '86' });
    await models.Department.create({ name: 'Haute-Vienne', code: '87' });
    await models.Department.create({ name: 'Vosges', code: '88' });
    await models.Department.create({ name: 'Yonne', code: '89' });
    await models.Department.create({ name: 'Territoire de Belfort', code: '90' });
    await models.Department.create({ name: 'Essonne', code: '91' });
    await models.Department.create({ name: 'Hauts-de-Seine', code: '92' });
    await models.Department.create({ name: 'Seine-Saint-Denis', code: '93' });
    await models.Department.create({ name: 'Val-de-Marne', code: '94' });
    await models.Department.create({ name: 'Val-d Oise', code: '95' });

    // seeding UserPicture
    await models.UserPicture.create({ name: 'Avatar chat 1', path: '/database_picture/profile_picture/animals/cat_avatar_1.png', alt: 'Avatar profil utilisateur.' });
    await models.UserPicture.create({ name: 'Avatar chat 2', path: '/database_picture/profile_picture/animals/cat_avatar_2.png', alt: 'Avatar profil utilisateur.' });
    await models.UserPicture.create({ name: 'Avatar humain 1', path: '/database_picture/profile_picture/humans/human_avatar_1.png', alt: 'Avatar profil utilisateur.' });
    await models.UserPicture.create({ name: 'Avatar famille 1', path: '/database_picture/profile_picture/humans/family_avatar_1.png', alt: 'Avatar profil utilisateur.' });
    await models.UserPicture.create({ name: 'Avatar humain 2', path: '/database_picture/profile_picture/humans/human_avatar_2.png', alt: 'Avatar profil utilisateur.' });
    await models.UserPicture.create({ name: 'Avatar humain 3', path: '/database_picture/profile_picture/humans/human_avatar_3.png', alt: 'Avatar profil utilisateur.' });
    await models.UserPicture.create({ name: 'Avatar chien 1', path: '/database_picture/profile_picture/animals/dog_avatar_1.png', alt: 'Avatar profil utilisateur.' });
    await models.UserPicture.create({ name: 'Avatar hamster 2', path: '/database_picture/profile_picture/animals/hamster_avatar_2.png', alt: 'Avatar profil utilisateur.' });
    await models.UserPicture.create({ name: 'Avatar lapin 1', path: '/database_picture/profile_picture/animals/rabbit_avatar_1.png', alt: 'Avatar profil utilisateur.' });
    await models.UserPicture.create({ name: 'Avatar lapin 2', path: '/database_picture/profile_picture/animals/rabbit_avatar_2.png', alt: 'Avatar profil utilisateur.' });
    await models.UserPicture.create({ name: 'Avatar hamster 1', path: '/database_picture/profile_picture/animals/hamster_avatar_1.png', alt: 'Avatar profil utilisateur.' });
    await models.UserPicture.create({ name: 'Avatar humain 1', path: '/database_picture/profile_picture/humans/user_avatar_1.png', alt: 'Avatar profil utilisateur.' });
    await models.UserPicture.create({ name: 'Avatar humain 10', path: '/database_picture/profile_picture/humans/human_avatar_10.png', alt: 'Avatar profil utilisateur.' });

    // NB : l'ordre pour le seeding de Association, Family et User importe pour les dépendances entre les tables

    // seeding User
    await models.User.create({ pseudo: 'Cruella', mail: 'cruella@devil.com', password: '$2a$10$XcyMXG7gp7jzfI3NLxYR8.hqhpPHzXmzLwU6ObzRDlSt6YCO00vHi', streetNumber: '666', streetName: 'rue des dalmatiens', city: 'MechantCity', zipcode: '35000', phone: '0606060606', birthdate: '1995-09-12', RoleId: '3', FamilyId: '1', acceptCondition: 'true', notARobot: 'true' }, { include: [models.Role, models.Family, models.Request] });
    await models.User.create({ pseudo: 'Dalmatiens sans limites', mail: 'dalmatiens@101.fr', password: '$2a$10$aCmXR55rCirP.xZqThkJr.22FyfJ6GJIKOULnwyBdvf6KV2DuXT86', streetNumber: '101', streetName: 'allée des petits toutous', city: 'Toutouville', zipcode: '44660', phone: '0606060606', birthdate: '1995-09-12', RoleId: "2", FamilyId: null, acceptCondition: 'true', notARobot: 'true' }, { include: [models.Role, models.Family, models.Request] });
    await models.User.create({ pseudo: 'Rongeurs sans frontière', mail: 'rongeur@101.fr', password: 'rongeur101', streetNumber: '10', streetName: 'avenue des petits rongeurs', city: 'Rongeurtown', zipcode: '75020', phone: '0606060606', birthdate: '1995-09-12', RoleId: "2", FamilyId: null, acceptCondition: 'true', notARobot: 'true' }, { include: [models.Role, models.Family, models.Request] });
    await models.User.create({ pseudo: 'Chat Pristi', mail: 'chatpristi@101.fr', password: 'chat101', streetNumber: '9', streetName: 'rue du sac à puce', city: 'Meowcity', zipcode: '29130', phone: '0606060606', birthdate: '1995-09-12', RoleId: "2", FamilyId: null, acceptCondition: 'true', notARobot: 'true' }, { include: [models.Role, models.Family, models.Request] });
    await models.User.create({ pseudo: 'Les Chacripants', mail: 'sacripant@101.fr', password: 'sacripant101', streetNumber: '29', streetName: 'rue des farfadets', city: 'Trafalgar Town', zipcode: '51290', phone: '0606060606', birthdate: '1995-09-12', RoleId: "2", FamilyId: null, acceptCondition: 'true', notARobot: 'true' }, { include: [models.Role, models.Family, models.Request] });
    await models.User.create({ pseudo: 'Nac and co', mail: 'nacandco@101.fr', password: 'nacandco101', streetNumber: '4', streetName: 'rue du hamster', city: 'Bunny Town', zipcode: '66051', phone: '0606060606', birthdate: '1995-09-12', RoleId: "2", FamilyId: null, acceptCondition: 'true', notARobot: 'true' }, { include: [models.Role, models.Family, models.Request] });

    // seeding Association
    await models.Association.create({ description: 'On a trop de dalmatiens à cause de Cruella. Help.', link: 'https://tropdedalmatiens.com', socialReason: 'Dalmatiens sans limites', UserId: '2' }, { include: [models.User] });
    await models.Association.create({ description: 'Depuis la pénurie de Nuts, les rongeurs en pls. Aidez-nous !!!', link: 'https://plusdenutspourlesrongeurs.com', socialReason: 'Rongeur sans frontière', UserId: '3' }, { include: [models.User] });
    await models.Association.create({ description: "Les rêves d'un chat sont peuplés de souris !!!", link: 'https://neufvie.com', socialReason: 'Chat Pristi', UserId: '4' }, { include: [models.User] });
    await models.Association.create({ description: "Chat échaudé craint l'eau froide. !!!", link: 'https://neko-chan.com', socialReason: 'Les Chacripant', UserId: '5' }, { include: [models.User] });
    await models.Association.create({ description: "Quoi de neuf doc ???", link: 'https://nacandco.com', socialReason: 'Nac and Co', UserId: '6' }, { include: [models.User] });

    // seeding Family
    await models.Family.create({ lastname: 'DeVil', firstname: 'Cruella', petExperience: 'ai eu en garde 99 chiots', motivation: 'besoin d un nouveau manteau', homeDescription: 'manoir spacieux', livingSpace: '250', outdoorSpace: '1000', vehicle: 'true', securedWindows: 'false', nac: 'false', nacDetail: null, HousingId: '2', LivingEnvironmentId: '1', OutdoorTypeId: '1', ChildrenUnder15Id: '1', CatSelectId: '4', DogSelectId: '2', UserId: '1' }, { include: [models.User, models.Housing, models.LivingEnvironment, models.OutdoorType, models.ChildrenUnder15, models.CatSelect, models.DogSelect] });

    // seeding Pet
    await models.Pet.create({ name: 'Perdita', birthdate: '2015-11-02', description: 'Maman épuisée de 99 chiots.', sex: 'true', okApartment: 'false', sterilized: 'true', DepartmentId: '01', zipcode: '01500', RaceId: "1", SpeciesId: "1", OkDogId: "3", OkCatId: "1", OkChildId: "2", AssociationId: "1", PetStatusId: "2" }, { include: [models.Race, models.Species, models.OkDog, models.OkCat, models.OkChild, models.Association, models.PetStatus] });
    await models.Pet.create({ name: 'Pongo', birthdate: '2015-01-03', description: 'Papa parti cherché des cigarettes.', sex: 'false', okApartment: 'true', sterilized: 'true', DepartmentId: '38', zipcode: '38190', RaceId: "1", SpeciesId: "1", OkDogId: "2", OkCatId: "3", OkChildId: "1", AssociationId: "1", PetStatusId: "1" }, { include: [models.Race, models.Species, models.OkDog, models.OkCat, models.OkChild, models.Association, models.PetStatus] },);
    await models.Pet.create({ name: 'Marie', birthdate: '2024-02-15', description: 'Petite duchesse en apprentissage.', sex: 'true', okApartment: 'true', sterilized: 'false', DepartmentId: '75', zipcode: '75001', RaceId: "1", SpeciesId: "2", OkDogId: "3", OkCatId: "1", OkChildId: "2", AssociationId: "1", PetStatusId: "2" }, { include: [models.Race, models.Species, models.OkDog, models.OkCat, models.OkChild, models.Association, models.PetStatus] });
    await models.Pet.create({ name: 'Toulouze', birthdate: '2024-02-15', description: 'Petit chaton aventurier', sex: 'false', okApartment: 'true', sterilized: 'false', DepartmentId: '75', zipcode: '75001', RaceId: "1", SpeciesId: "2", OkDogId: "3", OkCatId: "1", OkChildId: "2", AssociationId: "1", PetStatusId: "2" }, { include: [models.Race, models.Species, models.OkDog, models.OkCat, models.OkChild, models.Association, models.PetStatus] });
    await models.Pet.create({ name: 'Berlioz', birthdate: '2024-02-15', description: 'Petit chaton musichien', sex: 'false', okApartment: 'true', sterilized: 'false', DepartmentId: '75', zipcode: '75001', RaceId: "1", SpeciesId: "2", OkDogId: "3", OkCatId: "1", OkChildId: "2", AssociationId: "1", PetStatusId: "2" }, { include: [models.Race, models.Species, models.OkDog, models.OkCat, models.OkChild, models.Association, models.PetStatus] });
    await models.Pet.create({ name: 'Duchesse', birthdate: '2018-05-12', description: 'Maman prestigieuse', sex: 'true', okApartment: 'true', sterilized: 'true', DepartmentId: '75', zipcode: '75001', RaceId: "1", SpeciesId: "2", OkDogId: "3", OkCatId: "1", OkChildId: "2", AssociationId: "1", PetStatusId: "2" }, { include: [models.Race, models.Species, models.OkDog, models.OkCat, models.OkChild, models.Association, models.PetStatus] });
    await models.Pet.create({ name: 'Pluto', birthdate: '2013-08-19', description: 'Toutou fidèle', sex: 'false', okApartment: 'false', sterilized: 'true', DepartmentId: '59', zipcode: '59140', RaceId: "3", SpeciesId: "1", OkDogId: "3", OkCatId: "1", OkChildId: "2", AssociationId: "1", PetStatusId: "2" }, { include: [models.Race, models.Species, models.OkDog, models.OkCat, models.OkChild, models.Association, models.PetStatus] });
    await models.Pet.create({ name: 'Mushu', birthdate: '2009-01-01', description: 'Dragon d\'appartement', sex: 'false', okApartment: 'true', sterilized: 'false', DepartmentId: '69', zipcode: '69140', RaceId: "4", SpeciesId: "5", OkDogId: "3", OkCatId: "1", OkChildId: "2", AssociationId: "1", PetStatusId: "2" }, { include: [models.Race, models.Species, models.OkDog, models.OkCat, models.OkChild, models.Association, models.PetStatus] });
    await models.Pet.create({ name: 'Nala', birthdate: '2008-12-05', description: 'Chat sauvage', sex: 'true', okApartment: 'false', sterilized: 'false', DepartmentId: '37', zipcode: '37458', RaceId: "7", SpeciesId: "2", OkDogId: "3", OkCatId: "1", OkChildId: "2", AssociationId: "1", PetStatusId: "2" }, { include: [models.Race, models.Species, models.OkDog, models.OkCat, models.OkChild, models.Association, models.PetStatus] });
    await models.Pet.create({ name: 'Rox', birthdate: '2013-11-09', description: 'Goupil chatoyant', sex: 'false', okApartment: 'false', sterilized: 'true', DepartmentId: '18', zipcode: '18457', RaceId: "4", SpeciesId: "5", OkDogId: "3", OkCatId: "1", OkChildId: "2", AssociationId: "1", PetStatusId: "2" }, { include: [models.Race, models.Species, models.OkDog, models.OkCat, models.OkChild, models.Association, models.PetStatus] });
    await models.Pet.create({ name: 'Rouky', birthdate: '2013-08-09', description: 'Toutou en vadrouille', sex: 'false', okApartment: 'false', sterilized: 'true', DepartmentId: '68', zipcode: '68475', RaceId: "3", SpeciesId: "1", OkDogId: "3", OkCatId: "1", OkChildId: "2", AssociationId: "1", PetStatusId: "2" }, { include: [models.Race, models.Species, models.OkDog, models.OkCat, models.OkChild, models.Association, models.PetStatus] });
    await models.Pet.create({ name: 'Archimède', birthdate: '2011-11-25', description: 'Chouette acolyte', sex: 'true', okApartment: 'false', sterilized: 'false', DepartmentId: '59', zipcode: '593875', RaceId: "4", SpeciesId: "5", OkDogId: "3", OkCatId: "1", OkChildId: "2", AssociationId: "1", PetStatusId: "2" }, { include: [models.Race, models.Species, models.OkDog, models.OkCat, models.OkChild, models.Association, models.PetStatus] });
    // await Pet.create({ name: 'Archimède', birthdate: '2011-11-25', description: 'Chouette acolyte', sex: 'true', okApartment: 'false', sterilized: 'false', DepartmentId: '59', zipcode: '593875', profilPicturePath: '/database_picture/pet_picture/archimede.jpg', RaceId: "4", SpeciesId: "5", OkDogId: "3", OkCatId: "1", OkChildId: "2", AssociationId: "1", PetStatusId: "2" }, { include: [Race, Species, OkDog, OkCat, OkChild, Association, PetStatus] });

    // seeding PetPicture
    await models.PetPicture.create({ name: 'Avatar chat 1', path: '/database_picture/pet_picture/loky.png', alt: 'Avatar profil utilisateur.', PetId: "1" }, { include: [models.Pet] });
    await models.PetPicture.create({ name: 'Avatar chat 2', path: '/database_picture/pet_picture/orko.jpg', alt: 'Avatar profil utilisateur.', PetId: "2" }, { include: [models.Pet] });
    await models.PetPicture.create({ name: 'Avatar chien 1', path: '/database_picture/pet_picture/neo.jpeg', alt: 'Avatar profil utilisateur.', PetId: "3" }, { include: [models.Pet] });
    await models.PetPicture.create({ name: 'Avatar hamster 2', path: '/database_picture/pet_picture/mei.jpeg', alt: 'Avatar profil utilisateur.', PetId: "4" }, { include: [models.Pet] });
    await models.PetPicture.create({ name: 'Avatar lapin 1', path: '/database_picture/pet_picture/mimi.jpeg', alt: 'Avatar profil utilisateur.', PetId: "5" }, { include: [models.Pet] });
    await models.PetPicture.create({ name: 'Avatar lapin 2', path: '/database_picture/pet_picture/clarke.jpeg', alt: 'Avatar profil utilisateur.', PetId: "6" }, { include: [models.Pet] });
    await models.PetPicture.create({ name: 'Avatar hamster 1', path: '/database_picture/pet_picture/francis.jpeg', alt: 'Avatar profil utilisateur.', PetId: "7" }, { include: [models.Pet] });

    // seeding AssoPicture
    await models.AssociationPicture.create({ name: 'Avatar humain 1', path: '/database_picture/profile_picture/humans/human_avatar_1.png', alt: 'Avatar profil utilisateur.', AssociationId: "1" }, { include: [models.Association] });
    await models.AssociationPicture.create({ name: 'Avatar famille 1', path: '/database_picture/profile_picture/humans/family_avatar_1.png', alt: 'Avatar profil utilisateur.', AssociationId: "1" }, { include: [models.Association] });
    await models.AssociationPicture.create({ name: 'Avatar humain 2', path: '/database_picture/profile_picture/humans/human_avatar_2.png', alt: 'Avatar profil utilisateur.', AssociationId: "1" }, { include: [models.Association] });
    await models.AssociationPicture.create({ name: 'Avatar humain 3', path: '/database_picture/profile_picture/humans/human_avatar_3.png', alt: 'Avatar profil utilisateur.', AssociationId: "1" }, { include: [models.Association] });
    await models.AssociationPicture.create({ name: 'Avatar humain 1', path: '/database_picture/profile_picture/humans/user_avatar_1.png', alt: 'Avatar profil utilisateur.', AssociationId: "1" }, { include: [models.Association] });
    await models.AssociationPicture.create({ name: 'Avatar humain 10', path: '/database_picture/profile_picture/humans/human_avatar_10.png', alt: 'Avatar profil utilisateur.', AssociationId: "1" }, { include: [models.Association] });

    // seeding FamilyPicture
    await models.FamilyPicture.create({ name: 'Avatar humain 1', path: '/database_picture/profile_picture/humans/human_avatar_1.png', alt: 'Avatar profil utilisateur.', FamilyId: "1" }, { include: [models.Family] });
    await models.FamilyPicture.create({ name: 'Avatar famille 1', path: '/database_picture/profile_picture/humans/family_avatar_1.png', alt: 'Avatar profil utilisateur.', FamilyId: "1" }, { include: [models.Family] });
    await models.FamilyPicture.create({ name: 'Avatar humain 2', path: '/database_picture/profile_picture/humans/human_avatar_2.png', alt: 'Avatar profil utilisateur.', FamilyId: "1" }, { include: [models.Family] });
    await models.FamilyPicture.create({ name: 'Avatar humain 3', path: '/database_picture/profile_picture/humans/human_avatar_3.png', alt: 'Avatar profil utilisateur.', FamilyId: "1" }, { include: [models.Family] });
    await models.FamilyPicture.create({ name: 'Avatar humain 1', path: '/database_picture/profile_picture/humans/user_avatar_1.png', alt: 'Avatar profil utilisateur.', FamilyId: "1" }, { include: [models.Family] });
    await models.FamilyPicture.create({ name: 'Avatar humain 10', path: '/database_picture/profile_picture/humans/human_avatar_10.png', alt: 'Avatar profil utilisateur.', FamilyId: "1" }, { include: [models.Family] });

    // seeding Request
    await models.Request.create({ RequestStatusId: '1', PetId: '2', FamilyId: '1' }, { include: [models.RequestStatus, models.Pet, models.Family] })

    // SEEDING END
}

catch (error) {
    console.error(error);
};