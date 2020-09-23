import React from "react";

import "./Input.scss";

const Input = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  id,
  max,
  min,
  required,
}) => {
  return (
    <div className="input">
      {label && (
        <label className="input__label" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        required={required}
        max={max}
        min={min}
        className="input__field"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default Input;
