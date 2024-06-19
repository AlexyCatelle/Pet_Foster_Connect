// START IMPORT MODELS PROFILS
import { User } from "./profil_tables/User.js";
import { Association } from "./profil_tables/Association.js";
import { Family } from "./profil_tables/Family.js";
import { Pet } from "./profil_tables/Pet.js";
// END IMPORT MODELS PROFILS

// START IMPORT MODELS SELECTS
import { Role } from "./select_tables/Role.js";
import { Housing } from "./select_tables/Housing.js";
import { LivingEnvironment } from "./select_tables/LivingEnvironment.js";
import { OutdoorType } from "./select_tables/OutdoorType.js";
import { ChildrenUnder15 } from "./select_tables/ChildrenUnder15.js";
import { CatSelect } from "./select_tables/CatSelect.js";
import { DogSelect } from "./select_tables/DogSelect.js";
import { Race } from "./select_tables/Race.js";
import { Species } from "./select_tables/Species.js";
import { OkDog } from "./select_tables/OkDog.js";
import { OkCat } from "./select_tables/OkCat.js";
import { OkChild } from "./select_tables/OkChild.js";
import { Department } from "./select_tables/Department.js";
import { PetStatus } from "./select_tables/PetStatus.js";
import { RequestStatus } from "./select_tables/RequestStatus.js";
// END IMPORT MODELS SELECTS

// START IMPORT OTHER MODELS
import { Request } from "./other_tables/Request.js";
// END IMPORT OTHER MODELS

// START IMPORT MODELS PICTURES
import { UserPicture } from "./picture_tables/UserPicture.js";
import { PetPicture } from "./picture_tables/PetPicture.js";
import { AssociationPicture } from "./picture_tables/AssociationPicture.js";
import { FamilyPicture } from "./picture_tables/FamilyPicture.js";
// END IMPORT MODELS PICTURES

// User
User.belongsTo(Role);
User.belongsTo(UserPicture);
User.hasOne(Family, { foreignKey: 'UserId' });
User.hasMany(Request);

// Association
Association.hasMany(Pet);
Association.belongsTo(User);

// Family
Family.belongsTo(User, { foreignKey: 'UserId' });
Family.belongsTo(Housing);
Family.belongsTo(LivingEnvironment);
Family.belongsTo(OutdoorType);
Family.belongsTo(ChildrenUnder15);
Family.belongsTo(CatSelect);
Family.belongsTo(DogSelect);

// Pet
Pet.belongsTo(Race, { onDelete: 'CASCADE' });
Pet.belongsTo(Species, { onDelete: 'CASCADE' });
Pet.belongsTo(OkDog, { onDelete: 'CASCADE' });
Pet.belongsTo(OkCat, { onDelete: 'CASCADE' });
Pet.belongsTo(OkChild, { onDelete: 'CASCADE' });
Pet.belongsTo(Association, { onDelete: 'CASCADE' });
Pet.belongsTo(PetStatus, { onDelete: 'CASCADE' });
Pet.belongsTo(Department);

// Request
Request.belongsTo(RequestStatus);
Request.belongsTo(Pet);
Request.belongsTo(Family);

// PetPicture
PetPicture.belongsTo(Pet, { foreignKey: 'PetId' });
Pet.hasMany(PetPicture);

// AssociationPicture
AssociationPicture.belongsTo(Association);

// FamilyPicture
FamilyPicture.belongsTo(Family);

export { User, Association, Family, Pet, Housing, LivingEnvironment, OutdoorType, ChildrenUnder15, CatSelect, DogSelect, Race, Species, OkDog, OkCat, OkChild, PetStatus, Department, Request, RequestStatus, Role, PetPicture, UserPicture, AssociationPicture, FamilyPicture }