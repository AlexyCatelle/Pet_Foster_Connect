// Importation des modules 
import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

// Chargement des variables d'environnement depuis un fichier .env
dotenv.config();

//
let pgURL = `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`;
// Création d'une instance de Sequelize en utilisant l'URL de connexion à la base de données PostgreSQL
const sequelize = new Sequelize(pgURL, {
    dialect: "postgres",
});

export default sequelize;