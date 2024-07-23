import CardPet from "./CardPet";
import { useState } from "react";

const CardPetList = ({
    pets,
    pictures,
    searchDepartment,
    searchSpecies,
    searchRace,
    searchOkDogs,
    searchOkCats,
    searchOkChildren,
    searchPetStatus,
    searchSex
}) => {
    // Déclaration du nombre de cards visibles
    const [numberOfCards, setNumberofCards] = useState(6);

    // au click augmente la valeur du nombre cards affichées 
    function handleClickMore(e) {
        e.preventDefault();
        // augmente de 3 le nombre de cards visibles
        setNumberofCards(numberOfCards + 3)
    }

    // --- CONDITIONS POUR LES FILTRES START ---
    if (searchDepartment !== "all" && searchDepartment != null) {
        const petsFilteredByDepartment = pets.filter((pet) => {
            if (pet.Department.id == searchDepartment) {
                //console.log(pet.Species.label)
                return pet;
            }
        });
        pets = petsFilteredByDepartment;
        console.log("dans le if department");
    }

    if (searchSpecies !== "all" && searchSpecies != null) {
        const petsFilteredBySpecies = pets.filter(pet => {
            if (pet.Species.label.toLowerCase() == searchSpecies.toLowerCase()) { return pet }
        })
        pets = petsFilteredBySpecies
    }

    if (searchRace !== "all" && searchRace != null) {
        const petsFilteredByRace = pets.filter(pet => {
            if (pet.Race.label.toLowerCase() == searchRace.toLowerCase()) { return pet }
        })
        pets = petsFilteredByRace
    }

    if (searchOkDogs !== "all" && searchOkDogs != null) {
        const petsFilteredByOkDogs = pets.filter(pet => {
            if (pet.OkDog.label.toLowerCase() == searchOkDogs.toLowerCase()) { return pet }
        })
        pets = petsFilteredByOkDogs
    }

    if (searchOkCats !== "all" && searchOkCats != null) {
        const petsFilteredByOkCats = pets.filter(pet => {
            if (pet.OkCat.label.toLowerCase() == searchOkCats.toLowerCase()) { return pet }
        })
        pets = petsFilteredByOkCats
    }

    if (searchOkChildren !== "all" && searchOkChildren != null) {
        const petsFilteredByOkChildren = pets.filter(pet => {
            if (pet.OkChild.label.toLowerCase() == searchOkChildren.toLowerCase()) { return pet }
        })
        pets = petsFilteredByOkChildren
    }

    if (searchPetStatus !== "all" && searchPetStatus != null) {
        const petsFilteredByPetStatus = pets.filter(pet => {
            if (pet.PetStatus.label.toLowerCase() == searchPetStatus.toLowerCase()) { return pet }
        })
        pets = petsFilteredByPetStatus
    }

    if (searchSex !== "all" && searchSex != null) {
        const petsFilteredBySex = pets.filter(pet => {
            if (pet.sex.toString().toLowerCase() === searchSex.toLowerCase()) { return pet }
        })
        pets = petsFilteredBySex
    }

    // --- CONDITIONS POUR LES FILTRES END ---

    let petsList = pets.slice(0, numberOfCards);

    return (
        <>
            <ul className="cardPetList__list">
                {
                    petsList.map((pet) => (
                        <CardPet
                            id={pet.id}
                            key={pet.id}
                            name={pet.name}
                            zipcode={pet.zipcode}
                            sex={pet.sex}
                            birthdate={pet.birthdate}
                            sterilized={pet.sterilized}
                            description={pet.description}
                            pictures={pet.PetPictures}
                            species={pet.Species.label}
                            race={pet.Race.label}
                        />
                    ))
                }
            </ul>
            <form className="cardPetList__form">
                <button onClick={handleClickMore}>Voir plus</button>
            </form>

        </>
    )
};

export default CardPetList;