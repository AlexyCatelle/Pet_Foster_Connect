const FilterByOkDog = ({ okList, handleSelectOkDogs }) => {
    return (
        <fieldset className="filter__pet">
            <label>OK chiens</label>
            <select name="ok_dogs" id="ok-dogs-select" onChange={handleSelectOkDogs}>
                <option value="all">Tout</option>
                {
                    okList.map((okDogs) => <option key={okDogs.id} value={okDogs.label}>{okDogs.label}</option>)
                }
            </select>
        </fieldset>
    )
}

export default FilterByOkDog;