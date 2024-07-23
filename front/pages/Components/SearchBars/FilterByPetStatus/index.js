const FilterByPetStatus = ({ petStatusList, handleSelectPetStatus }) => {
    return (
        <fieldset className="filter__pet">
            <label>Statut</label>
            <select name="status" id="status-select" onChange={handleSelectPetStatus}>
                <option value="all">Tout</option>
                {
                    petStatusList.map((petStatus) => <option key={petStatus.id} value={petStatus.label}>{petStatus.label}</option>)
                }
            </select>
        </fieldset>
    )
}

export default FilterByPetStatus;