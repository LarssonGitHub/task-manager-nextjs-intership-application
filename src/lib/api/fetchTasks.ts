import { tasks } from "@/DB/tasks";

export function fetchTasks (): Tasks {
  return tasks;
};

export function fetchTaskById (id: string): Task {
  const convertId: number = Number(id);
  return tasks.filter(item => item.id === convertId)[0];
};

export function fetchAllTasksByUser (user: string): Tasks {
  return tasks.filter(item => item.byUser === user);
};
