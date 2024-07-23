const SearchButtonPannel = () => {
    return (
        <>
            <li className="nav__links">
                <a href="/animaux" aria-label="lien vers la page de recherche par animaux">
                    Tous les animaux</a></li>
            <li className="nav__links">
                <a href="/associations" aria-label="lien vers la page de recherche par association">Toutes les associations
                </a>
            </li>
        </>
    )
}

export default SearchButtonPannel;