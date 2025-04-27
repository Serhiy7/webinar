import React from "react";

const Filter = ({ value, onChangeFilter }) => (
  <label>
    Фильтр
    <input type="text" value={value} onChange={onChangeFilter} />
  </label>
);

export default Filter;
