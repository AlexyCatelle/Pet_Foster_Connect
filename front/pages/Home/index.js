// Importation des composants nécessaires depuis des chemins spécifiques
import CardPetList from "../Components/CardPetList/index.js";
import Header from "../Components/Header/index.js";
import PresentationShort from "../components/PresentationShort";
import SearchBars from "../Components/SearchBars/SearchHome/index.js";
import Footer from "./../components/Footer";
// Importation des hooks useState et useEffect depuis React
import { useState, useEffect } from "react";

// Définition d'un composant fonctionnel Home
function Home() {

    // console.log("process env")
    // console.log(process.env)
    // Déclaration d'un état local 'pets' avec useState, initialisé à un tableau vide
    const [pets, setPets] = useState([]);
    // Déclaration du filtre department
    const [searchDepartment, setSearchDepartment] = useState("all");
    // Déclaration du filtre species
    const [searchSpecies, setSearchSpecies] = useState("all");
    // Déclaration d'un état local 'isLoading' avec useState, initialisé à false
    const [isLoading, setIsLoading] = useState(false);
    // récupération de toutes les photos
    const [pictures, setPictures] = useState([]);


    // Définition d'une fonction asynchrone getPets pour récupérer les données des animaux
    const getPets = async () => {
        try {
            // Mise à jour de 'isLoading' à true pendant la récupération des données
            setIsLoading(true);
            // Appel à une API locale pour récupérer les données des animaux
            const response = await fetch(`${process.env.PUBLIC_URL}/pets`);
            // Transformation de la réponse en format JSON
            const data = await response.json();
            // console.log("les data")
            // console.log(data)
            // Mise à jour de l'état 'pets' avec les données récupérées
            setPets(data);
            // Affichage des données récupérées dans la console
            // console.log("dans le try")
            // console.log(pets)
            // Fin de la récupération des données, mise à jour de 'isLoading' à false
            setIsLoading(false);
        }
        // Gestion des erreurs
        catch (error) {
            // Affichage des erreurs dans la console
            console.error(error);
            // Affichage d'une alerte en cas d'erreur de récupération
            console.log('Erreur de récupération');
        }
    }
    // Affichage des données des animaux dans la console à chaque rendu
    //console.log(pets)

    // Définition d'une fonction asynchrone getPictures pour récupérer les photos
    const getPictures = async () => {
        try {
            // Mise à jour de 'isLoading' à true pendant la récupération des données
            setIsLoading(true);
            // Appel à une API locale pour récupérer les données des animaux
            const response = await fetch(`${process.env.PUBLIC_URL}/pet_picture`);
            // Transformation de la réponse en format JSON
            const data = await response.json();
            // console.log("les data")
            // console.log(data)
            // Mise à jour de l'état 'pets' avec les données récupérées
            setPictures(data);
            // Affichage des données récupérées dans la console
            // console.log("dans le try")
            // console.log(pictures)
            // Fin de la récupération des données, mise à jour de 'isLoading' à false
            setIsLoading(false);
        }
        // Gestion des erreurs
        catch (error) {
            // Affichage des erreurs dans la console
            console.error(error);
            // Affichage d'une alerte en cas d'erreur de récupération
            console.log('Erreur de récupération');
        }
    }

    // HANDLE START
    function handleSelectSpecies(e) {
        console.log(e.target.value)
        return setSearchSpecies(e.target.value)
    }

    function handleSelectDepartment(e) {
        console.log(e.target.value)
        return setSearchDepartment(e.target.value)
    }
    // HANDLE END

    // Utilisation de useEffect pour exécuter getPets() une fois, au chargement initial du composant
    useEffect(() => {
        getPets(), getPictures();
    }, [])

    // Rendu du composant Home avec plusieurs composants enfants
    return (
        <>
            <Header />
            <main>
                <SearchBars handleSelectDepartment={handleSelectDepartment} handleSelectSpecies={handleSelectSpecies} />
                <PresentationShort />
                <CardPetList pets={pets} searchDepartment={searchDepartment} searchSpecies={searchSpecies} pictures={pictures} />
                {/* <MapSearchByZipcode /> */}
            </main>
            <Footer />
        </>
    )
}

// Exportation du composant Home par défaut pour l'utiliser ailleurs
export default Home;
