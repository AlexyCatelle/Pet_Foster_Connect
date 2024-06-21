import express from "express";
// START IMPORT CONTROLLER
import mainController from "./controllers/mainController.js";
import userController from "./controllers/userController.js";
import petController from "./controllers/petController.js";
import associationController from "./controllers/associationController.js";
import familyController from "./controllers/familyController.js";
import requestController from "./controllers/requestController.js";
import selectsController from "./controllers/selectController.js";
// END IMPORT CONTROLLER

// création d'un objet router à l'aide de la méthode adaptée fournie par express
const router = express.Router();

// START ROUTES
// START ROUTES EN GET
// route page d'acceuil
router.get("/", mainController.home)

// Récupération de toutes les fiches profils
router.get("/users", userController.getAll);
router.get("families", familyController.getAll)
router.get("/associations", associationController.getAll)
router.get("/pets", petController.getAll);

// Récupération des données pour les selects
router.get("/selects", selectsController.getAll)

// Récupération des données des demandes d'acceuil
router.get("/requests", requestController.getAll);
// END ROUTES EN GET

// START ROUTES EN POST
//Vérification des données de connexion et création/récupération du token JWT
router.post("signin", mainController.signIn)

// END ROUTES EN POST
// END ROUTES

export default router;