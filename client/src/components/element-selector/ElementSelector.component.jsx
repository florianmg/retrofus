import React, { useState } from "react";
import { ELEMENTS, TEXTES } from "../../constants";

import "./ElementSelector.scss";

const ElementSelector = ({ onChange, initialValues }) => {
  const [selected, setSelected] = useState(initialValues);

  const handleSelection = (id) => {
    const isSelected = selected.includes(id) ? "selected" : "";
    let newValue;

    if (isSelected)  newValue = selected.filter((e) => e !== id);
    if (!isSelected) newValue = [...selected, id];
    setSelected(newValue);
    onChange(newValue);
  };

  const listElements = () => {
    let elementList = [];
    for (const id in ELEMENTS) {
      const isSelected = selected.includes(id) ? "selected" : "";
      elementList.push(
        <li
          key={id}
          onClick={() => handleSelection(id)}
          className={`item ${isSelected} __${id}`}
        >
          <span className={`icon __${ELEMENTS[id]}`} />
          {ELEMENTS[id]}
        </li>
      );
    }
    return elementList;
  };

  return (
    <div className="element-selector">
      <p className="element-selector__label">{TEXTES.ELEMENTS}</p>
      <ul className="element-selector__list">{listElements()}</ul>
    </div>
  );


};

export default ElementSelector;
