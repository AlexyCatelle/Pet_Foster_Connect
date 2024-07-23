const FilterByRace = ({ raceList, handleSelectRace }) => {
    return (
        <fieldset className="filter__pet">
            <label>Race</label>
            <select name="race" id="race-select" onChange={handleSelectRace}>
                <option value="all">Toutes les races</option>
                {
                    raceList.map((race) => <option key={race.id} value={race.label}>{race.label}</option>)
                }
            </select>
        </fieldset>
    )
}

export default FilterByRace;