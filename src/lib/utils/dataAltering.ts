export function removePendingTasks(tasks: Tasks): Tasks {
    return tasks.filter((task: Task) => task.taskIsComplete);
  }

export function removeFinishedTasks(tasks: Tasks): Tasks {
    return tasks.filter((task: Task) =>!task.taskIsComplete);
  }

export function calculateTaskStatuses(tasks: Tasks): computeTaskStatus {
  return tasks.reduce((accumulator, task) => {
    if (task.taskIsComplete) {
      accumulator.finished++;
    } else {
      accumulator.pending++;
    }
    return accumulator;
  }, { finished: 0, pending: 0 });
}


export function getCategoryObjects (users: User[] | null): userAfterCategory | null {
  if (!users) return null;
  return users.reduce((total: userAfterCategory, user: User) => {
    const key = user.userCategory;
    if (!total[key]) {
      total[key] = [];
    }
    total[key].push(user);
    return total;
  }, {});
}

export function sortTasksAfterFilter(filterQuery: FilterQuery, tasks: Tasks): Tasks {
  return tasks.filter(item =>
    Object.entries(filterQuery)
    // @ts-ignore
       .every(([key, value]) => item[key] === value)
);
}

// TODO: Clean or entirely replace this monstrosity, debug it too if kept. 
// Used to extract all unique values from both users and tasks to help with options for filtering
// If time, redo it like in LoggedUserContainer, thanks stackoverflow!
export function getAllFilterOptions (tasks: Tasks, users: Users): FilterOptions {
  const taskOptions: TaskOptions = tasks.reduce((total: TaskOptions, item: Task) => {
    if (!total.category.includes(item.category)) {
      total.category.push(item.category);
    }
    // @ts-ignore
    if (!total.importanceLevel.includes(item.importanceLevel)) {
      // @ts-ignore
      total.importanceLevel.push(item.importanceLevel);
    }
    return total;
  }, {
    category: [],
    importanceLevel: [],
  });
  const userOptions = users.reduce((total: UserOptions, item: User) => {
    if (!total.byUser.includes(item.userName)) {
      total.byUser.push(item.userName);
    }
    return total;
  }, {
    byUser: []
  });
  // @ts-ignore
  return {...taskOptions,...userOptions };
}