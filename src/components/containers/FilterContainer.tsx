import React, { useEffect, useState } from "react";
import Select from "../inputs/Select";

interface FilterContainerProps {
  tasks: Tasks | null;
  // setTasks: React.Dispatch<React.SetStateAction<Tasks | null>>;
  users: Users | null;
  // setUsers: React.Dispatch<React.SetStateAction<User | null>>;
}

// TODO: Clean or entirely replace this monstrosity, debug it too if kept. 
// Used to extract all unique values from both users and tasks to help with options for filtering
// If time, redo it like in filter LoggedUserContainer, thanks stackoverflow
const getDynamicFilterOptions = (tasks: Tasks, users: Users): FilterOptions => {
  // TODO implement fallback if no tasks exists
  const taskOptions: TaskOptions = tasks.reduce((total: TaskOptions, item: Task) => {
    if (!total.categories.includes(item.category)) {
      total.categories.push(item.category);
    }
    if (!total.importanceLevel.includes(item.importanceLevel)) {
      total.importanceLevel.push(item.importanceLevel);
    }
    return total;
  }, {
    categories: [],
    importanceLevel: [],
  });
  const userOptions = users.reduce((total: UserOptions, item: User) => {
    if (!total.users.includes(item.userName)) {
      total.users.push(item.userName);
    }
    return total;
  }, {
    users: []
  });
  return {...taskOptions,...userOptions };
}

export default function FilterContainer({ tasks, users }: FilterContainerProps) {
  const [filterOptions, setFilterOptions] = useState<FilterOptions | null>(null);

  useEffect(() => {
    if (!tasks ||!users) return;
    const options = getDynamicFilterOptions(tasks, users);
    setFilterOptions(options);
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(filterOptions, null, 2)}</pre>
      {/* <Select name={"category"} optionValues={options} />
      <Select name={"importanceLevel"} optionValues={options} />
      <Select name={"byUser"} optionValues={options} />
      <Select name={"byDate"} optionValues={options} /> */}
    </div>
  );
}

// fetch of filters and categories > render options in dashboard
// call too filter function > select, any change will be registered and call the fetch
// calendar since you are using client anyway, just use state.
//
// Because I was a bit unsure how to handle next server components, when it comes to next.js, since I normally use a state and then pass it down with higher order-
// I turned everything client side, as I did not have time to experiment with server related stuff. Although, I know you can turn it into a use client and have it inside a server component
// I had problem passing it back, had trouble thinking about how to use the frontend hard coded values.
