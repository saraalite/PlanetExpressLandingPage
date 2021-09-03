import React from "react";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };
  return (
    <input
      className="input"
      placeholder="Busca en nuestra plantilla"
      type="text"
      value={props.filterByName}
      onChange={handleChange}
    />
  );
};

export default FilterByName;