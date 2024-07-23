import PropTypes from "prop-types";

const CardPet = ({
  id,
  race,
  name,
  species,
  zipcode,
  sex,
  birthdate,
  sterilized,
  description,
  pictures,
}) => {

  // affichage texte pour statut de la stérilisation
  let sterilizedSpan = "";

  if (sterilized === true) {
    sterilizedSpan = "oui";
  } else {
    sterilizedSpan = "non";
  }

  // fonction de calcul de l'age en année
  const getAge = (birthDate) =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);
  // fonction  de calcul de l'age en mois
  function getMonth(dateString) {
    let today = new Date();
    let birth = new Date(dateString);
    let timeDiff = today.getTime() - birth.getTime();
    let yearDiff = timeDiff / (24 * 60 * 60 * 1000) / 365.25;
    return Math.floor(yearDiff * 12);
  }

  // calcul de l'age en année de l'animal
  let age = getAge(birthdate);

  // gestion de l'affichage de l'age
  let ageSpan = "";
  if (age > 1) {
    ageSpan = ` ${age} ans`;
  } else if (age === 1) {
    ageSpan = ` ${age} an`;
  } else {
    age = getMonth(birthdate);
    ageSpan = `${age} mois`;
  }

  // affichage du sexe
  let sexSpan = "";
  let sterilizedText = "";

  if (sex === true) {
    sexSpan = "Femelle";
    sterilizedText = "Stérilisée";
  } else {
    sexSpan = "Mâle";
    sterilizedText = "Stérilisé";
  }

  let linkFullPetProfil = `/animaux/profil/${id}`;

  return (
    <li>
      <article className="cardPet__article">
        <img
          className="cardPet__img"
          src={
            pictures[0]?.path
              ? `${process.env.PUBLIC_URL}${pictures[0].path}`
              : `${process.env.PUBLIC_URL}/database_picture/profile_picture/animals/hamster_avatar_2.png`
          }
          alt={pictures[0]?.alt ? `${pictures[0].alt}` : "photo par défaut"}
        />
        <div className="cardPet__legend">
          <p className="cardPet__identity">
            <span className="cardPet__name">{name}</span> &bull; <span className="cardPet__species">{species}</span> &bull; <span className="cardPet__race">{race}</span>
          </p>
          <p className="cardPet__localisation">Localisation : {zipcode}</p>
          <p className="cardPet__infos">
            <span className="cardPet__sex">{sexSpan}</span> &bull; <span className="cardPet__age">{ageSpan}</span> &bull; <span className="cardPet__sterilized">
              {sterilizedText} : {sterilizedSpan}
            </span>
          </p>
          <p className="cardPet__desc">{description}</p>
        </div>
        <div className="cardPet__link__block">
          <a
            className="cardPet__link"
            href={linkFullPetProfil}
            aria-label="consulter le profil complet"
          >
            Voir la fiche
          </a>
        </div>
      </article>
    </li>
  );
};

CardPet.propTypes = {
  picture: PropTypes.array,
};

export default CardPet;
