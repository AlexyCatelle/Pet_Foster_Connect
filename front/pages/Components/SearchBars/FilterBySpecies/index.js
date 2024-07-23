const FilterBySpecies = ({ speciesList, handleSelectSpecies }) => {
    return (
        <>
            <fieldset className="filter__pet">
            <label>Espèce</label>&nbsp;
            <select name="species" id="species-select" onChange={handleSelectSpecies}>
                <option value="all">Toutes les espèces</option>
                {
                    speciesList.map((spe) => <option key={spe.id} value={spe.label}>{spe.label}</option>)
                }
            </select>
            </fieldset>
        </>
    )
}

export default FilterBySpecies;