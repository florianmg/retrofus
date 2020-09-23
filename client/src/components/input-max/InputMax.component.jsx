import React from "react";

import "./InputMax.scss";

const InputMax = ({ label, placeholder, value, onChange, id, max, rows }) => {
  return (
    <div className="input-max">
      {label && (
        <label className="input-max__label" htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        className="input-max__field"
        maxLength={max}
        onChange={onChange}
        placeholder={placeholder}
        id={id}
        rows={rows}
        value={value}
      />
    </div>
  );
};
export default InputMax;
