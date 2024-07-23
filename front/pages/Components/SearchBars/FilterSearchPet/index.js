import { useState, useEffect } from "react";
import FilterBySpecies from "../FilterBySpecies";
import FilterByZipcode from "../FilterByZipcode";
import FilterByRace from "../FilterByRace";
import FilterByOkDog from "../FilterByOKDog";
import FilterByOkCat from "../FilterByOKCat";
import FilterByOkChild from "../FilterByOkChild";
import FilterByPetStatus from "../FilterByPetStatus";
import FilterBySex from "../FilterBySex";

export const FilterSearchPet = ({ handleSelectSpecies, handleSelectDepartment, handleSelectRace, handleSelectOkDogs, handleSelectOkCats, handleSelectOkChildren, handleSelectPetStatus, pets, handleSelectSex }) => {
    // --- USESTATES START ---
    // Pour récupérer la table species
    const [speciesList, setSpeciesList] = useState([]);
    // Pour récupérer la table department
    const [departmentList, setDepartmentList] = useState([]);
    // Pour récupérer la table race
    const [raceList, setRaceList] = useState([]);
    // Pour récupérer la table race
    const [okList, setOkList] = useState([]);
    // Pour récupérer la table PetStatus
    const [petStatusList, setPetStatusList] = useState([]);
    // Suivis du chargement des données
    const [isLoading, setIsLoading] = useState(false);
    // --- USESTATES END ---

    // Récupération des données de la table species
    const getSpeciesList = async () => {
        try {
            // Mise à jour de 'isLoading' à true pendant la récupération des données
            setIsLoading(true);
            // Appel à une API locale pour récupérer les données des départements
            const response = await fetch(`${process.env.PUBLIC_URL}/species`);
            // Transformation de la réponse en format JSON
            const data = await response.json();
            //console.log(data)
            // Mise à jour de l'état 'pets' avec les données récupérées
            setSpeciesList(data);
            // Affichage des données récupérées dans la console
            // console.log("dans le try species");
            // console.log(speciesList);
            // Fin de la récupération des données, mise à jour de 'isLoading' à false
            setIsLoading(false);
        } catch (error) {
            // Gestion des erreurs
            // Affichage des erreurs dans la console
            console.error(error);
            // Affichage d'une alerte en cas d'erreur de récupération
            console.log("Erreur de récupération des especes");
        }
    };

    // Récupération des données de la table department
    const getDepartmentsList = async () => {
        try {
            // Mise à jour de 'isLoading' à true pendant la récupération des données
            setIsLoading(true);
            // Appel à une API locale pour récupérer les données des départements
            const response = await fetch(`${process.env.PUBLIC_URL}/departments`);
            // Transformation de la réponse en format JSON
            const data = await response.json();

            //console.log(data)
            // Mise à jour de l'état 'pets' avec les données récupérées
            setDepartmentList(data);
            // Affichage des données récupérées dans la console
            // console.log("dans le try department");
            // console.log(departmentList);
            // Fin de la récupération des données, mise à jour de 'isLoading' à false
            setIsLoading(false);
        } catch (error) {
            // Gestion des erreurs
            // Affichage des erreurs dans la console
            console.error(error);
            // Affichage d'une alerte en cas d'erreur de récupération
            console.log("Erreur de récupération des départements");
        }
    };

    // Récupération des données de la table race
    const getRaceList = async () => {
        try {
            // Mise à jour de 'isLoading' à true pendant la récupération des données
            setIsLoading(true);
            // Appel à une API locale pour récupérer les données des départements
            const response = await fetch(`${process.env.PUBLIC_URL}/race`);
            // Transformation de la réponse en format JSON
            const data = await response.json();
            //console.log(data)
            // Mise à jour de l'état 'pets' avec les données récupérées
            setRaceList(data);
            // Affichage des données récupérées dans la console
            // console.log("dans le try race");
            // console.log(raceList);
            // Fin de la récupération des données, mise à jour de 'isLoading' à false
            setIsLoading(false);
        } catch (error) {
            // Gestion des erreurs
            // Affichage des erreurs dans la console
            console.error(error);
            // Affichage d'une alerte en cas d'erreur de récupération
            console.log("Erreur de récupération des races");
        }
    };

    // Récupération des données de la table ok_cats
    // servira pour les filtres OK dogs, cats et children
    const getOkList = async () => {
        try {
            // Mise à jour de 'isLoading' à true pendant la récupération des données
            setIsLoading(true);
            // Appel à une API locale pour récupérer les données des départements
            const response = await fetch(`${process.env.PUBLIC_URL}/ok_dogs`);
            // Transformation de la réponse en format JSON
            const data = await response.json();
            //console.log(data)
            // Mise à jour de l'état 'pets' avec les données récupérées
            setOkList(data);
            // Affichage des données récupérées dans la console
            // console.log("dans le try OK");
            // console.log(okList);
            // Fin de la récupération des données, mise à jour de 'isLoading' à false
            setIsLoading(false);
        } catch (error) {
            // Gestion des erreurs
            // Affichage des erreurs dans la console
            console.error(error);
            // Affichage d'une alerte en cas d'erreur de récupération
            console.log("Erreur de récupération des races");
        }
    };

    // Récupération des données de la table race
    const getPetStatusList = async () => {
        try {
            // Mise à jour de 'isLoading' à true pendant la récupération des données
            setIsLoading(true);
            // Appel à une API locale pour récupérer les données des départements
            const response = await fetch(`${process.env.PUBLIC_URL}/pet_status`);
            // Transformation de la réponse en format JSON
            const data = await response.json();
            //console.log(data)
            // Mise à jour de l'état 'pets' avec les données récupérées
            setPetStatusList(data);
            // Affichage des données récupérées dans la console
            // console.log("dans le try pet status");
            // console.log(petStatusList);
            // Fin de la récupération des données, mise à jour de 'isLoading' à false
            setIsLoading(false);
        } catch (error) {
            // Gestion des erreurs
            // Affichage des erreurs dans la console
            console.error(error);
            // Affichage d'une alerte en cas d'erreur de récupération
            console.log("Erreur de récupération des races");
        }
    };

    useEffect(() => {
        getDepartmentsList(); getSpeciesList(); getRaceList(); getOkList(); getPetStatusList();
    }, []);

    return (
        <form className="filter__form">
            <FilterByZipcode departmentList={departmentList} handleSelectDepartment={handleSelectDepartment} />
            <FilterBySpecies handleSelectSpecies={handleSelectSpecies} speciesList={speciesList} />
            <FilterByRace raceList={raceList} handleSelectRace={handleSelectRace} />
            <FilterByOkDog handleSelectOkDogs={handleSelectOkDogs} okList={okList} />
            <FilterByOkCat handleSelectOkCats={handleSelectOkCats} okList={okList} />
            <FilterByOkChild handleSelectOkChildren={handleSelectOkChildren} okList={okList} />
            <FilterByPetStatus handleSelectPetStatus={handleSelectPetStatus} petStatusList={petStatusList} />
            <FilterBySex pets={pets} handleSelectSex={handleSelectSex} />
        </form>
    )
}
