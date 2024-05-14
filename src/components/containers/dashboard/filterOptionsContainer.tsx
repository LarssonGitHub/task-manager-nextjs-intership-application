import React from 'react';
import Select from '../../inputs/Select';

interface FilterContainerProps {
  resetOptions: () => void;
  filterOptions: React.SetStateAction<FilterOptions | null>;
  filterQuery: FilterQuery;
  setFilterQuery: React.Dispatch<React.SetStateAction<FilterQuery>>;
}

export default function FilterOptionsContainer({resetOptions, filterOptions, filterQuery, setFilterQuery }: FilterContainerProps) {
  
  if (!filterOptions) return null;

  function updateFilterState(value: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>, name: string) {
    setFilterQuery(prev => ({
     ...prev,
      [name]: value.target.value, 
    }));
  }

  const selects = Object.entries(filterOptions).map(([key, value]) => (
    <Select
      key={key}
      name={key}
      values={value}
      handleChange={updateFilterState} 
    />
  ));

  return (
    <div>
      {selects}
      {/* TODO check if GenericInputElement component is of use here */}
      <input type="date" id="startDate" name="startDate" onChange={(e)=> updateFilterState(e, "startDate")} />
      <button onClick={resetOptions}>Reset</button>
      {/* Used for testing state, can be removed */}
      {/* <button onClick={() => console.log(filterQuery)}>state</button> */}
    </div>
  );
}
