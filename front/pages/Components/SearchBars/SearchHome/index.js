import FilterBySpecies from "../FilterBySpecies";
import FilterByZipcode from "../FilterByZipcode";
import { useState, useEffect } from "react";

const SearchHome = ({ handleSelectDepartment, handleSelectSpecies }) => {

  // Declaration des states
  // Pour récupérer la table department
  const [departmentList, setDepartmentList] = useState([]);
  // Pour récupérer la table species
  const [speciesList, setSpeciesList] = useState([]);
  // Suivis du chargement des données
  const [isLoading, setIsLoading] = useState(false);



  // Récupération des données de la table department
  const getSelects = async () => {
    try {
      // Mise à jour de 'isLoading' à true pendant la récupération des données
      setIsLoading(true);
      // Appel à une API locale pour récupérer les données des départements
      const response = await fetch(`${process.env.PUBLIC_URL}/selects`);
      // Transformation de la réponse en format JSON
      const data = await response.json();

      //console.log(data.department)

      // Mise à jour de l'état 'pets' avec les données récupérées
      setDepartmentList(data.department);
      setSpeciesList(data.species);

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
      alert("Erreur de récupération des départements");
    }
  };

  useEffect(() => {
    getSelects();
  }, []);

  return (
    <form className="filter__form">
      <FilterBySpecies speciesList={speciesList} handleSelectSpecies={handleSelectSpecies} />
      <FilterByZipcode departmentList={departmentList} handleSelectDepartment={handleSelectDepartment} />

    </form>
  )
}

export default SearchHome;