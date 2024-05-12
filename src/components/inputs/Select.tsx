import React from "react";

interface SelectProps {
  name: string;
  optionValues: string[];
}

export default function Select({ name, optionValues }: SelectProps) {
  if (!Array.isArray(optionValues) || !optionValues.length) {
    return null;
  }

  return (
    <>
      <select name={name} id={name}>
        <option value="">--Please, select {name}--</option>
        {optionValues.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
}
