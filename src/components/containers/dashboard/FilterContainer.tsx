import React, { useEffect, useState } from "react";
import FilterOptionsContainer from "./filterOptionsContainer";
import { getAllFilterOptions } from "@/lib/utils/dataAltering";

interface FilterContainerProps {
  resetOptions: () => void;
  tasks: Tasks | null;
  filterQuery: FilterQuery;
  users: Users | null;
  setFilterQuery: React.Dispatch<React.SetStateAction<FilterQuery>>;
}

export default function FilterContainer({
  resetOptions,
  tasks,
  users,
  filterQuery,
  setFilterQuery,
}: FilterContainerProps) {
  const [filterOptions, setFilterOptions] = useState<FilterOptions | null>(null);

  const getFilterOptions = () => {
    if (!tasks ||!users) return;
    const options = getAllFilterOptions(tasks, users);
    setFilterOptions(options);
  }

  useEffect(() => {
    getFilterOptions();
  }, []);

  return (
    <FilterOptionsContainer
      resetOptions={resetOptions}
      filterOptions={filterOptions}
      filterQuery={filterQuery}
      setFilterQuery={setFilterQuery}
    />
  );
}
