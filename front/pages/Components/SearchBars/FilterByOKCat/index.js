const FilterByOkCat = ({ okList, handleSelectOkCats }) => {
    return (
        <fieldset className="filter__pet">
            <label>OK chats</label>
            <select name="ok_cats" id="ok-cats-select" onChange={handleSelectOkCats}>
                <option value="all">Tout</option>
                {
                    okList.map((okCats) => <option key={okCats.id} value={okCats.label}>{okCats.label}</option>)
                }
            </select>
        </fieldset>
    )
}

export default FilterByOkCat;