import express from "express";
// START IMPORT CONTROLLER
import mainController from "./controllers/mainController.js";
// END IMPORT CONTROLLER

// création d'un objet router à l'aide de la méthode adaptée fournie par express
const router = express.Router();

// START ROUTES
// START ROUTES EN GET
router.get("/", mainController.home)
// END ROUTES EN GET
// START ROUTES EN POST

// END ROUTES EN POST
// END ROUTES

export default router;