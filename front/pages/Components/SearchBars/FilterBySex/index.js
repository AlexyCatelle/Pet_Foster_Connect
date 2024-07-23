const FilterBySex = ({ pets, handleSelectSex }) => {
    // console.log(typeof (pets[0].sex))

    return (
        <fieldset className="filter__pet">
            <label>Sexe</label>
            <select name="sex" id="sex-select" onChange={handleSelectSex}>
                <option value="all">Tout</option>
                <option value="true">Femelle</option>
                <option value="false">Mâle</option>
            </select>
        </fieldset>
    )
}

export default FilterBySex;