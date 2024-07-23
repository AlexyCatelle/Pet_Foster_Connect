const FilterByOkChild = ({ okList, handleSelectOkChildren }) => {
    return (
        <fieldset className="filter__pet">
            <label>OK enfants</label>
            <select name="ok_children" id="ok-children-select" onChange={handleSelectOkChildren}>
                <option value="all">Tout</option>
                {
                    okList.map((okChildren) => <option key={okChildren.id} value={okChildren.label}>{okChildren.label}</option>)
                }
            </select>
        </fieldset>
    )
}

export default FilterByOkChild;