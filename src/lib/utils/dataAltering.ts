export function removePendingTasks(tasks: Tasks): Tasks {
    return tasks.filter((task: Task) => task.taskIsComplete);
  }

export function removeFinishedTasks(tasks: Task[]): Task[] {
    return tasks.filter((task: Task) =>!task.taskIsComplete);
  }