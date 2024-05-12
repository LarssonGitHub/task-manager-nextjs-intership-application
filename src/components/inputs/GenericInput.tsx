import React from 'react'

interface InputProps {
    inputs: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

//   TODO, if app grow, and forms are added, include id and name, in props
export default function GenericInput({inputs, handleChange}: InputProps) {
    if (!inputs) {
        return null;
      }
  return (
    <div>
    <label htmlFor={inputs}>Email:</label>
    <input
    type={inputs}
    id={inputs}
    name={inputs}
    // value={formData.email}
    onChange={(event) => handleChange(event)}
    required
  />
  </div>
  )
}