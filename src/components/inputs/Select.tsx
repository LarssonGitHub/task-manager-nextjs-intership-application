import React from "react";

interface SelectProps {
  name: string;
  values: string[];
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>, name: string) => void;
}

export default function Select({ name, values, handleChange }: SelectProps) {
  if (!name ||!Array.isArray(values) ||!values.length) {
    return null;
  }

  return (
    <select onChange={(event) => handleChange(event, name)}>
      <option value="">--{name}--</option>
      {values.map((value, index) => (
        <option  key={index} value={value}>{value}</option>
      ))}
    </select>
  );
}



