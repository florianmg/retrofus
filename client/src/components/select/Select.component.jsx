import React from "react";

import "./Select.scss";

const Select = ({ label, id, options, value, onChange }) => {
  const optionsList = (object) => {
    let options = [];
    for (const property in object) {
      options.push(
        <option
          className="select__selector__options"
          value={property}
          key={property}
        >
          {object[property]}
        </option>
      );
    }
    return options;
  };

  return (
    <div className="select">
      {label && (
        <label className="select__label" htmlFor={id}>
          {label}
        </label>
      )}
      <select
        className="select__selector"
        id={id}
        onChange={onChange}
        value={value}
      >
        {optionsList(options)}
      </select>
    </div>
  );
};

export default Select;
