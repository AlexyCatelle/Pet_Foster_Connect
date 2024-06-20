import express from "express";
// START IMPORT CONTROLLER
import mainController from "./controllers/mainController.js";
import userController from "./controllers/userController.js";
import petController from "./controllers/petController.js";
// END IMPORT CONTROLLER

// création d'un objet router à l'aide de la méthode adaptée fournie par express
const router = express.Router();

// START ROUTES
// START ROUTES EN GET
router.get("/", mainController.home)
router.get("/users", userController.getAll);
router.get("/pets", petController.getAll);
// END ROUTES EN GET
// START ROUTES EN POST

// END ROUTES EN POST
// END ROUTES

export default router;