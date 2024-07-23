const FilterByZipcode = ({ departmentList, handleSelectDepartment }) => {
  return (
    <>
      <fieldset className="filter__pet">
      <label>Département</label>&nbsp;
      <select name="zipcode" id="zipcode-select" onChange={handleSelectDepartment}>
        <option value="all">Tous les départements</option>
        {
          departmentList.map((dep) => <option key={dep.id} value={dep.code}>{dep.code} - {dep.name}</option>)
        }
      </select>
      </fieldset>
    </>
  )
}

export default FilterByZipcode;