import { tasks } from "@/DB/tasks";

export function fetchTasks(): Task[] {
    return tasks;
  }
